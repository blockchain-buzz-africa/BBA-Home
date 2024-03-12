import Image from "next/image";
import React from "react";
import AdImage from "./../public/adImage.jpeg";
import { motion } from "framer-motion";
import Homee from "./../public/home.png";
import FeaturedImage from "./../public/featuredImg.jpeg";
import Blue from "./../public/blue.jpeg";
import Link from "next/link";

type Props = {};

const DeskHero = (props: Props) => {
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
        className="w-full mb-10 hidden h-[692px] py-10 px-5 md:flex flex-row gap-4 "
      >
        <div className=" w-[20%] hidden lg:flex flex-col gap-1">
          <span className=" text-xs">Ad</span>
          <Image src={AdImage} alt="image" className=" w-[290px] h-[170px]" />
          <span className=" text-xl mt-2">
            Will the bull run spur jobs in the web3 market?
          </span>
          <p className="text-sm text-[#6A6A6A] dark:text-[#b2aeae] ">
            Chainlink is a clear leader in the oracle market and adjoining
            verticals, but apart from its price data solutions, demand has been
            lackluster. To overcome this, the project is making changes to its
            operational model, together with betting on material adoption by
            financial institutions.
          </p>
          <p className="text-xs text-[#6A6A6A] dark:text-[#b2aeae] ">
            by <span className="text-[#AA0099]">web3 recruiter</span>/ 5 DAYS
            AGO
          </p>
        </div>
        <Link href={'/article'} className="lg:w-[44%] md:w-[58%] flex flex-col gap-1">
          <span className=" text-xs">Featured</span>
          <Image
            src={FeaturedImage}
            alt="image"
            className=" w-[686px] h-[386px]"
          />
          <span className=" text-xl mt-2">
            Women-led communities pushing the bitcoin agenda in Africa.{" "}
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
      <div className="mb-10 md:w-[85%] lg:w-[80%] hidden md:flex flex-col mt-10 py-5 mx-auto px-4">
        <span className="font-semibold text-xl">News & Articles</span>
        <p className="text-xs mt-4">
          Watch podcasts, conversations, tutorials and special features.
        </p>
        <div className="mt-6 h-[80%]  w-full grid md:grid-cols-2 lg:grid-cols-3  gap-6">
          <Link href={"/article"}>
            <div className="w-full h-[280px]">
              <Image src={Homee} alt="home" className="w-[344px] h-[269px]" />
            </div>

            <div className="mt-2">
              <span className="text-xl">
                Africa gearing up for the second edition of the AMAS 2023
              </span>
              <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                <p>Sep 29 2023</p>
                <p>Author : Michael Loupa</p>
              </div>
            </div>
          </Link>
          <Link href={"/article"}>
            <div className="w-full h-[280px]">
              <Image src={Homee} alt="home" className="w-[344px] h-[269px]" />
            </div>

            <div className="mt-2">
              <span className="text-xl">
                Africa gearing up for the second edition of the AMAS 2023
              </span>
              <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                <p>Sep 29 2023</p>
                <p>Author : Michael Loupa</p>
              </div>
            </div>
          </Link>
          <Link href={"/article"}>
            <div className="w-full h-[280px]">
              <Image src={Homee} alt="home" className="w-[344px] h-[269px]" />
            </div>

            <div className="mt-2">
              <span className="text-xl">
                Africa gearing up for the second edition of the AMAS 2023
              </span>
              <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                <p>Sep 29 2023</p>
                <p>Author : Michael Loupa</p>
              </div>
            </div>
          </Link>
          <Link href={"/article"}>
            <div className="w-full h-[280px]">
              <Image src={Homee} alt="home" className="w-[344px] h-[269px]" />
            </div>

            <div className="mt-2">
              <span className="text-xl">
                Africa gearing up for the second edition of the AMAS 2023
              </span>
              <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                <p>Sep 29 2023</p>
                <p>Author : Michael Loupa</p>
              </div>
            </div>
          </Link>
          <Link href={"/article"}>
            <div className="w-full h-[280px]">
              <Image src={Homee} alt="home" className="w-[344px] h-[269px]" />
            </div>

            <div className="mt-2">
              <span className="text-xl">
                Africa gearing up for the second edition of the AMAS 2023
              </span>
              <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                <p>Sep 29 2023</p>
                <p>Author : Michael Loupa</p>
              </div>
            </div>
          </Link>
          <Link href={"/article"}>
            <div className="w-full h-[280px]">
              <Image src={Homee} alt="home" className="w-[344px] h-[269px]" />
            </div>

            <div className="mt-2">
              <span className="text-xl">
                Africa gearing up for the second edition of the AMAS 2023
              </span>
              <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                <p>Sep 29 2023</p>
                <p>Author : Michael Loupa</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="mb-10 md:w-[85%] lg:w-[80%] hidden md:flex flex-col p-5 mx-auto px-4">
        <span className="font-semibold text-xl">Videos</span>
        <p className="text-xs mt-4">
          Watch podcasts, conversations, tutorials and special features.
        </p>
        <div className="mt-6 h-[80%]  w-full grid md:grid-cols-2 lg:grid-cols-3  gap-6">
          <Link href={"/article"}>
            <div className="w-full h-[280px]">
              <Image src={Homee} alt="home" className="w-[344px] h-[269px]" />
            </div>

            <div className="mt-2">
              <span className="text-xl">
                Africa gearing up for the second edition of the AMAS 2023
              </span>
              <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                <p>Sep 29 2023</p>
                <p>Author : Michael Loupa</p>
              </div>
            </div>
          </Link>
          <Link href={"/article"}>
            <div className="w-full h-[280px]">
              <Image src={Homee} alt="home" className="w-[344px] h-[269px]" />
            </div>

            <div className="mt-2">
              <span className="text-xl">
                Africa gearing up for the second edition of the AMAS 2023
              </span>
              <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                <p>Sep 29 2023</p>
                <p>Author : Michael Loupa</p>
              </div>
            </div>
          </Link>
          <Link href={"/article"}>
            <div className="w-full h-[280px]">
              <Image src={Homee} alt="home" className="w-[344px] h-[269px]" />
            </div>

            <div className="mt-2">
              <span className="text-xl">
                Africa gearing up for the second edition of the AMAS 2023
              </span>
              <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                <p>Sep 29 2023</p>
                <p>Author : Michael Loupa</p>
              </div>
            </div>
          </Link>
          <Link href={"/article"}>
            <div className="w-full h-[280px]">
              <Image src={Homee} alt="home" className="w-[344px] h-[269px]" />
            </div>

            <div className="mt-2">
              <span className="text-xl">
                Africa gearing up for the second edition of the AMAS 2023
              </span>
              <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                <p>Sep 29 2023</p>
                <p>Author : Michael Loupa</p>
              </div>
            </div>
          </Link>
          <Link href={"/article"}>
            <div className="w-full h-[280px]">
              <Image src={Homee} alt="home" className="w-[344px] h-[269px]" />
            </div>

            <div className="mt-2">
              <span className="text-xl">
                Africa gearing up for the second edition of the AMAS 2023
              </span>
              <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                <p>Sep 29 2023</p>
                <p>Author : Michael Loupa</p>
              </div>
            </div>
          </Link>
          <Link href={"/article"}>
            <div className="w-full h-[280px]">
              <Image src={Homee} alt="home" className="w-[344px] h-[269px]" />
            </div>

            <div className="mt-2">
              <span className="text-xl">
                Africa gearing up for the second edition of the AMAS 2023
              </span>
              <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                <p>Sep 29 2023</p>
                <p>Author : Michael Loupa</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DeskHero;
