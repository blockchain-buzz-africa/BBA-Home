import Banner from "@/components/Banner";
import Filters from "@/components/Filter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import TableComponent from "@/components/TableComponent";
import React from "react";

const MarketPage = () => {
  return (
    <>
    {/* <Banner /> */}
      <Header />
    <main
      className="w-full flex flex-col first-letter:
    content-center items-center relative text-white overflow-x-hidden"
    >
      <div className="w-screen -z-10 absolute top-0 bottom-0 right-0 left-0 overflow-x-hidden"></div>
      <Navigation />

      <section className="w-11/12 sm:w-[80%] h-full flex flex-col mt-16 mb-10 sm:mb-24 relative">
        <Filters />
        <TableComponent />
      </section>
    </main>
    <Footer />
    </>
  );
};

export default MarketPage;
