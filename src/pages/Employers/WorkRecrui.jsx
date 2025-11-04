import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WorkRecrui = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  // Animation variants - Left/right only, no top/bottom movement
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

  // Left side content - Comes from left only
  const contentVariants = {
    hidden: {
      opacity: 0,
      x: -50, // Small movement from left
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Right side content - Comes from right only
  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 50, // Small movement from right
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const roundImageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 0.6,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    rotate: {
      rotate: 360,
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const mainImageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  const textColorHover = {
    hover: {
      color: "#dd0525",
      transition: {
        duration: 0.3,
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

  const scalePulse = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-20 bg-[#F4F4F2] relative" ref={ref}>
      {/* Static background elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-primary/10 rounded-full blur-lg" />
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-secondary/10 rounded-full blur-lg" />

      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Content Section - Comes from LEFT only */}
          <motion.div
            className="flex flex-col justify-center items-start"
            variants={contentVariants}
          >
            <motion.span
              className="text-[17px] text-primary uppercase font-normal font-sans block mb-2"
              variants={textVariants}
              whileHover={textColorHover}
            >
              {t("employeepage.workRecuit.workRecuitTopHeading")}
            </motion.span>

            <motion.h2
              className="text-[52px] font-medium font-sans mt-4 text-secondary leading-tight mb-6"
              variants={textVariants}
              transition={{ delay: 0.1 }}
              whileHover={textColorHover}
            >
              {t("employeepage.workRecuit.workRecuitHeading")}
            </motion.h2>

            <motion.p
              className="text-[14px] text-secondary text-normal font-sans mt-4 leading-relaxed max-w-lg"
              variants={textVariants}
              transition={{ delay: 0.2 }}
            >
              {t("employeepage.workRecuit.workRecuitPara")}
            </motion.p>
          </motion.div>

          {/* Image Section - Comes from RIGHT only */}
          <motion.div
            className="flex justify-center items-center relative"
            variants={imageVariants}
          >
            {/* Rotating Round Background - Only rotation */}
            <motion.div
              className="absolute flex justify-center items-center"
              style={{ width: "500px", height: "500px" }}
              variants={roundImageVariants}
              animate={isInView ? ["visible", "rotate"] : "hidden"}
            >
              <img
                src="/images/round.png"
                alt="Background"
                width={500}
                height={500}
                className="object-contain w-full h-full"
              />
            </motion.div>

            {/* Main Image Container - No movement */}
            <motion.div
              className="relative z-10"
              style={{ width: "320px", height: "320px" }}
              variants={mainImageVariants}
            >
              <div className="w-full h-full rounded-4xl overflow-hidden bg-white shadow-2xl">
                <img
                  src="/images/Re-min.jpg"
                  alt="Recruitment Process"
                  width={320}
                  height={320}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements - Scale pulse only */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full"
                variants={scalePulse}
                animate="animate"
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/30 rounded-full"
                variants={scalePulse}
                animate="animate"
                transition={{ delay: 1 }}
              />
            </motion.div>

            {/* Outer static ring */}
            <div
              className="absolute border border-primary/20 rounded-4xl"
              style={{ width: "384px", height: "384px" }}
            />
          </motion.div>
        </motion.div>

        {/* Bottom decorative line - Scale only */}
        <motion.div
          className="w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto mt-16"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        />
      </div>
    </section>
  );
};

export default WorkRecrui;
