import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, } from "react-router-dom";
// import logo from './LetzEatlogo.jpg';
import './App.css';
// import Navbar from '../src/components/Layout/Navbar';
import FirstCard from '../src/components/Cards/FirstCard';
// import SecondCard from '../src/components/Cards/SecondCard';
// import ThirdCard from '../src/components/Cards/ThirdCard';
import FourthCard from '../src/components/Cards/FourthCard';
import Footer from './components/Layout/Footer'
// pages
import MainPage from './pages';
import CalendarPage from './pages/calendar';
import AboutPage from './pages/about';
import AboutJohn from './pages/John';
import ContactPage from './pages/contact';
import MenuPage from './pages/menu';
import NotFound from './pages/404';

// import {Elements, StripeProvider} from 'react-stripe-elements';
// import CheckoutForm from './CheckoutForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/calendar" component={CalendarPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/john" component={AboutJohn} />
        <Route exact path="/menu" component={MenuPage} />
        <Route exact path="/404" component = {NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
