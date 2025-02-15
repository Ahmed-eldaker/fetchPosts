// "use client";

// import { createContext, useState, useEffect, useContext } from "react";

// const PostContext = createContext();

// export function PostProvider({ children }) {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchPosts() {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         const data = await response.json();
//         setPosts(data);
//       } catch (error) {
//         console.error("Failed to fetch posts", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchPosts();
//   }, []);

//   return (
//     <PostContext.Provider value={{ posts, loading }}>
//       {children}
//     </PostContext.Provider>
//   );
// }

// export function usePosts() {
//   return useContext(PostContext);
// }
"use client";

import { createContext, useState, useEffect, useContext } from "react";

const PostContext = createContext(null); // FIX: Ensure default value is null

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, loading }}>
      {children}
    </PostContext.Provider>
  );
}

// FIX: Ensure context is not used outside the provider
export function usePosts() {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostProvider");
  }
  return context;
}
