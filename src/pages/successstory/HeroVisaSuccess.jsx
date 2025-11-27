import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import success1 from "/images/success1.jpg";
import success2 from "/images/success2.jpg";
import success3 from "/images/success3.jpg";
import roundImage from "/images/round.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeroVisaSuccess = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  const images = [
    {
      image: success1,
      color: "#46C0DC",
      title: "Student Visa Approved!",
    },
    {
      image: success2,
      color: "#FF6B6B",
      title: "Work Permit Success!",
    },
    {
      image: success3,
      color: "#4ECDC4",
      title: "Family Reunion Granted!",
    },
  ];

  // Trigger celebration on image change
  useEffect(() => {
    setShowCelebration(true);
    const timer = setTimeout(() => setShowCelebration(false), 2000);
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Confetti particles
  const confettiParticles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    color: ["#46C0DC", "#FF6B6B", "#4ECDC4", "#FFD166", "#6A0572"][
      Math.floor(Math.random() * 5)
    ],
    size: Math.random() * 12 + 6,
    delay: Math.random() * 1,
    duration: Math.random() * 2 + 1,
    x: Math.random() * 100,
    rotation: Math.random() * 360,
  }));

  // Floating emojis for celebration
  const celebrationEmojis = ["🎉", "🎊", "✨", "🌟", "🥳", "🎈", "🏆", "✅"];

  return (
    <div className="py-28 bg-[#192C33] flex items-center overflow-hidden relative">
      {/* Celebration Confetti */}
      <AnimatePresence>
        {showCelebration && (
          <div className="absolute inset-0 pointer-events-none z-50">
            {confettiParticles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-sm"
                style={{
                  width: particle.size,
                  height: particle.size / 2,
                  backgroundColor: particle.color,
                  left: `${particle.x}%`,
                  top: "-10%",
                  rotate: particle.rotation,
                }}
                initial={{ y: -100, opacity: 0, rotate: 0 }}
                animate={{
                  y: "100vh",
                  opacity: [0, 1, 0],
                  rotate: particle.rotation + 360,
                  x: `${Math.random() * 100 - 50}%`,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Floating Emojis */}
            {celebrationEmojis.map((emoji, index) => (
              <motion.div
                key={index}
                className="absolute text-2xl"
                style={{
                  left: `${20 + index * 10}%`,
                  top: "-10%",
                }}
                initial={{ y: -50, opacity: 0, scale: 0 }}
                animate={{
                  y: "100vh",
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  rotate: Math.random() * 360,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.h2
                className="text-5xl lg:text-7xl font-bold text-[#46C0DC] leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                {t("successstory.headingsuccess")}
              </motion.h2>
              <motion.p
                className="text-xl text-white/90 mt-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                {t("successstory.paragraph")}
              </motion.p>
            </div>

            <motion.a
              href="careers"
              className="relative bg-[#46C0DC] hover:bg-[#3aa8c4] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer overflow-hidden group inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{t("successstory.btn")}</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <motion.span
                className="ml-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                🎯
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Right Image Section - Full Image Display */}
          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Rotating Geometric Pattern */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full border-2 border-[#46C0DC]/10 rounded-full" />
                </motion.div>
              </motion.div>

              {/* Full Image Display with Celebration */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    className="relative w-full h-auto overflow-hidden rounded-2xl shadow-2xl"
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.1,
                      filter: "blur(10px)",
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Main Full Image */}
                    <motion.img
                      src={images[currentImageIndex].image}
                      alt="Visa Success Celebration"
                      className="w-full h-auto object-center"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Celebration Title */}
                    <motion.div
                      className="absolute bottom-8 left-8 right-8"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <motion.h3
                        className="text-3xl font-bold text-white mb-2"
                        animate={{
                          scale: showCelebration ? [1, 1.1, 1] : 1,
                          color: showCelebration
                            ? [
                                "#FFFFFF",
                                images[currentImageIndex].color,
                                "#FFFFFF",
                              ]
                            : "#FFFFFF",
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        Visa Approved Successfully! 🎉
                      </motion.h3>
                    </motion.div>

                    {/* Success Badge */}
                    <motion.div
                      className="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.8,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="flex items-center gap-2"
                      >
                        <span>✅</span>
                        <span className="font-bold">APPROVED</span>
                      </motion.div>
                    </motion.div>

                    {/* Animated Border Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-4 pointer-events-none"
                      style={{ borderColor: images[currentImageIndex].color }}
                      animate={{
                        boxShadow: showCelebration
                          ? [
                              `0 0 30px ${images[currentImageIndex].color}80`,
                              `0 0 60px ${images[currentImageIndex].color}`,
                              `0 0 30px ${images[currentImageIndex].color}80`,
                            ]
                          : [
                              `0 0 20px ${images[currentImageIndex].color}40`,
                              `0 0 40px ${images[currentImageIndex].color}60`,
                              `0 0 20px ${images[currentImageIndex].color}40`,
                            ],
                        scale: showCelebration ? [1, 1.02, 1] : 1,
                      }}
                      transition={{
                        duration: showCelebration ? 0.3 : 2,
                        repeat: showCelebration ? 3 : Infinity,
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Floating Celebration Elements */}
              <motion.div
                className="absolute top-4 left-4 text-4xl"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🏆
              </motion.div>

              <motion.div
                className="absolute bottom-4 right-4 text-3xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ⭐
              </motion.div>
            </div>

            {/* Image Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-[#46C0DC] scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Background Orb */}
            <motion.div
              className="absolute -z-10 -right-20 -top-20 w-80 h-80 bg-gradient-to-r from-[#46C0DC] to-[#4ECDC4] rounded-full blur-3xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

        {/* Stats Celebration Bar */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            { number: "500+", label: "Visas Approved", emoji: "🎫" },
            { number: "98%", label: "Success Rate", emoji: "📈" },
            { number: "50+", label: "Countries", emoji: "🌎" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-3xl mb-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  delay: index * 0.5,
                  repeat: Infinity,
                }}
              >
                {stat.emoji}
              </motion.div>
              <motion.h3
                className="text-4xl font-bold text-[#46C0DC] mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + index * 0.2, type: "spring" }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-white/70 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroVisaSuccess;
