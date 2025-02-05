import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-50">
      <h1 className="text-5xl font-bold pb-6 text-gray-800">
        Welcome to my Thoughts
      </h1>
      <p className="text-xl text-gray-600 pb-8">
        Discover posts grouped by users
      </p>

      <Link
        href="/users"
        className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition"
      >
        Go to Users
      </Link>
    </div>
  );
}
