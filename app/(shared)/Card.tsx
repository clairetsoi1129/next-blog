// import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
//   post: Post;
  imageHeight: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
};

const Card = ({
  className,
  imageHeight,
//   post,
  isSmallCard = false,
  isLongForm = false,
}: Props) => {
//   const { id, title, author, createdAt, image, snippet } = post || {};

//   const date = new Date(createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
//   const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className={className}>
      <Link
        className="basis-full hover:opacity-70"
        // href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
        href="/"
      >
        <div className={`relative w-auto mb-3 ${imageHeight}`}>
            Image
          {/* <Image
            fill
            alt="tech"
            placeholder="blur"
            src={image}
            sizes="(max-width: 480px) 100vw,
                  (max-width: 768px) 75vw,
                  (max-width: 1060px) 50vw,
                  33vw"
            style={{ objectFit: "cover" }}
          /> */}
        </div>
      </Link>
      <div className="basis-full">
        <Link 
            href="/"
            // href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
        >
          <h4
            className={`font-bold hover:text-accent-green
            ${isSmallCard ? "text-base" : "text-lg"}
            ${isSmallCard ? "line-clamp-2" : ""}
          `}
          >
            I am a very long long long long long long long long long long long long long long long long long long long long long long title
          </h4>
        </Link>

        <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs">Author</h5>
          <h6 className="text-wh-300 text-xs">FormattedDate</h6>
        </div>
        <p
          className={`text-wh-100 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
          Snippet
        </p>
      </div>
    </div>
  );
};

export default Card;