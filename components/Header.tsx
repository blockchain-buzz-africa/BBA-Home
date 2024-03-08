import Image from "next/image";
import React from "react";
import DarkModeButton from "./DarkModeButton";
import Menu from "./Menu";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div
        className="sticky z-[999] top-0 w-full lg:hidden bg-white dark:bg-[#21262D] h-12 flex justify-between items-center 
    px-4"
      >
        {/* <div>
          <Image src={Menu} alt="menu" />
        </div> */}
        <Menu />
        <span className="text-black dark:text-white">
          Blockchain Buzz Africa
        </span>
        <DarkModeButton />
      </div>
    </>
  );
};

export default Header;
