import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AppicantHero = () => {
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

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      y: -15,
      scale: 1.02,
      boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
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
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="py-20 bg-secondary"
      ref={ref}
      variants={backgroundVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span
            className="text-2xl font-bold text-primary block mb-2"
            variants={textVariants}
          >
            {t("applicant.heroApplicant.heroTopHeading")}
          </motion.span>
          <motion.h1
            className="text-4xl font-bold text-white"
            variants={textVariants}
          >
            {t("applicant.heroApplicant.heroHeading")}
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
            <div className="bg-white rounded-4xl pb-10 overflow-hidden shadow-lg">
              <motion.div
                className="overflow-hidden rounded-t-4xl"
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src="/images/find4.png"
                  alt="Employers"
                  width={600}
                  height={600}
                  className="object-cover w-full h-auto"
                />
              </motion.div>
              <motion.div className="px-10 py-5" variants={contentVariants}>
                <motion.h2
                  className="text-[30px] text-secondary font-bold font-sans mb-4"
                  whileHover={{ color: "#3b82f6", x: 5 }}
                >
                  {t("applicant.heroApplicant.heroSubHeading1")}
                </motion.h2>
                <motion.p
                  className="text-secondary text-[14px] font-normal font-sans leading-relaxed"
                  whileHover={{ x: 3 }}
                >
                  {t("applicant.heroApplicant.heroSubPara1")}
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            transition={{ delay: 0.1 }}
            className="cursor-pointer"
          >
            <div className="bg-white rounded-4xl pb-10 overflow-hidden shadow-lg">
              <motion.div
                className="overflow-hidden rounded-t-4xl"
                variants={imageVariants}
                whileHover="hover"
              >
                <img
                  src="/images/find3.png"
                  alt="Employers"
                  width={600}
                  height={600}
                  className="object-cover w-full h-auto"
                />
              </motion.div>
              <motion.div className="px-10 py-5" variants={contentVariants}>
                <motion.h2
                  className="text-[30px] text-secondary font-bold font-sans mb-4"
                  whileHover={{ color: "#3b82f6", x: 5 }}
                >
                  {t("applicant.heroApplicant.heroSubHeading2")}
                </motion.h2>
                <motion.p
                  className="text-secondary text-[14px] font-normal font-sans leading-relaxed"
                  whileHover={{ x: 3 }}
                >
                  {t("applicant.heroApplicant.heroSubPara2")}
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-16 h-16 bg-white/10 rounded-full"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </motion.section>
  );
};

export default AppicantHero;
