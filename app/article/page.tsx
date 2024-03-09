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

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col">
      <Banner />
      <Header />
      <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
      <MarketRow />
      <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>

      <HeroSection />

      <div className="p-5">
        <div className="w-full p-3 flex flex-row gap-4 h-[50px] border dark:border-[#A5A5A5] border-[#818181]">
          <span>Share Piece</span>
          <span>|</span>
          <Image src={Share} alt="share" />
          <Image src={Twitter} alt="twitter" />
          <Image src={Chain} alt="chain" />
        </div>

        <div className="prose prose-lg dark:text-white text-black mt-10 mb-10 flex flex-col">
          <p>
            Replicating designer merch isn’t a far-fetched idea. A bold few may
            indeed attempt it, proudly displaying what appears to be genuine
            accessories.
          </p>
          <p>
            Web3 startup IYK, which stands for “If You Know,” emerged with the
            concept of ensuring the legitimacy of fashion items and other
            merchandise, while offering fans unique consumer interactions.
          </p>
          <p>
            On Thursday, IYK, co-founded by Ryan Ouyang and Christopher Lee,
            revealed that it raised $16.8 million in seed round funding.
          </p>
          <p>
            This round was spearheaded by A16z crypto and included participation
            from Collab Currency, Lattice Capital, 1kx, Synergis Capital, among
            others.
          </p>
          <p>
            IYK — serving clients such as Adidas, 9dcc and VÉRITÉ — is founded
            on the idea of embedding NFC (near-field communication) chips within
            merchandise or apparel.
          </p>
          <p>
            This technology enables consumers to effortlessly tap their
            smartphones on items like T-shirts to confirm their authenticity.
          </p>
          <p>
            In exchange, customers receive NFTs and the possibility of exclusive
            offerings from brands.
          </p>
          <p>
            Meanwhile, businesses gain insights into their merchandise ownership
            and maintain direct communication with customers.
          </p>
          <p>
            Ouyang, one of the co-founders, shared IYK’s journey in a recent X
            thread.
          </p>
          <p>
            He recounted how he crossed paths with his partner, Lee, in the
            summer of 2021 on Discord. Together, they ventured into the world of
            Web3 projects, ranging from NFT sniping bots to online scavenger
            hunts.
          </p>
          <p>
            One day, Ouyang found himself frustrated while waiting in a
            Ticketmaster queue to purchase tickets for a John Mayer concert.
            Despite being a frequent concertgoer for Mayer’s shows and a top
            0.01% streamer, he had to compete against ticket-snatching bots for
            seats.
          </p>
          <p>
            This experience made him realize that artists lacked the tools
            needed to maintain a strong connection with their real-world
            audience and devoted fans.
          </p>
          <p>
            The realization sparked the idea that eventually evolved into IYK.
            After acquiring NFC chips, they set out to create a prototype of
            their concept.
          </p>
          <p>
            IYK recently partnered with Adidas for an exclusive limited shirt
            release tied to NFT NYC 2023. In this collaboration, they created a
            total of just 152 shirts.
          </p>
          <Tweet id="1705148399698182584" />
          <p>
            The company defines its platform as a user- friendly gateway
            accessible to brands, musicians, artists and creators of all kinds
            to help them create “digi-physical” products without requiring
            technical expertise.
          </p>
          <p>
            IYK’s recent fundraising is noteworthy in light of the tough funding
            environment for blockchain startups prevailing today.
          </p>
          <p>
            The company secured this round after participating in the A16z
            Crypto Startup School, a twelve-week accelerator program hosted by
            the venture capital firm, focused on supporting emerging startups
            within the sector.
          </p>
          <p>
            Blockchain fundraising has been challenging due to a prolonged
            slowdown in funding, heightened scrutiny and concerns about the
            macroeconomic environment.
          </p>
        </div>

        <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>

        <div className="mt-8">
           <p className="font-semibold">Dont miss the next big story - join our <Link className="underline text-slate-600" href={'/'}>free daily newsletter.</Link> </p>
        </div>

      </div>

      {/* <RecentArticles news={news} /> */}

      <Footer />
    </div>
  );
};

export default page;
