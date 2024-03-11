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
import React from "react";
import { Tweet } from "react-tweet";
import Link from "next/link";
import DeskArticle from "@/components/DeskArticle";

type Props = {};

const page = (props: Props) => {
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
        <div className="w-[95%] md:w-[70%] p-3 flex flex-row gap-4 h-[50px] border dark:border-[#A5A5A5] border-[#818181]">
          <span>Share Piece</span>
          <span>|</span>
          <Image src={Share} alt="share" />
          <Image src={Twitter} alt="twitter" />
          <Image src={Chain} alt="chain" />
        </div>

        <div
          className="prose-lg
          dark:text-white text-black mt-10 mb-10 flex flex-col"
        >
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
        </div>

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

      {/* <RecentArticles news={news} /> */}

      <Footer />
    </div>
  );
};

export default page;
