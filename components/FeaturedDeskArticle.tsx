import Image from "next/image";
import Link from "next/link";

type Article = {
  _id: string;
  image: string;
  name: string;
  author: string;
  title: string;
  createdAt: string;
  content: string;
};

type Props = {
  latestArticle?: Article;
};

const FeaturedDeskArticle = ({ latestArticle }: Props) => {
  // Format the date for display
  const formattedDate = latestArticle
    ? new Date(latestArticle.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  // Approximating lines by character count
  const contentPreviewLimit = 500; // Adjust based on your average character per line * 10 lines
  const showReadMore =
    latestArticle?.content &&
    latestArticle.content.length > contentPreviewLimit;

  const contentPreview = showReadMore
    ? `${latestArticle?.content.slice(0, contentPreviewLimit)}...`
    : latestArticle?.content;

  return (
    <Link href={{ pathname: "/article", query: {_id: latestArticle?._id } }}
      className="lg:w-[44%] md:w-[58%] flex flex-col gap-1"
    >
      <div className="flex flex-col gap-3">
        <span className="text-xs">Featured</span>
        <Image
          src={latestArticle?.image || ""}
          alt="Featured Article Image"
          width={686}
          height={386}
          className="w-full h-auto"
        />
        <span className="text-xl mt-2">{latestArticle?.title}</span>
        {/* Display a content preview */}
        <div
          className="text-sm text-[#6A6A6A] dark:text-[#b2aeae]"
          dangerouslySetInnerHTML={{ __html: contentPreview || "" }}
        />
         
        
        {showReadMore && (
          <p className="text-[#AA0099] text-xs mt-2">Read more</p>
        )}
        <div className="text-xs flex flex-row gap-4 text-[#6A6A6A] dark:text-[#b2aeae]">
          <span className="uppercase">
            <strong>By</strong> {latestArticle?.author}
          </span>
          <span>
            <strong>{formattedDate}</strong>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedDeskArticle;
