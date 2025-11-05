import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaBriefcase,
  FaRocket,
  FaUsers,
  FaHeart,
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaGraduationCap,
  FaChevronDown,
  FaGlobe,
  FaLaptopCode,
  FaSmile,
  FaHandshake,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import Calendly from "../../components/Calendly";

const HeroCareer = () => {
  const { t } = useTranslation();
  const [showCalendly, setShowCalendly] = useState(false);
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
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingIcons = [
    {
      Icon: FaBriefcase,
      top: "20%",
      left: "10%",
      delay: 0,
      color: "text-cyan-400",
    },
    {
      Icon: FaRocket,
      top: "60%",
      left: "5%",
      delay: 0.5,
      color: "text-purple-400",
    },
    {
      Icon: FaUsers,
      top: "30%",
      right: "8%",
      delay: 1,
      color: "text-pink-400",
    },
    {
      Icon: FaHeart,
      top: "70%",
      right: "12%",
      delay: 1.5,
      color: "text-red-400",
    },
    {
      Icon: FaStar,
      top: "15%",
      right: "20%",
      delay: 2,
      color: "text-yellow-400",
    },
    {
      Icon: FaGraduationCap,
      top: "80%",
      left: "15%",
      delay: 2.5,
      color: "text-blue-400",
    },
  ];

  const perks = [
    { icon: FaClock, text: t("career.careerstat1"), color: "text-green-400" },
    {
      icon: FaHandshake,
      text: t("career.careerstat2"),
      color: "text-green-400",
    },
    {
      icon: FaChartLine,
      text: t("career.careerstat3"),
      color: "text-blue-400",
    },
    { icon: FaShieldAlt, text: t("career.careerstat4"), color: "text-red-400" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-400 to-teal-100">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("/images/career.avif")',
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-primary/40"></div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>
      </div>

      {floatingIcons.map(({ Icon, top, left, right, delay, color }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color} opacity-20`}
          style={{ top, left, right }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-8 h-8 md:w-12 md:h-12" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 hover:bg-white/15 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <FaStar className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-white/90 text-sm font-semibold tracking-wide">
              {t("career.careertoph")}
            </span>
            <FaRocket className="w-4 h-4 text-cyan-400" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <span className="bg-yellow-400 bg-clip-text text-transparent">
              {t("career.careerh1")}
            </span>
            <br />
            <span className="bg-primary bg-clip-text text-transparent">
              {t("career.careerh2")}
            </span>
            <br />
            <span className="bg-yellow-400 bg-clip-text text-transparent">
              {t("career.careerh3")}
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12"
          >
            {perks.map(({ icon: Icon, text, color }, index) => (
              <motion.div
                key={text}
                className="flex flex-col items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  y: -5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                // transition={{ delay: 1 + index * 0.1 }}
              >
                <Icon className={`w-8 h-8 ${color} mb-2`} />
                <span className="text-white/80 text-sm font-medium">
                  {text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              onClick={() => {
                const section = document.querySelector("#job-position");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center gap-3 relative overflow-hidden cursor-pointer"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <FaBriefcase className="w-6 h-6 group-hover:scale-110 transition-transform z-10" />
              <span className="z-10">{t("career.careerbtn1")}</span>
              <FaRocket className="w-5 h-5 group-hover:translate-x-1 transition-transform z-10" />
            </motion.button>

            <motion.button
              onClick={() => setShowCalendly(true)}
              className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-3 cursor-pointer"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUsers className="w-6 h-6 group-hover:scale-110 transition-transform" />
              {t("career.careerbtn2")}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </section>
  );
};

export default HeroCareer;
