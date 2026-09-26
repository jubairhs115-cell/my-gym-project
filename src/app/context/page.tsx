"use client";

import React, { createContext, useState } from "react";
import { IExercise } from "@/type/typo";

type GymContextType = {
  plan: IExercise[];
  setPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;

  save: IExercise[];
  setSave: React.Dispatch<React.SetStateAction<IExercise[]>>;

  removePlan: (id: number) => void;
  removeSave: (id: number) => void;

  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
};

export const GymContext1 =
  createContext<GymContextType | null>(null);

const GymContext2 = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [plan, setPlan] = useState<IExercise[]>([]);
  const [save, setSave] = useState<IExercise[]>([]);

  const [sortBy, setSortBy] = useState("");

  const removePlan = (id: number) => {
    setPlan((prev) =>
      prev.filter((exercise) => exercise.id !== id)
    );
  };

  const removeSave = (id: number) => {
    setSave((prev) =>
      prev.filter((exercise) => exercise.id !== id)
    );
  };

  return (
    <GymContext1.Provider
      value={{
        plan,
        setPlan,

        save,
        setSave,

        removePlan,
        removeSave,

        sortBy,
        setSortBy,
      }}
    >
      {children}
    </GymContext1.Provider>
  );
};

export default GymContext2;