import Link from "next/link";
import { motion } from "framer-motion";
import Loader from "./Loader";
import React from "react";

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
  latestDapp?: Dapp;
};

const DappHero = ({ latestDapp }: Props) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Format the date for display
  const formattedDate = latestDapp
    ? new Date(latestDapp.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
  return (
    <Link
      href={{ pathname: "/dappstore/dapp", query: { _id: latestDapp?._id } }}
      className="p-5 md:hidden lg:hidden flex flex-col gap-3"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full h-[280px]"
      >
        {latestDapp?.image ? (
          <img
            src={latestDapp?.image}
            width={350}
            height={280}
            alt="dapp image"
            className="h-full w-full"
          />
        ) : (
          <Loader />
        )}
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mt-2"
      >
        <div className="mt-2">
          <p className="text-base md:text-xl">
            <span className="text-[#AA0099]">{latestDapp?.name}:</span>{" "}
            {latestDapp?.about}{" "}
          </p>
          <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
            <p>{formattedDate}</p>
            {latestDapp?.author?  <p>Author: {latestDapp?.author}</p> : null}
          
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default DappHero;
