import Image from "next/image";
import React from "react";
import DarkModeButton from "./DarkModeButton";
import Menu from "./Menu";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div
        className="sticky z-[999] top-0 w-full bg-white dark:bg-[#21262D] h-16 flex justify-between items-center 
    px-4"
      >
        {/* <div>
          <Image src={Menu} alt="menu" />
        </div> */}
        <Menu />
        <Link href={'/'} className="text-black text-xs md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#21262D] dark:from-[#38475c] to-[#AA0099] dark:to-[#ec7ee1]">
          Blockchain Buzz Africa
        </Link>
        <DarkModeButton />
      </div>
    </>
  );
};

export default Header;
