import React from "react";
import Navbar from "../../landing/navbar/Navbar";
import MainContent from "../../landing/MainContent/MainContent";
import Footer from "../../landing/Footer/Footer";
import Monitored from "../../landing/Monitered/Monitored";
import Card from "../../landing/MonitorCard/Card";
import AdvanceFeatures from "../../landing/AdvanceFeatures/AdvanceFeatures";
import Downtime from "../../landing/Downtime/Downtime";
import KeepUpTime from "../../landing/KeepUpTime/KeepUpTime";
import UptimeStatus from "../../landing/UptimeStatus/UptimeStatus";
import FreeAccount from "../../landing/FreeAccount/FreeAccount";

const Home = () => {
  return (
    <>
      <Navbar />
      <MainContent />
      <Monitored />
      <Card />
      <AdvanceFeatures />
      <Downtime />
      <KeepUpTime />
      <UptimeStatus />
      <FreeAccount />
      <Footer />
    </>
  );
};

export default Home;
