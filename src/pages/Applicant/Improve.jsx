import React, { useState } from "react";
import ModeForm from "../../components/ModeForm";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Improve = () => {
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

  const textVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
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
      boxShadow: "0 10px 30px rgba(221, 5, 37, 0.3)",
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
        "linear-gradient(45deg, #F4F4F2 0%, #ffffff 50%, #F4F4F2 100%)",
        "linear-gradient(45deg, #F4F4F2 0%, #f8fafc 50%, #F4F4F2 100%)",
        "linear-gradient(45deg, #F4F4F2 0%, #ffffff 50%, #F4F4F2 100%)",
      ],
    },
  };

  const floatingShapes = {
    animate: {
      y: [0, -10, 0],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
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
        variants={floatingShapes}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 bg-secondary/10 rounded-full blur-xl"
        variants={floatingShapes}
        animate="animate"
        transition={{ delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary/5 rounded-full blur-lg"
        variants={floatingShapes}
        animate="animate"
        transition={{ delay: 1 }}
      />

      <div className="container max-w-6xl mx-auto text-center px-4 space-y-5 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-5"
        >
          <motion.h2
            className="text-[33px] font-medium font-sans text-secondary"
            variants={titleVariants}
          >
            {t("applicant.inprove.inproveHeading")}
          </motion.h2>

          <motion.p
            className="text-[16px] text-center text-secondary text-normal font-sans max-w-2xl mx-auto leading-relaxed"
            variants={textVariants}
            transition={{ delay: 0.2 }}
          >
            {t("applicant.inprove.inporvePara")}
          </motion.p>

          <motion.div
            variants={buttonVariants}
            // whileHover="hover"
            whileTap="tap"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="text-[20px] cursor-pointer font-bold font-sans text-white bg-primary hover:bg-secondary px-10 py-3 rounded-4xl mt-5 relative overflow-hidden hover:scale-105 duration-200 transition-all"
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
                {t("applicant.inprove.inproveButton")}
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      <ModeForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.section>
  );
};

export default Improve;
