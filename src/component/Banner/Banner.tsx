
import Image from 'next/image';
import React from 'react';
import logo from "@/assest/banner.png";
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="min-h-screen bg-black">
            <div className="container mx-auto px-4 py-10">

                <div className="w-full h-112 bg-black text-white rounded-2xl overflow-hidden">

                    <div className="h-full flex items-center justify-between px-10 lg:px-14">

                        {/* Left Content */}
                        <div className="flex-1">
                            <p className="text-lime-400 font-semibold tracking-widest text-sm mb-4">
                                WORKOUT LIBRARY
                            </p>

                            <h2 className="text-[48px] lg:text-[52px] font-extrabold leading-[1.05] tracking-tight">
                                TRAIN WITH INTENT.
                                <br />
                                LOG EVERY SET.
                            </h2>

                            <p className="text-gray-400 text-[16px] leading-6 mt-5 max-w-115">
                                FitLog is a dark, no-nonsense gym companion: pick a lift,
                                lock it into todays plan, and watch the weeks work add up.
                            </p>

                            <Link href='/hello'>
                            
                            
                            <button className="mt-6 btn bg-lime-400 hover:bg-lime-300 text-black border-none font-bold px-7">
                                Browse Workout
                            </button>
                            </Link>
                        </div>

                        {/* Image */}
                        <div className="w-83.5 h-83.5 shrink-0">
                            <Image
                                src={logo}
                                alt="Workout"
                                width={334}
                                height={334}
                                className="w-83.5 h-83.5 object-cover rounded-xl"
                                priority
                            />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;