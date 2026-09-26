"use client";

import React, { useContext } from "react";

import { GymContext1 } from "@/app/context/page";
import { IExercise } from "@/type/typo";

import { Bookmark } from "lucide-react";
import { toast } from "react-toastify";
 

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
       toast.error(`already added to the saving cart`) ; 
      return;
     
    }


    toast.success(`successfully saving of ${check.name}`) ; 
    
    setSave((prev) => [...prev, check]);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handlegym}
        className="flex h-12 items-center gap-2 rounded-xl border border-zinc-700 bg-black px-5 text-sm font-bold text-white transition hover:border-pink-400 hover:bg-pink-400 hover:text-black"
      >
        <Bookmark size={18} />
        Save for Later
      </button>
    </div>
  );
};

export default SaveLater;