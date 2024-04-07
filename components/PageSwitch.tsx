"use client"

import React, { useContext } from "react";
import paginationArrow from "./../public/pagination-arrow.svg";
import { CryptoContext } from "@/context/CryptoContext";
import Image from "next/image";

const PageSwitch = () => {
  let { page, setPage, totalPages, perPage } = useContext<any>(CryptoContext);
  const totalNumber: number = Math.ceil(totalPages / perPage);

  const next = () => {
    if (page === totalNumber) {
      return null;
    } else {
      setPage(page + 1);
    }
  };

  const prev = () => {
    if (page === 1) {
      return null;
    } else {
      setPage(page - 1);
    }
  };

  const multiStepNext = () => {
    if (page + 3 >= totalNumber) {
      setPage(totalNumber - 1);
    } else {
      setPage(page + 3);
    }
  };

  const multiStepPrev = () => {
    if (page - 3 <= 1) {
      setPage(totalNumber + 1);
    } else {
      setPage(page - 2);
    }
  };
  return (
    <ul className="flex items-center text-sm my-4 text-black dark:text-white sm:my-0">
      <li className="flex items-center">
        <button className="outline-0 hover:text-[#AA0099] w-8" onClick={prev}>
          <Image
            className="w-full h-auto rotate-180"
            src={paginationArrow}
            alt="left"
          />
        </button>
      </li>

      {page + 1 === totalNumber || page === totalNumber ? (
        <li>
          {" "}
          <button
            onClick={multiStepPrev}
            className="ouline-0 hover:text-[#AA0099] text-black dark:text-white rounded-full w-8 h-8 flex items-center justify-center text-lg    "
          >
            ...
          </button>
        </li>
      ) : null}

      {page - 1 !== 0 ? (
        <li>
          <button
            onClick={prev}
            className="ouline-0 hover:text-[#AA0099]  rounded-full w-8 h-8 flex items-center justify-center text-black dark:text-white bg-[#e6e7ea] dark:bg-[#282c34] mx-1.5"
          >
            {" "}
            {page - 1}{" "}
          </button>
        </li>
      ) : null}
      <li>
        <button
          disabled
          className="ouline-0  rounded-full w-8 p-2 h-8 flex items-center justify-center bg-[#AA0099] text-gray-300 mx-1.5"
        >
          {page}
        </button>
      </li>

      {page + 1 !== totalNumber && page !== totalNumber ? (
        <li>
          <button
            onClick={next}
            className="ouline-0 hover:text-[#AA0099]  rounded-full w-8 h-8 flex items-center justify-center text-black dark:text-white bg-[#e6e7ea] dark:bg-[#282c34] mx-1.5"
          >
            {page + 1}
          </button>
        </li>
      ) : null}

      {page + 1 !== totalNumber && page !== totalNumber ? (
        <li>
          {" "}
          <button
            onClick={multiStepNext}
            className="ouline-0 hover:text-[#AA0099]  rounded-full w-8 h-8 flex items-center justify-center text-lg    "
          >
            ...
          </button>
        </li>
      ) : null}

      {page !== totalNumber ? (
        <li>
          <button
            onClick={() => setPage(totalNumber)}
            className="ouline-0 hover:text-[#AA0099]  rounded-full w-fit p-1 h-8 flex items-center justify-center text-black dark:text-white bg-[#e6e7ea] dark:bg-[#282c34] mx-1.5"
          >
            {totalNumber}
          </button>
        </li>
      ) : null}
      <li>
        <button className="outline-0 hover:text-[#AA0099] w-8" onClick={next}>
          <Image className="w-full h-auto" src={paginationArrow} alt="right" />
        </button>
      </li>
    </ul>
  );
};

export default PageSwitch;
