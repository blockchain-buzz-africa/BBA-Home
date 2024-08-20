import Image from "next/image";
import React, { useEffect, useState } from "react";
import AdImage from "./../public/adImage.jpeg";
import { motion } from "framer-motion";
import Homee from "./../public/home.png";
import FeaturedImage from "./../public/featuredImg.jpeg";
import Blue from "./../public/blue.jpeg";
import Link from "next/link";
import RecentDeskArticles from "./RecentDeskArticles";
import AllArticles from "./AllArticles";
import FeaturedDeskArticle from "./FeaturedDeskArticle";


interface Article {
  _id: string;
  image: string;
  name: string;
  author: string;
  title: string;
  content: string;
  createdAt: string; // Assuming this is also required
}


const DeskHero = () => {

  const [anews, setAnews] = useState<Article[]>([]);
  const [fnews, setfnews] = useState<Article[]>([]);


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://api.bbafrica.media/api/dapps-news');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const newsData = await response.json();
        const sortedNews = newsData.data.sort((a: Article, b: Article) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB.getTime() - dateA.getTime();
        });
        console.log(sortedNews);
        
        setfnews(sortedNews)
        setAnews(sortedNews.slice(0, 5));
        
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible" 
        variants={containerVariants}
        className="w-full mb-10 hidden h-[692px] py-10 px-5 md:flex flex-row gap-4 "
      >
        <div className=" w-[20%] hidden lg:flex flex-col gap-1">
          <span className=" text-xs">Ad</span>
          <Image src={AdImage} alt="image" className=" w-[290px] h-[170px]" />
          <span className=" text-xl mt-2">
            Will the bull run spur jobs in the web3 market?
          </span>
          <p className="text-sm text-[#6A6A6A] dark:text-[#b2aeae] ">
          The web3 job market is poised to become a fertile hunting ground, 
          where pioneers and visionaries will stake their claim in shaping 
          the decentralized future. From blockchain developers crafting the 
          backbone of this new frontier to NFT artists breathing life into 
          digital canvases, the hunt for talent is on.
          </p>
          <p className="text-xs text-[#6A6A6A] dark:text-[#b2aeae] ">
            by <span className="text-[#AA0099]">web3 recruiter</span>/ 5 DAYS
            AGO
          </p>
        </div>
          <FeaturedDeskArticle latestArticle={anews[0]}  />
         <RecentDeskArticles anews={anews} />
      </motion.div>

      <AllArticles fnews={fnews} />

      {/* <div className="mb-10 md:w-[85%] lg:w-[80%] hidden md:flex flex-col p-5 mx-auto px-4">
        <span className="font-semibold text-xl">Videos</span>
        <p className="text-xs mt-4">
          Watch podcasts, conversations, tutorials and special features.
        </p>
        <div className="mt-6 h-[80%]  w-full grid md:grid-cols-2 lg:grid-cols-3  gap-6">
          <Link href={"/article"}>
            <div className="w-full h-[280px]">
              <Image src={Homee} alt="home" className="w-[344px] h-[269px]" />
            </div>

            <div className="mt-2">
              <span className="text-xl">
                Africa gearing up for the second edition of the AMAS 2023
              </span>
              <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                <p>Sep 29 2023</p>
                <p>Author : Michael Loupa</p>
              </div>
            </div>
          </Link>
          <Link href={"/article"}>
            <div className="w-full h-[280px]">
              <Image src={Homee} alt="home" className="w-[344px] h-[269px]" />
            </div>

            <div className="mt-2">
              <span className="text-xl">
                Africa gearing up for the second edition of the AMAS 2023
              </span>
              <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                <p>Sep 29 2023</p>
                <p>Author : Michael Loupa</p>
              </div>
            </div>
          </Link>
          <Link href={"/article"}>
            <div className="w-full h-[280px]">
              <Image src={Homee} alt="home" className="w-[344px] h-[269px]" />
            </div>

            <div className="mt-2">
              <span className="text-xl">
                Africa gearing up for the second edition of the AMAS 2023
              </span>
              <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                <p>Sep 29 2023</p>
                <p>Author : Michael Loupa</p>
              </div>
            </div>
          </Link>
          <Link href={"/article"}>
            <div className="w-full h-[280px]">
              <Image src={Homee} alt="home" className="w-[344px] h-[269px]" />
            </div>

            <div className="mt-2">
              <span className="text-xl">
                Africa gearing up for the second edition of the AMAS 2023
              </span>
              <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                <p>Sep 29 2023</p>
                <p>Author : Michael Loupa</p>
              </div>
            </div>
          </Link>
          <Link href={"/article"}>
            <div className="w-full h-[280px]">
              <Image src={Homee} alt="home" className="w-[344px] h-[269px]" />
            </div>

            <div className="mt-2">
              <span className="text-xl">
                Africa gearing up for the second edition of the AMAS 2023
              </span>
              <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                <p>Sep 29 2023</p>
                <p>Author : Michael Loupa</p>
              </div>
            </div>
          </Link>
          <Link href={"/article"}>
            <div className="w-full h-[280px]">
              <Image src={Homee} alt="home" className="w-[344px] h-[269px]" />
            </div>

            <div className="mt-2">
              <span className="text-xl">
                Africa gearing up for the second edition of the AMAS 2023
              </span>
              <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                <p>Sep 29 2023</p>
                <p>Author : Michael Loupa</p>
              </div>
            </div>
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default DeskHero;
