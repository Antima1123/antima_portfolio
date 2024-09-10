"use client";

import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { useState } from "react";
import SplashScreen from "./components/splashScreen";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";

const Home: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);


  // after 3 sec other components will be visible and splashscreen hide
  setTimeout(()=> {
    setShowSplash(false)
  }, 2000) 

  return (
    <div className="relative">
      {showSplash && <SplashScreen/>}

        <Header />
        <FirstPage />

      <div className={`${showSplash ? "hidden" : "block"}` }>
        <SecondPage />
        <Portfolio/>
        <Service/>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
