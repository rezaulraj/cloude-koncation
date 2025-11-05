import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const EmployHero = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // Separate refs for each card for individual animations
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const leftCardInView = useInView(leftCardRef, { once: true, threshold: 0.1 });
  const rightCardInView = useInView(rightCardRef, {
    once: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 30,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Enhanced card variants with more dynamic entrance
  const leftCardVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      y: 50,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      y: -10,
      boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const rightCardVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      y: 50,
      rotateY: 15,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.1,
      },
    },
    hover: {
      scale: 1.03,
      y: -10,
      boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  // More dramatic image animations
  const leftImageVariants = {
    hidden: {
      opacity: 0,
      x: -200,
      scale: 0.9,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.08,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const rightImageVariants = {
    hidden: {
      opacity: 0,
      x: 200,
      scale: 0.9,
      rotate: 5,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.1,
      },
    },
    hover: {
      scale: 1.08,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
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
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#1a365d",
      boxShadow: "0 15px 30px rgba(221, 5, 37, 0.4)",
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
      textShadow: "0 0 12px rgba(255, 255, 255, 0.6)",
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
      {/* Background animations */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Left Card - Enhanced animation coming from left */}
          <motion.div
            ref={leftCardRef}
            variants={leftCardVariants}
            initial="hidden"
            animate={leftCardInView ? "visible" : "hidden"}
            whileHover="hover"
            className="cursor-pointer"
          >
            <div className="bg-white p-5 rounded-4xl shadow-lg h-full flex flex-col">
              <motion.div
                className="overflow-hidden rounded-4xl"
                variants={leftImageVariants}
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

              <motion.div variants={buttonVariants} whileTap="tap">
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

          {/* Right Card - Enhanced animation coming from right */}
          <motion.div
            ref={rightCardRef}
            variants={rightCardVariants}
            initial="hidden"
            animate={rightCardInView ? "visible" : "hidden"}
            whileHover="hover"
            className="cursor-pointer"
          >
            <div className="bg-white p-5 rounded-4xl shadow-lg h-full flex flex-col">
              <motion.div
                className="overflow-hidden rounded-4xl"
                variants={rightImageVariants}
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
        </div>
      </div>
    </motion.section>
  );
};

export default EmployHero;
