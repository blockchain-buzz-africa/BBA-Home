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
  anews: Article[];
}

const RecentDeskArticles: React.FC<Props> = ({ anews }) => {
    

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString(undefined, options);

    return formattedDate;
  }

  return (
    <div className="lg:w-[34%] md:w-[42%] py-3 overflow-hidden flex flex-col gap-3">
      <span className="text-xl text-[#AA0099] uppercase">Recent Articles</span>
      {anews &&
        anews.map((item: Article) => (
          <React.Fragment key={item._id}>
            <Link
              href={{ pathname: "/article", query: { _id: item?._id } }}
              className="w-full h-[84px] flex flex-row"
            >
              <div className="px-2 w-[34%] h-[79px] rounded-lg flex items-center">
                <img src={item.image} alt={item.name}  className="w-full h-full rounded-lg" />
              </div>

              <div className="w-[70%] h-[70px] flex flex-col gap-1">
                <div className="flex flex-row justify-start gap-2 text-xs">
                  <span className="text-[#AA0099] font-semibold uppercase">
                    News
                  </span>
                  <span className="dark:text-[#A5A5A5]  text-[#424242]">
                    By {item.author}
                  </span>
                  <span className="dark:text-[#A5A5A5]  text-[#424242]">
                    {formatDate(item.createdAt)}
                  </span>
                </div>
                <div className="text-xs ">
                  <p>
                    {item.title}
                  </p>
                </div>
              </div>
            </Link>
            <div key={item._id}  className="mt-1 w-full h-[1px] dark:bg-[#A5A5A5] bg-[#818181]"></div>
          </React.Fragment>
        ))}
    </div>
  );
};

export default RecentDeskArticles;
