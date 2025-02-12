"use client";

import Link from "next/link";
import { useUserPosts } from "../../context/UsersContext";
import { useParams } from "next/navigation";

export default function UserPosts() {
  const { userId } = useParams();
  const { groupedPosts, loading } = useUserPosts();

  if (loading)
    return <p className="text-center text-gray-500">Loading user posts...</p>;

  const user = groupedPosts.find((u) => u.userId === parseInt(userId));

  if (!user)
    return (
      <p className="text-center text-gray-500">No posts found for this user.</p>
    );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-8">
        User {userId} Posts
      </h2>
      <div className="space-y-4">
        {user.posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>

      <Link href="/allusers">
        <button className="mt-6 bg-gray-500 text-white py-2 px-4 rounded">
          Return to Users
        </button>
      </Link>
    </div>
  );
}
