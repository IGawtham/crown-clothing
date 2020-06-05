import React from "react";
import "./Home.scss";
import Directory from "../components/directory/directory";
function Home(props) {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}

export default Home;
