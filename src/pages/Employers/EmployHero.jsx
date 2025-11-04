import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const EmployHero = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#1a365d",
      boxShadow: "0 10px 25px rgba(221, 5, 37, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  const textGlow = {
    hover: {
      textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const backgroundPulse = {
    animate: {
      backgroundColor: [
        "rgb(15, 37, 41)",
        "rgb(17, 42, 46)",
        "rgb(15, 37, 41)",
      ],
    },
  };

  return (
    <motion.section
      className="py-20 bg-secondary relative overflow-hidden"
      ref={ref}
      variants={backgroundPulse}
      animate="animate"
      transition={{ duration: 8, repeat: Infinity }}
    >
      <motion.div
        className="absolute top-20 left-20 w-24 h-24 bg-primary/10 rounded-full blur-xl"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-20 h-20 bg-white/5 rounded-full blur-xl"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span
            className="text-2xl font-bold text-primary block"
            variants={headerVariants}
            whileHover={textGlow}
          >
            {t("employeepage.heroEmployee.heroEmployeeTopHeading")}
          </motion.span>
          <motion.h1
            className="lg:text-[48px] md:text-3xl sm:text-2xl font-sans max-w-2xl mt-4 font-bold text-white"
            variants={headerVariants}
            transition={{ delay: 0.1 }}
            whileHover={textGlow}
          >
            {t("employeepage.heroEmployee.heroEmployeeHeading")}
          </motion.h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="cursor-pointer"
          >
            <div className="bg-white p-5 rounded-4xl shadow-lg h-full flex flex-col">
              <motion.div
                className="overflow-hidden rounded-4xl"
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src="/images/employee1.png"
                  alt="Employers"
                  width={600}
                  height={600}
                  className="object-cover w-full max-h-[455px]"
                />
              </motion.div>

              <div className="py-5 flex-grow">
                <motion.h2
                  className="text-[30px] text-secondary font-bold font-sans mb-4"
                  variants={contentVariants}
                  whileHover={{
                    color: "#dd0525",
                    transition: { duration: 0.3 },
                  }}
                >
                  {t("employeepage.heroEmployee.heroHuntingHead")}
                </motion.h2>
                <motion.p
                  className="text-secondary text-[14px] font-normal font-sans leading-relaxed"
                  variants={contentVariants}
                  transition={{ delay: 0.1 }}
                >
                  {t("employeepage.heroEmployee.heroHuntingPara")}
                </motion.p>
              </div>

              <motion.div
                variants={buttonVariants}
                // whileHover="hover"
                whileTap="tap"
              >
                <Link to="/about">
                  <button className="text-[20px] rounded-4xl cursor-pointer font-bold font-sans text-white bg-primary px-10 py-3 w-full hover:bg-secondary hover:scale-105 duration-300 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                      initial={{ x: "-100%" }}
                      whileHover={{
                        x: "200%",
                        transition: { duration: 0.6 },
                      }}
                    />
                    <span className="relative z-10">
                      {t("employeepage.heroEmployee.heroHuntingLink")}
                    </span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
            transition={{ delay: 0.1 }}
            className="cursor-pointer"
          >
            <div className="bg-white p-5 rounded-4xl shadow-lg h-full flex flex-col">
              <motion.div
                className="overflow-hidden rounded-4xl"
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src="/images/employee2.png"
                  alt="Employers"
                  width={600}
                  height={600}
                  className="object-cover w-full h-auto"
                />
              </motion.div>

              <div className="py-5 flex-grow">
                <motion.h2
                  className="text-[30px] text-secondary font-bold font-sans mb-4"
                  variants={contentVariants}
                  whileHover={{
                    color: "#dd0525",
                    transition: { duration: 0.3 },
                  }}
                >
                  {t("employeepage.heroEmployee.heroRecuitHead")}
                </motion.h2>
                <motion.p
                  className="text-secondary text-[14px] font-normal font-sans leading-relaxed"
                  variants={contentVariants}
                  transition={{ delay: 0.1 }}
                >
                  {t("employeepage.heroEmployee.heroRecuitPara")}
                </motion.p>
              </div>

              <motion.div
                variants={buttonVariants}
                // whileHover="hover"
                whileTap="tap"
                transition={{ delay: 0.2 }}
              >
                <Link to="/about">
                  <button className="text-[20px] cursor-pointer rounded-4xl font-bold font-sans text-white bg-primary px-10 py-3 w-full hover:bg-secondary hover:scale-105 duration-300 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                      initial={{ x: "-100%" }}
                      whileHover={{
                        x: "200%",
                        transition: { duration: 0.6 },
                      }}
                    />
                    <span className="relative z-10">
                      {t("employeepage.heroEmployee.heroRecuitLink")}
                    </span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EmployHero;
