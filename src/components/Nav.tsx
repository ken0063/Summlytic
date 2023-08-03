import { FC } from "react";

const Nav: FC = () => {
  return (
    <header className="w-full items-center flex flex-col justify-center">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex gap-2 items-center w-28 ">
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="w-14 object-contain"
          />
          <p className="font-logo text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-black">
            Summlytic
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.open("https://github.com/ken0063")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
    </header>
  );
};

export default Nav;
