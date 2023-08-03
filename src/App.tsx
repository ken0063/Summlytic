import Hero from "./components/Hero";
import Content from "./components/Content";
import Nav from "./components/Nav";
import { FC } from "react";

const App: FC = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Nav />
        <Hero />
        <Content />
      </div>
    </main>
  );
};

export default App;
