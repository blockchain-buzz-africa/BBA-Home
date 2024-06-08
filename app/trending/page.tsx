"use client";

import React, { useContext } from "react";
import { TrendingContext } from "@/context/TrendingContext";
import TrendingCoin from "@/components/TrendingCoin";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


interface ComponentWrapperProps {
  resetTrendingResult: () => void;
  children: React.ReactNode;
}

const Trending = () => {
  const { trendData, resetTrendingResult } = useContext(TrendingContext);

  
  const ComponentWrapper: React.FC<ComponentWrapperProps> = ({ children, resetTrendingResult }) => {
    const handleClick = () => {
      resetTrendingResult();
    };
    return <div onClick={handleClick}>{children}</div>;
  };
  
  

  return (
    <>
      <Banner />
      <Header />
      <main className="w-full flex flex-col first-letter:content-center items-center relative text-white overflow-x-hidden">
        <div className="w-screen -z-10 absolute top-0 bottom-0 right-0 left-0 overflow-x-hidden"></div>
        <Navigation />

        <section className="w-11/12 sm:w-[80%] h-full flex flex-col mt-16 mb-24 relative">
          <div className="w-full min-h-[60vh] py-8 flex flex-wrap justify-evenly  border border-gray-700 dark:border-gray-500 rounded">
            {trendData &&
              trendData.map((coin: any, i: number) => (
                <TrendingCoin key={i} data={coin.item} />
              ))}
            <ComponentWrapper resetTrendingResult={resetTrendingResult}>
              <button
                className="w-[2rem] ml-4 hover:scale-110 transition-all transition-ease
          absolute right-0 -top-10
          "
                
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-[#AA0099]"
                  style={{
                    msTransform: "rotate(360deg)",
                    WebkitTransform: "rotate(360deg)",
                    transform: "rotate(360deg)",
                  }}
                >
                  <path d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3z" />
                  <path d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z" />
                  <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z" />
                </svg>
              </button>
            </ComponentWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Trending;
