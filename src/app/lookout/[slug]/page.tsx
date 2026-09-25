
import { IExercise } from "@/type/typo";
import Image from "next/image";
import React from "react";
import {
    Clock,
    Flame,
    Star,
    Dumbbell,
    Target,
} from "lucide-react";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

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

const GymDetails = async ({ params }: Props) => {
    const { slug } = await params;

    const gymView: IExercise[] = await handle();

    const check = gymView.find(
        (val: IExercise) => val.id === Number(slug)
    );

    if (!check) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-black text-white">
                <h1 className="text-2xl font-bold">
                    Workout not found
                </h1>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 lg:py-16">

            <div className="container mx-auto max-w-6xl">

                {/* Main Card */}
                <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl">

                    <div className="grid lg:grid-cols-2">

                        {/* Image */}
                        <div className="relative min-h-[400px] overflow-hidden bg-zinc-900 lg:min-h-[650px]">

                            <Image
                                src={check.image}
                                alt={check.name}
                                fill
                                priority
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />

                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                            {/* Workout Badge */}
                            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-lime-400 backdrop-blur-md">
                                Workout
                            </div>

                            {/* Rating */}
                            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-4 py-2 backdrop-blur-md">

                                <Star
                                    size={16}
                                    fill="currentColor"
                                    className="text-yellow-400"
                                />

                                <span className="text-sm font-semibold">
                                    {check.rating}
                                </span>

                            </div>

                        </div>

                        {/* Right Side */}
                        <div className="flex flex-col p-6 sm:p-8 lg:p-10">

                            {/* Muscle Groups */}
                            <div className="flex flex-wrap gap-2">

                                {check.muscleGroups.map((group) => (
                                    <span
                                        key={group}
                                        className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-lime-400"
                                    >
                                        {group}
                                    </span>
                                ))}

                            </div>

                            {/* Title */}
                            <h1 className="mt-5 text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                                {check.name}
                            </h1>

                            {/* Description */}
                            <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
                                {check.description}
                            </p>

                            {/* Stats */}
                            <div className="mt-8 grid grid-cols-2 gap-3">

                                {/* Duration */}
                                <div className="rounded-2xl border border-zinc-800 bg-black p-4">

                                    <Clock
                                        size={20}
                                        className="text-lime-400"
                                    />

                                    <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                                        Duration
                                    </p>

                                    <p className="mt-1 text-lg font-bold">
                                        {check.duration}
                                        <span className="ml-1 text-xs text-zinc-500">
                                            min
                                        </span>
                                    </p>

                                </div>

                                {/* Calories */}
                                <div className="rounded-2xl border border-zinc-800 bg-black p-4">

                                    <Flame
                                        size={20}
                                        className="text-orange-400"
                                    />

                                    <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                                        Calories
                                    </p>

                                    <p className="mt-1 text-lg font-bold">
                                        {check.caloriesBurned}
                                        <span className="ml-1 text-xs text-zinc-500">
                                            kcal
                                        </span>
                                    </p>

                                </div>

                            </div>

                            {/* Workout Information */}
                            <div className="mt-6 rounded-2xl border border-zinc-800 bg-black p-5">

                                <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                                    Workout Information
                                </h2>

                                {/* Equipment */}
                                <div className="mt-5 flex items-center gap-3">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-400/10">

                                        <Dumbbell
                                            size={19}
                                            className="text-lime-400"
                                        />

                                    </div>

                                    <div>

                                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                                            Equipment
                                        </p>

                                        <p className="mt-1 text-sm font-semibold text-white">
                                            {check.equipment}
                                        </p>

                                    </div>

                                </div>

                                {/* Divider */}
                                <div className="my-5 h-px bg-zinc-800" />

                                {/* Difficulty */}
                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-3">

                                        <Target
                                            size={19}
                                            className="text-lime-400"
                                        />

                                        <span className="text-sm text-zinc-400">
                                            Difficulty
                                        </span>

                                    </div>

                                    <span className="text-sm font-semibold capitalize text-white">
                                        {check.difficulty}
                                    </span>

                                </div>

                                {/* Divider */}
                                <div className="my-5 h-px bg-zinc-800" />

                                {/* Sets and Reps */}
                                <div className="grid grid-cols-2 gap-4">

                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                                            Sets
                                        </p>

                                        <p className="mt-1 text-lg font-bold text-white">
                                            {check.sets}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                                            Reps
                                        </p>

                                        <p className="mt-1 text-lg font-bold text-white">
                                            {check.reps}
                                        </p>
                                    </div>

                                </div>

                                {/* Divider */}
                                <div className="my-5 h-px bg-zinc-800" />

                                {/* Instructions */}
                                <div>

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-400/10">

                                            <Target
                                                size={19}
                                                className="text-lime-400"
                                            />

                                        </div>

                                        <div>

                                            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                                                Instructions
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-white">
                                                Follow these steps
                                            </p>

                                        </div>

                                    </div>

                                    {/* Instruction List */}
                                    <div className="mt-5 space-y-4">

                                        {check.instructions.map(
                                            (step, index) => (
                                                <div
                                                    key={index}
                                                    className="flex gap-3"
                                                >

                                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-bold text-lime-400">
                                                        {index + 1}
                                                    </span>

                                                    <p className="text-xs leading-6 text-zinc-400 sm:text-sm">
                                                        {step}
                                                    </p>

                                                </div>
                                            )
                                        )}

                                    </div>

                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">

                                {/* Add Today Plan */}
                                <button
                                    type="button"
                                    className="h-12 rounded-xl bg-lime-400 px-5 text-sm font-bold text-black transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_25px_rgba(163,230,53,0.25)]"
                                >
                                    Add to Today's Plan
                                </button>

                                {/* Save for Later */}
                                <button
                                    type="button"
                                    className="h-12 rounded-xl border border-zinc-700 bg-black px-5 text-sm font-bold text-white transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-900"
                                >
                                    Save for Later
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
};

export default GymDetails;