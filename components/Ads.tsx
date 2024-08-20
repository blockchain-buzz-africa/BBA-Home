"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Loader from "./Loader";

interface Ad {
  id: number;
  image: string;
  title: string;
  url: string;
}

const Ads: React.FC = () => {
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch('https://api.bbafrica.co/api/ads', { cache: 'no-store' });
        const data = await response.json();
        setAds(data);
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };
    fetchAds();
  }, []);

  return (
    <div className="flex flex-col p-3 mx-auto w-full bg-gray-200 rounded-xl shadow-sm max-w-[480px]">
      <div className="text-xl font-bold text-fuchsia-700">Ads</div>
      {ads.length > 0 ? (
        ads.map(ad => (
          <div key={ad.id} className="flex flex-col py-3 mt-3 border-b border-solid border-neutral-400">
            <img loading="lazy" src={ad.image} className="w-full aspect-[1.27]" alt={ad.title} />
            <div className="mt-3 text-xl text-neutral-950">{ad.title}</div>
            <div className="mt-3 text-xs text-fuchsia-700">
              <a href={ad.url} target="_blank" rel="noopener noreferrer">{ad.url}</a>
            </div>
          </div>
        ))
      ) : (
        <div><Loader/></div>
      )}
    </div>
  );
};

export default Ads;