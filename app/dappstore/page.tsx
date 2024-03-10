import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarketRow from "@/components/MarketRow";
import FeaturedDapp from "@/components/FeaturedDapp";
import Image from "next/image";
import Filter from "./../../public/filter.svg"
import Dapp from "@/components/Dapp";


type Props = {};

const page = (props: Props) => {
    return (

        <div>
            <Banner />
            <Header />
            <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
            <MarketRow />
            <div className="w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>

            {/* Dapp Hero Section */}

            <FeaturedDapp />
            {/* Title */}

            <div className="p-5 flex justify-between items-center">
                <span className=" font-extrabold text-fuchsia-700 uppercase"> DAPP STORE</span>
                <Image src={Filter} alt="filter dapps" />

            </div>

            {/* DAPP LIST */}

            <Dapp />
                    
            
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

    )
}

export default page;