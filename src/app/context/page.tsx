 "use client";

import React, { createContext, useState } from "react";
import { IExercise } from "@/type/typo";

type GymContextType = {
  plan: IExercise[];
  setPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
  save: IExercise[];
  setSave: React.Dispatch<React.SetStateAction<IExercise[]>>;
};

 export const GymContext1 = createContext<GymContextType | null>(null);

const GymContext2 = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<IExercise[]>([]);
  const [save, setSave] = useState<IExercise[]>([]);

  const val: GymContextType = {
    plan,
    setPlan,
    save,
    setSave,
  };

  return (
    <GymContext1.Provider value={val}>
      {children}
    </GymContext1.Provider>
  );
};

export default GymContext2;