import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import SongsLists from "../components/SongsLists";
import Spacer from "../components/Spacer";
import SplashScreen from "../splashScreen";
import SplashV0 from "../SplashV0";
import { getSongs } from "../Api/Utility";

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [initialSongs, setInitialSongs] = useState({});
  const timer = useRef(null);

  const getInitialData = async () => {
    const songs = await getSongs({});
    setInitialSongs(songs);

    timer.current = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  };

  useEffect(() => {
    getInitialData();

    return () => clearTimeout(timer.current);
  }, []);

  return (
    <div className="home">
      {!isVisible ? (
        <>
          <NavBar />
          <Spacer />
          <SongsLists songs={initialSongs} />
        </>
      ) : (
        // <SplashV0 isVisible={isVisible} />
        <SplashScreen isVisible={isVisible} />
      )}
    </div>
  );
};

export default Home;
