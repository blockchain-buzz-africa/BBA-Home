"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import play from "@/public/play.png"
import { getVideoId } from "@/helpers";
import Loader from "./Loader";

interface Video {
  _id: string;
  title: string;
  description: string;
  videoUrl: string;
  createdAt: string;
  updatedAt: string;
}

const fetcher = (url: string) =>
  axios.get<{ data: Video[] }>(url).then((res) => res.data.data);

interface VideoModalProps {
  video: Video;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  // Adding a state to control the animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation shortly after the component mounts
    const timer = setTimeout(() => setIsVisible(true), 10); // A short delay ensures the transition will happen
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
    className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-end"
    onClick={onClose}
  >
    <div
      className={`max-w-lg w-full bg-[#AA0099] rounded-t-3xl flex flex-col gap-3 text-white p-5 transition-transform duration-300 transform ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
      onClick={(e) => e.stopPropagation()}
      style={{ transition: "transform 0.5s ease-out" }} // Smoothly animate the transform property
    >
      <h2 className="text-lg font-bold">{video.title}</h2>
      <p>{video.description}</p>
      <button onClick={onClose} className="text-[#374151] font-semibold text-2xl">Close</button>
    </div>
  </div>
  
  );
};

const PodcastVideos: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const { data: videos, error } = useSWR<Video[]>(
    "https://api.bbafrica.co/api/videos",
    fetcher
  );

  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (!modalRef.current?.contains(e.target as Node)) {
        setIsModalOpen(false);
      }
    };

    const toggleBodyScroll = (shouldDisableScroll: boolean) => {
      document.body.style.overflow = shouldDisableScroll ? "hidden" : "auto";
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", closeModal);
      toggleBodyScroll(true);
    }

    return () => {
      document.removeEventListener("mousedown", closeModal);
      toggleBodyScroll(false);
    };
  }, [isModalOpen]);

  const handleOpenModal = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  if (error) return <div>Failed to load videos.</div>;
  if (!videos) return <Loader />;

  const truncateDescription = (description: string, handleMoreClick: () => void) => {
    const words = description.split(" ");
    if (words.length > 5) {
      const truncated = words.slice(0, 20).join(" ");
      return (
        <span className="text-white text-40 font-light">
          {truncated}{" "}
          <button
            
            onClick={handleMoreClick}
            className="font-bold"
          >
            ...
          </button>
        </span>
      );
    }
    return description;
  };

  return (
    <div className="p-5 flex flex-col gap-5">
      <span className="text-xl text-[#AA0099] md:text-center uppercase">Podcasts: VIDEOS</span>
      {videos.map((video) => (
        <div key={video._id} className="w-full md:flex md:justify-center mt-3">
          <div

            className="w-full md:w-3/4 h-[260px] md:h-[400px] flex flex-col mb-5"

            onClick={() => handleOpenModal(video)}
          >
            <iframe
              className="w-full h-[60%]"
              src={`https://www.youtube.com/embed/${getVideoId(
                video.videoUrl
              )}`}
              frameBorder="0"
              allowFullScreen
              title={video.title}
            ></iframe>

            <div className="w-full h-[24%] bg-[#AA0099] flex items-center ">

              <div className="flex flex-col w-[70%] gap-1 text-sm p-1">
                <span className="uppercase text-white font-semibold text-2xl">
                Automation in defi: part 1
                </span>
                {truncateDescription(video.description, () =>
                  handleOpenModal(video)
                )}{" "}
              </div>
              <div className="p-2 flex w-[30%] justify-center items-center">
                <Image src={play} alt="Audio icon" width={38} height={36} />
              </div>
            </div>
          </div>
        </div>
      ))}
      {isModalOpen && selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default PodcastVideos;