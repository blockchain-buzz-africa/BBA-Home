import Banner from "@/components/Banner";
import Header from "@/components/Header";
import MarketRow from "@/components/MarketRow";

import HeroSection from "@/components/HeroSection";
import RecentArticles from "@/components/RecentArticles";
import FeaturedArticles from "@/components/FeaturedArticles";
import PodcastVideos from "@/components/PodcastVideos";
import PodcastSpaces from "@/components/PodcastSpaces";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <Header />
      <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
      <MarketRow />
      <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>

      <HeroSection />
      <RecentArticles />
      <FeaturedArticles />
      <PodcastVideos />
      <PodcastSpaces />
      <Footer />
    </div>
  );
}
