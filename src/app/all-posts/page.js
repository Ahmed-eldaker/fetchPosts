"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}`
      );
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center mb-8">All Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}

        <div className="flex justify-center  mt-8">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`py-2 px-4 rounded ${
              currentPage === 1 ? "bg-gray-300" : "bg-gray-500 text-white"
            }`}
          >
            Previous
          </button>

          <span className="text-gray-700">Page {currentPage}</span>

          <button
            disabled={currentPage === 10}
            onClick={handleNextPage}
            className={` py-2 px-4 rounded ${
              currentPage === 10 ? "bg-gray-300" : "bg-gray-500 text-white"
            }`}
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
