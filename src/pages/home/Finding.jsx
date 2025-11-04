import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Finding = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  // Animation variants - Fast animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Left side content - Comes from left quickly
  const contentVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Images section - Comes from right quickly
  const imagesVariants = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "backOut",
      },
    },
  };

  const roundImageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 0.6,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    rotate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-20 bg-[#F4F4F2] relative" ref={ref}>
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Text Content - Comes from LEFT quickly */}
          <motion.div className="col-span-1 w-full" variants={contentVariants}>
            <motion.span
              className="text-[17px] text-primary font-normal font-sans block"
              variants={textVariants}
            >
              {t("homepage.finding.findTopHeading")}
            </motion.span>

            <motion.h2
              className="text-[52px] leading-[70.5px] font-bold font-sans mt-4 text-secondary"
              variants={textVariants}
            >
              {t("homepage.finding.findBig1Heading")}
            </motion.h2>

            <motion.h5
              className="text-[20px] font-bold font-sans mt-4"
              variants={textVariants}
            >
              {t("homepage.finding.findBig2Heading")}
            </motion.h5>

            <motion.p
              className="text-[14px] text-secondary text-normal font-sans mt-4"
              variants={textVariants}
            >
              <strong>{t("homepage.finding.findParagraph1")}</strong>{" "}
              {t("homepage.finding.findParagraph2")}
            </motion.p>
          </motion.div>

          {/* Images Section - Comes from RIGHT quickly */}
          <motion.div
            className="col-span-1 flex justify-center items-center relative"
            variants={imagesVariants}
          >
            {/* Rotating Round Background */}
            <motion.div
              className="absolute flex justify-center items-center"
              style={{ width: "600px", height: "600px" }}
              variants={roundImageVariants}
              animate={isInView ? ["visible", "rotate"] : "hidden"}
            >
              <img
                src="/images/round.png"
                alt="Background"
                width={600}
                height={600}
                className="object-contain w-full h-full"
              />
            </motion.div>

            {/* Images Container - Appear instantly with scale */}
            <div className="relative z-10 flex lg:flex-row flex-col md:flex-col justify-center items-center space-x-10">
              {/* Large Center Image */}
              <motion.div
                className="relative"
                variants={circleVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-[3px] w-[200px] h-[200px] rounded-[50%] bg-gradient-to-r from-primary via-transparent to-primary">
                  <motion.div
                    className="bg-white rounded-[50%] w-full h-full overflow-hidden"
                    variants={floatingAnimation}
                    animate="animate"
                  >
                    <img
                      src="/Cloud Konektion logo black-01.png"
                      alt="Finding"
                      width={300}
                      height={300}
                      priority
                      className="rounded-full object-cover w-full h-full"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column Images */}
              <div className="flex flex-col space-y-10">
                {/* Top Small Image */}
                <motion.div
                  className="relative"
                  variants={circleVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-[3px] rounded-full bg-gradient-to-r from-primary via-transparent to-primary">
                    <motion.div variants={floatingAnimation} animate="animate">
                      <img
                        src="/images/find2.png"
                        alt="Bob"
                        width={220}
                        height={220}
                        priority
                        className="rounded-full object-cover bg-white"
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Bottom Small Image */}
                <motion.div
                  className="relative"
                  variants={circleVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-[3px] rounded-full bg-gradient-to-r from-primary via-transparent to-primary">
                    <motion.div variants={floatingAnimation} animate="animate">
                      <img
                        src="/images/find3.png"
                        alt="Bob"
                        width={220}
                        height={220}
                        priority
                        className="rounded-full object-cover bg-white"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Finding;
