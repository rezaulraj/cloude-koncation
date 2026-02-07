import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import success1 from "/images/success1.jpg";
import success2 from "/images/success2.jpg";
import success3 from "/images/success3.jpg";
// import success4 from "/images/success1.jpg";
// import success5 from "/images/success2.jpg";
// import success6 from "/images/success3.jpg";
// import success7 from "/images/success1.jpg";
// import success8 from "/images/success2.jpg";
import { useTranslation } from "react-i18next";

const SuccessGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showCelebration, setShowCelebration] = useState(false);
  const { t } = useTranslation();

  const successStories = [
    {
      id: 1,
      image: success1,
      title: "Romania Work Visa",
      description: "Rana Shrijana successfully got skilled worker visa",
      country: "Romania",
      duration: "2 weeks",
      category: "Work",
    },
    {
      id: 2,
      image: success2,
      title: "Serbia Work Visa",
      description: "Limbu Khusbu approved for Serbia skilled worker visa",
      country: "Serbia",
      duration: "3 weeks",
      category: "Work",
    },
    {
      id: 3,
      image: success3,
      title: "Malta Work Visa",
      description: "BASNET LAXMAN Approved For Malta Work Visa",
      country: "Malta",
      duration: "4 Weeks",
      category: "Permanent",
    },
    // {
    //   id: 4,
    //   image: success4,
    //   title: "Australia Work Visa",
    //   description: "Family vacation approved for Australia",
    //   country: "🇦🇺 Australia",
    //   duration: "1 week",
    //   category: "Tourist",
    // },
    // {
    //   id: 5,
    //   image: success5,
    //   title: "Germany Work Visa",
    //   description: "Skilled worker visa for Berlin",
    //   country: "🇩🇪 Germany",
    //   duration: "4 weeks",
    //   category: "Work",
    // },
    // {
    //   id: 6,
    //   image: success6,
    //   title: "Japan Work Visa",
    //   description: "Skilled worker visa for Japan Tokyo",
    //   country: "🇯🇵 Japan",
    //   duration: "3 weeks",
    //   category: "Student",
    // },
    // {
    //   id: 7,
    //   image: success7,
    //   title: "France Work Visa",
    //   description: "Business travel visa approved",
    //   country: "🇫🇷 France",
    //   duration: "2 weeks",
    //   category: "Business",
    // },
    // {
    //   id: 8,
    //   image: success8,
    //   title: "New Zealand Work",
    //   description: "Working holiday visa success",
    //   country: "🇳🇿 New Zealand",
    //   duration: "3 weeks",
    //   category: "Work",
    // },
  ];

  const floatingAnimation = {
    initial: { y: 0, rotateY: 0 },
    hover: {
      y: -20,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const hologramEffect = {
    initial: { backgroundPosition: "0% 0%" },
    hover: {
      backgroundPosition: "100% 100%",
      transition: { duration: 2, repeat: Infinity, ease: "linear" },
    },
  };

  const BackgroundParticles = () => {
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-[#46C0DC] to-purple-400 opacity-20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  const CelebrationEffect = () => {
    const confettiParticles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      color: [
        "#46C0DC",
        "#FF6B6B",
        "#4ECDC4",
        "#FFD166",
        "#6A0572",
        "#A78BFA",
        "#34D399",
      ][Math.floor(Math.random() * 7)],
      size: Math.random() * 12 + 4,
      delay: Math.random() * 0.5,
      duration: Math.random() * 2 + 1,
      x: Math.random() * 100,
      rotation: Math.random() * 360,
    }));

    return (
      <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
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
              y: "110vh",
              opacity: [0, 1, 0.8, 0],
              rotate: particle.rotation + 360,
              x: `${Math.random() * 100 - 50}%`,
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              ease: "easeOut",
            }}
          />
        ))}

        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={`emoji-${i}`}
            className="absolute text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-10%",
            }}
            initial={{ y: -50, opacity: 0, scale: 0 }}
            animate={{
              y: "120vh",
              opacity: [0, 1, 0.8, 0],
              scale: [0, 1.2, 1, 0.8],
              rotate: [0, 180, 360],
              x: `${Math.random() * 40 - 20}%`,
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              ease: "easeOut",
            }}
          >
            {
              [
                "🎉",
                "🎊",
                "✨",
                "🌟",
                "⭐",
                "🥳",
                "🎈",
                "🏆",
                "✅",
                "💫",
                "🔥",
                "💎",
              ][i]
            }
          </motion.div>
        ))}
      </div>
    );
  };

  const openImage = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setShowCelebration(false);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % successStories.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(successStories[nextIndex]);
    triggerCelebration();
  };

  const goToPrev = () => {
    const prevIndex =
      (currentIndex - 1 + successStories.length) % successStories.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(successStories[prevIndex]);
    triggerCelebration();
  };

  const triggerCelebration = () => {
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 1200);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-700 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <BackgroundParticles />

      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="text-center mb-16 relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("successstory.subheading1")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46C0DC] to-purple-400">
            {t("successstory.subheading2")}
          </span>
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Witness the journey of dreams turning into reality
        </motion.p>
      </div>

      <motion.div
        className="container mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              variants={cardVariants}
              className="group relative bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border border-white/10"
              onClick={() => openImage(story, index)}
              onMouseEnter={() => setHoveredCard(story.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover="hover"
              initial="initial"
            >

              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#46C0DC] via-purple-500 to-[#46C0DC] bg-[length:200%_200%] opacity-0 group-hover:opacity-100"
                variants={hologramEffect}
                style={{ zIndex: -1 }}
              />

              <motion.div
                className="relative overflow-hidden rounded-3xl"
                variants={floatingAnimation}
              >
                <motion.img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-80 object-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                >
                  <span className="bg-gradient-to-r from-green-400 to-[#46C0DC] text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✓
                    </motion.span>
                    Approved
                  </span>
                </motion.div>
                <motion.div
                  className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold"
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {story.country}
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <motion.h3
                    className="text-xl font-bold mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {story.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-200 text-sm mb-3 uppercase tracking-wide"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {story.description}
                  </motion.p>

                  <motion.div
                    className="flex justify-between items-center text-xs text-gray-300"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <span>⏱️ {story.duration}</span>
                    <span>📁 {story.category}</span>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#46C0DC]/20 to-purple-500/20 opacity-0 group-hover:opacity-100 rounded-3xl"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {hoveredCard === story.id && (
                <motion.div
                  className="absolute inset-0 bg-[#46C0DC] rounded-3xl blur-xl opacity-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            {showCelebration && <CelebrationEffect />}

            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 z-60 bg-white/20 hover:bg-white/30 text-white p-5 rounded-2xl transition-all duration-300 backdrop-blur-lg border border-white/20 shadow-2xl group"
              whileHover={{ scale: 1.15, x: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <svg
                className="w-7 h-7 group-hover:text-[#46C0DC] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 z-60 bg-white/20 hover:bg-white/30 text-white p-5 rounded-2xl transition-all duration-300 backdrop-blur-lg border border-white/20 shadow-2xl group"
              whileHover={{ scale: 1.15, x: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <svg
                className="w-7 h-7 group-hover:text-[#46C0DC] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>

            <motion.button
              onClick={closeImage}
              className="absolute top-8 right-8 z-60 text-white hover:text-[#46C0DC] transition-colors duration-300 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-2xl group"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            <motion.div
              className="relative w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center rounded-2xl overflow-hidden bg-black"
                  initial={{ scale: 0.9, opacity: 0, rotateY: 90 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  exit={{ scale: 1.1, opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <motion.img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                      <motion.div
                        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-3 rounded-full text-base font-bold shadow-2xl flex items-center gap-2 backdrop-blur-sm"
                        initial={{ scale: 0, y: -50 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ delay: 0.4, type: "spring" }}
                      >
                        <motion.span
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          ✨
                        </motion.span>
                        VISA APPROVED
                      </motion.div>

                      <motion.div
                        className="bg-black/60 backdrop-blur-lg text-white px-4 py-3 rounded-2xl text-base font-semibold border border-white/20 shadow-2xl"
                        initial={{ scale: 0, y: -50 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ delay: 0.5, type: "spring" }}
                      >
                        {selectedImage.country}
                      </motion.div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <motion.h2
                          className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {selectedImage.title}
                        </motion.h2>

                        <motion.p
                          className="text-xl lg:text-2xl text-gray-200 mb-6 leading-relaxed uppercase tracking-wide"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          {selectedImage.description}
                        </motion.p>

                        <motion.div
                          className="flex flex-wrap gap-3 mb-6"
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.7 }}
                        >
                          <span className="bg-blue-500/30 backdrop-blur-lg text-white px-4 py-2 rounded-xl text-base border border-white/20 flex items-center gap-2">
                            ⏱️ {selectedImage.duration}
                          </span>
                          <span className="bg-purple-500/30 backdrop-blur-lg text-white px-4 py-2 rounded-xl text-base border border-white/20 flex items-center gap-2">
                            📁 {selectedImage.category}
                          </span>
                        </motion.div>
                      </motion.div>
                    </div>
                    <motion.div
                      className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-lg text-white px-4 py-2 rounded-xl text-base font-semibold border border-white/20 shadow-2xl"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      {currentIndex + 1} / {successStories.length}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.div
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/80 text-sm bg-black/60 backdrop-blur-lg px-6 py-3 rounded-xl border border-white/20 shadow-2xl"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-white/20 rounded text-xs">←</kbd>
                  <span className="text-xs">Prev</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-white/20 rounded text-xs">→</kbd>
                  <span className="text-xs">Next</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-white/20 rounded text-xs">
                    ESC
                  </kbd>
                  <span className="text-xs">Close</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed top-1/4 left-10 w-4 h-4 bg-[#46C0DC] rounded-full opacity-40"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="fixed top-1/2 right-16 w-6 h-6 bg-purple-400 rounded-full opacity-30"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="fixed bottom-1/3 left-20 w-3 h-3 bg-green-400 rounded-full opacity-50"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
      />
    </div>
  );
};

export default SuccessGallery;
