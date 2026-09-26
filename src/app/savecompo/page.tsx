"use client";

import React, { useContext } from "react";
import Image from "next/image";
import {
  Clock,
  Flame,
  Dumbbell,
  Target,
  Star,
  X,
} from "lucide-react";

import { GymContext1 } from "@/app/context/page";

const SaveCompoPage = () => {
  const context = useContext(GymContext1);

  if (!context) {
    return <div className="min-h-screen bg-black text-white">Context not found</div>;
  }

  const { save, removeSave } = context;

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Heading */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-pink-400">
            Your Collection
          </p>

          <h1 className="mt-1 text-2xl font-bold">
            Saved Exercises
          </h1>
        </div>

        <span className="rounded-full bg-pink-400 px-4 py-2 text-sm font-bold text-black">
          {save.length} Exercises
        </span>
      </div>

      {/* Empty State */}
      {save.length === 0 && (
        <div className="flex h-[114px] w-full items-center justify-center rounded-2xl border border-zinc-800 bg-black">
          <p className="text-sm text-zinc-500">
            No exercises saved for later.
          </p>
        </div>
      )}

      {/* Saved Cards */}
      <div className="space-y-4">
        {save.map((exercise) => (
          <div
            key={exercise.id}
            className="relative flex min-h-[114px] w-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-black md:h-[114px] md:flex-row"
          >
            {/* Remove Button */}
            <button
              type="button"
              onClick={() => removeSave(exercise.id)}
              className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-white transition hover:bg-red-500"
            >
              <X size={16} />
            </button>

            {/* Image */}
            <div className="relative h-[170px] w-full shrink-0 md:h-full md:w-[150px]">
              <Image
                src={exercise.image}
                alt={exercise.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-center px-4 py-4 md:flex-row md:items-center md:px-5 md:py-0">
              {/* Name + Muscle Groups */}
              <div className="min-w-0 flex-1 pr-10">
                <div className="mb-1 flex items-center gap-2">
                  <Star
                    size={15}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="text-xs text-zinc-400">
                    {exercise.rating}
                  </span>
                </div>

                <h2 className="truncate text-lg font-bold">
                  {exercise.name}
                </h2>

                <div className="mt-2 flex flex-wrap gap-2">
                  {exercise.muscleGroups?.slice(0, 3).map((muscle) => (
                    <span
                      key={muscle}
                      className="rounded-full bg-pink-400/10 px-2 py-1 text-[10px] text-pink-400"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>
              </div>

              {/* Time / Calories / Sets / Reps */}
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 md:mr-12 md:mt-0 md:flex md:items-center md:gap-6">
                {/* Time */}
                <div className="rounded-lg bg-zinc-900 p-2 text-center md:bg-transparent md:p-0">
                  <Clock
                    size={16}
                    className="mx-auto mb-1 text-pink-400"
                  />

                  <p className="text-[10px] text-zinc-500">
                    Time
                  </p>

                  <p className="text-xs font-semibold">
                    {exercise.duration}
                  </p>
                </div>

                {/* Calories */}
                <div className="rounded-lg bg-zinc-900 p-2 text-center md:bg-transparent md:p-0">
                  <Flame
                    size={16}
                    className="mx-auto mb-1 text-orange-400"
                  />

                  <p className="text-[10px] text-zinc-500">
                    Calories
                  </p>

                  <p className="text-xs font-semibold">
                    {exercise.caloriesBurned}
                  </p>
                </div>

                {/* Sets */}
                <div className="rounded-lg bg-zinc-900 p-2 text-center md:bg-transparent md:p-0">
                  <Dumbbell
                    size={16}
                    className="mx-auto mb-1 text-pink-400"
                  />

                  <p className="text-[10px] text-zinc-500">
                    Sets
                  </p>

                  <p className="text-xs font-semibold">
                    {exercise.sets}
                  </p>
                </div>

                {/* Reps */}
                <div className="rounded-lg bg-zinc-900 p-2 text-center md:bg-transparent md:p-0">
                  <Target
                    size={16}
                    className="mx-auto mb-1 text-pink-400"
                  />

                  <p className="text-[10px] text-zinc-500">
                    Reps
                  </p>

                  <p className="text-xs font-semibold">
                    {exercise.reps}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaveCompoPage;