import React from "react";
import { useTranslation } from "react-i18next";
import { FaHandshake, FaMedal, FaSyncAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WhatValues = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const values = [
    {
      icon: <FaMedal className="w-6 h-6 text-white" />,
      title: t("about.whatValue.valueStatsTitle1"),
      description: t("about.whatValue.valueStatsDescription1"),
    },
    {
      icon: <FaSyncAlt className="w-6 h-6 text-white" />,
      title: t("about.whatValue.valueStatsTitle2"),
      description: t("about.whatValue.valueStatsDescription2"),
    },
    {
      icon: <FaHandshake className="w-6 h-6 text-white" />,
      title: t("about.whatValue.valueStatsTitle3"),
      description: t("about.whatValue.valueStatsDescription3"),
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
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
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const iconContainerVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      backgroundColor: "#dd0525",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const pulseAnimation = {
    animate: {
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-10 bg-[#F4F4F2] relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 bg-primary/10 rounded-full blur-lg"
        variants={pulseAnimation}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-20 w-12 h-12 bg-secondary/10 rounded-full blur-lg"
        variants={pulseAnimation}
        animate="animate"
        transition={{ delay: 1.5 }}
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h2
          className="lg:text-[48px] md:text-3xl font-bold text-center mb-12 text-secondary font-sans"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {t("about.whatValue.valueHeading")}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md flex flex-col items-start text-start cursor-pointer relative overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0"
                whileHover={{
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
              />

              <motion.div
                className="mb-4 p-4 bg-[#46C0DC] rounded-full relative z-10"
                variants={iconContainerVariants}
                whileHover="hover"
              >
                <motion.div variants={iconVariants} whileHover="hover">
                  {value.icon}
                </motion.div>
              </motion.div>

              <motion.h3
                className="text-xl font-semibold mb-4 text-gray-800 relative z-10"
                variants={textVariants}
                transition={{ delay: 0.1 }}
              >
                {value.title}
              </motion.h3>

              <motion.p
                className="text-gray-600 leading-relaxed relative z-10"
                variants={textVariants}
                transition={{ delay: 0.2 }}
              >
                {value.description}
              </motion.p>

              <motion.div
                className="absolute bottom-0 left-0 w-0 h-1 bg-primary"
                whileHover={{
                  width: "100%",
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              />

              <motion.div
                className="absolute top-3 right-3 w-2 h-2 bg-primary/50 rounded-full"
                whileHover={{
                  scale: 3,
                  opacity: 0,
                  transition: { duration: 0.5 },
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatValues;
