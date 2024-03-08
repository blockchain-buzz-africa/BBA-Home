import Link from "next/link";
import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="w-full flex justify-center items-center h-[36px] bg-gradient-to-r from-[#AA0099] to-[#21262D]">
      <p className="text-white">
        Africa Metaverse AI Summit 2023: Register{" "}
        <Link href="/" className="cursor-pointer underline">
          here
        </Link>
      </p>
    </div>
  );
};

export default Banner;
