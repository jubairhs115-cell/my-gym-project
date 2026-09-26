const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center">

        <h1 className="text-4xl font-black">
          FIT<span className="text-[#C2F800]">LOG</span>
        </h1>

        <div className="mt-8 flex items-end gap-1.5">
          <span className="h-6 w-1.5 animate-pulse rounded-full bg-[#C2F800]" />
          <span className="h-10 w-1.5 animate-pulse rounded-full bg-[#C2F800] [animation-delay:150ms]" />
          <span className="h-14 w-1.5 animate-pulse rounded-full bg-[#C2F800] [animation-delay:300ms]" />
          <span className="h-9 w-1.5 animate-pulse rounded-full bg-[#C2F800] [animation-delay:450ms]" />
          <span className="h-5 w-1.5 animate-pulse rounded-full bg-[#C2F800] [animation-delay:600ms]" />
        </div>

        <p className="mt-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
          Loading workout
        </p>

      </div>
    </div>
  );
};

export default Loading;