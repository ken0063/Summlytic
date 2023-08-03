import { Check, Copy } from "lucide-react";
import React, { FC } from "react";
import { Schema } from "../types/article";

interface Props {
  allArticles: Schema[];
  setArticle: React.Dispatch<React.SetStateAction<Schema>>;
  handleCopy: (copyUrl: string) => void;
  copied: string;
}

const ArticleHistory: FC<Props> = ({
  allArticles,
  setArticle,
  handleCopy,
  copied,
}) => {
  return (
    <div className="flex flex-col gap-2 max-h-80 overflow-y-auto ">
      {allArticles.reverse().map((data, idx) => (
        <div key={idx} onClick={() => setArticle(data)} className="link_card">
          <div onClick={() => handleCopy(data?.url)}>
            {copied === data?.url ? (
              <Check className="w-[65%] h-[65%] text-gray-500" />
            ) : (
              <Copy className="w-[65%] h-[65%] text-gray-500" />
            )}
          </div>

          <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
            {data?.url}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ArticleHistory;
