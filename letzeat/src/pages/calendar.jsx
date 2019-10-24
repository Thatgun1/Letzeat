import React from "react";
import Navbar from "../components/Layout/Navbar";


const CalendarPage = () => {

    return (
        <div>
        <header>
            <Navbar />
        </header>
        <body>
        <div className="Calendar">
        <iframe title="iframe1" src="https://app.acuityscheduling.com/schedule.php?owner=18094347" width="800" height="800" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
          </div>
          </body>
          </div>
          
    );
};

export default CalendarPage;


