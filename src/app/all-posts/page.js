"use client";

import Link from "next/link";
import { useState } from "react";
import { usePosts } from "../context/PostContext";

export default function AllPosts() {
  const { posts, loading } = usePosts();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  if (loading)
    return <p className="text-center text-gray-500">Loading posts...</p>;

  const paginatedPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-8">All Posts</h2>
      <div className="space-y-4">
        {paginatedPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}

        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`py-2 px-4 rounded ${
              currentPage === 1 ? "bg-gray-300" : "bg-gray-500 text-white"
            }`}
          >
            Previous
          </button>

          <span className="text-gray-700">Page {currentPage}</span>

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage * postsPerPage >= posts.length}
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            Next
          </button>
        </div>

        <Link href="/users">
          <button className="mt-6 bg-gray-500 text-white py-2 px-4 rounded">
            Return to Users
          </button>
        </Link>
      </div>
    </div>
  );
}
