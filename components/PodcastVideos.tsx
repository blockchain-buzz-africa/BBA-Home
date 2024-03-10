import Image from "next/image";
import Homee from "./../public/home.png";
import Audio from "./../public/audio.svg";

type Props = {};

const PodcastVideos = (props: Props) => {
  return (
    <div className="p-5 md:hidden lg:hidden flex flex-col gap-3">
      <span className="text-xl text-[#AA0099] uppercase">Podcasts: VIDEOS</span>

           <div className="w-full h-[280px] mt-3 relative">
        <Image src={Homee} alt="home" className="w-full h-[280px] absolute top-0 left-0 bottom-0 right-0" />
        <div className="w-full h-[48px] bg-[#AA0099] flex absolute bottom-0 ">
          <div className="flex flex-col w-[70%] gap-1 text-sm p-1">
            <span className="uppercase text-white font-semibold">Automation in defi: part 1</span>
            <span className=" text-white text-xs">Twitter space episode 6</span>

          </div>
          <div className="p-2 flex  w-[30%] justify-center items-center">
            <Image src={Audio} alt="audio" />
          </div>
        </div>
      </div>

           <div className="w-full h-[280px] mt-3 relative">
        <Image src={Homee} alt="home" className="w-full h-[280px] absolute top-0 left-0 bottom-0 right-0" />
        <div className="w-full h-[48px] bg-[#AA0099] flex absolute bottom-0 ">
          <div className="flex flex-col w-[70%] gap-1 text-sm p-1">
            <span className="uppercase text-white font-semibold">Automation in defi: part 1</span>
            <span className=" text-white text-xs">Twitter space episode 6</span>

          </div>
          <div className="p-2 flex  w-[30%] justify-center items-center">
            <Image src={Audio} alt="audio" />
          </div>
        </div>
      </div>

      <div className="w-full h-[280px] mt-3 relative">
        <Image src={Homee} alt="home" className="w-full h-[280px] absolute top-0 left-0 bottom-0 right-0" />
        <div className="w-full h-[48px] bg-[#AA0099] flex absolute bottom-0 ">
          <div className="flex flex-col w-[70%] gap-1 text-sm p-1">
            <span className="uppercase text-white font-semibold">Automation in defi: part 1</span>
            <span className=" text-white text-xs">Twitter space episode 6</span>

          </div>
          <div className="p-2 flex  w-[30%] justify-center items-center">
            <Image src={Audio} alt="audio" />
          </div>
        </div>
      </div>

  
      <div className="w-full h-[280px] mt-3 relative">
        <Image src={Homee} alt="home" className="w-full h-[280px] absolute top-0 left-0 bottom-0 right-0" />
        <div className="w-full h-[48px] bg-[#AA0099] flex absolute bottom-0 ">
          <div className="flex flex-col w-[70%] gap-1 text-sm p-1">
            <span className="uppercase text-white font-semibold">Automation in defi: part 1</span>
            <span className=" text-white text-xs">Twitter space episode 6</span>

          </div>
          <div className="p-2 flex  w-[30%] justify-center items-center">
            <Image src={Audio} alt="audio" />
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default PodcastVideos;
