
"use client";

import Image from "next/image";
import React, { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "@/assest/logo.png";
import { GymContext1 } from "@/app/context/page";

const Navbar = () => {
  const context = useContext(GymContext1);
  const pathname = usePathname();

  if (!context) {
    return null;
  }

  const { plan, save } = context;

  const workoutActive = pathname === "/";

  const planActive =
    pathname === "/card3" ||
    pathname === "/plancompo" ||
    pathname === "/savecompo";

  return (
    <div className="navbar bg-black/95 border-b border-white/10 px-3 shadow-lg sm:px-4 lg:px-8">

      {/* Left Side */}
      <div className="navbar-start">

        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-white hover:bg-white/10"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-2xl border border-white/10 bg-neutral-900 p-3 text-white shadow-xl"
          >
            {/* Workout */}
            <li>
              <Link
                href="/"
                className={`rounded-xl transition ${
                  workoutActive
                    ? "bg-lime-400 !text-black"
                    : "hover:bg-lime-400 hover:!text-black"
                }`}
              >
                Workout
              </Link>
            </li>

            {/* My Plan */}
            <li>
              <Link
                href="/card3"
                className={`rounded-xl transition ${
                  planActive
                    ? "bg-lime-400 !text-black"
                    : "hover:bg-lime-400 hover:!text-black"
                }`}
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="rounded-xl"
          />

          <p className="text-xl font-black tracking-tight text-white sm:text-2xl lg:text-3xl">
            FIT<span className="text-lime-400">LOG</span>
          </p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">

          {/* Workout */}
          <li>
            <Link
              href="/"
              className={`rounded-full px-6 py-3 font-semibold transition duration-300 ${
                workoutActive
                  ? "!bg-[#C2F800] !text-black"
                  : "text-lime-300 hover:bg-lime-300 hover:!text-black"
              }`}
            >
              Workout
            </Link>
          </li>

          {/* My Plan */}
          <li>
            <Link
              href="/card3"
              className={`rounded-full px-6 py-3 font-semibold transition duration-300 ${
                planActive
                  ? "!bg-[#C2F800] !text-black"
                  : "!text-lime-300 hover:bg-lime-300 hover:!text-black"
              }`}
            >
              My Plan
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end">

        {/* Mobile: One Button */}
        <div className="flex lg:hidden">
          <Link
            href="/plancompo"
            className="flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-2 text-sm font-semibold text-lime-300 transition hover:bg-lime-400 hover:text-black"
          >
            <span>Plan</span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
              {plan.length}
            </span>

            <span className="text-white/40">|</span>

            <span>Saved</span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
              {save.length}
            </span>
          </Link>
        </div>

        {/* Desktop: Plan + Saved */}
        <div className="hidden gap-2 lg:flex">

          {/* Plan */}
          <Link
            href="/plancompo"
            className="btn btn-ghost gap-2 rounded-xl text-gray-300 hover:bg-lime-400 hover:text-black"
          >
            <span>Plan</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-500 text-sm font-bold text-white">
              {plan.length}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/savecompo"
            className="btn btn-ghost gap-2 rounded-xl text-gray-300 hover:bg-pink-400 hover:text-black"
          >
            <span>Saved</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-black text-sm font-bold text-white">
              {save.length}
            </span>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Navbar;