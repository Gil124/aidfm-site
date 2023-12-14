import React from "react";
import Header from "../components/Header/Header";
import HomeServices from "../components/HomeService/HomeServices";
import HomeNumbers from "../components/HomeNumb/HomeNumbers";
import HomeProjects from "../components/HomeProjects/HomeProjects";

function HomePage() {
  return (
    <>
      <Header />
      <HomeServices />
      <HomeNumbers />
      <HomeProjects />
    </>
  );
}

export default HomePage;
