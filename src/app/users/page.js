"use client";

import Link from "next/link";
import UserCard from "../components/userCard";
import { useUserPosts } from "../context/UsersContext";

export default function Users() {
  const { groupedPosts, loading } = useUserPosts();

  if (loading)
    return <p className="text-center text-gray-500">Loading users...</p>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Users Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groupedPosts.map((user) => (
          <div key={user.userId}>
            <UserCard user={user} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          href="/all-posts"
          className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-500 transition-colors duration-200"
        >
          View All Posts
        </Link>
      </div>
    </div>
  );
}
