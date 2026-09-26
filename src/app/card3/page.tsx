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

        {/* Summary Box */}
        <div className="mb-6 h-[122px] w-full rounded-2xl border border-zinc-800 bg-black">

          <div className="grid h-full grid-cols-3">

            {/* Exercises */}
            <div className="flex flex-col items-center justify-center border-r border-zinc-800">
              <p className="text-sm text-zinc-500">
                Exercises
              </p>

              <p className="mt-2 text-3xl font-bold text-lime-400">
                {currentData.length}
              </p>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center justify-center border-r border-zinc-800">
              <p className="text-sm text-zinc-500">
                Minutes
              </p>

              <p className="mt-2 text-3xl font-bold text-lime-400">
                {totalMinutes}
              </p>
            </div>

            {/* Calories */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-zinc-500">
                Calories
              </p>

              <p className="mt-2 text-3xl font-bold text-lime-400">
                {totalCalories}
              </p>
            </div>

          </div>
        </div>

        {/* Tabs */}
        <div className="tabs tabs-lift tabs-bottom w-full">

          {/* Plan */}
          <input
            type="radio"
            name="my_tabs_5"
            className="tab"
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
            className="tab"
            aria-label="Saved"
            onChange={() => setActiveTab("save")}
          />

          <div className="tab-content border-zinc-800 bg-black p-0 pt-6">
            <SaveCompoPage />
          </div>

        </div>

      </div>
    </div>
  );
};

export default SelectiveTabs;