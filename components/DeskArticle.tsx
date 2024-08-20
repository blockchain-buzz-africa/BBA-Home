"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import FBImage from "./../public/fbImage.png";
import Blue from "./../public/blue.jpeg";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import RecentDeskArticles from "./RecentDeskArticles";

interface Article {
  _id: string;
  image: string;
  name: string;
  author: string;
  title: string;
  content: string;
  createdAt: string; // Assuming this is also required
}
const DeskArticle = () => {

  const [anews, setAnews] = useState<Article[]>([]);


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
        className="w-full mb-10 hidden h-[692px] py-10 px-5 md:flex flex-row justify-between gap-4 "
      >
      
        <RecentDeskArticles anews={anews} />
        
      </motion.div>
    </>
  );
};

export default DeskArticle;
