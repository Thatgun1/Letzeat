import React from "react";
import MyNavbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const CalendarPage = () => {
  return (
    <div className="Calendar">
      
      <header className="App-header">
        
        <MyNavbar />
        </header>
        <h1 className="About-heading"></h1>

        
          <iframe
            title="iframe1"
            src="https://app.acuityscheduling.com/schedule.php?owner=18094347"
            width="80%"
            style={{marginLeft: "200px"}}
            height="800"
            frameBorder="50px"
            
            
          ></iframe>
          <script
            src="https://embed.acuityscheduling.com/js/embed.js"
            type="text/javascript"
          ></script>
          <Footer />
    </div>
  );
};

export default CalendarPage;
