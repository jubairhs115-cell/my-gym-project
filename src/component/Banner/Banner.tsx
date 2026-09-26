
import Image from "next/image";
 
import logo from "@/assest/banner.png";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-6 sm:py-10">

        <div className="w-full min-h-[600px] rounded-2xl bg-black text-white overflow-hidden lg:h-112 lg:min-h-0">

          <div className="h-full flex flex-col lg:flex-row items-center justify-between gap-8 px-6 py-10 sm:px-10 lg:px-14 lg:py-0 lg:gap-0">

            {/* Left Content */}
            <div className="w-full lg:flex-1 text-center lg:text-left">

              <p className="text-lime-400 font-semibold tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">
                WORKOUT LIBRARY
              </p>

              <h2 className="text-[32px] sm:text-[40px] lg:text-[52px] font-extrabold leading-[1.05] tracking-tight">
                TRAIN WITH INTENT.
                <br />
                LOG EVERY SET.
              </h2>

              <p className="text-gray-400 text-sm sm:text-[16px] leading-6 mt-4 sm:mt-5 max-w-xl mx-auto lg:mx-0">
                FitLog is a dark, no-nonsense gym companion: pick a lift,
                lock it into todays plan, and watch the weeks work add up.
              </p>

              <Link href="/hello">
                <button className="mt-5 sm:mt-6 btn bg-lime-400 hover:bg-lime-300 text-black border-none font-bold px-6 sm:px-7">
                  Browse Workout
                </button>
              </Link>

            </div>

            {/* Right Image */}
            <div className="w-full flex justify-center lg:w-[334px] lg:h-[334px] lg:shrink-0">

              <Image
                src={logo}
                alt="Workout"
                width={334}
                height={334}
                className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[334px] lg:h-[334px] object-cover rounded-xl"
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
