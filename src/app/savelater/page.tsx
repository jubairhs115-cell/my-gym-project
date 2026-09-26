"use client";

import React, { useContext } from "react";
import { GymContext1 } from "@/app/context/page";
import { IExercise } from "@/type/typo";
import Link from "next/link";

const SaveLater = ({ check }: { check: IExercise }) => {
  const context = useContext(GymContext1);

  if (!context) {
    return <div>Context not found</div>;
  }

  const { save, setSave } = context;

  const handlegym = () => {
    const alreadySaved = save.some(
      (exercise) => exercise.id === check.id
    );

    if (alreadySaved) {
      return;
    }

    setSave((prev) => [...prev, check]);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handlegym}
        className="h-12 rounded-xl bg-lime-400 px-5 text-sm font-bold text-black"
      >
        Save for Later
      </button>

      <Link
        href="/savecompo"
        className="ml-4 text-white"
      >
        Go to Saved
      </Link>

      <p className="mt-4 text-white">
        Saved Exercises: {save.length}
      </p>
    </div>
  );
};

export default SaveLater;