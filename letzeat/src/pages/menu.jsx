import React from "react";

import Footer from "../components/Layout/Footer";
import FirstCard from "../components/Cards/FirstCard";
import MyNavbar from "../components/Layout/Navbar";
import FourthCard from "../components/Cards/FourthCard";
const MenuPage = () => {

    return (
        <div className="Menu">
        
    <MyNavbar />

    <h1 className="Menu-heading"></h1>
        <header className="Menu-header">
        
          
        </header>
        <body className="Menu-body">
        
          < FirstCard/>
       
        
        </body>
      </div>
    );

};

export default MenuPage;