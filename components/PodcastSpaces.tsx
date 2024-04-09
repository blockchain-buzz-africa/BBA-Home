"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import AudioIcon from "./../public/audio.svg";
import Loader from "./Loader";

// Interface for audio data
interface AudioData {
  _id: string;
  title: string;
  description: string;
  audioFile: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// Interface for the modal props
interface AudioModalProps {
  audio: AudioData;
  onClose: () => void;
}

const AudioModal: React.FC<AudioModalProps> = ({ audio, onClose }) => {
  // State to manage the visibility and animation of the modal
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate the modal appearance shortly after it mounts
    const timer = setTimeout(() => setIsVisible(true), 10); // Short delay ensures CSS transition occurs
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-end" onClick={onClose}>
      <div
        className={`w-full max-w-md bg-[#374151] rounded-t-3xl text-white p-5 transition-transform duration-300 transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
        onClick={(e) => e.stopPropagation()}
        style={{ transition: 'transform 0.5s ease-out' }}
      >
         <div className=" w-full p-2  flex justify-between items-center">
         <h2 className="w-[70%] text-lg font-bold">{audio.title}</h2>
        <Image src={AudioIcon} alt="audio" />
         </div>
        <p className="mb-4 p-2">{audio.description}</p>
        <audio controls className="w-full" src={audio.audioFile}></audio>
      </div>
    </div>
  );
};

// Main component for displaying and interacting with audio
const PodcastSpaces: React.FC = () => {
  const [audioData, setAudioData] = useState<AudioData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedAudio, setSelectedAudio] = useState<AudioData | null>(null);

  useEffect(() => {
    const fetchAudioData = async () => {
      try {
        const response = await axios.get<{ data: AudioData[] }>("https://api.bbafrica.co/api/audios");
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

  const handleExpandClick = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleListenClick = (audio: AudioData) => {
    setSelectedAudio(audio);
  };

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-5 flex flex-col gap-3">
      <span className="text-base text-[#AA0099] uppercase">Podcasts: SPACES</span>
      {audioData.map((audio) => (
        <div key={audio._id} className="w-full bg-[#374151] h-auto dark:bg-[#363b43] flex justify-between p-2 mb-3">
          <div onClick={() => handleExpandClick(audio._id)} className="cursor-pointer">
            
            <div className="flex p-2 items-center justify-between">
            <span className="uppercase w-[70%] text-xs md:text-sm text-white font-semibold">{audio.title}</span>
            <Image src={AudioIcon} alt="audio" />
            </div>
            {expandedId === audio._id && (
              <div>
                <p className="text-white p-2 text-xs ">{audio.description}</p>
                <button className="flex justify-items-end px-2 text-[#AA0099] underline" onClick={() => handleListenClick(audio)}>Listen</button>
              </div>
            )}
          </div>

         
        </div>
      ))}
      {selectedAudio && (
        <AudioModal audio={selectedAudio} onClose={() => setSelectedAudio(null)} />
      )}
    </div>
  );
};

export default PodcastSpaces;


