import Image from 'next/image';
import React from 'react';
import logo from "@/assest/logo.png";

const FooterPage = () => {

    return (
        <footer className="bg-black border-t border-white/10">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">

                <div className="flex flex-row items-center justify-between gap-6 sm:gap-10 md:gap-16 lg:gap-20">

                    {/* FITLOG */}

                    <div className="flex items-center gap-2 shrink-0">

                        <Image
                            src={logo}
                            alt="FITLOG"
                            width={28}
                            height={28}
                            className="w-7 h-7"
                        />

                        <span className="text-[14px] font-semibold text-white">
                            FITLOG
                        </span>

                    </div>


                    {/* Copyright */}

                    <p className="text-xs sm:text-sm text-gray-400 text-right leading-relaxed">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default FooterPage;