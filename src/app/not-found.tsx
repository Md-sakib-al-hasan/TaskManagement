import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#2A284D] text-white">
      <div className="text-center space-y-6 p-8 rounded-xl shadow-lg backdrop-blur-lg border border-gray-700 max-w-md">
        <h1 className="text-7xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#01ECA9] to-[#3757F8]">
          404
        </h1>
        <p className="text-xl font-medium text-gray-300">Page Not Found</p>
        <p className="text-gray-400">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 mt-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-[#01ECA9] to-[#3757F8] rounded-lg shadow-md hover:bg-pink-500 hover:-translate-y-1 hover:shadow-xl"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
