"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarketRow from "@/components/MarketRow";
import RecentArticles from "@/components/RecentArticles";
import Image from "next/image";
import Share from "./../../public/share.svg";
import Twitter from "./../../public/twitter.svg";
import Chain from "./../../public/chain.svg";
import Link from "next/link";
import DeskArticle from "@/components/DeskArticle";

interface Article {
  id: string;
  image: string;
  name: string;
  author: string;
  title: string;
  createdAt: string; // Assuming this is also required
}

const ArticlePage = () => {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://api.bbafrica.co/api/dapps-news');
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
        setNews(sortedNews.slice(0, 3));
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
    <div className="flex flex-col">
      <Banner />
      <Header />
      <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
      <MarketRow />
      <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>

      <DeskArticle />
      <HeroSection />

      <div className="p-5">
        <div className=" p-3 w-[95%] md:w-[70%]  flex flex-row gap-4 h-[50px] border dark:border-[#A5A5A5] border-[#818181]">
          <span className='text-xs'>Share Piece</span>
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
          <span className=" text-xl lg:text-4xl font-semibold">Garlic bread with cheese: What the science tells us</span>
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

      <RecentArticles news={news} />

      <Footer />
    </div>
  );
};

export default ArticlePage;
