import React, { useEffect, useState } from "react";
import Audio from "./../public/audio.svg";
import Image from "next/image";
import axios from "axios";

interface AudioData {
  _id: string;
  title: string;
  description: string;
  audioFile: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const PodcastSpaces: React.FC = () => {
  const [audioData, setAudioData] = useState<AudioData[]>([]);

  useEffect(() => {
    const fetchAudioData = async () => {
      try {
        const response = await axios.get<{ data: AudioData[] }>(
          "https://api.bbafrica.co/api/audios"
        );
        setAudioData(response.data.data);
      } catch (error) {
        console.error("Error fetching audio data:", error);
      }
    };

    fetchAudioData();
  }, []);

  return (
    <div className="p-5 md:hidden lg:hidden flex flex-col gap-3">
      {/* <span className="text-base md:text-xl text-[#AA0099] uppercase">
        Podcasts: SPACES
      </span> */}

      {audioData.map((audio) => (
        <div
          key={audio._id}
          className="relative mt-3 w-full h-[48px] bg-[#21262D] dark:bg-[#363b43] flex flex-row"
        >
          <div className="flex flex-col w-[40%] gap-[2px] p-1 justify-center">
            <span className="uppercase text-xs md:text-base text-white font-semibold">
              {audio.title}
            </span>
            <span className="text-white text-xs">{audio.description}</span>
          </div>
          <div className=" h-[30%] absolute top-2 right-2  flex w-[65%] justify-center items-center">
            <audio src={audio.audioFile} controls />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PodcastSpaces;