import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Employer = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
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
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const experienceCardVariants = {
    hidden: { opacity: 0, scale: 0, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const featureCardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const numberBadgeVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
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

  return (
    <section className="py-20 bg-[#F4F4F2]" ref={ref}>
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column - Images */}
          <div className="relative">
            {/* Rotating Background Circle */}
            <motion.div
              className="inset-0 z-0 absolute flex justify-center items-center max-w-[500px]"
              variants={roundImageVariants}
              animate={isInView ? ["visible", "rotate"] : "hidden"}
            >
              <img
                src="/images/round.png"
                alt="Employers"
                width={600}
                height={600}
                className="object-cover"
              />
            </motion.div>

            {/* Main Image */}
            <motion.div
              className="relative z-10 max-w-[500px] h-auto"
              variants={imageVariants}
            >
              <img
                src="/images/employe.png"
                alt="Employers"
                width={300}
                height={300}
                className="object-cover ml-20"
              />
            </motion.div>

            {/* Experience Card */}
            <motion.div
              className="absolute rounded-4xl flex flex-col justify-center items-center bottom-0 left-0 p-5 z-10 w-48 h-48 bg-primary"
              variants={experienceCardVariants}
              whileHover="hover"
            >
              <motion.h2
                className="text-[40px] font-bold font-sans text-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                10 +
              </motion.h2>
              <motion.p
                className="text-[16px] font-bold font-sans text-white text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {t("homepage.employer.employerExaperence")}
              </motion.p>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center items-start">
            <motion.span
              className="text-[17px] text-primary font-normal font-sans"
              variants={textVariants}
            >
              {t("homepage.employer.employerHeading1")}
            </motion.span>

            <motion.h2
              className="text-[52px] font-bold font-sans mt-4 text-secondary"
              variants={textVariants}
            >
              {t("homepage.employer.employerHeading2")}
            </motion.h2>

            <motion.p
              className="text-[14px] text-secondary text-normal font-sans mt-4"
              variants={textVariants}
            >
              {t("homepage.employer.employerparagraph")}
            </motion.p>

            <div className="w-full">
              {/* Feature Card 1 */}
              <motion.div
                className="bg-white p-4 flex items-start rounded-2xl w-full mt-5 shadow-lg"
                variants={featureCardVariants}
                whileHover="hover"
              >
                <motion.span
                  className="bg-primary text-white rounded-full w-10 h-10 flex justify-center items-center flex-shrink-0"
                  variants={numberBadgeVariants}
                >
                  01
                </motion.span>
                <div className="max-w-[400px] ml-4">
                  <h5 className="text-[20px] font-bold font-sans">
                    {t("homepage.employer.section1employerHeading1")}
                  </h5>
                  <p className="text-[14px] text-secondary text-normal font-sans mt-4">
                    {t("homepage.employer.section1employeroara")}
                  </p>
                </div>
              </motion.div>

              {/* Feature Card 2 */}
              <motion.div
                className="bg-white p-4 flex rounded-2xl items-start w-full mt-5 shadow-lg"
                variants={featureCardVariants}
                whileHover="hover"
                transition={{ delay: 0.1 }}
              >
                <motion.span
                  className="bg-primary text-white rounded-full w-10 h-10 flex justify-center items-center flex-shrink-0"
                  variants={numberBadgeVariants}
                >
                  02
                </motion.span>
                <div className="max-w-[400px] ml-4">
                  <h5 className="text-[20px] font-bold font-sans">
                    {t("homepage.employer.section2employerHeading1")}
                  </h5>
                  <p className="text-[14px] text-secondary text-normal font-sans mt-4">
                    {t("homepage.employer.section2employeroara")}
                  </p>
                </div>
              </motion.div>

              {/* Button */}
              <motion.div
                variants={buttonVariants}
                // whileHover="hover"
                whileTap="tap"
              >
                <Link to="/employers">
                  <button className="bg-primary text-white text-[16px] font-sans cursor-pointer rounded-full px-10 py-3 flex justify-center items-center mt-5 duration-300 ">
                    {t("homepage.employer.employerbutton")}
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Employer;
