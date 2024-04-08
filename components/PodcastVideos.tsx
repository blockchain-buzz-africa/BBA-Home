import { useState, useEffect } from "react";
import Image from "next/image";
import Audio from "./../public/audio.svg";
import axios from "axios";

type Props = {};

interface Video {
  _id: string;
  title: string;
  description: string;
  videoUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const PodcastVideos = (props: Props) => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get<{ data: Video[] }>(
          "https://api.bbafrica.co/api/videos"
        );
        setVideos(response.data.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [videos]);

  return (
    <div className="p-5 md:hidden lg:hidden flex flex-col gap-3">
      <span className="text-xl text-[#AA0099] uppercase">Podcasts: VIDEOS</span>
      {videos.map((video) => (
        <div key={video._id} className="w-full h-[280px] mt-3 relative">
          <div className="w-full h-[280px] absolute top-0 left-0 bottom-0 right-0">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${getVideoId(video.videoUrl)}`}
              frameBorder="0"
              allowFullScreen
              title={video.title}
            ></iframe>
          </div>
          <div className="w-full h-[48px] bg-[#AA0099] flex absolute bottom-0">
            <div className="flex flex-col w-[70%] gap-1 text-sm p-1">
              <span className="uppercase text-white font-semibold">{video.title}</span>
              <span className="text-white text-xs">{video.description}</span>
            </div>
            <div className="p-2 flex w-[30%] justify-center items-center">
              <Image src={Audio} alt="Audio icon" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Helper function to extract the YouTube video ID from the URL
const getVideoId = (url: string) => {
  const videoId = url.split("v=")[1];
  const ampersandPosition = videoId.indexOf("&");
  if (ampersandPosition !== -1) {
    return videoId.substring(0, ampersandPosition);
  }
  return videoId;
};

export default PodcastVideos;