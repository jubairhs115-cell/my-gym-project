 "use client";

import React, { useContext } from "react";
import { GymContext1 } from "@/app/context/page";
import { IExercise } from "@/type/typo";
 
import { toast } from "react-toastify";

const AddToday = ({ check }: { check: IExercise }) => {
  const context = useContext(GymContext1);

  if (!context) {
    return <div>Context not found</div>;
  }

  const { plan, setPlan } = context;

  const handlegym = () => {
    const alreadyAdded = plan.some(
      (exercise) => exercise.id === check.id
    );

    if (alreadyAdded) {
      toast.error(`already added to the plan`) ; 
      return;
    }

    toast.success(`successfully saving of ${check.name}`) ; 
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

      
    </div>
  );
};

export default AddToday;