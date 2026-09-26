const Loading = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      
      {/* Heading */}
      <div className="mb-8">
        <div className="h-8 w-52 animate-pulse rounded-lg bg-zinc-800" />
        <div className="mt-3 h-4 w-72 animate-pulse rounded bg-zinc-900" />
      </div>

      {/* Exercise Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-2xl border border-white/10 bg-black"
          >
            {/* Image */}
            <div className="h-56 w-full animate-pulse bg-zinc-800" />

            <div className="p-5">
              
              {/* Title */}
              <div className="h-6 w-3/4 animate-pulse rounded bg-zinc-800" />

              {/* Description */}
              <div className="mt-4 h-4 w-full animate-pulse rounded bg-zinc-900" />
              <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-zinc-900" />

              {/* Exercise information */}
              <div className="mt-5 flex justify-between">
                <div className="h-4 w-16 animate-pulse rounded bg-zinc-800" />
                <div className="h-4 w-16 animate-pulse rounded bg-zinc-800" />
                <div className="h-4 w-16 animate-pulse rounded bg-zinc-800" />
              </div>

              {/* Button */}
              <div className="mt-5 h-11 w-full animate-pulse rounded-full bg-zinc-800" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;