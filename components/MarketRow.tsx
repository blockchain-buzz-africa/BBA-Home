"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Market {
  id: string;
  image: string;
  symbol: string;
  current_price: number;
  name: string;
  // Add other properties as needed
}

const MarketRow: React.FC = () => {
  const [markets, setMarkets] = useState<Market[]>([]);

  async function fetchMarkets() {
    const API_URL =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: Market[] = await response.json();
      console.log(data);
      setMarkets(data.slice(0, 11));
    } catch (error) {
      console.error("Error fetching markets:", error);
    }
  }

  useEffect(() => {
    fetchMarkets();
  }, []);

  return (
    <div className="w-full h-12 flex items-center bg-white dark:bg-[#21262D] whitespace-nowrap overflow-hidden">
      <div className="animate-roll  w-full  flex flex-row gap-6 items-center justify-center tracking-wider text-sm sm:text-base">
        {markets &&
          markets.map((item) => (
            <div className="flex flex-row gap-6" key={item.id}>
              
              <img  src={item.image} className='w-[20px] md:w-[28px] h-[20px] md:h-[28px]'/>
             
              <span className=" text-[#424242] dark:text-[#A5A5A5]">
                {item.symbol}
              </span>
              <span className="italic text-[#BB0000]">
                {item.current_price}
              </span>
              <span className="px-4">|</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MarketRow;
