"use client"; 
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";

// create context object
export const CryptoContext = createContext<any>({});

// create the provider component
export const CryptoProvider = ({ children }: { children: React.ReactNode }) => {
  const [cryptoData, setCryptoData] = useState<any>([]);
  const [searchData, setSearchData] = useState<any>([]);
  const [coinData, setCoinData] = useState<any>([]);
  const [coinSearch, setCoinSearch] = useState<string>("");
  const [currency, setCurrency] = useState<string>("usd");
  const [sortBy, setSortBy] = useState<string>("market_cap_desc");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(250);
  const [perPage, setPerPage] = useState<number>(10);
  const [error, setError] = useState<any>([]);

  const getCryptoData = async () => {
    setError(null);
    //setCryptoData(null);

    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      ).then(async (res) => {
        if (res.ok) {
          return res.json();
        }
        const errorResponse = await res.json();
        setError(errorResponse.error);
        throw new Error(errorResponse.error);
      });

      if(data) {
      setCryptoData(data);

      }

    } catch (error: any) {
      setError(error.message);
    }
  };

  const getCoinData = async (coinid: string) => {
    setCoinData(null);

    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`
      ).then((res) => res.json());

      setCoinData(data);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const getSearchResult = async (query: string) => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      ).then((res) => res.json());

      setSearchData(data.coins);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const resetFunction = () => {
    setPage(1);
    setCoinSearch("");
  };

  useEffect(() => {
    getCryptoData();
  }, [cryptoData, searchData, coinSearch, currency, sortBy, page, perPage]);

  

  return (
    <CryptoContext.Provider
      value={{
        cryptoData,
        searchData,
        getSearchResult,
        setCoinSearch,
        setSearchData,
        currency,
        setCurrency,
        sortBy,
        setSortBy,
        page,
        setPage,
        totalPages,
        resetFunction,
        setPerPage,
        perPage,
        getCoinData,
        coinData,
        error,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};