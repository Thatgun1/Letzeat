import React from "react";
import MyNavbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Pasta from "../images/pasta.jpg";
import Steak from "../images/steak.jpg";
import Sandwich from "../images/sandwich.jpg";
import Quesadilla from "../images/quesadilla.jpg";
const AboutPage = () => {
  return (
    <div className="About">
      
      <header className="App-header">
        
        <MyNavbar />
        </header>
        <h1 className="About-heading">.</h1>
      
      <body className="About-body">
        <h3 style={{ textAlign: "center" }}>
          LetzEat Is A Fresh, New Concept For A Cooking Class…{" "}
        </h3>

        <hr className="Horizontal" style={{backgroundColor:"red", height:"1px"}}></hr>

        <p>
          It has been designed to show <b>you</b> how to create great tasting food in a
          simple and easy-to- understand way.
        </p>
        <p>
          All ingredients are readily available at any local supermarket, there
          is no special equipment needed (a stove, an oven, and a microwave).
        </p>
        <hr className="Horizontal" style={{backgroundColor:"red", height:"1px"}}></hr>

        <div className="Para-2">
          <img
            src={Pasta}
            alt="Pasta"
            height="275px"
            width="375px"
            style={{ padding: "20px" }}
          ></img>
          <img
            src={Steak}
            alt="Steak"
            height="275x"
            width="375px"
            style={{ padding: "20px" }}
          ></img>
          <img
            src={Quesadilla}
            alt="Pasta"
            height="275px"
            width="375px"
            style={{ padding: "20px" }}
          ></img>
          <img
            src={Sandwich}
            alt="Steak"
            height="275x"
            width="375px"
            style={{ padding: "20px" }}
          ></img>

<hr className="Horizontal" style={{backgroundColor:"red", height:"1px"}}></hr>

          <span className="Span" display="inline">
            <p>
              Unlike most cooking classes and television cooking shows, LetzEat
              will NOT intimidate you. The classes have been designed to provide
              you with the basic knowledge and preparation of a variety of
              different foods including appetizers, salads, side dishes and main
              meals. THESE CLASSES HAVE BEEN DESIGNED FOR BEGINNER LEVEL COOK
              WANNA-BE’S and people who want to take a boring food item to
              another level. If you feel you are an advanced cook, then book one
              of those fancy-schmantzy cooking courses somewhere else, although
              you will be missing out on a lot of fun. Classes run approximately
              2 hours with a 10 minute break at “half time” to get a beverage
              refill, a beverage ‘purge” or just to stretch your legs. You are
              welcome to purchase alcoholic beverages in the Public Market and
              enjoy them during the presentation. Water will be provided. A
              typical class will include a demonstration and recipes of (4)
              items; - An Appetizer or starter - A side item - A Main course -
              An additional Main course or an additional side item - Classes
              will also include Bonus mini-lessons “Johnny’s Cheap Tricks” and
              “Johnny’s Focus On Food” Samplings of each that is prepared will
              be handed out for you to enjoy and to ask questions. There will be
              a variety of different cooking themes offered. Oriental, Comfort
              Food, Salads, Pastas… check out our class descriptions for more
              details.
            </p>
          </span>
          <hr className="Horizontal" style={{backgroundColor:"red", height:"1px"}}></hr>

        </div>
      </body>
      <Footer />
    </div>
  );
};

export default AboutPage;
