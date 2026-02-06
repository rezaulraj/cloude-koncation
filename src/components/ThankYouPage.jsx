import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaHome,
  FaBriefcase,
  FaEnvelope,
  FaArrowRight,
  FaRocket,
  FaUserTie,
  FaPaperPlane,
} from "react-icons/fa";

const ThankYouPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  // Auto-redirect after 10 seconds
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      navigate("/");
    }
  }, [countdown, navigate]);

  // Floating animation for particles
  const floatingParticles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-50"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(particle.id) * 10, 0],
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        {/* Main Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center"
        >
          {/* Success Icon with Animation */}
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 360 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-xl opacity-50 rounded-full animate-pulse"></div>
              <FaCheckCircle className="relative w-32 h-32 text-green-500 drop-shadow-lg" />
            </div>
          </motion.div>

          {/* Confetti Animation */}
          <div className="mb-8">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"
                initial={{ y: -100, x: i * 30 - 180, rotate: 0 }}
                animate={{
                  y: window.innerHeight,
                  rotate: 360,
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  ease: "easeIn",
                }}
              />
            ))}
          </div>

          {/* Main Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Thank You!
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Your application has been successfully submitted.
            <br />
            We'll review your profile and get back to you soon.
          </motion.p>

          {/* Success Animation */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.8, duration: 1.5 }}
            className="h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-10 mx-auto max-w-md"
          />

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
              <FaPaperPlane className="w-5 h-5 text-blue-500 animate-bounce" />
              <span className="text-gray-700">
                Redirecting to home in{" "}
                <span className="font-bold text-blue-600">{countdown}s</span>
              </span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {/* Home Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-xl p-6 text-left border border-gray-100 hover:border-blue-200 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-500 transition-colors duration-300">
                  <FaHome className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Go Home</h3>
                  <p className="text-sm text-gray-600">Return to homepage</p>
                </div>
              </div>
              <motion.div
                className="absolute -right-6 -bottom-6 text-blue-100 group-hover:text-blue-200 transition-colors duration-300"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 45 }}
              >
                <FaArrowRight className="w-12 h-12" />
              </motion.div>
            </motion.button>

            {/* Browse Jobs Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/careers")}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-xl p-6 text-left border border-gray-100 hover:border-green-200 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-400"></div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-500 transition-colors duration-300">
                  <FaBriefcase className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">
                    Browse Jobs
                  </h3>
                  <p className="text-sm text-gray-600">
                    View more opportunities
                  </p>
                </div>
              </div>
              <motion.div
                className="absolute -right-6 -bottom-6 text-green-100 group-hover:text-green-200 transition-colors duration-300"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 45 }}
              >
                <FaArrowRight className="w-12 h-12" />
              </motion.div>
            </motion.button>

            {/* Apply Again Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/careers#job-position")}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-xl p-6 text-left border border-gray-100 hover:border-purple-200 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400"></div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-500 transition-colors duration-300">
                  <FaUserTie className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">
                    Apply Again
                  </h3>
                  <p className="text-sm text-gray-600">
                    Submit another application
                  </p>
                </div>
              </div>
              <motion.div
                className="absolute -right-6 -bottom-6 text-purple-100 group-hover:text-purple-200 transition-colors duration-300"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 45 }}
              >
                <FaRocket className="w-12 h-12" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto border border-blue-100"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <FaEnvelope className="w-6 h-6 text-blue-500 animate-pulse" />
              <h3 className="text-lg font-semibold text-gray-800">
                What to expect next?
              </h3>
            </div>
            <ul className="space-y-3 text-gray-600 text-left max-w-md mx-auto">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Confirmation email within 24 hours</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Review process takes 3-5 business days</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Interview invitation via email/phone</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <div className="flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave Animation at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#3b82f6"
            fillOpacity="0.1"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                      M0,160L48,181.3C96,203,192,245,288,245.3C384,245,480,203,576,186.7C672,171,768,181,864,197.3C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                      M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>
        </svg>
      </div>
    </div>
  );
};

export default ThankYouPage;
