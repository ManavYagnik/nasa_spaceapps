import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { navigationData } from "./general.dto";
import NasaLogo from "@/assets/images/general/landing-page/spaceapps_Logo.png";
import MenuIcon from "@/assets/images/general/landing-page/menu-icon.svg";

export default function NavigationBar() {
  const Router = useRouter();
  const navigationInfo = useMemo(() => navigationData(Router), [Router]);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const sideNavVariants = {
    hidden: { x: "-100%" },
    visible: { x: "0%" },
  };

  const SideNav = () => (
    <motion.div
      className="fixed top-0 left-0 w-[75%] h-full bg-black z-50 p-5"
      initial="hidden"
      animate={isSideNavOpen ? "visible" : "hidden"}
      variants={sideNavVariants}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div
        className="absolute right-5 text-[24px] cursor-pointer"
        onClick={() => setIsSideNavOpen(false)}
      >
        X
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {navigationInfo.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer font-hackathoneSFProDisplay font-[400] hover:text-[#E43700]"
            onClick={item.route}
          >
            {item.text}
          </div>
        ))}
      </div>
    </motion.div>
  );

  /** Desktop View */
  const desktopView = () => (
    <nav
      className="MobileScreen:hidden TabletScreen:hidden sticky bg-hackathone-background-grey 
        flex items-center justify-between h-[68px] px-[1.7%] mx-[7%] rounded-xl"
    >
      <div onClick={() => Router.push("/")}>
        <Image
          className="cursor-pointer"
          src={NasaLogo}
          width={50}
          alt={"Deedu logo"}
        ></Image>
      </div>
      <div className="flex flex-row gap-[42px]">
        {navigationInfo.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer font-hackathoneSFProDisplay font-[400] hover:text-hackathone-font-rocket-red"
            onClick={item.route}
            onMouseEnter={() =>
              index === navigationInfo.length - 1 && setIsTooltipVisible(true)
            }
            onMouseLeave={() => setIsTooltipVisible(false)}
          >
            {item.text}
            {index === navigationInfo.length - 1 && isTooltipVisible && (
              <motion.div
                className="absolute left-[90%] transform -translate-x-[50%] bottom-[-25px] z-50"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gray-800 bg-opacity-90 text-white p-2 rounded-md text-sm whitespace-nowrap text-center shadow-lg border border-white">
                  2023 Challenges
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );

  /** Tablet View */
  const tabletView = () => (
    <nav
      className="DesktopScreen:hidden MobileScreen:hidden bg-hackathone-background-grey px-[1.7%]
         flex flex-row justify-between py-[6px] mx-[3%] rounded-xl"
    >
      <div onClick={() => Router.push("/")}>
        <Image
          className="cursor-pointer"
          src={NasaLogo}
          width={50}
          alt={"Deedu logo"}
        ></Image>
      </div>
      <div onClick={toggleSideNav}>
        <Image
          className="cursor-pointer"
          src={MenuIcon}
          width={50}
          alt={"Menu Icon"}
        ></Image>
      </div>
    </nav>
  );

  /** Mobile View */
  const mobileView = () => (
    <nav
      className="DesktopScreen:hidden TabletScreen:hidden bg-hackathone-background-grey px-[1.2%]
         flex flex-row items-center justify-between py-[6px] mx-[1%] rounded-md"
    >
      <div onClick={() => Router.push("/")}>
        <Image
          className="cursor-pointer mt-2"
          src={NasaLogo}
          width={50}
          alt={"Deedu logo"}
        ></Image>
      </div>
      <div onClick={toggleSideNav}>
        <Image
          className="cursor-pointer"
          src={MenuIcon}
          width={50}
          alt={"Menu Icon"}
        ></Image>
      </div>
    </nav>
  );

  return (
    <section>
      {desktopView()}
      {tabletView()}
      {mobileView()}
      <SideNav />
    </section>
  );
}