import React from "react";

import Footer from "../components/Layout/Footer";
import FirstCard from "../components/Cards/FirstCard";
import MyNavbar from "../components/Layout/Navbar";
import FourthCard from "../components/Cards/FourthCard";
const MainPage = () => {

    return (
        <div className="App">
    
        <header className="App-header">
        <MyNavbar />
        
        </header>
        <body className="App-body" style={{backgroundImage:"./ZeatHomepage0.jpg"}}>
         
          
        
        </body>
        <footer>
        
        < Footer/>
        </footer>
      </div>
    );

};

export default MainPage;