import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-gray-100">404 - Not Found</h2>
        <p className="text-lg text-gray-300">{`Sorry, we couldn't find the page you're looking for.`}</p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
