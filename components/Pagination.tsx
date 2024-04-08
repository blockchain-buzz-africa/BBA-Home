"use client"

import React, { useContext } from "react";
import PageSwitch from "./PageSwitch";
import { PerPage } from "./PerPage";
import { CryptoContext } from "@/context/CryptoContext";

const Pagination = () => {
  let { perPage, cryptoData } = useContext<any>(CryptoContext);

  if (cryptoData && cryptoData.length >= perPage) {
    return (
      <div className="flex items-center justify-between flex-col-reverse sm:flex-row mb-5 sm:mb-0">
        <PerPage />
        <PageSwitch />
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
