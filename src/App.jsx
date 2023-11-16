import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Play from "./Components/Play/Play";
import { MyContext } from "./Data";
import { data } from "./Data";
import { MyProvider } from "./HomeContext";
import Cover from "./Components/Cover/Cover";
import BackgroundPlay from "./Components/BackgroundPlay/BackgroundPlay";

function App() {
  return (
    <MyContext.Provider value={data}>
      <MyProvider>
        <main className="main_container">
          {/* <Cover /> */}
          <div className="main_body">
            <Navbar />
            <Home />
          </div>
          {/* <BackgroundPlay /> */}
          <Play />
        </main>
      </MyProvider>
    </MyContext.Provider>
  );
}

export default App;
