import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface Article {
  _id: string;
  image: string;
  name: string;
  author: string;
  createdAt: string;
  title: string;
}

interface Props {
  fnews: Article[];
}


const FeaturedArticles: React.FC<Props> = ({ fnews }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="md:hidden lg:hidden flex flex-col gap-3">
      <span className="p-5 text-xl text-[#AA0099] uppercase">
        Featured Articles
      </span>
      {fnews && fnews.map((item: Article) => (
        <Link key={item?._id} href={{ pathname: "/article", query: {_id: item?._id } }} className="px-5 flex flex-col gap-3">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full h-[280px]"
          >
            <Image src={item.image} width={450} height={150} alt="article image" objectFit="contain" />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mt-2"
          >
            <span className="text-base md:text-xl">
              {item.title}
            </span>
            <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
              <p>{new Date(item.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}</p>
              <p>Author: {item.author}</p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedArticles;
