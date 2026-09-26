"use client";

import { useContext } from "react";
import Image from "next/image";
import {
  Clock,
  Flame,
  Dumbbell,
  Target,
  Star,
} from "lucide-react";

import { GymContext1 } from "../context/page";

const Page = () => {
  const context = useContext(GymContext1);

  if (!context) {
    return <div>Context not found</div>;
  }

  const { plan } = context;

  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">
            Your Workout
          </p>

          <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Today&apos;s Plan
              </h1>

              <p className="mt-3 text-sm text-zinc-400 sm:text-base">
                Stay consistent and complete your planned exercises.
              </p>
            </div>

            <div className="flex h-14 w-fit items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950 px-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-400/10">
                <Dumbbell
                  size={18}
                  className="text-lime-400"
                />
              </div>

              <div>
                <p className="text-xs text-zinc-500">
                  Exercises
                </p>

                <p className="text-lg font-bold">
                  {plan.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {plan.length === 0 ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-800 bg-zinc-950 px-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/10">
              <Dumbbell
                size={28}
                className="text-lime-400"
              />
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              No exercises added yet
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
              Choose an exercise from the workout section and add it to
              today&apos;s plan.
            </p>
          </div>
        ) : (
          /* Cards */
          <div className="grid grid-cols-1 gap-6">
            {plan.map((exercise) => (
              <div
                key={exercise.id}
                className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              >
                <div className="flex flex-col sm:flex-row">

                  {/* Image */}
                  <div className="relative h-64 w-full overflow-hidden bg-zinc-900 sm:h-auto sm:w-72">
                    <Image
                      src={exercise.image}
                      alt={exercise.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 288px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-lime-400 backdrop-blur-md">
                      Workout
                    </div>

                    <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 backdrop-blur-md">
                      <Star
                        size={14}
                        fill="currentColor"
                        className="text-yellow-400"
                      />

                      <span className="text-xs font-semibold">
                        {exercise.rating}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>

                      {/* Muscle Groups */}
                      <div className="flex flex-wrap gap-2">
                        {exercise.muscleGroups.map((group) => (
                          <span
                            key={group}
                            className="rounded-full bg-lime-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-lime-400"
                          >
                            {group}
                          </span>
                        ))}
                      </div>

                      <h2 className="mt-4 text-2xl font-extrabold uppercase tracking-tight">
                        {exercise.name}
                      </h2>

                      <p className="mt-2 text-sm capitalize text-zinc-500">
                        {exercise.difficulty} level
                      </p>
                    </div>

                    {/* Short Details */}
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">

                      {/* Duration */}
                      <div className="rounded-2xl border border-zinc-800 bg-black p-3">
                        <Clock
                          size={17}
                          className="text-lime-400"
                        />

                        <p className="mt-2 text-[10px] uppercase tracking-wider text-zinc-500">
                          Duration
                        </p>

                        <p className="mt-1 text-sm font-bold">
                          {exercise.duration} min
                        </p>
                      </div>

                      {/* Calories */}
                      <div className="rounded-2xl border border-zinc-800 bg-black p-3">
                        <Flame
                          size={17}
                          className="text-orange-400"
                        />

                        <p className="mt-2 text-[10px] uppercase tracking-wider text-zinc-500">
                          Calories
                        </p>

                        <p className="mt-1 text-sm font-bold">
                          {exercise.caloriesBurned} kcal
                        </p>
                      </div>

                      {/* Sets */}
                      <div className="rounded-2xl border border-zinc-800 bg-black p-3">
                        <Target
                          size={17}
                          className="text-lime-400"
                        />

                        <p className="mt-2 text-[10px] uppercase tracking-wider text-zinc-500">
                          Sets
                        </p>

                        <p className="mt-1 text-sm font-bold">
                          {exercise.sets}
                        </p>
                      </div>

                      {/* Reps */}
                      <div className="rounded-2xl border border-zinc-800 bg-black p-3">
                        <Dumbbell
                          size={17}
                          className="text-lime-400"
                        />

                        <p className="mt-2 text-[10px] uppercase tracking-wider text-zinc-500">
                          Reps
                        </p>

                        <p className="mt-1 text-sm font-bold">
                          {exercise.reps}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Page;