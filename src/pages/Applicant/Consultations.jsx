import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaRegComments,
  FaPencilAlt,
  FaLinkedin,
  FaIdBadge,
  FaUsers,
  FaQuestionCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Consultations = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  const items = [
    {
      icon: <FaRegComments className="text-white text-2xl" />,
      title: t("applicant.consultation.consltationService1"),
    },
    {
      icon: <FaPencilAlt className="text-white text-2xl" />,
      title: t("applicant.consultation.consltationService2"),
    },
    {
      icon: <FaLinkedin className="text-white text-2xl" />,
      title: t("applicant.consultation.consltationService3"),
    },
    {
      icon: <FaIdBadge className="text-white text-2xl" />,
      title: t("applicant.consultation.consltationService4"),
    },
    {
      icon: <FaUsers className="text-white text-2xl" />,
      title: t("applicant.consultation.consltationService5"),
    },
    {
      icon: <FaQuestionCircle className="text-white text-2xl" />,
      title: t("applicant.consultation.consltationService6"),
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
      scale: 0.8,
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
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
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
      backgroundColor: "#1e40af",
      transition: {
        duration: 0.3,
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
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      color: "#1e40af",
      transition: {
        duration: 0.2,
      },
    },
  };

  const pulseGlow = {
    animate: {
      boxShadow: [
        "0 0 0 0 rgba(221, 5, 37, 0.4)",
        "0 0 0 10px rgba(221, 5, 37, 0)",
        "0 0 0 0 rgba(221, 5, 37, 0)",
      ],
    },
  };

  return (
    <section className="py-20 bg-[#F4F4F2]" ref={ref}>
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-center lg:text-[48px] md:text-2xl font-semibold text-gray-800 mb-12"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {t("applicant.consultation.consltationHeading")}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-sm rounded-md p-6 flex flex-col items-start text-start cursor-pointer relative overflow-hidden"
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
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 relative z-10"
                variants={iconContainerVariants}
                whileHover="hover"
                animate={{
                  boxShadow: [
                    "0 4px 12px rgba(221, 5, 37, 0.3)",
                    "0 4px 20px rgba(221, 5, 37, 0.5)",
                    "0 4px 12px rgba(221, 5, 37, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.4 },
                  }}
                >
                  {item.icon}
                </motion.div>
              </motion.div>

              <motion.p
                className="text-gray-800 font-medium relative z-10"
                variants={textVariants}
                whileHover="hover"
              >
                {item.title}
              </motion.p>

              <motion.div
                className="absolute bottom-0 left-0 w-0 h-1 bg-primary"
                whileHover={{
                  width: "100%",
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              />

              <motion.div
                className="absolute top-2 right-2 w-3 h-3 bg-primary/30 rounded-full"
                whileHover={{
                  scale: 2,
                  opacity: 0,
                  transition: { duration: 0.5 },
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="absolute left-10 top-1/4 w-20 h-20 bg-primary/10 rounded-full blur-xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-10 bottom-1/4 w-16 h-16 bg-secondary/10 rounded-full blur-xl"
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </section>
  );
};

export default Consultations;
