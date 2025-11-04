import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Opportunity = () => {
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

  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const gradientBorderVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const imageRevealVariants = {
    hidden: {
      opacity: 0,
      clipPath: "inset(0 100% 0 0)",
    },
    visible: {
      opacity: 1,
      clipPath: "inset(0 0% 0 0)",
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const fadeInWithBlur = {
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

  const scaleOnHover = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const textGlowOnHover = {
    hover: {
      textShadow: "0 0 8px rgba(221, 5, 37, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
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

  return (
    <section className="py-20 bg-[#F4F4F2]" ref={ref}>
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          <motion.div variants={imageContainerVariants}>
            <motion.div
              className="relative p-[3px] rounded-4xl bg-gradient-to-r from-[#dd0525] via-transparent to-[#dd0525]"
              variants={gradientBorderVariants}
              whileHover={scaleOnHover}
            >
              <motion.div
                className="relative aspect-square overflow-hidden rounded-4xl bg-white"
                variants={imageRevealVariants}
              >
                <motion.img
                  src="/images/employee1.png"
                  alt="Bob"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.5 },
                  }}
                />

               
                <motion.div
                  className="absolute inset-0 bg-primary/0 hover:bg-primary/10 transition-all duration-500 rounded-4xl"
                  whileHover={{
                    backgroundColor: "rgba(221, 5, 37, 0.1)",
                  }}
                />
              </motion.div>
            </motion.div>

           
            <motion.div
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/20 rounded-full z-0"
              variants={pulseAnimation}
              animate="animate"
            />
          </motion.div>

          
          <motion.div
            className="flex flex-col justify-center items-start"
            variants={contentVariants}
          >
            <motion.h2
              className="text-[32px] font-medium font-sans mt-4 text-secondary"
              variants={fadeInWithBlur}
              whileHover={textGlowOnHover}
            >
              {t("applicant.opertunity.opertunityHeading")}
            </motion.h2>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mt-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            />
            <motion.p
              className="text-[14px] text-secondary text-normal font-sans mt-4 leading-relaxed"
              variants={fadeInWithBlur}
              transition={{ delay: 0.2 }}
              whileHover={{
                color: "#1f2937",
                transition: { duration: 0.3 },
              }}
            >
              {t("applicant.opertunity.opertunityPara")}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Opportunity;
