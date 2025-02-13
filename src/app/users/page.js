"use client";

import Link from "next/link";
import { useUserPosts } from "../context/UsersContext";

export default function Users() {
  const { groupedPosts, loading } = useUserPosts();

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Users Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groupedPosts.map((user) => (
          <div key={user.userId}>
            <h2 className="text-2xl font-semibold">User {user.userId}</h2>
            <Link href={`/user/${user.userId}`}>
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                View Posts
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
