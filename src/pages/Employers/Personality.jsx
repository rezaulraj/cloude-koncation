import React from "react";
import { useTranslation } from "react-i18next";
import { FaSearchDollar } from "react-icons/fa";
const Personality = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="lg:text-[48px]  text-secondary md:text-4xl font-bold text-center mb-16">
          {t("employeepage.parsonality.parsonalityHeading")}
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-md text-start hover:border border-secondary cursor-pointer">
          <div className="flex justify-start items-start mb-6">
            <div className="bg-secondary p-4 rounded-full">
              <FaSearchDollar className="text-primary text-3xl" />
            </div>
          </div>

          <p className="text-gray-600 text-[14px] font-sans">
            {t("employeepage.parsonality.parsonalityPara")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Personality;
