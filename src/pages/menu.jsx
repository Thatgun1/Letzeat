import React from "react";

import Footer from "../components/Layout/Footer";
import FirstCard from "../components/Cards/FirstCard";
import MyNavbar from "../components/Layout/Navbar";
import FourthCard from "../components/Cards/FourthCard";
import SecondCard from "../components/Cards/SecondCard";
import ThirdCard from "../components/Cards/ThirdCard";
const MenuPage = () => {
  return (
    <div className="Menu">
      <header className="App-header">
        <MyNavbar />
      </header>
      <h1 className="About-heading">.</h1>

      <body className="Menu-body">
        <div className="Menu-set1">
          <FirstCard />
          <SecondCard />
        </div>
        <div className="Menu-set2">
          <ThirdCard />
          <FourthCard />
        </div>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MenuPage;
