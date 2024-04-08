"use client"

import React from "react";
import { useRouter } from "next/navigation";

const TrendingCoin = ({ data }: { data: any }) => {
    const router = useRouter()
  

  const getCoinDetails = (id: string) => {
    router.push(`/${id}`); // Use router.push to navigate
  };

  return (
    <div
      className="w-[80%] sm:w-[40%]  dark:bg-[#282c34] bg-[#e6e7ea] text-black dark:text-white mb-12
    last:mb-0 rounded-lg p-4 relative cursor-pointer
    hover:bg-[#e6e7ea] dark:hover:bg-[#383c42] hover:bg-opacity-40 
    "
      onClick={() => getCoinDetails(data.id)}
    >
      {data ? (
        <>
          <h3 className="txt-base flex items-center my-0.5">
            <span className=" capitalize">name:&nbsp;</span>
            <span className="text-[#AA0099]">{data.name}</span>
            <img
              src={data.small}
              alt={data.name}
              className="w-[1.5rem] h-[1.5rem] mx-1.5 rounded-full"
            />
          </h3>

          <h3 className="txt-base flex items-center my-0.5">
            <span className=" capitalize">
              market cap rank:&nbsp;
            </span>
            <span className="text-[#AA0099]">{data.market_cap_rank}</span>
          </h3>
          <h3 className="txt-base flex items-center flex-wrap my-0.5">
            <span className=" capitalize">
              price (in btc):&nbsp;
            </span>
            <span className="text-[#AA0099]">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "BTC", // Note: Currency codes are usually in uppercase
                maximumSignificantDigits: 5,
              }).format(data.price_btc)}
            </span>
          </h3>

          <h3 className="txt-base flex items-center my-0.5">
            <span className=" capitalize">score:&nbsp;</span>
            <span className="text-[#AA0099]">{data.score}</span>
          </h3>

          <img
            src={data.large}
            alt={data.name}
            className="w-[25%] h-auto rounded-full absolute top-2/4 -right-9  xl:-right-12 xl:w-[15%]
-translate-y-2/4
"
          />
        </>
      ) : (
        <div
          className="w-full  h-full flex justify-center items-center
            "
        >
          <div
            className="w-8 h-8 border-4 border-cyan rounded-full
            border-b-gray-200 animate-spin 
            "
            role="status"
          />
          <span className="ml-2">please wait...</span>
        </div>
      )}
    </div>
  );
};

export default TrendingCoin;
