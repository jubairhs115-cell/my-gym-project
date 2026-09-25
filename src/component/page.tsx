import Image from 'next/image';
import React from 'react';
import logo from "@/assest/logo.png";
import Link from 'next/link';

const Navbar = () => {

    return (

        <div className="navbar bg-black/95 border-b border-white/10 shadow-lg px-4 lg:px-8">

            <div className="navbar-start">

                <div className="dropdown">

                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle lg:hidden text-white hover:bg-white/10"
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
                        className="menu menu-sm dropdown-content bg-neutral-900 text-white rounded-2xl z-1 mt-3 w-52 p-3 shadow-xl border border-white/10"
                    >

                        <li>
                            <Link
                                href=""
                                className="rounded-xl hover:bg-lime-400 hover:text-black transition"
                            >
                                Workout
                            </Link>
                        </li>

                        <li>
                            <Link
                                href=""
                                className="rounded-xl hover:bg-lime-400 hover:text-black transition"
                            >
                                My Plan
                            </Link>
                        </li>

                    </ul>

                </div>


                <div className="flex items-center gap-2">

                    <Image
                        src={logo}
                        alt="Logo"
                        width={40}
                        height={40}
                        className="rounded-xl"
                    />

                    <p className="font-black text-2xl sm:text-3xl tracking-tight text-white">
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
    className="!text-black font-semibold rounded-full px-6 py-3 bg-[#C2F800] hover:bg-[#C2F800]/90 transition duration-300"
>
    Workout
</Link>
                    </li>


                    {/* My Plan */}

                    <li>
                        <Link
                            href=""
                            className="!text-lime-300 font-semibold rounded-full px-6 py-3 hover:bg-lime-300 hover:!text-black transition duration-300"
                        >
                            My Plan
                        </Link>
                    </li>

                </ul>

            </div>


            {/* Right Side */}

            <div className="navbar-end gap-2">

                {/* Plan */}

                <a
                    className="btn btn-ghost text-gray-300 hover:bg-lime-400 hover:text-black rounded-xl gap-2"
                >
                    <span>Plan</span>

                    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-lime-500 text-white text-sm font-bold">
                        0
                    </span>
                </a>


                {/* Saved */}

                <a
                    className="btn btn-ghost text-gray-300 hover:bg-pink-400 hover:text-black rounded-xl gap-2"
                >
                    <span>Saved</span>

                    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-white border border-white text-sm font-bold">
                        0
                    </span>
                </a>

            </div>

        </div>
    );
};

export default Navbar;