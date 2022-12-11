import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main.index";
import Technologies from "./Technology/Technologies";
import Contac from "./Contac/Contac";
import Me from "./Me";
import Footer from "./Footer/index";

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <Technologies />
      <Me />
      <Contac />
      <Footer />
    </div>
  );
};

export default Home;
