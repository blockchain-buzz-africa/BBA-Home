import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Loader from "./Loader";

type Article = {
  _id: string;
  image: string;
  name: string;
  author: string;
  title: string;
  createdAt: string;
};

type Props = {
  latestArticle?: Article;
};

const HeroSection = ({ latestArticle }: Props) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Format the date for display
  const formattedDate = latestArticle ? new Date(latestArticle.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }) : '';

  return (
    
    <Link href={{ pathname: "/article", query: {_id: latestArticle?._id } }} className="p-5 md:hidden lg:hidden flex flex-col gap-3">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full h-[280px]"
      >
       
        {latestArticle?.image ? (
          <img src={latestArticle?.image} width={450} height={150} alt="article image" className="h-full w-full" />
        ) : 
          <Loader />
        }
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mt-2"
      >
        <span className="text-base md:text-xl">
          {latestArticle?.title}
        </span>
        <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
          <p>{formattedDate}</p>
          {latestArticle?.author?  <p>By: {latestArticle?.author}</p> : null}
         
        </div>
      </motion.div>
    </Link>
  );
};

export default HeroSection;
