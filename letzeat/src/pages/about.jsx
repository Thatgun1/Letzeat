import React from 'react'
import MyNavbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";


const AboutPage = () => {
    return (
<div className="About">
<header className="About-header">
<MyNavbar />

<h1 className="About-heading"></h1>
</header>
<body className="About-body">

{/* <container className="About-section">
        <p>A Fresh New Concept For A Cooking Class</p>
        <br></br>
        </container> */}
        {/* <div className="About-summary"> */}
        <div className="About-panel1">
            <p className="Para-1">LetzEat is a fresh, new concept for a cooking class…
             It has been designed to show you how create great tasting food in a simple and easy-to-
            understand way. All ingredients are readily available at any local supermarket, there is no
            special equipment needed (a stove, an oven and a microwave0).</p>
        <div className="About-pic1"></div>
        
        </div>
        
          
            
            {/* </div> */}
            <div className="About-panel2">
            <p>Unlike most cooking classes and television cooking shows, LetzEat will NOT intimidate you. The
classes have been designed to provide you with the basic knowledge and preparation of a
variety of different foods including appetizers, salads, side dishes and main meals.
THESE CLASSES HAVE BEEN DESIGNED FOR BEGINNER LEVEL COOK WANNA-BE’S and people
who want to take a boring food item to another level. If you feel you are an advanced cook,
then book one of those fancy-schmantzy cooking courses somewhere else, although you will be
missing out on a lot of fun.
Classes run approximately 2 hours with a 10 minute break at “half time” to get a beverage refill,
a beverage ‘purge” or just to stretch your legs.
You are welcome to purchase alcoholic beverages in the Public Market and enjoy them during
the presentation.
Water will be provided.
A typical class will include a demonstration and recipes of (4) items;
- An Appetizer or starter
- A side item
- A Main course
- An additional Main course or an additional side item
-
Classes will also include Bonus mini-lessons “Johnny’s Cheap Tricks” and “Johnny’s Focus On
Food”
Samplings of each that is prepared will be handed out for you to enjoy and to ask questions.
There will be a variety of different cooking themes offered. Oriental, Comfort Food, Salads,
Pastas… check out our class descriptions for more details.</p>
          </div>

</body>
<footer>
        < Footer/>
        </footer>
</div>

    );
};


export default AboutPage;