import WorkoutCard from "@/Card/page";
import { IExercise } from "@/type/typo";
import React from "react";

const handle = async () => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/fitlog"
    );

    if (!res.ok) {
        throw new Error("Failed to fetch workout data");
    }

    const data = await res.json();

    return data;
};

const Gym = async () => {
    const gymData: IExercise[] = await handle();

    return (
        <main className="min-h-screen bg-black text-white">

            {/* Header Section */}
            <section className="container mx-auto px-4 pt-16 pb-10 sm:px-6 lg:px-8">

                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

                    <div>
                        

                        <h1 className="text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
                             THE LIBRARY
                        </h1>

                        <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
                            Twelve lifts covering every major muscle group.
                        </p>
                    </div>

                    <div className="w-fit rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-400">
                        {gymData.length} Workouts
                    </div>

                </div>

            </section>

            {/* Workout Cards */}
            <section className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {gymData.map((workout: IExercise) => (
                        <WorkoutCard
                            key={workout.id}
                            workout={workout}
                        />
                    ))}

                </div>

            </section>

        </main>
    );
};

export default Gym;