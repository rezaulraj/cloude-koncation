import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const OurClient = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  // Animation variants
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
    hidden: { opacity: 0, y: 40 },
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
      y: 60,
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
      y: -10,
      scale: 1.02,
      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const starVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
        staggerChildren: 0.1,
      },
    },
  };

  const starItemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
    pan: {
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="relative py-20 bg-fixed bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: "url('/images/banner.png')" }}
      variants={backgroundVariants}
      initial="hidden"
      animate={isInView ? ["visible", "pan"] : "hidden"}
      ref={ref}
    >
      {/* Animated Overlay */}
      <motion.div
        className="absolute inset-0 bg-white/30 z-0"
        variants={overlayVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          className="flex flex-col justify-center items-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header Text */}
          <motion.span
            className="text-[17px] text-primary font-normal font-sans"
            variants={textVariants}
          >
            {t("homepage.ourCliend.cliendTopHeading")}
          </motion.span>

          <motion.h2
            className="text-[52px] font-bold font-sans mt-4 text-secondary leading-snug"
            variants={textVariants}
          >
            {t("homepage.ourCliend.cliendHeading1")} <br />{" "}
            {t("homepage.ourCliend.cliendHeading2")}
          </motion.h2>

          {/* First Testimonial Card */}
          <motion.div
            className="bg-white w-full text-start p-10 max-w-5xl rounded-4xl shadow-sm lg:mt-20 md:mt-10 sm:mt-5 mt-5 cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.h1
              className="text-2xl font-bold text-gray-800 mb-4"
              variants={textVariants}
            >
              {t("homepage.ourCliend.cliendHeadhuntingHead")}
            </motion.h1>

            <motion.div
              className="flex items-start mb-4"
              variants={starVariants}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.span
                  key={star}
                  className="text-primary text-xl"
                  variants={starItemVariants}
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  ★
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="space-y-4 text-gray-700"
              variants={containerVariants}
            >
              <motion.p
                className="text-heading text-sm font-bold"
                variants={paragraphVariants}
              >
                {t("homepage.ourCliend.cliendHeadhuntingPara")}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Second Testimonial Card */}
          <motion.div
            className="bg-white w-full text-start p-10 max-w-5xl rounded-4xl shadow-sm lg:mt-20 md:mt-10 sm:mt-5 mt-5 cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
            transition={{ delay: 0.2 }}
          >
            <motion.h1
              className="text-2xl font-bold text-gray-800 mb-4"
              variants={textVariants}
            >
              {t("homepage.ourCliend.clientRecuitHead")}
            </motion.h1>

            <motion.div
              className="flex items-start mb-4"
              variants={starVariants}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.span
                  key={star}
                  className="text-primary text-xl"
                  variants={starItemVariants}
                  whileHover={{ scale: 1.3, rotate: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  ★
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="space-y-4 text-gray-700"
              variants={containerVariants}
            >
              <motion.p
                className="text-heading text-sm font-bold"
                variants={paragraphVariants}
              >
                {t("homepage.ourCliend.clientRecuitPara")}
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurClient;
