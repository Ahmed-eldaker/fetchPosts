"use client";

import { createContext, useState, useEffect, useContext } from "react";

const UserPostsContext = createContext();

export function UserPostsProvider({ children }) {
  const [groupedPosts, setGroupedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();

        const grouped = [];
        for (let userId = 1; userId <= 10; userId++) {
          grouped.push({
            userId,
            posts: posts.filter((post) => post.userId === userId),
          });
        }

        setGroupedPosts(grouped);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <UserPostsContext.Provider value={{ groupedPosts, loading }}>
      {children}
    </UserPostsContext.Provider>
  );
}

export function useUserPosts() {
  return useContext(UserPostsContext);
}
