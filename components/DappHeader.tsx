import React from "react";
import Link from "next/link";
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

interface Props {
  dapps: Dapplist[];
}

const DappHeader: React.FC<Props> = ({ dapps }) => {
  return (
    <>
      {dapps && dapps.map((item: Dapplist) => (
        <React.Fragment key={item.id}>
          <Link href="/dappstore" passHref>
            <a className="p-5 flex flex-col gap-3">
              <div className="flex flex-col text-xs max-w-[344px]">
                <div className="self-end italic font-light text-black whitespace-nowrap">
                  dapp
                </div>
                <div className="mt-2 w-full aspect-[1.33] relative">
                  <Image src={item.image} alt="dapp image" layout="fill" objectFit="cover"/>
                </div>
                <div className="mt-3 text-xl text-neutral-950">
                  <span className="font-bold text-fuchsia-700">{item.name}:</span> {item.about}
                </div>
                <div className="flex gap-2 py-1 pr-5 mt-3 text-neutral-600">
                  <div className="whitespace-nowrap">Sep 29 2023</div>
                  <div className="flex-auto">Author: Michael Loupa</div>
                </div>
              </div>
            </a>
          </Link>
        </React.Fragment>
      ))}
    </>
  );
};

export default DappHeader;
