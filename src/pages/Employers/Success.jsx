import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Success = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  // Animation variants - No movement that affects layout
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
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const glowEffect = {
    hover: {
      boxShadow: "0 0 25px rgba(221, 5, 37, 0.3)",
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

  const pulseOpacity = {
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
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-20 bg-[#F4F4F2] relative overflow-hidden" ref={ref}>
      {/* Static background elements - no movement */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-primary/10 rounded-full blur-lg" />
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-secondary/10 rounded-full blur-lg" />

      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Image Section - No movement */}
          <motion.div
            className="flex justify-center items-center relative"
            variants={imageContainerVariants}
            whileHover="hover"
          >
            {/* Rotating Round Background - Only rotation, no position change */}
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

            {/* Main Image Container */}
            <motion.div
              className="relative z-10"
              variants={mainImageVariants}
              whileHover={glowEffect}
            >
              <div className="relative aspect-square w-80 h-80 rounded-4xl overflow-hidden bg-white shadow-lg">
                <img
                  src="/images/employee1.png"
                  alt="Success Story"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />

                {/* Static overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 hover:bg-primary/10 transition-all duration-500" />
              </div>

              {/* Decorative elements with scale pulse only */}
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

            {/* Outer static ring */}
            <div className="absolute w-96 h-96 border border-primary/20 rounded-4xl" />
          </motion.div>

          {/* Content Section - No movement */}
          <motion.div
            className="flex flex-col justify-center items-start"
            variants={contentVariants}
          >
            <motion.h2
              className="text-[24px] font-medium font-sans mt-4 text-secondary mb-6"
              variants={textVariants}
              whileHover={textColorHover}
            >
              {t("employeepage.success.successHeading")}
            </motion.h2>

            <motion.p
              className="text-[14px] text-secondary text-normal font-sans leading-relaxed mb-6"
              variants={textVariants}
              transition={{ delay: 0.1 }}
            >
              {t("employeepage.success.successPara1")}{" "}
              <motion.strong
                className="text-primary"
                whileHover={{
                  color: "#1a365d",
                  transition: { duration: 0.3 },
                }}
              >
                {t("employeepage.success.successPara2")}
              </motion.strong>{" "}
              {t("employeepage.success.successPara3")}
            </motion.p>

            {/* Static success indicators */}
            <motion.div
              className="flex items-center space-x-4 mb-8"
              variants={textVariants}
              transition={{ delay: 0.2 }}
            >
              <div className="flex space-x-2">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(221, 5, 37, 0.3)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: item * 0.3,
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.span
                className="text-sm text-primary font-medium"
                variants={pulseOpacity}
                animate="animate"
              >
                ✓ Success Guaranteed
              </motion.span>
            </motion.div>

            {/* Success metrics - No movement */}
            <motion.div
              className="grid grid-cols-3 gap-4 w-full max-w-md"
              variants={textVariants}
              transition={{ delay: 0.3 }}
            >
              {[
                { number: "98%", label: "Success Rate" },
                { number: "24/7", label: "Support" },
                { number: "100+", label: "Clients" },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white rounded-2xl shadow-sm"
                  whileHover={{
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="text-lg font-bold text-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    {metric.number}
                  </motion.div>
                  <div className="text-xs text-gray-600 mt-1">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Success;
