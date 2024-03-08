import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full flex flex-col h-[479px]">
      <div className="w-full flex text-white flex-col gap-4 h-[229px] p-10 bg-gradient-to-tr from-[#AA0099] to-[#163159]">
        <span className="uppercase text-xs font-light">Publisher</span>
        <span className="text-xl">BBA Publisher</span>
        <p className="text-sm">
          Subscribe to BBA and get insights straight to your Whatsapp number.
        </p>

        <div className="w-full h-[34px] relative">
          <input type="tel" placeholder="whatsapp number" className="w-[70%] text-black h-[34px] absolute top-0 left-0 text-sm p-2" />  
          <button className="w-[30%] h-[34px] bg-[#163159] text-sm uppercase absolute top-0 right-0 flex justify-center items-center p-2">subscribe</button>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white"></div>

      <div className="w-full h-[249px] text-white flex flex-row p-10 bg-gradient-to-r from-[#AA0099] to-[#163159] ">
        <div className="w-1/2 h-full flex flex-col gap-4">
            <span className="uppercase font-semibold text-sm">Sections</span>
            <span className="uppercase  text-sm">News</span>
            <span className="uppercase  text-sm">Podcasts</span>
            <span className="uppercase  text-sm">Learn</span>
            <span className="uppercase  text-sm">DAPP STORE</span>

        </div>
        <div className="w-1/2 h-full flex flex-col gap-4">
        <span className="uppercase font-semibold text-sm">Company</span>
            <span className="uppercase  text-sm">About</span>
            <span className="uppercase  text-sm">Advertise</span>
            <span className="uppercase  text-sm">Privacy Policy</span>
            <span className="uppercase  text-sm">Contact Us</span>

        </div>
      </div>
    </div>
  );
};

export default Footer;
