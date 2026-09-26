import Link from "next/link";
import Image from "next/image";

import {
    Clock,
    Flame,
    Star,
    Dumbbell,
    ArrowUpRight,
} from "lucide-react";

import { IExercise } from "@/type/typo";

export default function WorkoutCard({
    workout,
}: {
    workout: IExercise;
}) {
    return (
        <Link
           href={`/lookout/${workout.id}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/60 hover:shadow-[0_0_30px_rgba(163,230,53,0.08)]"
        >

            {/* Image Section */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">

                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Equipment Badge */}
                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">

                    <Dumbbell size={12} className="text-lime-400" />

                    {workout.equipment}

                </div>

                {/* Arrow Icon */}
                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">

                    <ArrowUpRight size={17} />

                </div>

            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col gap-4 p-5">

                {/* Muscle Groups */}
                <div className="flex flex-wrap gap-1.5">

                    {workout.muscleGroups.map((group) => (
                        <span
                            key={group}
                            className="rounded-full border border-lime-400/20 bg-lime-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-lime-400"
                        >
                            {group}
                        </span>
                    ))}

                </div>

                {/* Workout Name */}
                <h3 className="line-clamp-2 text-lg font-bold uppercase leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-lime-400">
                    {workout.name}
                </h3>

                {/* Bottom Stats */}
                <div className="mt-auto grid grid-cols-3 gap-2 border-t border-zinc-800 pt-4">

                    {/* Duration */}
                    <div className="flex flex-col gap-1">

                        <div className="flex items-center gap-1.5 text-zinc-500">
                            <Clock size={13} />
                            <span className="text-[10px] uppercase tracking-wide">
                                Time
                            </span>
                        </div>

                        <span className="text-xs font-semibold text-zinc-200">
                            {workout.duration} min
                        </span>

                    </div>

                    {/* Calories */}
                    <div className="flex flex-col gap-1">

                        <div className="flex items-center gap-1.5 text-zinc-500">
                            <Flame size={13} />
                            <span className="text-[10px] uppercase tracking-wide">
                                Burn
                            </span>
                        </div>

                        <span className="text-xs font-semibold text-zinc-200">
                            {workout.caloriesBurned} kcal
                        </span>

                    </div>

                    {/* Rating */}
                    <div className="flex flex-col gap-1">

                        <div className="flex items-center gap-1.5 text-zinc-500">
                            <Star size={13} />
                            <span className="text-[10px] uppercase tracking-wide">
                                Rating
                            </span>
                        </div>

                        <span className="text-xs font-semibold text-lime-400">
                            {workout.rating}
                        </span>

                    </div>

                </div>

            </div>

        </Link>
    );
}