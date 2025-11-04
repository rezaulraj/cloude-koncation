import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "framer-motion";
import { useRef } from "react";

const brand = [
  "/images/brand1.png",
  "/images/brand2.png",
  "/images/brand3.png",
  "/images/brand5.png",
  "/images/brand6.png",
  "/images/brand7.png",
  "/images/brand8.png",
];

const Brand = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === brand.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleBrands = [];
  for (let i = 0; i < 4; i++) {
    const index = (currentIndex + i) % brand.length;
    visibleBrands.push(brand[index]);
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const brandItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.1,
      y: -5,
      rotateY: 15,
      boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    }),
  };

  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    setPage([currentIndex, currentIndex > page[0] ? 1 : -1]);
  }, [currentIndex]);

  return (
    <section id="brand" className="py-20 bg-[#F4F4F2]" ref={ref} >
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h4
          className="text-secondary text-center text-[26px] font-bold mb-12"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {t("homepage.brand.brandText")}
        </motion.h4>

        <div className="my-8 overflow-hidden">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            >
              {visibleBrands.map((brandImg, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  variants={brandItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="flex items-center justify-center p-6 rounded-2xl bg-primary/50 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  style={{
                    transition: "all 0.3s ease",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.img
                    src={brandImg}
                    alt={`brand ${index + 1}`}
                    width={160}
                    height={100}
                    className="object-contain h-16 md:h-20 transition-all duration-500"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <motion.div
          className="flex justify-center items-center space-x-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {brand.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex % Math.ceil(brand.length / 4)
                  ? "bg-primary scale-125"
                  : "bg-gray-300"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentIndex(index * 4)}
            />
          ))}
        </motion.div>

        {/* Auto-slide progress bar */}
        <motion.div
          className="w-full bg-gray-200 rounded-full h-1 mt-6 max-w-md mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            className="bg-primary h-full rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Brand;
