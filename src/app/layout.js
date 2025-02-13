import { PostProvider } from "./context/PostContext";
import { UserPostsProvider } from "./context/UsersContext";
import "./globals.css"; // Import global styles

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <header className="bg-gray-500 text-white p-4">
          <span className="text-3xl">PostBoard</span>
        </header>
        {/* <PostProvider>{children}</PostProvider> */}
        <UserPostsProvider>{children}</UserPostsProvider>
        <footer className="bg-gray-700 text-white text-center p-4">
          <p>© 2025 Ahmed Eldaker</p>
        </footer>
      </body>
    </html>
  );
}
