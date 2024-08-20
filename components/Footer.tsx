import Image from "next/image";
import React from "react";
import FancyTwitter from "./../public/fancyTwitter.svg"
import FancyTelegram from "./../public/fancyTelegram.svg"
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      {/*mobile*/}
      <div className="w-full lg:hidden flex flex-col h-[479px]">
        <div className="w-full flex text-white flex-col gap-4 h-[229px] sm:p-2 p-7 bg-gradient-to-tr from-[#AA0099] to-[#163159]">
          <span className="uppercase text-xs font-light">Publisher</span>
          <span className="text-base">BBA Publisher</span>
          <p className="text-xs">
            Subscribe to BBA and get insights straight to your Whatsapp.
          </p>

          <div className="w-full text-xs h-[34px] relative">
            
          <Link href={"https://whatsapp.com/channel/0029Va6z0Ev4tRrxg8Xj300u"}>
            <button className="w-[300] h-[34px] bg-[#163159] text-xs uppercase absolute top-0 left-0 flex justify-center items-center p-2">
              subscribe
            </button>
          </Link>
          </div>
        </div>
        <div className="w-full h-[1px] bg-transparent"></div>

        <div className="w-full h-[249px] text-white flex flex-row sm:p-2 p-7 bg-gradient-to-r from-[#AA0099] to-[#163159] ">
          <div className="w-1/2 h-full flex flex-col gap-2">
            <span className="uppercase font-semibold text-xs">Sections</span>
            <Link href={"https://www.bbafrica.media/"}>
              <span className="uppercase  text-sm">Media</span>
              </Link>
            <Link href={"https://www.bbafrica.media/markets"}>
              <span className="uppercase  text-sm">Markets</span>
            </Link>
            {/* <span className="uppercase  text-sm">Podcasts</span>
            <span className="uppercase  text-sm">Learn</span> */}
            <Link href={"https://www.bbafrica.media/dappstore"}>
              <span className="uppercase  text-sm">DAPP STORE</span>
            </Link>
          </div>
          <div className="w-1/2 h-full flex flex-col gap-2">
            {/* <span className="uppercase font-semibold text-xs">Company</span>
            <span className="uppercase  text-sm">About</span>
            <span className="uppercase  text-sm">Advertise</span>
            <span className="uppercase  text-sm">Privacy Policy</span>
            <span className="uppercase  text-sm">Contact Us</span> */}
          </div>
        </div>
      </div>

      {/*Desktop*/}
      <div className="w-full hidden  lg:flex flex-col h-[479px]">
      <div className="w-full flex text-white flex-col gap-4 h-[229px] p-10 bg-gradient-to-tr from-[#AA0099] to-[#163159]">
  {/* <span className="uppercase text-xs font-light">Publisher</span> */}
  <span className="text-xl">BBA Publisher</span>
  <p className="text-sm">
    Subscribe to BBA and get insights straight to <br />
    your Whatsapp.
  </p>

  <div className="w-[308px] h-[34px] text-xs relative">
    <Link href={"https://whatsapp.com/channel/0029Va6z0Ev4tRrxg8Xj300u"}>
      <button className="w-[300px] h-[34px] bg-[#163159] text-sm uppercase absolute top-0 left-0 flex justify-center items-center p-2">
        subscribe
      </button>
    </Link>
  </div>
</div>
        <div className="w-full h-[1px] bg-transparent"></div>
        <div className="w-full h-[249px] text-white p-5 bg-gradient-to-r from-[#AA0099] to-[#163159] ">
         <div className="flex flex-row justify-between items-center">
         <div className="w-[40%] flex text-xs flex-row">
            <div className="w-1/2 h-full flex flex-col gap-4">
              <span className="uppercase font-semibold">Sections</span>
              <Link href={"https://www.bbafrica.media/"}>
              <span className="uppercase  text-sm">Media</span>
              </Link>
              <Link href={"https://www.bbafrica.media/markets"}>
              <span className="uppercase  text-sm">Markets</span>
              </Link>
              {/* <span className="uppercase  text-sm">Learn</span> */}
              <Link href={"https://www.bbafrica.media/dappstore"}>
              <span className="uppercase  text-sm">DAPP STORE</span>
              </Link>
            </div>
            {/* <div className="w-1/2 h-full flex flex-col gap-4">
              <span className="uppercase font-semibold">Company</span>
              <span className="uppercase  text-sm">About</span>
              <span className="uppercase  text-sm">Advertise</span>
              <span className="uppercase  text-sm">Privacy Policy</span>
              <span className="uppercase  text-sm">Contact Us</span>
            </div> */}

          
          </div>

          <div className="w-[40%] text-xs hidden lg:flex flex-col gap-4">
              <span className="font-semibold">About</span>
              <p>
                Blockchain Buzz Africa is a media company working towards
                blockchain adoption by providing insightful content for readers,
                viewers and commentators.{" "}
              </p>
              <p>
                Our Learning programs help our community gain an understanding
                of the industry, choose career paths and acquire skills on the
                same.
              </p>
              <p>Connect with us on social media</p>
              <div className="flex flex-row gap-4">
                <Link href={"https://twitter.com/bba_Africa"}>
                <Image src={FancyTwitter} alt="fancyTwitter" />
                </Link>
                <Link href={""}>
                <Image src={FancyTelegram} alt="fancyTelegram" />
                </Link>
                
              </div>
            </div>
         </div>

        </div>
      </div>
    </>
  );
};

export default Footer;


