import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <header className="w-full items-center flex flex-col justify-center">
      <nav className="flex justify-between items-center flex-col">
        <div className="flex gap-2 items-center ">
          <img src="/assets/logo.webp" alt="logo" className="w-9" />
          <p className="font-logo text-2xl font-extrabold">Summlytic</p>
        </div>
        <button>Github</button>
      </nav>
    </header>
  );
};

export default Hero;
