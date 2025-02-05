import Link from "next/link";

export default function UserCard({ user }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-600">{`User ${user.userId}`}</h2>
      <p className="text-gray-700 mt-2">
        Click below to explore all posts by this user.
      </p>

      <Link href={`/users/${user.userId}`}>
        <button className="mt-4 w-full bg-gray-600 text-white py-2 px-4 rounded-xl hover:bg-gray-500 transition-colors duration-200">
          View All Posts
        </button>
      </Link>
    </div>
  );
}
