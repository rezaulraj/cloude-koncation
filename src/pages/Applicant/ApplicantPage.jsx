import React from "react";
import AppicantHero from "./AppicantHero";
import Opportunity from "./Opportunity";
import Consultations from "./Consultations";
import Improve from "./Improve";
import Personality from "../Employers/Personality";

const ApplicantPage = () => {
  return (
    <div className="min-h-screen">
      <AppicantHero />
      <Opportunity />
      <Consultations />
      <Improve />
      <Personality />
    </div>
  );
};

export default ApplicantPage;
