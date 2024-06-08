import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Article {
  _id: string;
  image: string;
  name: string;
  author: string;
  createdAt: string;
  title: string;
}

interface Props { 
  fnews: Article[];
}

const AllArticles: React.FC<Props> = ({ fnews }) => {
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const formattedDate = date.toLocaleDateString(undefined, options);
    
    return formattedDate;
  }

  return (
    <div className="mb-10 md:w-[85%] lg:w-[80%] hidden md:flex flex-col mt-10 py-5 mx-auto px-4">
      <span className="font-semibold text-xl">News & Articles</span>
      <p className="text-xs mt-4">
        Watch podcasts, conversations, tutorials and special features.
      </p>
      <div className="mt-6 h-[80%]  w-full grid md:grid-cols-2 lg:grid-cols-3  gap-6">
        {fnews &&
          fnews.map((item: Article) => (
            <Link key={item._id} href={{ pathname: "/article", query: { _id: item?._id } }}>
              <div className="w-full h-[280px]">
                <Image src={item.image} alt={item.name} width={344} height={269} className="w-[344px] h-[280px]" objectFit="cover" />
              </div>

              <div className="mt-2">
                <span className="text-xl">
                    {item.title}
                </span>
                <div className="mt-2 flex flex-row gap-4 text-xs dark:text-[#A5A5A5] text-[#424242]">
                  <p>{formatDate(item.createdAt)}</p>
                  <p>By : {item.author}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default AllArticles;
