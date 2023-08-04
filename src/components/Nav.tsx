import { FC } from "react";

const Nav: FC = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full">
      <nav className="flex items-center justify-between w-full pt-3 mb-10">
        <div className="flex items-center gap-2 w-28 ">
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="object-contain w-14 h-14"
          />
          <p className="text-3xl font-extrabold text-transparent font-logo bg-clip-text bg-gradient-to-r from-green-400 to-black">
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
