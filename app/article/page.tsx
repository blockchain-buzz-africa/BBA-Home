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
import moment from "moment";
import { getData, getSingleNews } from "@/helpers";
import RecentDeskArticles from "@/components/RecentDeskArticles";
import Loader from "@/components/Loader";

interface Article {
  _id: string;
  image: string; 
  name: string;
  author: string;
  title: string;
  content: string;
  createdAt: string; // Assuming this is also required
}

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

interface CopyConfirmationModalProps {
  isOpen: boolean;
}

const CopyConfirmationModal: React.FC<CopyConfirmationModalProps> = ({
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-[#484646] p-4 rounded-md">
        <p className="text-black dark:text-white">Link copied to clipboard!</p>
      </div>
    </div>
  );
};

const ArticlePage: React.FC<Props> = ({ searchParams }) => {
  const _idString = searchParams?._id as string;

  const [singleNews, setSingleNews] = useState<Article | null>(null); //single item
  const [anews, setAnews] = useState<Article[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://api.bbafrica.co/api/dapps-news");
        if (!response.ok) {
          throw new Error("Network response was not ok");
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
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        if (_idString) {
          const fetchedNews = await getSingleNews(_idString);

          setSingleNews(fetchedNews);

        }
      } catch (err) {
        setError("Failed to fetch news");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [_idString, singleNews]);

  useEffect(() => {
  }, [singleNews]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const copyArticleLink = () => {
    const articleLink = `https://www.bbafrica.co/article?_id=${
      singleNews?._id || ""
    }`;
    navigator.clipboard.writeText(articleLink).then(
      () => {
        setIsModalOpen(true); // Open the modal on successful copy
        setTimeout(() => setIsModalOpen(false), 2000); // Automatically close the modal after 2 seconds
      },
      () => {
        console.error("Failed to copy link."); // Handle the error case as needed
      }
    );
  };

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString(undefined, options);

    return formattedDate;
  }

  const handleShare = async () => {
    const articleUrl = `https://www.bbafrica.co/article?_id=${
      singleNews?._id || ""
    }`;
    const articleTitle = singleNews?.title || "Check out this article!";

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

  // Approximating lines by character count
  const contentPreviewLimit = 500; // Adjust based on your average character per line * 10 lines
  const showReadMore =
    singleNews?.content && singleNews.content.length > contentPreviewLimit;

  const contentPreview = showReadMore
    ? `${singleNews?.content.slice(0, contentPreviewLimit)}...`
    : singleNews?.content;

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
      {singleNews ? (
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full  hidden h-[692px] py-12 px-5 md:flex flex-row justify-between gap-4 "
          >
            <div className="lg:w-[63%] md:w-[58%] flex flex-col gap-1">
              <span className=" text-xs">Featured</span>
              <Image
                src={singleNews.image}
                alt="image"
                width={686}
                height={386}
                className=" w-[686px] h-[386px]"
              />
              <span className=" text-xl mt-2">{singleNews.title}</span>
              <div
                className="text-sm text-[#6A6A6A] dark:text-[#b2aeae]"
                dangerouslySetInnerHTML={{ __html: contentPreview || "" }}
              />
              <a href="#content" className="text-[#AA0099] text-xs mt-2">
                Read more
              </a>

              <div className="text-xs flex-row gap-4 text-[#6A6A6A] dark:text-[#b2aeae]">
                <span className="uppercase">
                  {" "}
                  <strong>By</strong> {singleNews.author}
                </span>
                <span>
                  <strong> {formatDate(singleNews.createdAt)}</strong>
                </span>
              </div>
            </div>
            <RecentDeskArticles anews={anews} />
          </motion.div>
        </>
      ) : null}

      {/* <DeskArticle /> */}
      {/* <HeroSection />  */}

      {singleNews ? (
        <React.Fragment>
          <div className="p-5 md:hidden lg:hidden flex flex-col gap-3">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="w-full h-[280px]"
            >
              <Image
                src={singleNews.image}
                alt={singleNews.image}
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
              <span className="text-base md:text-xl text-black dark:text-white">
                {singleNews.title}
              </span>

              <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                <p>{moment(singleNews.createdAt).format("MMM D, YYYY")}</p>
                <p> Author: {singleNews.author}</p>
              </div>
            </motion.div>
          </div>
        </React.Fragment>
      ) : null}

      <div id="content" className="p-5">
        <div className="flex flex-col">
          <CopyConfirmationModal isOpen={isModalOpen} />
          {/* The rest of your component */}
        </div>
        <div className=" p-3 w-[95%] md:w-[70%]  flex flex-row items-center gap-4 h-[50px] border dark:border-[#A5A5A5] border-[#818181]">
          <span className="text-xs">Share Piece</span>
          <span>|</span>
          <button onClick={handleShare} aria-label="Share article">
            <Image src={Share} alt="share" />
          </button>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              singleNews?.title || ""
            )}&url=${encodeURIComponent(
              `https://www.bbafrica.co/article?_id=${singleNews?._id || ""}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={Twitter} alt="twitter" />
          </a>

          <button onClick={copyArticleLink} aria-label="Copy link to clipboard">
            <Image src={Chain} alt="chain" />
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
            dangerouslySetInnerHTML={{ __html: singleNews?.content || "" }}
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

      {/* <RecentArticles news={singleNews} /> */}

      <Footer />
    </div>
  );
};

export default ArticlePage;
