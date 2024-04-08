import React from "react";
import LogoSvg from "./../public/logo.svg";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link
      href={'/'}
      className="
    absolute top-[1.5rem] left-[1.5rem] [text-decoration:none]
text-lg text-[#AA0099] flex items-center
    "
    >
      <Image  src={LogoSvg} alt="logo" />
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#21262D] dark:from-[#38475c] to-[#AA0099] dark:to-[#ec7ee1]"> Blockchain Buzz Africa</span>
    </Link>
  );
};

export default Logo;