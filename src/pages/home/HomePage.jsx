import React from "react";
import Hero from "./Hero";
import Brand from "./Brand";
import Finding from "./Finding";
import Employer from "./Employer";
import Service from "./Service";
import OurClient from "./OurClient";
import Competitive from "./Competitive";
import Banner from "../../components/Banner";

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Hero />
      <Brand />
      <Finding />
      <Employer />
      <Service />
      <OurClient />
      <Competitive />
      <Banner />
    </div>
  );
};

export default HomePage;
