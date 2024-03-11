"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Dapplist {
  id: string;
  name: string;
  description: string;
  about: string;
  website: string;
  twitter: string;
  telegram: string;
  tags: string;
  chain: string;
  image: string;
  category: string;
}



const Dapp  = () => {
const [data, setData] = useState([])
    useEffect(() => {
        const fetchDapps = async () => {
          try {
            const response = await fetch('http://localhost:3002/api/dappstore-info');
            console.log(response)
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const json = await response.json();
            const data = json.data
            console.log(data)
            setData(data);
           
          } catch (error) {
            console.error('Error fetching news:', error);
          }
        };
    
        fetchDapps();
      }, []);


  return (
    <>
      {data && data.map((item: any) => (
        <React.Fragment key={item.id}>
          <Link href="/dappstore/dapp" passHref>
            <div className="p-5">
              <div className="p-5 flex gap-2 justify-center border-b border-solid border-neutral-400">
                <div className="shrink-0 my-auto aspect-[1.43] w-[90px] relative">
                  <Image src={item.image} alt={item.name} layout="fill" objectFit="cover"/>
                </div>
                <div className="flex flex-col grow shrink-0 justify-center px-5 mt-1.5 basis-0 w-fit">
                  <div className="flex ">
                    <div className="flex-auto text-xs font-extrabold tracking-wider leading-5 text-fuchsia-700 uppercase">
                      {item.name}
                    </div>
                    <div className="justify-center px-1.5 my-auto text-xs font-semibold leading-4 text-white whitespace-nowrap rounded-md bg-blue-950">
                      ad
                    </div>
                  </div>
                  <div className="text-xs font-regular leading-4 text-neutral-750">
                    {item.about}
                  </div>
                  <div className="flex gap-1.5 mt-1.5 text-xs leading-4 whitespace-nowrap text-neutral-950">
                    <div>{item.tags}</div>
                    {/* Assuming displaying the tags multiple times was a mistake; you can adjust this part as needed */}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </React.Fragment>
      ))}
    </>
  );
};

export default Dapp;
