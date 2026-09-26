"use client";

import React, { useContext, useState } from "react";

import SaveCompoPage from "../savecompo/page";
import SavePlanPage from "../plancompo/page";

import { GymContext1 } from "@/app/context/page";

const SelectiveTabs = () => {
  const context = useContext(GymContext1);

  const [activeTab, setActiveTab] = useState("plan");

  if (!context) {
    return <div>Context not found</div>;
  }

  const { plan, save } = context;

  const currentData = activeTab === "plan" ? plan : save;

  const totalMinutes = currentData.reduce(
    (total, exercise) => total + Number(exercise.duration),
    0
  );

  const totalCalories = currentData.reduce(
    (total, exercise) => total + Number(exercise.caloriesBurned),
    0
  );

  return (
    <div className="min-h-screen bg-black px-4 py-8 text-white">
      <div className="mx-auto max-w-[1184px]">

        {/* Your Plan */}
        <h1 className="mb-6 text-3xl font-bold text-white">
          Your Plan
        </h1>

        {/* Summary Box */}
        <div className="h-[122px] w-full rounded-2xl border border-zinc-800 bg-black">
          <div className="grid h-full grid-cols-3">

            {/* Exercises */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-zinc-500">
                Exercises
              </p>

              <p className="mt-2 text-3xl font-bold text-[#C2F800]">
                {currentData.length}
              </p>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-zinc-500">
                Minutes
              </p>

              <p className="mt-2 text-3xl font-bold text-[#C2F800]">
                {totalMinutes}
              </p>
            </div>

            {/* Calories */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-zinc-500">
                Calories
              </p>

              <p className="mt-2 text-3xl font-bold text-[#C2F800]">
                {totalCalories}
              </p>
            </div>

          </div>
        </div>

        {/* Plan / Saved Tabs */}
        <div className="mt-8 w-full bg-black">

          <div className="tabs tabs-lift tabs-bottom w-full">

            {/* Plan */}
            <input
              type="radio"
              name="my_tabs_5"
              className="tab bg-black text-zinc-400 checked:text-[#C2F800]"
              aria-label="Plan"
              defaultChecked
              onChange={() => setActiveTab("plan")}
            />

            <div className="tab-content border-zinc-800 bg-black p-0 pt-6">
              <SavePlanPage />
            </div>

            {/* Saved */}
            <input
              type="radio"
              name="my_tabs_5"
              className="tab bg-black text-zinc-400 checked:text-[#C2F800]"
              aria-label="Saved"
              onChange={() => setActiveTab("save")}
            />

            <div className="tab-content border-zinc-800 bg-black p-0 pt-6">
              <SaveCompoPage />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default SelectiveTabs;