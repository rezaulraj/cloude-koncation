import React from "react";
import { useTranslation } from "react-i18next";
import { FaUserClock, FaSearchDollar, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Advantages = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
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
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
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
      backgroundColor: "#0f2529",
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
      color: "#ffffff",
      transition: {
        duration: 0.2,
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
    hover: {
      color: "#46c0dc",
      transition: {
        duration: 0.2,
      },
    },
  };

  const pulseAnimation = {
    animate: {
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const advantages = [
    {
      icon: <FaUserClock />,
      title: t("employeepage.advantage.advantageHeadingStats1"),
      description: t("employeepage.advantage.advantageParaStats1"),
    },
    {
      icon: <FaSearchDollar />,
      title: t("employeepage.advantage.advantageHeadingStats2"),
      description: t("employeepage.advantage.advantageParaStats2"),
    },
    {
      icon: <FaClock />,
      title: t("employeepage.advantage.advantageHeadingStats3"),
      description: t("employeepage.advantage.advantageParaStats3"),
    },
  ];

  return (
    <section className="py-20 bg-[#F4F4F2] relative overflow-hidden" ref={ref}>
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-secondary/10 rounded-full blur-xl" />

      <div className="container mx-auto max-w-6xl px-4">
        <motion.h2
          className="lg:text-[48px] text-secondary md:text-4xl font-bold text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {t("employeepage.advantage.advantageTopHeading")}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-start cursor-pointer relative overflow-hidden"
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

              <motion.div className="flex justify-center mb-6 relative z-10">
                <motion.div
                  className="bg-secondary p-4 rounded-full"
                  variants={iconContainerVariants}
                  whileHover="hover"
                >
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="text-primary text-3xl"
                  >
                    {advantage.icon}
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.h3
                className="lg:text-[21px] md:text-2xl font-display font-medium mb-4 relative z-10"
                variants={textVariants}
                whileHover="hover"
              >
                {advantage.title}
              </motion.h3>

              <motion.p
                className="text-gray-600 text-[14px] font-sans leading-relaxed relative z-10"
                variants={textVariants}
                transition={{ delay: 0.1 }}
                whileHover={{
                  color: "#4b5563",
                  transition: { duration: 0.2 },
                }}
              >
                {advantage.description}
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

export default Advantages;
