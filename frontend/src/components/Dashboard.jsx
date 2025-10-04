import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Stats from "./Stats";
import MissionVision from "./MissionVision";
import Values from "./Values";
import AccountAccess from "./AccountAccess";
import Footer from "./Footer";

function Dashboard() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <MissionVision />
      <Values />
      <AccountAccess />
      <Footer />
    </>
  );
}

export default Dashboard;
