"use client"

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MarketRow from "@/components/MarketRow";
import Link from "next/link";
import Womans from "./../../public/womans.png";
import Ad from "./../../public/ad.svg";
import Filter from "./../../public/filter.svg";
import Halofi from "./../../public/halofi.jpeg";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DappHero from "@/components/DappHero";
import DappList from "@/components/DappList";

interface Dapp {
  _id: string;
  name: string;
  description: string;
  about: string;
  author:string;
  website: string;
  twitter: string;
  telegram: string;
  tags: string;
  chain: string;
  image: string;  
  category: string;
  createdAt: string; // Assuming this is also required
}

const Dapp = () => {

  const [dapps, setDapps] = useState<Dapp[]>([]);
  const [fdapps, setFdapps] = useState<Dapp[]>([]);

  useEffect(() => {
    const fetchDapps = async () => {
      try {
        const response = await fetch('https://api.bbafrica.co/api/dappstore-info');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const newsData = await response.json();
        const sortedDapps = newsData.data.sort((a: Dapp, b: Dapp) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB.getTime() - dateA.getTime();
        });
        console.log(sortedDapps);

        setDapps(sortedDapps.slice(0, 4));
        setDapps(sortedDapps.slice(0, 2));
        setFdapps(sortedDapps)
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchDapps();
  }, []);

  
  return (
    <>
      {/* <Banner /> */}
      <Header />
      <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
      <MarketRow />
      <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>

      <DappHero latestDapp={dapps[0]} />
      <div className=" p-5 md:hidden lg:hidden flex flex-col gap-3"> 
        <DappList dapps={fdapps} />
      </div>
      <div className="w-full flex text-white flex-col gap-4 h-[219px] sm:p-2 p-7 bg-gradient-to-tr from-[#AA0099] to-[#163159]">
        <span className="uppercase text-xs font-light">DAPP STORE</span>
        <span className="text-base">SUBMIT YOUR DAPP</span>
        <p className="text-xs">
          Submit your dapp to BBA for visibility. Send email to us below.{" "}
        </p>

        <button className="w-[30%] h-[34px] bg-[#163159] text-xs uppercase  flex justify-center items-center p-2">
          SEND EMAIL
        </button>
      </div>
      <div className="w-full h-[1px] bg-transparent"></div>
      <Footer />
    </>
  );
};

export default Dapp;
