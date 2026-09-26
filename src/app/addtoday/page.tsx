"use client";

import React, { useContext } from "react";
import { GymContext1 } from "@/app/context/page";
import { IExercise } from "@/type/typo";
import Link from "next/link";

const AddToday = ({ check }: { check: IExercise }) => {
  const context = useContext(GymContext1);

  if (!context) {
    return <div>Context not found</div>;
  }

  const { plan, setPlan } = context;

  const handlegym = () => {
    setPlan((prev) => [...prev, check]);
    
  };

  return (
    <div>
      <button
        type="button"
        onClick={handlegym}
        className="h-12 rounded-xl bg-lime-400 px-5 text-sm font-bold text-black"
      >
        Add to Todays Plan
      </button>

      <Link href="/plancompo"> go to the link</Link>

      <p className="mt-4 text-white">
        Current Plan: {plan.length}
      </p>
    </div>
  );
};

export default AddToday;