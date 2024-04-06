"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Homee from "./../public/home.png";
import MarketRow from "@/components/MarketRow";
import RecentArticles from "@/components/RecentArticles";
import Image from "next/image";
import Share from "./../../public/share.svg";
import Twitter from "./../../public/twitter.svg";
import Chain from "./../../public/chain.svg";
import Link from "next/link";
import DeskArticle from "@/components/DeskArticle";
import { getSingleNews } from "@/helpers";

interface Article {
  _id: string;
  image: string;
  name: string;
  author: string;
  title: string;
  content: string;
  createdAt: string; // Assuming this is also required
}

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const ArticlePage = ({ searchParams }: Props) => {

  const _idString = searchParams?._id as string;

  const _id = _idString

  // const iNews = await getSingleNews("650738704065ee8ed686ae32")
  
 console.log("My id", _id)
//  const [news, setNews] = useState<Article | null>(null); 

//  console.log("Here is the news ", news)

 
useEffect(() => {
  const fetchNewsDetail = async () => {
    try {
      // Assuming newsId is already a string and passed as a prop to this component
      const detail = await getSingleNews("650738704065ee8ed686ae32");
      if(detail){

        console.log("details", detail);

        // setNews(detail)
      }
    } catch (error) {
     console.log(error)
  };
}

  fetchNewsDetail();
}, [_idString]); 

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col">
      <Banner />
      <Header />
      <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
      <MarketRow />
      <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>

      {/* <DeskArticle />
      <HeroSection /> */}

      {/* {news &&
        news.map((item: Article) => (
          <React.Fragment key={item._id}>
            <div className="p-5 md:hidden lg:hidden flex flex-col gap-3">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full h-[280px]"
              >
                <Image src={item.image} alt={item.name} className="w-full h-full" width={350} height={280} />
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="mt-2"
              >
                <span className="text-base md:text-xl">
                   {item.title}
                </span>
                <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                  <p>{item.createdAt}</p>
                  <p>{item.author}</p>
                </div>
              </motion.div>
            </div>
          </React.Fragment>
        ))} */}

      <div className="p-5">
        <div className=" p-3 w-[95%] md:w-[70%]  flex flex-row gap-4 h-[50px] border dark:border-[#A5A5A5] border-[#818181]">
          <span className="text-xs">Share Piece</span>
          <span>|</span>
          <Image src={Share} alt="share" />
          <Image src={Twitter} alt="twitter" />
          <Image src={Chain} alt="chain" />
        </div>

        <motion.article
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="py-5 lg:pr-80 prose-sm md:prose-lg 
          dark:text-white text-black mt-10 mb-10 flex flex-col"
        >
          <span className=" text-xl lg:text-4xl font-semibold">
           {/* {news!.title} */}
          </span>
        
          <p>
           {/* {news!.content} */}
          </p>
        </motion.article>

        <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>

        <div className="mt-8">
          <p className="font-semibold">
            Dont miss the next big story - join our{" "}
            <Link className="underline text-slate-600" href={"/"}>
              free daily newsletter.
            </Link>{" "}
          </p>
        </div>
      </div>

      {/* <RecentArticles news={""} /> */}

      <Footer />
    </div>
  );
};

export default ArticlePage;
