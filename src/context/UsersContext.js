// "use client";

// import { createContext, useContext, useState, useEffect } from "react";

// const UserPostsContext = createContext(null);

// export function UserPostsProvider({ children }) {
//   const [groupedPosts, setGroupedPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchPosts() {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         const posts = await response.json();

//         const grouped = [];
//         for (let userId = 1; userId <= 10; userId++) {
//           grouped.push({
//             userId,
//             posts: posts.filter((post) => post.userId === userId),
//           });
//         }

//         setGroupedPosts(grouped);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchPosts();
//   }, []);

//   return (
//     <UserPostsContext.Provider value={{ groupedPosts, loading }}>
//       {children}
//     </UserPostsContext.Provider>
//   );
// }

// export function useUserPosts() {
//   const context = useContext(UserPostsContext);
//   if (!context) {
//     throw new Error("useUserPosts must be used within a UserPostsProvider");
//   }
//   return context;
// }
"use client";

import { createContext, useContext, useState, useEffect } from "react";

const UserPostsContext = createContext(null);

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

        const grouped = Array.from({ length: 10 }, (_, index) => ({
          userId: index + 1,
          posts: posts.filter((post) => post.userId === index + 1),
        }));

        setGroupedPosts(grouped);
      } catch (error) {
        console.error("Error fetching posts:", error);
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

// FIX: Ensure hook is not used outside provider
export function useUserPosts() {
  const context = useContext(UserPostsContext);
  if (!context) {
    throw new Error("useUserPosts must be used within a UserPostsProvider");
  }
  return context;
}
