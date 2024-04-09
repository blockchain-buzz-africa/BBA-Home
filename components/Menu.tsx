"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState } from "react";
import clsx from "clsx";
import Logo from "./../public/logo.svg";
import HomeIcon from "./../public/homeIcon.svg";
import PodIcon from "./../public/podIcon.svg";
import SignInIcon from "./../public/signInIcon.svg";
import DappIcon from "./../public/dappIcon.svg";
import CareerIcon from "./../public/careerIcon.svg";
import LearnIcon from "./../public/learnIcon.svg";
import MarketsIcon from "./../public/market.svg";
import NewsIcon from "./../public/newsIcon.svg";
import BuzzIcon from "./../public/buzzIcon.svg";
import Menuu from "./../public/menu.svg";
import Clue from "./../public/clue.svg";
import Telegram from "./../public/telegram.svg";
import Xtwitter from "./../public/xtwitter.svg";
import Whatsapp from "./../public/whatsapp.svg";
import { useRouter } from "next/navigation";
import DarkSwitch from "./../public/darkSwitch.svg";
import LightSwitch from "./../public/lightSwitch.svg";
import ClearNight from "./../public/clearNight.svg";
import Link from "next/link";

type Props = {};

const Menu = (props: Props) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-expanded={open}
        aria-label="Open menu"
        onClick={() => setOpen(!open)}
        className="lg:hidden"
      >
        <Image src={Menuu} alt="menu" />
      </button>
      <div
        onClick={() => setOpen(false)}
        className={clsx(
          "w-full h-screen bg-black lg:hidden bg-opacity-50 fixed bottom-0 left-0 right-0 top-0 z-40",
          open ? "translate-x-[0]" : "-translate-x-[100%]"
        )}
      ></div>
      <div
        onClick={() => setOpen(true)}
        className={clsx(
          "h-screen fixed bottom-0 left-0 right-0 top-0 z-50 w-[71%] text-sm overflow-hidden lg:hidden  flex flex-col bg-slate-50 dark:bg-[#21262D] transition-transform duration-300 ease-in-out md:hidden",
          open ? "translate-x-[0]" : "-translate-x-[100%]"
        )}
      >
        <div className="h-full w-full px-4 py-6 flex flex-col">
          <div className="w-full flex flex-row items-center gap-4">
            <Image src={Logo} alt="logo" />
            <span>Blockchain Buzz Africa</span>
          </div>

          <div className="py-4 w-full h-[55%] flex flex-col gap-4">
            <span>Menu</span>

            <div className="px-2 flex flex-col gap-5">
              <Link
                href={"/"}
                className="flex p-2 flex-row gap-4 rounded-lg active:bg-[#E5E7EB] dark:active:bg-[#313843] dark:hover:bg-[#313843] hover:bg-[#E5E7EB]"
              >
                <Image src={HomeIcon} alt="homeIcon" />
                <span>Home</span>
              </Link>
              <Link
                href={"/dappstore"}
                className="flex p-2 flex-row gap-4 rounded-lg active:bg-[#E5E7EB] dark:active:bg-[#313843] dark:hover:bg-[#313843] hover:bg-[#E5E7EB]"
              >
                <Image src={NewsIcon} alt="newsIcon" />
                <span>Dapp Store</span>
              </Link>
              <Link
                href={"/markets"}
                className="flex p-2 flex-row gap-4 rounded-lg active:bg-[#E5E7EB] dark:active:bg-[#313843] dark:hover:bg-[#313843] hover:bg-[#E5E7EB]"
              >
                <Image src={MarketsIcon} alt="marketsIcon" />
                <span>Markets</span>
              </Link>

              {/* <div className="flex flex-row gap-4">
                <Image src={LearnIcon} alt="learnIcon" />
                <span>Learn</span>
              </div>
              <div className="flex flex-row gap-4">
                <Image src={PodIcon} alt="podIcon" />
                <span>Podcasts</span>
              </div>
              <div className="flex flex-row gap-4">
                <Image src={DappIcon} alt="dappIcon" />
                <span>News</span>
              </div>
              <div className="flex flex-row gap-4">
                <Image src={CareerIcon} alt="careerIcon" />
                <span>Careers</span>
              </div>
              <div className="flex flex-row gap-4">
                <Image src={BuzzIcon} alt="buzzIcon" />
                <span>Interact with Buzzbot</span>
              </div>
              <div className="flex flex-row gap-4">
                <Image src={SignInIcon} alt="signInIcon" />
                <span>Sign In</span>
              </div> */}
            </div>
          </div>

          <div className="mt-3 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>

          <div className="flex flex-col gap-4 w-full py-4 ">
            <div className="flex flex-row gap-4 justify-center items-center">
              <Image src={Clue} alt="clue" />
              <span>About BBA</span>
            </div>
            <div className="flex flex-row gap-8 justify-center items-center">

              <Link
                href={"https://t.me/+P6X0i80H-N0xNTdk"}
                target="_blank"
              >
              <Image src={Whatsapp} alt="whatsapp" />
              </Link>

              <Link
                href={"https://t.me/+P6X0i80H-N0xNTdk"}
                target="_blank"
              >
                <Image src={Telegram} alt="telegram" />{" "}
              </Link>

              <Link
                href={"https://x.com/bba_Africa?t=VEYwEAj_0bFBlKc1sEYR2Q&s=09"}
                target="_blank"
              >
                <Image src={Xtwitter} alt="twitter" />
              </Link>
            </div>

            <div className="w-full h-12 rounded-xl flex justify-between items-center dark:bg-[#313843] bg-[#E5E7EB] p-3">
              <div className="flex flex-row gap-4">
                <button
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  aria-label="theme-switcher"
                >
                  <Image src={ClearNight} alt="clearNight" />
                </button>

                {theme === "light" ? (
                  <span>Light Mode</span>
                ) : (
                  <span>Dark Mode</span>
                )}
              </div>

              <div
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? (
                  <Image src={LightSwitch} alt="lightSwitch" />
                ) : (
                  <Image src={DarkSwitch} alt="darkSwitch" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
