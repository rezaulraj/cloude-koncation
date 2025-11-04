import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDoneOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Banner = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

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

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
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

  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      x: 10,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const checkIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#1a365d",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  return (
    <section className="py-20 bg-[#F4F4F2]" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <motion.div
            className="col-span-7"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.img
              src="/images/bannerb.png"
              alt="Banner"
              width={500}
              height={500}
              className="object-cover rounded-r-4xl w-full h-full"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>

          <motion.div
            className="col-span-5 px-4"
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="flex flex-col justify-center items-start"
              variants={containerVariants}
            >
              <motion.h5
                className="text-[17px] font-bold font-sans mt-4 text-secondary"
                variants={textVariants}
              >
                {t("homepage.banner.bannerHeading")}
              </motion.h5>

              <motion.p
                className="text-[17px] text-secondary text-normal font-sans mt-4"
                variants={textVariants}
              >
                {t("homepage.banner.bannerPara1")}{" "}
                <strong>{t("homepage.banner.bannerPara2")}</strong>{" "}
                {t("homepage.banner.bannerPara3")}
              </motion.p>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 w-full"
                variants={gridContainerVariants}
              >
                <motion.div
                  variants={featureItemVariants}
                  whileHover="hover"
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="flex justify-center items-center w-6 h-6 rounded-full bg-primary"
                      variants={checkIconVariants}
                      whileHover="hover"
                    >
                      <MdOutlineDoneOutline size={10} className="text-white" />
                    </motion.div>
                    <h3 className="text-[14px] font-bold font-sans text-secondary">
                      {t("homepage.banner.bannerSecHeading")}
                    </h3>
                  </div>
                </motion.div>

                <motion.div
                  variants={featureItemVariants}
                  whileHover="hover"
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="flex justify-center items-center w-6 h-6 rounded-full bg-primary"
                      variants={checkIconVariants}
                      whileHover="hover"
                    >
                      <MdOutlineDoneOutline size={10} className="text-white" />
                    </motion.div>
                    <h3 className="text-[14px] font-bold font-sans text-secondary">
                      {t("homepage.banner.bannerThiHeading")}
                    </h3>
                  </div>
                </motion.div>

                <motion.div
                  variants={featureItemVariants}
                  whileHover="hover"
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="flex justify-center items-center w-6 h-6 rounded-full bg-primary"
                      variants={checkIconVariants}
                      whileHover="hover"
                    >
                      <MdOutlineDoneOutline size={10} className="text-white" />
                    </motion.div>
                    <h3 className="text-[14px] font-bold font-sans text-secondary">
                      {t("homepage.banner.bannerFortHeading")}
                    </h3>
                  </div>
                </motion.div>

                <motion.div
                  variants={featureItemVariants}
                  whileHover="hover"
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="flex justify-center items-center w-6 h-6 rounded-full bg-primary"
                      variants={checkIconVariants}
                      whileHover="hover"
                    >
                      <MdOutlineDoneOutline size={10} className="text-white" />
                    </motion.div>
                    <h3 className="text-[14px] font-bold font-sans text-secondary">
                      {t("homepage.banner.bannerFiftHeading")}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                // whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="/about"
                  className="text-[20px] font-bold font-sans text-white bg-primary px-10 py-3 rounded-4xl mt-16 hover:bg-secondary duration-300 block"
                >
                  {t("homepage.banner.bannerLink")}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
