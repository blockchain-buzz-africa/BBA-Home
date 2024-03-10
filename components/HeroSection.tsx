import Image from "next/image";
import Homee from "./../public/home.png";
import Link from "next/link";

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <Link href={'/article'} className="p-5 md:hidden lg:hidden flex flex-col gap-3">
        <div className="w-full h-[280px]">
          <Image src={Homee} alt="home" className="w-full h-full" />
        </div>

        <div className="mt-2">
          <span className="text-xl">
            Africa gearing up for the second edition of the AMAS 2023
          </span>
          <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
            <p>Sep 29 2023</p>
            <p>Author : Michael Loupa</p>
          </div>
        </div>
      </Link>
  )
}

export default HeroSection