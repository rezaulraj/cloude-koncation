import React, { useState } from "react";
import ModeForm from "../../components/ModeForm";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Professional = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const buttonVariants = {
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
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#1a365d",
      boxShadow: "0 15px 35px rgba(221, 5, 37, 0.3)",
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

  const backgroundPulse = {
    animate: {
      background: [
        "linear-gradient(45deg, #F4F4F2 0%, #f8fafc 50%, #F4F4F2 100%)",
        "linear-gradient(45deg, #F4F4F2 0%, #ffffff 50%, #F4F4F2 100%)",
        "linear-gradient(45deg, #F4F4F2 0%, #f8fafc 50%, #F4F4F2 100%)",
      ],
    },
  };

  const pulseAnimation = {
    animate: {
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const scalePulse = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className="py-20 relative overflow-hidden"
      ref={ref}
      variants={backgroundPulse}
      animate="animate"
      transition={{ duration: 6, repeat: Infinity }}
    >
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        variants={pulseAnimation}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 bg-secondary/10 rounded-full blur-xl"
        variants={pulseAnimation}
        animate="animate"
        transition={{ delay: 1.5 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary/5 rounded-full blur-lg"
        variants={pulseAnimation}
        animate="animate"
        transition={{ delay: 1 }}
      />

      <div className="container max-w-7xl mx-auto text-center px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <motion.h2
            className="text-[33px] font-medium font-sans text-secondary"
            variants={titleVariants}
          >
            {t("employeepage.professional.professionalHeading")}
          </motion.h2>

          <motion.div
            variants={buttonVariants}
            // whileHover="hover"
            whileTap="tap"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="text-[20px] cursor-pointer font-bold font-sans text-white bg-primary px-10 py-3 rounded-4xl mt-5 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{
                  x: "200%",
                  transition: { duration: 0.6, ease: "easeInOut" },
                }}
              />

              <span className="relative z-10">
                {t("employeepage.professional.professionalButton")}
              </span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[
            t("employeepage.professional.stats1"),
            t("employeepage.professional.stats2"),
            t("employeepage.professional.stats3"),
          ].map((text, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-2"
              variants={scalePulse}
              animate="animate"
              transition={{ delay: index * 0.5 }}
            >
              <motion.div
                className="w-2 h-2 bg-primary rounded-full"
                variants={pulseAnimation}
                animate="animate"
              />
              <span className="text-sm text-gray-600 font-medium">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ModeForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.section>
  );
};

export default Professional;
