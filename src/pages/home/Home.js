import React from "react";
import { Sidebar, Navbar } from "../../components";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        Home contents
      </div>
    </div>
  );
}

export default Home;
