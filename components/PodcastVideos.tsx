"use client"

import { useRef, useState } from "react";
import useSWR from 'swr';
import Image from "next/image";
import Audio from "../public/audio.svg";
import { getVideoId } from "@/helpers";
import axios from "axios";
import Loader from "./Loader";

interface Video {
  _id: string;
  title: string;
  description: string;
  videoUrl: string;
  createdAt: string;
  updatedAt: string;
}

// Adjust the fetcher function to match the expected return type for SWR
const fetcher = (url: string) => axios.get<{ data: Video[] }>(url).then(res => res.data.data);

const PodcastVideos = () => {
  const modalContentRef = useRef<HTMLDivElement>(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  // Adjust the useSWR call to expect an array of Video objects directly
  const { data: videos, error } = useSWR<Video[]>('https://api.bbafrica.co/api/videos', fetcher);

   // Function to handle opening the modal
   const handleOpenModal = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = (e: React.MouseEvent) => {
    // If the modal content does not contain the click target, close the modal
    if (!modalContentRef.current?.contains(e.target as Node)) {
      setIsModalOpen(false);
    }
  };

  if (error) return <div>Failed to load videos.</div>;
  if (!videos) return <Loader />

  // Modal Component
  const VideoModal = () => (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end ${isModalOpen ? "" : "hidden"}`}>
      <div className="w-full bg-[#AA0099] text-white p-5 transition-transform duration-300 transform">
        <h2 className="text-lg font-bold">{selectedVideo?.title}</h2>
        <p>{selectedVideo?.description}</p>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </div>
    </div>
  );

  return (
    <div className="p-5 flex flex-col gap-5">
      <span className="text-xl text-[#AA0099] uppercase">Podcasts: VIDEOS</span>
      {videos.map((video: Video) => (
        <div key={video._id} className="w-full mt-3">
          <div className="w-full h-[240px] flex flex-col mb-5">
            <iframe
              className="w-full h-[80%]"
              src={`https://www.youtube.com/embed/${getVideoId(video.videoUrl)}`}
              frameBorder="0"
              allowFullScreen
              title={video.title}
            ></iframe>
            <div className="w-full h-[20%] bg-[#AA0099] flex " onClick={() => handleOpenModal(video)}>
              <div className="flex flex-col w-[70%] gap-1 text-sm p-1">
                <span className="uppercase text-white font-semibold text-xs">
                Automation in defi: part 1
                </span>
                <span className="text-white text-xs">Twitter space episode 5</span>
              </div>
              <div className="p-2 flex w-[30%] justify-center items-center">
                <Image src={Audio} alt="Audio icon" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
      ))}
       {isModalOpen && <VideoModal />}
    </div>
  );
};

export default PodcastVideos;
