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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAudioData = async () => {
      try {
        const response = await axios.get<{ data: AudioData[] }>(
          "https://api.bbafrica.co/api/audios"
        );
        setAudioData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching audio data:", error);
        setError("Failed to fetch audio data. Please try again later.");
        setLoading(false);
      }
    };

    fetchAudioData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-5 md:hidden lg:hidden flex flex-col gap-3">
      <span className="text-base md:text-xl text-[#AA0099] uppercase">
        Podcasts: SPACES
      </span>

      {audioData.map((audio) => (
        <div
          key={audio._id}
          className="px-4 mt-3 w-full h-[144px] bg-[#21262D] dark:bg-[#363b43] flex flex-row"
        >
          <div className=" w-full flex flex-col gap-[10px] p-1 justify-center">
            <span className="uppercase text-xs md:text-base text-white font-semibold">
              {audio.title}
            </span>
            <span className="text-white text-xs mb-2">{audio.description}</span>

            <div className="w-full h-[30%] flex items-center">
            <audio src={audio.audioFile} controls />
          </div>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default PodcastSpaces;