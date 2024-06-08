"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { StorageContext } from "@/context/StorageContext";
import { CryptoContext } from "@/context/CryptoContext";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface ComponentWrapperProps {
 children: React.ReactNode;
}

const SaveBtn = ({ data }: { data: any }) => {
  const { saveCoin, allCoins, removeCoin } = useContext(StorageContext);

  const ComponentWrapper: React.FC<ComponentWrapperProps> = ({ children}) => {
    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault();
      saveCoin(data.id);
  
      if (allCoins.includes(data.id)) { 
        removeCoin(data.id);
      } else {
        saveCoin(data.id);
      }
    };
    return(
      <div onClick={handleClick}>{children}</div>

    )
    
  };

  

  return (
    <ComponentWrapper>
      <button
      className="outline-0 border-0 bg-none cursor-pointer"
    >
      <svg
        className={`w-[1.5rem] ml-1.5 
                      ${
                        allCoins.includes(data.id)
                          ? "fill-[#AA0099]"
                          : "fill-gray-100"
                      }
                        hover:fill-[#AA0099]`}
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="[#AA0099]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Your SVG code */}
      </svg>
    </button>

    </ComponentWrapper>
    
  );
};

const Saved = () => {
  interface ComponentWrapper2Props {
    children: React.ReactNode;
    resetSavedResult: () => void;
   }
  const { savedData, resetSavedResult } = useContext(StorageContext);
  let { currency } = useContext(CryptoContext);

  const ComponentWrapper2: React.FC<ComponentWrapper2Props> = ({ children, resetSavedResult }) => {
    const handleClick = () => {
      resetSavedResult();
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
        <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
          <div className="w-full min-h-[60vh] py-8 border border-gray-700 dark:border-gray-500 rounded">
            {savedData ? (
              <table className="w-full table-auto">
                <thead className="capitalize text-base text-gray-700 dark:text-gray-500  font-medium border-b border-gray-700 dark:border-gray-500 ">
                  <tr>
                    {[
                      "asset",
                      "name",
                      "price",
                      "total volume",
                      "market cap change",
                      "1H",
                      "24H",
                      "7D",
                    ].map((table: string, index: number) => {
                      return (
                        <th key={index} className="py-1">
                          {table}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {savedData &&
                    savedData.map((data: any) => {
                      return (
                        <tr
                          key={data.id}
                          className="text-center text-base border-b border-gray-700  dark:border-gray-500 text-black dark:text-white hover:bg-[#e6e7ea] dark:hover:bg-[#383c42]"
                        >
                          <td className="py-4 uppercase flex items-center">
                            <SaveBtn data={data} />

                            <img
                              src={data.image}
                              alt={data.id}
                              className="w-[1.2rem] h-[1.2rem] mx-1.5"
                            />
                            <span className="cursor-pointer">
                              <Link href={`${data.id}`} className="cursor-pointer hover:text-[#AA0099]">
                                {data.symbol}
                              </Link>
                            </span>
                          </td>
                          <td className="py-4 cursor-pointer">
                            <Link href={`${data.id}`} className="cursor-pointer">
                              {data.name}
                            </Link>
                          </td>
                          <td className="py-4">
                            {/* ${Number(data.current_price).toFixed(2)} */}
                            {new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: currency,
                            }).format(data.current_price)}
                          </td>
                          <td className="py-4">{data.total_volume}</td>
                          <td
                            className={
                              data.market_cap_change_percentage_24h < 0
                                ? "text-green-500 py-4 px-6 "
                                : "text-red-500 py-4 px-6 "
                            }
                          >
                            {Number(data.market_cap_change_percentage_24h).toFixed(2)}
                            %
                          </td>
                          <td
                            className={
                              data.price_change_percentage_1h_in_currency < 0
                                ? "py-4 text-red-500"
                                : "py-4 text-green-500"
                            }
                          >
                            {Number(
                              data.price_change_percentage_1h_in_currency,
                            ).toFixed(2)}
                            %
                          </td>
                          <td
                            className={
                              data.price_change_percentage_24h_in_currency < 0
                                ? "py-4 text-red-500"
                                : "py-4 text-green-500"
                            }
                          >
                            {Number(
                              data.price_change_percentage_24h_in_currency,
                            ).toFixed(2)}
                            %
                          </td>
                          <td
                            className={
                              data.price_change_percentage_7d_in_currency < 0
                                ? "py-4 text-red-500"
                                : "py-4 text-green-500"
                            }
                          >
                            {Number(
                              data.price_change_percentage_7d_in_currency,
                            ).toFixed(2)}
                            %
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            ) : (
              <h1 className="min-h-[60vh] text-lg text-[#AA0099] flex items-center justify-center">
                There is no data to display!
              </h1>
            )}
            <ComponentWrapper2 resetSavedResult={resetSavedResult}>
              <button
                className="w-[2rem] ml-4 hover:scale-110 transition-all transition-ease
          absolute right-0 -top-10
          "
                // onClick={resetSavedResult}
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
                  {/* Your SVG code */}
                </svg>
              </button>
            </ComponentWrapper2>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Saved;
