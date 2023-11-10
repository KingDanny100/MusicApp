import React from "react"
import Navbar from "./Components/NavBar/Navbar"
import Home from "./Components/Home/Home"
import Play from "./Components/Play/Play"
import { MyContext } from "./Data"
import { Adverts, data } from "./Data"
import Cover from "./Components/Cover/Cover"
import BackgroundPlay from "./Components/BackgroundPlay/BackgroundPlay"



function App() {

  return (
  <React.Fragment>
    <MyContext.Provider value={data}>
      <Cover />
      <Navbar />
      <Home />
      <BackgroundPlay />
      <Play />
    </MyContext.Provider>
  </React.Fragment>
  )
}

export default App
