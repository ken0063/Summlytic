import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="w-full items-center flex flex-col justify-center">
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Welcome to Summlytic, your ultimate article summarization companion! Say
        goodbye to information overload and embrace the power of efficient
        knowledge absorption. With Summlytic, you can now effortlessly access
        concise and comprehensive summaries of lengthy articles from various
        sources.
      </h2>
    </div>
  );
};

export default Hero;
