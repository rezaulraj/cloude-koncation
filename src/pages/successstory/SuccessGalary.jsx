import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import success1 from "/images/success1.jpg";
import success2 from "/images/success2.jpg";
import success3 from "/images/success3.jpg";
import success4 from "/images/success1.jpg";
import success5 from "/images/success2.jpg";
import success6 from "/images/success3.jpg";
import success7 from "/images/success1.jpg";
import success8 from "/images/success2.jpg";
import { useTranslation } from "react-i18next";

const SuccessGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  const successStories = [
    {
      id: 1,
      image: success1,
      title: "Work Visa",
      description:
        "John successfully got his student visa for Harvard University",
      country: "🇺🇸 USA",
      duration: "2 weeks",
      category: "Student",
    },
    {
      id: 2,
      image: success2,
      title: "UK Work Visa",
      description: "Sarah approved for UK skilled worker visa",
      country: "🇬🇧 UK",
      duration: "3 weeks",
      category: "Work",
    },
    {
      id: 3,
      image: success3,
      title: "Canada PR",
      description: "Mike and family received Canadian permanent residency",
      country: "🇨🇦 Canada",
      duration: "6 months",
      category: "Permanent",
    },
    {
      id: 4,
      image: success4,
      title: "Australia Work Visa",
      description: "Family vacation approved for Australia",
      country: "🇦🇺 Australia",
      duration: "1 week",
      category: "Tourist",
    },
    {
      id: 5,
      image: success5,
      title: "Germany Work Visa",
      description: "Tech professional visa for Berlin",
      country: "🇩🇪 Germany",
      duration: "4 weeks",
      category: "Work",
    },
    {
      id: 6,
      image: success6,
      title: "Japan Work Visa",
      description: "Student visa for Tokyo University",
      country: "🇯🇵 Japan",
      duration: "3 weeks",
      category: "Student",
    },
    {
      id: 7,
      image: success7,
      title: "France Work Visa",
      description: "Business travel visa approved",
      country: "🇫🇷 France",
      duration: "2 weeks",
      category: "Business",
    },
    {
      id: 8,
      image: success8,
      title: "New Zealand Work",
      description: "Working holiday visa success",
      country: "🇳🇿 New Zealand",
      duration: "3 weeks",
      category: "Work",
    },
  ];

  // 3D floating animation variants
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

  // Holographic effect variants
  const hologramEffect = {
    initial: { backgroundPosition: "0% 0%" },
    hover: {
      backgroundPosition: "100% 100%",
      transition: { duration: 2, repeat: Infinity, ease: "linear" },
    },
  };

  // Particle system for background
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

  // Celebration effect for modal
  const CelebrationEffect = () => (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
          }}
        >
          {["✨", "🌟", "⭐", "🎉", "💫"][i % 5]}
        </motion.div>
      ))}
    </div>
  );

  const openImage = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % successStories.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(successStories[nextIndex]);
  };

  const goToPrev = () => {
    const prevIndex =
      (currentIndex - 1 + successStories.length) % successStories.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(successStories[prevIndex]);
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

  // Staggered card animation
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

      {/* Animated Background Orbs */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              {/* Holographic Border Effect */}
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
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />

                {/* Animated Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating Elements */}
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

                {/* Country Flag Badge */}
                <motion.div
                  className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold"
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {story.country}
                </motion.div>

                {/* Content */}
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
                    className="text-gray-200 text-sm mb-3"
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

                {/* Interactive Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#46C0DC]/20 to-purple-500/20 opacity-0 group-hover:opacity-100 rounded-3xl"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Glowing Orb Effect */}
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

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CelebrationEffect />

            <motion.button
              onClick={closeImage}
              className="absolute top-6 right-6 z-10 text-white hover:text-[#46C0DC] transition-colors duration-200 bg-white/10 backdrop-blur-sm rounded-full p-3"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-8 h-8"
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

            <motion.button
              onClick={goToPrev}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-200 backdrop-blur-sm"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <motion.button
              onClick={goToNext}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-200 backdrop-blur-sm"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>

            <motion.div
              className="relative max-w-6xl max-h-[90vh] w-full mx-4"
              initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: -180 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <motion.img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[70vh] rounded-2xl shadow-2xl"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />

              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 rounded-b-2xl"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-white">
                  <motion.h3
                    className="text-3xl font-bold mb-3"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {selectedImage.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-200 text-lg mb-4"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {selectedImage.description}
                  </motion.p>
                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex gap-4">
                      <span className="bg-gradient-to-r from-green-500 to-[#46C0DC] text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          🎉
                        </motion.span>
                        Visa Approved!
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm">
                        {selectedImage.country}
                      </span>
                    </div>
                    <span className="text-sm text-gray-300 bg-black/30 px-3 py-2 rounded-full">
                      {currentIndex + 1} / {successStories.length}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 text-sm bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Use ← → arrows to navigate • ESC to close • Click outside to exit
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Background Elements */}
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
