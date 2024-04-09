"use client";

import Banner from "@/components/Banner";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import Share from "./../../../public/share.svg";
import Twitter from "./../../../public/twitter.svg";
import Website from "./../../../public/world.svg";
import Telegram from "./../../../public/tgram.svg";
import moment from "moment";
import MarketRow from "@/components/MarketRow";
import { getSingleDapps } from "@/helpers";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

interface Dapp {
  _id: string;
  name: string;
  description: string;
  about: string;
  website: string;
  twitter: string;
  telegram: string;
  tags: string;
  author: string;
  chain: string;
  image: string;
  category: string;
  createdAt: string; // Assuming this is also required
}

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const DappPage: React.FC<Props> = ({ searchParams }) => {
  const _idString = searchParams?._id as string;

  const [singleDapp, setSingleDapp] = useState<Dapp | null>(null); //single item
  const [adapps, setAdapps] = useState<Dapp[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDapps = async () => {
      try {
        const response = await fetch(
          "https://api.bbafrica.co/api/dappstore-info"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const DappData = await response.json();
        const sortedDapps = DappData.data.sort((a: Dapp, b: Dapp) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB.getTime() - dateA.getTime();
        });
        console.log(sortedDapps);

        setAdapps(sortedDapps.slice(0, 5));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchDapps();
  }, []);

  useEffect(() => {
    const fetchDapps = async () => {
      try {
        if (_idString) {
          const fetchedDapps = await getSingleDapps(_idString);
          console.log("fetchedDapps", fetchedDapps);

          setSingleDapp(fetchedDapps);

          console.log("Single Dapps", singleDapp);
        }
      } catch (err) {
        setError("Failed to fetch news");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDapps();
  }, [_idString]);

  useEffect(() => {
    console.log("Single Dapps", singleDapp);
  }, [singleDapp]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleShare = async () => {
    const articleUrl = `https://www.bbafrica.co/dappstore/dapp?_id=${
      singleDapp?._id || ""
    }`;
    const articleTitle = singleDapp?.description || "Check out this article!";

    // Check if the Web Share API is available
    if (navigator.share) {
      try {
        await navigator.share({
          title: articleTitle,
          url: articleUrl,
        });
        console.log("Article shared successfully!");
      } catch (error) {
        console.error("Error sharing the article:", error);
      }
    } else {
      // Fallback for browsers that do not support the Web Share API
      console.log("Web Share API is not supported in this browser.");
      // Optionally, implement a fallback here, such as copying the link to the clipboard
    }
  };

  return (
    <div className="flex flex-col">
      <Banner />
      <Header />
      <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
      <MarketRow />
      <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
      {singleDapp ? (
        <React.Fragment>
          <div className="p-5 md:hidden lg:hidden flex flex-col gap-3">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="w-full h-[280px]"
            >
              <Image
                src={singleDapp.image}
                alt={singleDapp.name}
                className="w-full h-full"
                width={350}
                height={280}
              />
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="mt-2"
            >
              <div className="mt-2">
                <p className="text-base md:text-xl">
                  <span className="text-[#AA0099]">{singleDapp?.name}:</span>{" "}
                  {singleDapp?.about}{" "}
                </p>
                <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                  <p>{moment(singleDapp.createdAt).format("MMM D, YYYY")}</p>
                  <p>Author : {singleDapp?.author}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </React.Fragment>
      ) : null} 

      <div id="content" className="p-5">
        <div className="w-full md:w-[70%]  flex flex-row items-center gap-6 h-[50px]  border-t border-b dark:border-[#A5A5A5] border-[#818181]">
          <span className="text-xs">Dapp Links</span>
          <span>|</span>
          
          <a href={singleDapp?.website}>
          <Image src={Website} alt="website" />
          </a>

          <a href={singleDapp?.telegram}>
          <Image src={Telegram} alt="telegram" />
          </a>
          <a href={singleDapp?.twitter}>
            <Image src={Twitter} alt="twitter" />
          </a>

          <button onClick={handleShare} aria-label="Share article">
            <Image src={Share} alt="share" />
          </button>
        </div>

        <motion.article
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="py-5 lg:pr-80 
  dark:text-white text-black mt-10 mb-10 flex flex-col"
        >
          <div
            className="
            dark:text-white text-black"
            dangerouslySetInnerHTML={{ __html: singleDapp?.description || "" }}
          />
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

      <Footer />
    </div>
  );
};

export default DappPage;
