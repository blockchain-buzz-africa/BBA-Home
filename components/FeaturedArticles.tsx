import React from "react";
import HeroSection from "./HeroSection";

type Props = {};

const FeaturedArticles = (props: Props) => {
  return (
    <div className=" flex flex-col gap-3">
      <span className="p-5 text-xl text-[#AA0099] uppercase">
        Featured Articles
      </span>
      <HeroSection />
      <HeroSection />
      <HeroSection />
    </div>
  );
};

export default FeaturedArticles;
