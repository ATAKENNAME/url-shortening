import React from "react";
import NavbarIntro from "./NavbarIntro";
import Shorten from "./Shorten";
import Stat from "./Stat";
import BoostBox from "./BoostBox";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavbarIntro />
      <Shorten />
      <Stat />
      <BoostBox />
      <Footer />
    </div>
  );
}

export default App;
