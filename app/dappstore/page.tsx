import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MarketRow from "@/components/MarketRow";
import Link from "next/link";
import Womans from "./../../public/womans.png";
import Ad from "./../../public/ad.svg";
import Filter from "./../../public/filter.svg";
import Halofi from "./../../public/halofi.jpeg";
import React from "react";
import Image from "next/image";

type Props = {};

const page = (props: Props) => {
  
  return (
    <>
      <Banner />
      <Header />
      <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
      <MarketRow />
      <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
      <div className=" p-5 md:hidden lg:hidden flex flex-col gap-3">
        <Link href={'/article'} className="flex flex-col gap-3">
          <div className="w-full h-[280px]">
            <Image src={Womans} alt="woman" className="w-full h-full" />
          </div>

          <div className="mt-2">
            <p className="text-base md:text-xl">
              <span className="text-[#AA0099]">SWYPT:</span> Bridging fiat and
              crypto using defi technologies.{" "}
            </p>
            <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
              <p>Sep 29 2023</p>
              <p>Author : Michael Loupa</p>
            </div>
          </div>
        </Link>

        <div className=" md:hidden lg:hidden mb-10 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-[#AA0099]">DAPP STORE</span>
            <Image src={Filter} alt="filter" />
          </div>
          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>

          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>

          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>

          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
          <div className="w-full sm:h-[104px] h-[84px] flex flex-row items-center">
            <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
              <Image
                src={Halofi}
                alt="halofi"
                className="w-full h-full rounded-lg"
              />
            </div>

            <div className="w-[66%] h-[80px] flex flex-col gap-1 sm:gap-[2px]">
              <div className="flex flex-row justify-start items-center gap-2 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">
                  Halofi
                </span>
                <Image src={Ad} className="w-6 h-6" alt="ad" />
              </div>
              <div className="flex flex-col gap-1 sm:text-xs">
                <p>Bridging crypto and fiat using defi & mobile money.</p>
                <div className=" text-xs font-light flex flex-row gap-2">
                  <span>#defi</span>
                  <span>#fintech</span>
                  <span>#dex</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-7 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
        </div>
      </div>
      <div className="w-full flex text-white flex-col gap-4 h-[219px] sm:p-2 p-7 bg-gradient-to-tr from-[#AA0099] to-[#163159]">
        <span className="uppercase text-xs font-light">DAPP STORE</span>
        <span className="text-base">SUBMIT YOUR DAPP</span>
        <p className="text-xs">
          Submit your dapp to BBA for visibility. Send email to us below.{" "}
        </p>

        <button className="w-[30%] h-[34px] bg-[#163159] text-xs uppercase  flex justify-center items-center p-2">
          SEND EMAIL
        </button>
      </div>
      <div className="w-full h-[1px] bg-transparent"></div>
      <Footer />
    </>
  );
};

export default page;
