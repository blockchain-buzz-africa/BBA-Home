import Image from "next/image";
import Homee from "./../public/home.png";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const HeroSection = (props: Props) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Link
      href={"/article"}
      className="p-5 md:hidden lg:hidden flex flex-col gap-3"
    >
      <motion.div
       initial="hidden"
       animate="visible"
       variants={containerVariants}
      className="w-full h-[280px]">
        <Image src={Homee} alt="home" className="w-full h-full" />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mt-2"
      >
        <span className="text-base md:text-xl">
          Africa gearing up for the second edition of the AMAS 2023
        </span>
        <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
          <p>Sep 29 2023</p>
          <p>Author : Michael Loupa</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default HeroSection;
