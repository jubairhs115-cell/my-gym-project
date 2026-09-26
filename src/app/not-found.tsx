import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
      <div className="text-center">
        <h1 className="text-8xl font-black">
          4<span className="text-[#C2F800]">0</span>4
        </h1>

        <h2 className="mt-6 text-2xl font-bold">
          Workout Not Found
        </h2>

        <p className="mt-3 text-zinc-500">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-[#C2F800] px-6 py-3 font-semibold text-black transition hover:bg-[#C2F800]/90"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;