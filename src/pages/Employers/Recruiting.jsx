import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Recruiting = () => {
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
      opacity: 1,
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
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-secondary/10 rounded-full blur-xl" />

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
              className="text-[17px] text-primary font-normal font-sans block mb-2"
              variants={textVariants}
              whileHover={textColorHover}
            >
              Recruiting
            </motion.span>

            <motion.h2
              className="text-[52px] font-medium font-sans mt-4 text-secondary leading-tight mb-6"
              variants={textVariants}
              transition={{ delay: 0.1 }}
              whileHover={textColorHover}
            >
              Why Headhunting Matters for Your Success
            </motion.h2>

            <motion.p
              className="text-[14px] text-secondary text-normal font-sans leading-relaxed max-w-lg"
              variants={textVariants}
              transition={{ delay: 0.2 }}
            >
              In today's competitive labour market, attracting and retaining top
              performers is vital. Many of the most talented professionals are
              not actively seeking new roles. Through our headhunting services,{" "}
              <motion.strong
                className="text-primary"
                whileHover={{
                  color: "#1a365d",
                  transition: { duration: 0.3 },
                }}
              >
                Cloud Konektion
              </motion.strong>{" "}
              enables you to reach beyond traditional channels and connect
              directly with this exceptional talent pool.
            </motion.p>

            <motion.div
              className="w-full h-1 bg-gray-200 rounded-full mt-6 overflow-hidden max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
              />
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 mt-6"
              variants={textVariants}
              transition={{ delay: 0.3 }}
            >
              <motion.div className="flex space-x-2">
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
              </motion.div>

              <motion.span
                className="text-sm text-primary font-medium"
                variants={pulseAnimation}
                animate="animate"
              >
                ✓ Proven Results
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center items-center relative"
            variants={imageContainerVariants}
          >
            <motion.div
              className="flex justify-center items-center"
              variants={roundImageVariants}
              animate={isInView ? ["visible", "rotate"] : "hidden"}
            >
              <img
                src="/images/round.png"
                alt="Headhunting"
                width={600}
                height={600}
                className="object-cover max-w-[400px] h-auto"
              />
            </motion.div>

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
        </motion.div>

        <motion.div
          className="flex justify-center space-x-8 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {["Quality", "Expertise", "Results"].map((text, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={scalePulse}
              animate="animate"
              transition={{ delay: index * 0.5 }}
            >
              <motion.div
                className="w-3 h-3 bg-primary rounded-full mx-auto mb-2"
                variants={pulseAnimation}
                animate="animate"
              />
              <span className="text-sm text-gray-600 font-medium">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Recruiting;
