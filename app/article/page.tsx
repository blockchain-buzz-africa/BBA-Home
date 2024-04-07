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
  author: string;
  title: string;
  content: string;
  createdAt: string; // Assuming this is also required
}

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const ArticlePage: React.FC<Props> = ({ searchParams }) => {
  const _idString = searchParams?._id as string


  const [singleNews, setSingleNews] = useState<Article[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        if (_idString) {
          const fetchedNews = await getSingleNews(_idString);
          console.log("fetchedNews", fetchedNews)
          setSingleNews(fetchedNews);
        }
      } catch (err) {
        setError('Failed to fetch news');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [_idString]);


  console.log("singleNews", singleNews)


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


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



      {singleNews &&
        singleNews.map((item: Article) => (

          <React.Fragment key={item._id}>
            <div className="p-5 md:hidden lg:hidden flex flex-col gap-3">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full h-[280px]"
              >
                
                <Image src={item.image} alt={item.image} className="w-full h-full" width={350} height={280} />
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
          
        ))}



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
            Garlic bread with cheese: What the science tells us
          </span>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
          <p>
            The Nelson Mandela Foundation (NMF) has decided to leverage
            non-fungible tokens (NFTs) as a fundraising initiative for its work,
            according to reports in South Africa. NFTs are unique digital assets
            that can represent ownership or proof of authenticity of a
            particular digital item such as artwork, music, or collectibles. In
            this case, the NMF is selling 1,918 NFTs with a value of $1,000
            (R19,000) each in collaboration with digital works marketplace,
            Glorious Digital. “This innovative and exclusive membership offers a
            rare chance to partner with the iconic Nelson Mandela Foundation and
            join a community of supporters from around the world, united to
            uphold Mandela’s legacy.” The foundation’s decision to release 1,918
            ‘founding memberships’ is a unique and commemorative initiative to
            honor Nelson Mandela’s legacy ten years after his passing. The
            Nelson Mandela Foundation (NMF) has decided to leverage non-fungible
            tokens (NFTs) as a fundraising initiative for its work, according to
            reports in South Africa. NFTs are unique digital assets that can
            represent ownership or proof of authenticity of a particular digital
            item such as artwork, music, or collectibles. In this case, the NMF
            is selling 1,918 NFTs with a value of $1,000 (R19,000) each in
            collaboration with digital works marketplace, Glorious Digital.
            “This innovative and exclusive membership offers a rare chance to
            partner with the iconic Nelson Mandela Foundation and join a
            community of supporters from around the world, united to uphold
            Mandela’s legacy.” The foundation’s decision to release 1,918
            ‘founding memberships’ is a unique and commemorative initiative to
            honor Nelson Mandela’s legacy ten years after his passing. The
            Nelson Mandela Foundation (NMF) has decided to leverage non-fungible
            tokens (NFTs) as a fundraising initiative for its work, according to
            reports in South Africa. NFTs are unique digital assets that can
            represent ownership or proof of authenticity of a particular digital
            item such as artwork, music, or collectibles. In this case, the NMF
            is selling 1,918 NFTs with a value of $1,000 (R19,000) each in
            collaboration with digital works marketplace, Glorious Digital.
            “This innovative and exclusive membership offers a rare chance to
            partner with the iconic Nelson Mandela Foundation and join a
            community of supporters from around the world, united to uphold
            Mandela’s legacy.” The foundation’s decision to release 1,918
            ‘founding memberships’ is a unique and commemorative initiative to
            honor Nelson Mandela’s legacy ten years after his passing. The
            Nelson Mandela Foundation (NMF) has decided to leverage non-fungible
            tokens (NFTs) as a fundraising initiative for its work, according to
            reports in South Africa. NFTs are unique digital assets that can
            represent ownership or proof of authenticity of a particular digital
            item such as artwork, music, or collectibles. In this case, the NMF
            is selling 1,918 NFTs with a value of $1,000 (R19,000) each in
            collaboration with digital works marketplace, Glorious Digital.
            “This innovative and exclusive membership offers a rare chance to
            partner with the iconic Nelson Mandela Foundation and join a
            community of supporters from around the world, united to uphold
            Mandela’s legacy.” The foundation’s decision to release 1,918
            ‘founding memberships’ is a unique and commemorative initiative to
            honor Nelson Mandela’s legacy ten years after his passing.
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

      {/* <RecentArticles news={singleNews} /> */}

      <Footer />
    </div>
  );
};

export default ArticlePage;
