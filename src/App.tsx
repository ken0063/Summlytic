import React from "react";
import Hero from "./components/Hero";
import Content from "./components/Content";

type Props = {};

const App = (props: Props) => {
  return (
    <main>
      <div>
        <div className="bg-gradient-to-t from-gray-100 to-gray-900 " />
      </div>
      <div>
        <Hero />
        <Content />
      </div>
    </main>
  );
};

export default App;
