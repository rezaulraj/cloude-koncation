import { FaPlayCircle } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.6,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const playButtonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: { scale: 0.95 },
  };

  const arrowVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        {/* Animated Background Image */}
        <motion.div
          className="absolute inset-0 z-0"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src="/images/banner.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Content */}
        <div className="container max-w-7xl lg:mt-0 md:mt-0 mt-20 sm:mt-20 mx-auto relative z-10 h-full flex justify-between w-full px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-center w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Text Content */}
            <div className="col-span-1 w-full">
              <motion.span
                className="text-[17px] text-primary font-normal font-sans block"
                variants={itemVariants}
              >
                {t("homepage.hero.heroTopTitle")}
              </motion.span>

              <motion.h2
                className="text-[52px] leading-[70px] font-bold font-sans mt-4 text-secondary"
                variants={itemVariants}
              >
                {t("homepage.hero.heroBigTitle")}
              </motion.h2>

              <motion.p
                className="text-[16px] text-secondary text-normal font-sans mt-4"
                variants={itemVariants}
              >
                {t("homepage.hero.heropara1")}{" "}
                <strong>{t("homepage.hero.heropara2")}</strong>{" "}
                {t("homepage.hero.heropara3")}
              </motion.p>

              <motion.div variants={itemVariants} className="mt-5">
                <a
                  href="#brand"
                  className="text-primary font-semibold font-sans block"
                >
                  <motion.div
                    variants={arrowVariants}
                    animate="animate"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IoArrowDownCircleOutline className="text-6xl" />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            {/* Play Button */}
            <motion.div
              className="col-span-1 flex justify-center"
              variants={itemVariants}
            >
              <motion.button
                className="cursor-pointer"
                onClick={() => setIsOpen(true)}
                variants={playButtonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <FaPlayCircle className="text-6xl text-primary" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-black rounded-lg overflow-hidden w-full max-w-7xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute cursor-pointer top-4 right-4 text-white text-2xl z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>

              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://res.cloudinary.com/dtw7qhd69/video/upload/v1757504655/Cloud_Konection_xdkxpe.mp4"
                  title="video player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
