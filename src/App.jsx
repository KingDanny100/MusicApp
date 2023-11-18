import React, { useState, useEffect } from "react";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Play from "./Components/Play/Play";
import { MyContext } from "./Data";
import { data } from "./Data";
import { MyProvider } from "./HomeContext";
import Cover from "./Components/Cover/Cover";
import BackgroundPlay from "./Components/BackgroundPlay/BackgroundPlay";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Queue from "./Components/Queue/Queue";
import Video from "./Components/Video/Video";
import Playlist from "./Components/PlayList/Playlist";
import Album from "./Components/Albums/Album";
import Nowplaying from "./Components/NowPlaying/Nowplaying";


function App() {
  const [getIndex, setGetIndex] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);
  const [homeIndex, setHomeIndex] = useState(-25)

  const handleGetIndex = (ind) => {
    setGetIndex(ind);
  };

  const getHomeIndex = (index) => {
    setHomeIndex(index)
  }



  useEffect(() => {
    const delay = 3000;

    const timer = setTimeout(() => {
      setFirstLoad(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <MyContext.Provider value={data}>
        <MyProvider>
        <main className="main_container">
          {firstLoad ? (
            <Cover />
          ) : (
            <><div className="main_body">
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Home getHomeIndex={getHomeIndex} />} />
                    <Route path="/queue" element={<Queue getHomeIndex={getHomeIndex} />} />
                    <Route path="/video" Component={Video} />
                    <Route path="/playlist" Component={Playlist} />
                    <Route path="/album" Component={Album} />
                    <Route path="/nowplaying" element={<Nowplaying getIndex={getIndex} />} />
                  </Routes>
                </div><Play getIndex={handleGetIndex} homeIndex={homeIndex} setHomeIndex={setHomeIndex}/></>
          )}
        </main>
      </MyProvider>
    </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
