"use client";

import { useUserPosts } from "@/context/UsersContext";
import Link from "next/link";
import UserCard from "../components/userCard";

export default function Users() {
  const { groupedPosts, loading } = useUserPosts();

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Users Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groupedPosts.map((user) => (
          <UserCard key={user.userId} user={user} />
        ))}
      </div>

      {/* <div className=""> */}
      <Link
        href="/all-posts"
        className="w-40 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-500 transition-colors duration-200 flex justify-center m-auto mt-10"
      >
        View All Posts
      </Link>
      {/* </div> */}
    </div>
  );
}
