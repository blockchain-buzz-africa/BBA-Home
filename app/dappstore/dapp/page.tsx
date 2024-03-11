import Banner from "@/components/Banner";
import DappHeader from "@/components/DappHeader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MarketRow from "@/components/MarketRow";
import Image from "next/image";
import Twitter from "./../../../public/twitterdark.svg";
import Telegram from "./../../../public/telegramdark.svg";
import Website from "./../../../public/website.svg";
import Share from "./../../../public/sharedark.svg";
import Link from "next/link";
import React from "react";

interface Dapplist {
  id: string;
  name: string;
  description: string;
  about: string;
  website: string;
  twitter: string;
  telegram: string;
  tags: string;
  chain: string;
  image: string;
  category: string;
}

interface Props {
  dapps: Dapplist[];
}

const DappPage: React.FC<Props> = ({ dapps }) => {
  return (
    <div>
      <Banner />
      <Header />
      <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
      <MarketRow />
      <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>

      {/* Dapp Hero Section */}

      <DappHeader dapps={[]} />

      {/* DAPP LINKS */}
      {dapps &&
        dapps.map((item: Dapplist) => (
          <React.Fragment key={item.id}>
            <div className="flex gap-5 justify-between py-3.5 pr-20 pl-6 bg-white border border-solid shadow-sm border-black border-opacity-10 max-w-[390px]">
              <div className="my-auto text-xs text-zinc-800">Dapp Links:</div>
              <div className="flex gap-3 pr-5">
                <Link href={item.website}>
                  {" "}
                  <Image src={Website} alt="Website" />{" "}
                </Link>
                <Link href={item.twitter}>
                  {" "}
                  <Image src={Twitter} alt="Twitter" />{" "}
                </Link>
                <Link href={item.telegram}>
                  {" "}
                  <Image src={Telegram} alt="Telegram" />{" "}
                </Link>
                <Image src={Share} alt="Share" />
              </div>
            </div>

            {/* DAPP ABOUT SECTION */}

            <div className="p-5 text-base leading-7 text-gray-700 max-w-[356px]">
              {item.description}
            </div>
          </React.Fragment>
        ))}

      {/* Submit Your Dapp */}

      <div className="w-full flex text-white flex-col gap-4 h-[229px] p-10 bg-gradient-to-tr from-[#AA0099] to-[#163159]">
        <div>DAPP STORE</div>
        <div className="">SUBMIT YOUR DAPP</div>
        <div className=" text-sm leading-5">
          Submit your dapp to BBA for visibility.
          <br />
          Send email to us below.
        </div>
        <button className="w-[40%] h-[34px] justify-center px-4 py-2.5  text-xs leading-4 text-center uppercase bg-blue-950">
          send email
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default DappPage;
