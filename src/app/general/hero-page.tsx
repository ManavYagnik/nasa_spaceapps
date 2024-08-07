"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroImage from "@/assets/images/general/landing-page/spaceapps_Logo.png";

const HeroPage = () => {
  /** Desktop View */
  const desktopView = () => {
    return (
      <div className="TabletScreen:hidden MobileScreen:hidden flex items-center justify-between px-[6.94%] mt-[59.62px] mb-[81.79px] ">
        <div className="w-[35.46%]">
          <div className="font-hackathoneCabinetGrotesk font-extrabold text-hackathone-font-rocket-red text-[65.08px] leading-[73.26px]">
            <p>Welcome To</p>
            <p>HackAthlone</p>
          </div>
          <div>
            <p className="mt-[13.3px] font-hackathoneSFProDisplay font-normal text-[18px] leading-[20.63px] text-slate-300">
              <span className="font-bold text-[20px]">
                The Sun Touches Everything
              </span>{" "}
              Join Unique World Robotics for the 2024 NASA Space Apps Challenge
              on October 5 & 6 as we celebrate this year&apos;s theme with NASA
              Heliophysics.
            </p>
          </div>
          <div className="flex flex-row gap-[16px]">
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              onClick={() =>
                window.open(
                  "https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/athlone/",
                  "_blank"
                )
              }
              whileTap={{ scale: 0.9 }}
              title="Register Here"
              className="bg-white mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[40.36%] h-[44.31px]"
            >
              <p className="mr-[7px] font-bold text-[13.13px] leading-[16.28px] font-sefarvestCabinetGrotesk text-hackathone-font-rocket-red">
                Register Here
              </p>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              onClick={() =>
                window.open("https://www.hackathlone.com/", "_blank")
              }
              whileTap={{ scale: 0.9 }}
              title="Hackathone 2023"
              className="bg-white mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[40.36%] h-[44.31px]"
            >
              <p className="mr-[7px] font-bold text-[13.13px] leading-[16.28px] font-sefarvestCabinetGrotesk text-hackathone-font-rocket-red">
                Hackathone 2023
              </p>
            </motion.button>
          </div>
        </div>
        <div className="w-[50.49%]">
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
          >
            <Image unoptimized width={500} src={HeroImage} alt="Hero Image" />
          </motion.button>
        </div>
      </div>
    );
  };

  /** Tablet View */
  const tabletView = () => {
    return (
      <div className="DesktopScreen:hidden MobileScreen:hidden flex items-center justify-between mt-[36px] px-[6.94%]">
        <div className="flex justify-center w-full">
          <div>
            <div className="font-hackathoneCabinetGrotesk font-extrabold text-hackathone-font-rocket-red text-[65.08px] leading-[73.26px]">
              <p>Welcome To</p>
              <p>HackAthlone</p>
            </div>
            <div className="flex items-center justify-center">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                <Image
                  unoptimized
                  src={HeroImage}
                  width={500}
                  alt="Hero Image"
                />
              </motion.button>
            </div>
            <div className="">
              <div>
                <p className="mt-[28.3px] font-hackathoneSFProDisplay font-normal text-[18px] leading-[20.63px] text-slate-300">
                  <span className="font-bold text-[20px]">
                    The Sun Touches Everything
                  </span>{" "}
                  Join Unique World Robotics for the 2024 NASA Space Apps
                  Challenge on October 5 & 6 as we celebrate this year&apos;s
                  theme with NASA Heliophysics.
                </p>
              </div>
              <div className="flex flex-row gap-[16px]">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/athlone/",
                      "_blank"
                    )
                  }
                  whileTap={{ scale: 0.9 }}
                  title=" Register Here"
                  className="bg-white mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[40.36%] h-[44.31px]"
                >
                  <p className="mr-[7px] font-bold text-[13.13px] leading-[16.28px] font-sefarvestCabinetGrotesk text-hackathone-font-rocket-red">
                    Register Here
                  </p>
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                  onClick={() =>
                    window.open("https://www.hackathlone.com/", "_blank")
                  }
                  whileTap={{ scale: 0.9 }}
                  title="Hackathone 2023"
                  className="bg-white  mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[40.36%] h-[44.31px]"
                >
                  <p className="mr-[7px] font-bold text-[13.13px] leading-[16.28px] font-sefarvestCabinetGrotesk text-hackathone-font-rocket-red">
                    Hackathone 2023
                  </p>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  /** Mobile View */
  const mobileView = () => {
    return (
      <div className="DesktopScreen:hidden TabletScreen:hidden flex items-center justify-between ">
        <div className="flex justify-center w-full">
          <div>
            <div className="font-hackathoneCabinetGrotesk font-extrabold text-hackathone-font-rocket-red text-[45.8px] leading-[56.79px] mt-[24px] px-[5.58%]">
              <p>Welcome To</p>
              <p>HackAthlone</p>
              <div>
                <p className="mt-[28.3px] font-hackathoneSFProDisplay font-normal text-[14px] leading-[20.63px] text-slate-300">
                  <span className="font-bold text-[18px]">
                    The Sun Touches Everything
                  </span>{" "}
                  Join Unique World Robotics for the 2024 NASA Space Apps
                  Challenge on October 5 & 6 as we celebrate this year&apos;s
                  theme with NASA Heliophysics.
                </p>
              </div>
              <div className="flex flex-row gap-[16px]">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/athlone/",
                      "_blank"
                    )
                  }
                  whileTap={{ scale: 0.9 }}
                  title=" Register Here"
                  className="bg-white  mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[40.36%] h-[44.31px]"
                >
                  <p className="mr-[7px] font-bold text-[13.13px] leading-[16.28px] font-sefarvestCabinetGrotesk text-hackathone-font-rocket-red">
                    Register Here
                  </p>
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                  onClick={() =>
                    window.open("https://www.hackathlone.com/", "_blank")
                  }
                  whileTap={{ scale: 0.9 }}
                  title="Hackathone 2023"
                  className="bg-white  mt-[32.82px] flex items-center justify-center rounded-[6.54px] px-[2.22%] py-[11.4px] w-[40.36%] h-[44.31px]"
                >
                  <p className="mr-[7px] font-bold text-[13.13px] leading-[16.28px] font-sefarvestCabinetGrotesk text-hackathone-font-rocket-red">
                    Hackathone 2023
                  </p>
                </motion.button>
              </div>
            </div>
            <div className="flex items-center justify-center mt-[48.92px] mb-[90.79px]">
              <Image unoptimized src={HeroImage} alt="Hero Image" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section>
      {desktopView()}
      {tabletView()}
      {mobileView()}
    </section>
  );
};

export default HeroPage;
