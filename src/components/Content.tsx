import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLazyGetSummaryQuery } from "../services/article";
import { FC, useEffect, useState } from "react";
import UrlInput from "./UrlInput";
import ArticleHistory from "./ArticleHistory";
import Loader from "./Loader";
import ApiError from "./ApiError";
import SummaryResults from "./SummaryResults";
import { Schema, schema } from "../types/article";

const Content: FC<Schema> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      url: "",
      summary: "",
    },
  });

  const [article, setArticle] = useState<Schema>({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState<Schema[]>([]);
  const [copied, setCopied] = useState("");

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const getArticlesFromStorage = JSON.parse(
      localStorage.getItem("articles") as string
    );
    if (getArticlesFromStorage) {
      setAllArticles(getArticlesFromStorage);
    }
  }, []);

  const submitForm = async (data: Schema) => {
    const { data: res } = await getSummary({ articleUrl: data?.url });

    if (res?.summary) {
      const newArticle = { ...article, summary: res?.summary, url: data?.url };

      const updatedArticles = [newArticle, ...allArticles];

      setAllArticles(updatedArticles);

      setArticle(newArticle);

      localStorage.setItem("articles", JSON.stringify(updatedArticles));

      reset();
    }
  };

  const handleCopy = (copyUrl: string) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <section className="mt-16 w-full max-w-xl ">
      <div className="flex flex-col w-full gap-2">
        <UrlInput
          handleSubmit={handleSubmit}
          submitForm={submitForm}
          register={register}
          errors={errors}
        />

        <ArticleHistory
          allArticles={allArticles}
          setArticle={setArticle}
          handleCopy={handleCopy}
          copied={copied}
        />
      </div>

      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <Loader />
        ) : error ? (
          <ApiError error={error} />
        ) : (
          article.summary && <SummaryResults article={article} />
        )}
      </div>
    </section>
  );
};

export default Content;
