import React from "react";
import { Sidebar } from "../../components";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">container</div>
    </div>
  );
}

export default Home;
