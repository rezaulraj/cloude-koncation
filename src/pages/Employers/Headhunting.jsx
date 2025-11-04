import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Headhunting = () => {
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

  const contentVariants = {
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
      scale: 0.8,
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
      scale: 1.1,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const imageContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const glowEffect = {
    hover: {
      boxShadow: "0 0 30px rgba(221, 5, 37, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
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
    <section className="py-20 bg-[#F4F4F2] relative overflow-hidden" ref={ref}>
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="flex flex-col justify-center items-start"
            variants={contentVariants}
          >
            <motion.span
              className="text-[22px] text-primary tracking-wider font-normal font-sans block mb-2"
              variants={textVariants}
              whileHover={textColorHover}
            >
              {t("employeepage.headHunting.headHuntingTopHeading")}
            </motion.span>

            <motion.h2
              className="text-[52px] font-medium font-sans mt-4 text-secondary leading-tight"
              variants={textVariants}
              transition={{ delay: 0.1 }}
              whileHover={textColorHover}
            >
              {t("employeepage.headHunting.headHuntingHeading")}
            </motion.h2>
            <motion.div
              className="flex items-center space-x-3 mt-6"
              variants={textVariants}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="w-16 h-0.5 bg-gradient-to-r from-primary to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </motion.div>
            <motion.p
              className="text-[14px] text-secondary text-normal font-sans mt-4 leading-relaxed max-w-lg"
              variants={textVariants}
              transition={{ delay: 0.2 }}
              whileHover={{
                color: "#374151",
                transition: { duration: 0.3 },
              }}
            >
              {t("employeepage.headHunting.headHuntingPara")}
            </motion.p>
          </motion.div>

          <motion.div
            className="flex justify-center items-center relative"
            variants={imageContainerVariants}
            whileHover="hover"
          >
            <motion.div
              className="absolute inset-0 flex justify-center items-center"
              variants={roundImageVariants}
              animate={isInView ? ["visible", "rotate"] : "hidden"}
            >
              <img
                src="/images/round.png"
                alt="Background"
                width={500}
                height={500}
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="relative z-10"
              variants={mainImageVariants}
              whileHover={glowEffect}
            >
              <div className="relative aspect-square w-80 h-80 rounded-4xl overflow-hidden bg-white shadow-lg">
                <img
                  src="/images/HH-min.jpg"
                  alt="Headhunting"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />

                <div className="absolute inset-0 bg-primary/0 hover:bg-primary/10 transition-all duration-500" />
              </div>

              <motion.div
                className="absolute top-2 right-2 w-6 h-6 bg-primary/30 rounded-full"
                variants={scalePulse}
                animate="animate"
              />
              <motion.div
                className="absolute bottom-2 left-2 w-4 h-4 bg-secondary/30 rounded-full"
                variants={scalePulse}
                animate="animate"
                transition={{ delay: 1 }}
              />
            </motion.div>

            <div className="absolute w-96 h-96 border border-primary/20 rounded-4xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Headhunting;
