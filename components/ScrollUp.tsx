"use client";
import Image from "next/image";
import UpArrow from "./../public/upArrow.svg";
import React, { useEffect, useState } from "react";
import WrapperComponent from "./Wrapper";

type Props = {};

const ScrollUp = (props: Props) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const viewportHeight = window.innerHeight;

      // Check if scrolling up and viewport is greater than 75vh
      if (
        lastScrollY > currentScrollY &&
        viewportHeight > window.document.documentElement.clientHeight * 0.98
      ) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

      lastScrollY = currentScrollY; // Update the last scroll position
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <WrapperComponent  eventType='Upscroll Clicked' eventValue='scroll up'>
      {showButton && (

        <button
          className="fixed bottom-5 right-5 bg-gradient-to-b from-[#AA0099] to-[#21262D] w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all "
          onClick={scrollToTop}
        >
          <Image src={UpArrow} className=" w-4 h-4" alt="uparrow" />
        </button>
      )}
      </WrapperComponent>
    </>
  );
};

export default ScrollUp;
