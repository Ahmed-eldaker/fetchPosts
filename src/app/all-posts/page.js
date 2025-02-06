import Link from "next/link";

export default async function AllPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(posts);

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
        <Link href="/users">
          <button className="mt-6 bg-gray-500 text-white py-2 px-4 rounded">
            Return to Users
          </button>
        </Link>
      </div>
    </div>
  );
}
