import React from "react";
import EmployHero from "./EmployHero";
import Headhunting from "./Headhunting";
import Success from "./Success";
import Advantages from "./Advantages";
import Professional from "./Professional";
import WorkRecrui from "./WorkRecrui";
import SuccessSection from "../../components/SuccessSection";
import Personality from "./Personality";
import Banner from "../../components/Banner";
import { useTranslation } from "react-i18next";

const EmployerPage = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <EmployHero />
      <Headhunting />
      <Success />
      <Advantages />
      <Professional />
      <WorkRecrui />
      <SuccessSection
        title={t("employeepage.successSection.title")}
        description={t("employeepage.successSection.description")}
        image="/images/employee2.png"
        imageAlt="Bob"
      />
      <Personality />
      <Banner />
    </div>
  );
};

export default EmployerPage;
