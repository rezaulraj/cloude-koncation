import React from "react";
import { TiMessages } from "react-icons/ti";
import { FaPen, FaCalendarAlt, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Service = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const roundImageVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "backOut",
      },
    },
    rotate: {
      rotate: 360,
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#1a365d",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
      },
    },
  };

  const numberVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-20 bg-[#F4F4F2]" ref={ref}>
      <div className="container max-w-7xl mx-auto px-4 mt-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column - Content */}
          <div>
            <div className="flex flex-col justify-center items-start">
              <motion.span
                className="text-[17px] text-primary font-normal font-sans"
                variants={textVariants}
              >
                {t("homepage.service.serviceTopHeading")}
              </motion.span>

              <motion.h2
                className="text-[52px] font-bold font-sans mt-4 text-secondary leading-snug"
                variants={textVariants}
              >
                {t("homepage.service.serviceHeading1")} <br />{" "}
                {t("homepage.service.serviceHeading2")}
              </motion.h2>

              <motion.p
                className="text-[14px] text-secondary text-normal font-sans mt-4 max-w-md"
                variants={textVariants}
              >
                {t("homepage.service.servicePara")}
              </motion.p>
            </div>

            <motion.div
              variants={buttonVariants}
              // whileHover="hover"
              whileTap="tap"
            >
              <Link to="/applicants">
                <button className="bg-primary text-white text-[16px] font-sans cursor-pointer rounded-full px-10 py-3 flex justify-center items-center mt-5 hover:bg-secondary duration-300">
                  {t("homepage.service.serviceButton")}
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Service Cards */}
          <div className="relative flex justify-center items-center">
            {/* Rotating Background Circle */}
            <motion.div
              className="absolute inset-0 z-0 flex justify-center items-center max-w-[500px] mx-auto"
              variants={roundImageVariants}
              animate={isInView ? ["visible", "rotate"] : "hidden"}
            >
              <img
                src="/images/round.png"
                alt="Applicants"
                width={600}
                height={600}
                className="object-cover"
              />
            </motion.div>

            {/* Service Cards Grid */}
            <motion.div
              className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[550px]"
              variants={containerVariants}
            >
              {/* Interview Service Card */}
              <motion.div
                className="bg-white p-6 shadow-md rounded-2xl hover:shadow-xl duration-300 cursor-pointer"
                variants={serviceCardVariants}
                whileHover="hover"
              >
                <motion.div
                  className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full mb-4"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <TiMessages size={20} />
                </motion.div>
                <h3 className="text-lg font-semibold text-secondary">
                  {t("homepage.service.servicesInterviewheading")}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {t("homepage.service.serviceInterviewPara")}
                </p>
              </motion.div>

              {/* CV Service Card */}
              <motion.div
                className="bg-white p-6 shadow-md rounded-2xl hover:shadow-xl duration-300 cursor-pointer"
                variants={serviceCardVariants}
                whileHover="hover"
                transition={{ delay: 0.1 }}
              >
                <motion.div
                  className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full mb-4"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <FaPen size={18} />
                </motion.div>
                <h3 className="text-lg font-semibold text-secondary">
                  {t("homepage.service.serviceCvHeading")}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {t("homepage.service.serviceCvPara")}
                </p>
              </motion.div>

              {/* Labor Service Card */}
              <motion.div
                className="bg-white p-6 shadow-md rounded-2xl hover:shadow-xl duration-300 cursor-pointer"
                variants={serviceCardVariants}
                whileHover="hover"
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full mb-4"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <FaCalendarAlt size={18} />
                </motion.div>
                <h3 className="text-lg font-semibold text-secondary">
                  {t("homepage.service.serviceLaborHeading")}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {t("homepage.service.serviceLaborPara")}
                </p>
              </motion.div>

              {/* Personal Service Card */}
              <motion.div
                className="bg-white p-6 shadow-md rounded-2xl hover:shadow-xl duration-300 cursor-pointer"
                variants={serviceCardVariants}
                whileHover="hover"
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full mb-4"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <FaQuestionCircle size={18} />
                </motion.div>
                <h3 className="text-lg font-semibold text-secondary">
                  {t("homepage.service.serviceParsonalHeading")}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {t("homepage.service.serviceParsonalPara")}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="lg:mt-20 md:mt-10 mt-5 bg-[#192C33] rounded-4xl w-full overflow-hidden"
          variants={statsContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4 p-10">
            {/* Stat 1 */}
            <motion.div
              variants={statItemVariants}
              whileHover="hover"
              className="text-center"
            >
              <motion.h2
                className="text-[40px] font-bold font-sans text-white"
                variants={numberVariants}
              >
                1
              </motion.h2>
              <p className="text-[16px] font-bold font-sans text-white">
                {t("homepage.service.serviceStat1")}
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              variants={statItemVariants}
              whileHover="hover"
              className="text-center"
              transition={{ delay: 0.1 }}
            >
              <motion.h2
                className="text-[40px] font-bold font-sans text-white"
                variants={numberVariants}
              >
                300
              </motion.h2>
              <p className="text-[16px] font-bold font-sans text-white">
                {t("homepage.service.serviceStat2")}
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              variants={statItemVariants}
              whileHover="hover"
              className="text-center"
              transition={{ delay: 0.2 }}
            >
              <motion.h2
                className="text-[40px] font-bold font-sans text-white"
                variants={numberVariants}
              >
                93%
              </motion.h2>
              <p className="text-[16px] font-bold font-sans text-white">
                {t("homepage.service.serviceStat3")}
              </p>
            </motion.div>

            {/* Stat 4 */}
            <motion.div
              variants={statItemVariants}
              whileHover="hover"
              className="text-center"
              transition={{ delay: 0.3 }}
            >
              <motion.h2
                className="text-[40px] font-bold font-sans text-white"
                variants={numberVariants}
              >
                10+
              </motion.h2>
              <p className="text-[16px] font-bold font-sans text-white">
                {t("homepage.service.serviceStat4")}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
