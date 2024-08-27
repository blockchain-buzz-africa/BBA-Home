"use client"

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

type Props = {};

const Banner: React.FC<Props> = (props) => {
  const calculateTimeLeft = () => {
    const difference = +new Date('09/08/2024') - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (typeof window !== "undefined") {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  return (
    <>
    <Link href={'https://ethsafari.xyz/'}>

    <div className="w-full md:hidden flex justify-center items-center h-[46px] bg-gradient-to-r from-[#AA0099] to-[#21262D]">
      <p className="text-white text-xs">
        ETHSAFARI 24: {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} <br /> minutes {timeLeft.seconds} seconds remaining
      </p>
    </div>

    <div className="w-full hidden md:flex justify-center items-center h-[46px] bg-gradient-to-r from-[#AA0099] to-[#21262D]">
      <p className="text-white">
      ETHSAFARI 24: {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds remaining
      </p>
    </div>

    </Link>
    
    </>
 
  );
};

export default Banner;
