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
  news: Article[];
}

const RecentArticles: React.FC<Props> = ({ news }) => {
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
    <div className="p-5 md:hidden lg:hidden flex flex-col gap-3">
      <span className="text-xl text-[#AA0099] uppercase">Recent Articles</span>

      {news && news.map((item: Article) => (
        <React.Fragment key={item._id}>
          <Link href={{ pathname: "/article", query: {_id: item?._id } }}
           className="w-full h-[84px] flex flex-row">
            <div className="px-2 w-[30%] h-[79px] rounded-lg flex items-center">
              <img src={item.image} alt={item.name} className="w-full h-full rounded-lg" />
            </div>

            <div className="w-[70%] h-[70px] flex flex-col gap-1">
              <div className="flex flex-row justify-start gap-4 text-xs">
                <span className="text-[#AA0099] font-semibold uppercase">News</span>
                <span className="dark:text-[#A5A5A5] text-[#424242]">
                  {item.author}
                </span>
                <span className="dark:text-[#A5A5A5] text-[#424242]">
                  {formatDate(item.createdAt)}
                </span>
              </div>
              <div className="text-sm font-semibold">
                <p>{item.title}</p>
              </div>
            </div>
          </Link>
          <div key={item._id} className="mt-1 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default RecentArticles;