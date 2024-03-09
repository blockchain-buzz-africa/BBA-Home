"use client"

import React, { useEffect, useState } from 'react';
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import MarketRow from "@/components/MarketRow";
import HeroSection from "@/components/HeroSection";
import RecentArticles from "@/components/RecentArticles";
import FeaturedArticles from "@/components/FeaturedArticles";
import PodcastVideos from "@/components/PodcastVideos";
import PodcastSpaces from "@/components/PodcastSpaces";
import Footer from "@/components/Footer";

interface Article {
  id: string;
  image: string;
  name: string;
  author: string;
  title: string;
  createdAt: string; // Assuming this is also required
}


const Home: React.FC = () => {
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

  return (
    <div className="flex flex-col">
      <Banner />
      <Header />
      <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
      <MarketRow />
      <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>

      <HeroSection />
      <RecentArticles news={news} />
      <FeaturedArticles />
      <PodcastVideos />
      <PodcastSpaces />
      <Footer />
    </div>
  );
}

export default Home;
