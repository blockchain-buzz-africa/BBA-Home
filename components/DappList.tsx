import React from "react";
import Ad from "./../public/ad.svg";
import Filter from "./../public/filter.svg";
import Image from "next/image";
import Link from "next/link";

interface Dapp {
  _id: string;
  name: string;
  description: string;
  about: string;
  website: string;
  twitter: string;
  telegram: string;
  tags: string;
  author: string;
  chain: string;
  image: string;
  category: string;
  createdAt: string; // Assuming this is also required
}

interface Props {
  dapps: Dapp[];
}

const DappList: React.FC<Props> = ({ dapps }) => {
  return (
    <div className=" md:hidden lg:hidden mb-10 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <span className="text-[#AA0099]">DAPP STORE</span>
        <Image src={Filter} alt="filter" />
      </div>

      {dapps &&
        dapps.map((item: Dapp) => (
          <>
            <Link href={{ pathname: "/dappstore/dapp", query: { _id: item?._id } }}
              key={item._id}
              className="w-full sm:h-[104px] h-[84px] flex flex-row items-center"
            >
              <div className="px-2 w-[34%] h-[80px] rounded-lg flex items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full rounded-lg"
                  width={153}
                  height={80}
                />
              </div>

              <div className="w-[66%] h-[90px] flex flex-col gap-1 sm:gap-[2px]">
                <div className="flex flex-row justify-start items-center gap-2 text-xs">
                  <span className="text-[#AA0099] font-semibold uppercase">
                    {item.name}
                  </span>
                  <Image src={Ad} className="w-6 h-6" alt="ad" />
                </div>
                <div className="flex flex-col gap-1 sm:text-xs">
                  <p className="text-xs font-semibold">{item.about}</p>
                  <div className=" text-xs font-light flex flex-row gap-2">
                    <span className="font-light">{item.tags}</span>
                   
                  </div>
                </div>
              </div>
            </Link>
            <div
              key={item._id}
              className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"
            ></div>
          </>
        ))}
    </div>
  );
};

export default DappList;
