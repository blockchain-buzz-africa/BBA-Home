import Image from "next/image";
import { motion } from "framer-motion";
import FBImage from "./../public/fbImage.png";
import Blue from "./../public/blue.jpeg";
import React from "react";
import Link from "next/link";

type Props = {};

const DeskArticle = (props: Props) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full mb-10 hidden h-[692px] py-10 px-5 md:flex flex-row justify-between gap-4 "
      >
        <Link href={'/article'} className="lg:w-[63%] md:w-[58%] flex flex-col gap-1">
          <span className=" text-xs">Featured</span>
          <Image src={FBImage} alt="image" className=" w-[686px] h-[386px]" />
          <span className=" text-xl mt-2">
            FTX bankruptcy advisors hand over customer trading data to FBI:
            Court docs{" "}
          </span>
          <p className="text-sm text-[#6A6A6A] dark:text-[#b2aeae]">
            In billing records filed back in September, the Philadelphia FBI
            sent over a Grand Jury subpoena looking to “investigate activity
            related to specific individuals” In billing records filed back in
            September, the Philadelphia FBI sent over a Grand Jury subpoena
            looking to “investigate activity related to specific individuals” In
            billing records filed back in September, the Philadelphia FBI sent
            over a Grand Jury subpoena looking to “investigate activity related
            to specific individuals”
          </p>
          <p className="text-[#AA0099] text-xs mt-2">Read more</p>

          <div className="text-xs flex-row gap-4 text-[#6A6A6A] dark:text-[#b2aeae]">
            <span className="uppercase">
              {" "}
              <strong>By</strong> MICHAEL LOUPA
            </span>
            <span>
              <strong> November 3, 2023</strong>
            </span>
          </div>
        </Link>
        <div className="lg:w-[34%] md:w-[42%] py-3 overflow-hidden flex flex-col gap-3">
          <span className="text-xl text-[#AA0099] uppercase">
            Recent Articles
          </span>

          <Link href={'/article'} className="w-full h-[84px] flex flex-row">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image src={Blue} alt="" className="w-full h-full rounded-lg" />
            </div>

            <div className="w-[70%] h-[70px] flex flex-col gap-1">
              <div className="flex flex-row justify-start gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  News
                </span>
                <span className="dark:text-[#A5A5A5]  text-[#424242]">
                  By Defi Dave
                </span>
                <span className="dark:text-[#A5A5A5]  text-[#424242]">
                  June 21 2023
                </span>
              </div>
              <div className="text-xs ">
                <p>
                  A CBDC is &#39;Not a Compelling Priority in the Short to
                  Medium Term,&#39; Says the Central Bank of Kenya
                </p>
              </div>
            </div>
          </Link>
          <div className="mt-1 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
         <Link href={'/article'} className="w-full h-[84px] flex flex-row">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image src={Blue} alt="" className="w-full h-full rounded-lg" />
            </div>

            <div className="w-[70%] h-[70px] flex flex-col gap-1">
              <div className="flex flex-row justify-start gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  News
                </span>
                <span className="dark:text-[#A5A5A5]  text-[#424242]">
                  By Defi Dave
                </span>
                <span className="dark:text-[#A5A5A5]  text-[#424242]">
                  June 21 2023
                </span>
              </div>
              <div className="text-xs ">
                <p>
                  A CBDC is &#39;Not a Compelling Priority in the Short to
                  Medium Term,&#39; Says the Central Bank of Kenya
                </p>
              </div>
            </div>
          </Link>
          <div className="mt-1 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
         <Link href={'/article'} className="w-full h-[84px] flex flex-row">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image src={Blue} alt="" className="w-full h-full rounded-lg" />
            </div>

            <div className="w-[70%] h-[70px] flex flex-col gap-1">
              <div className="flex flex-row justify-start gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  News
                </span>
                <span className="dark:text-[#A5A5A5]  text-[#424242]">
                  By Defi Dave
                </span>
                <span className="dark:text-[#A5A5A5]  text-[#424242]">
                  June 21 2023
                </span>
              </div>
              <div className="text-xs ">
                <p>
                  A CBDC is &#39;Not a Compelling Priority in the Short to
                  Medium Term,&#39; Says the Central Bank of Kenya
                </p>
              </div>
            </div>
          </Link>
          <div className="mt-1 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
         <Link href={'/article'} className="w-full h-[84px] flex flex-row">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image src={Blue} alt="" className="w-full h-full rounded-lg" />
            </div>

            <div className="w-[70%] h-[70px] flex flex-col gap-1">
              <div className="flex flex-row justify-start gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  News
                </span>
                <span className="dark:text-[#A5A5A5]  text-[#424242]">
                  By Defi Dave
                </span>
                <span className="dark:text-[#A5A5A5]  text-[#424242]">
                  June 21 2023
                </span>
              </div>
              <div className="text-xs ">
                <p>
                  A CBDC is &#39;Not a Compelling Priority in the Short to
                  Medium Term,&#39; Says the Central Bank of Kenya
                </p>
              </div>
            </div>
          </Link>
          <div className="mt-1 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
         <Link href={'/article'} className="w-full h-[84px] flex flex-row">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image src={Blue} alt="" className="w-full h-full rounded-lg" />
            </div>

            <div className="w-[70%] h-[70px] flex flex-col gap-1">
              <div className="flex flex-row justify-start gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  News
                </span>
                <span className="dark:text-[#A5A5A5]  text-[#424242]">
                  By Defi Dave
                </span>
                <span className="dark:text-[#A5A5A5]  text-[#424242]">
                  June 21 2023
                </span>
              </div>
              <div className="text-xs ">
                <p>
                  A CBDC is &#39;Not a Compelling Priority in the Short to
                  Medium Term,&#39; Says the Central Bank of Kenya
                </p>
              </div>
            </div>
          </Link>
          <div className="mt-1 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
        </div>
      </motion.div>
    </>
  );
};

export default DeskArticle;
