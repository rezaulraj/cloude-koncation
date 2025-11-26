import React, { useState, useEffect } from "react";
import { HiMenu, HiX, HiChevronDown, HiGlobe } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import ReactCountryFlag from "react-country-flag";
import ModeForm from "./ModeForm";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");
  const [showCareersEffect, setShowCareersEffect] = useState(false);
  const [careersClicked, setCareersClicked] = useState(false);
  const [isCareersShaking, setIsCareersShaking] = useState(false);
  const [showRippleEffect, setShowRippleEffect] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const hasClickedCareers = sessionStorage.getItem("careersClicked");
    if (hasClickedCareers === "true") {
      setCareersClicked(true);
    } else {
      setShowRippleEffect(true);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const style = document.createElement("style");
    style.textContent = `
      @keyframes ripple-wave {
        0% {
          transform: scale(0);
          opacity: 1;
        }
        50% {
          opacity: 0.7;
        }
        100% {
          transform: scale(4);
          opacity: 0;
        }
      }
      
      @keyframes continuous-ripple {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          opacity: 0.7;
        }
        100% {
          transform: scale(3);
          opacity: 0;
        }
      }
      
      @keyframes water-shake {
        0%, 100% { transform: translateX(0) rotate(0); }
        25% { transform: translateX(-3px) rotate(-2deg); }
        50% { transform: translateX(3px) rotate(2deg); }
        75% { transform: translateX(-1px) rotate(-1deg); }
      }
      
      .water-shake {
        animation: water-shake 0.6s ease-in-out;
      }
      
      @keyframes water-pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
      
      .water-pulse {
        animation: water-pulse 2s infinite;
      }
      
      .continuous-ripple {
        position: absolute;
        border-radius: 50%;
        border: 2px solid #1599b9;
        background: transparent;
        animation: continuous-ripple 2s infinite;
        pointer-events: none;
        z-index: 1;
      }
    `;
    document.head.appendChild(style);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.head.removeChild(style);
    };
  }, []);

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/employers", label: t("nav.employers") },
    { href: "/applicants", label: t("nav.applicants") },
    { href: "/success-story", label: t("nav.success") },
    { href: "/about", label: t("nav.about") },
    { href: "/careers", label: t("nav.career") },
  ];

  const languages = [
    { code: "en", name: "English", country: "US" },
    { code: "mk", name: "Македонски", country: "MK" },
    { code: "ro", name: "Română", country: "RO" },
    { code: "sr", name: "Српски", country: "RS" },
    { code: "al", name: "Shqip", country: "AL" },
    { code: "el", name: "Ελληνικά", country: "GR" },
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsLangOpen(false);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const createRippleEffect = (e) => {
    const button = e.target.closest("a");
    if (!button) return;

    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const ripple = document.createElement("span");
        const rect = button.getBoundingClientRect();

        ripple.style.position = "fixed";
        ripple.style.borderRadius = "50%";
        ripple.style.border = `2px solid ${
          i === 0 ? "#1599b9" : i === 1 ? "#18a4c7" : "#12819c"
        }`;
        ripple.style.background = "transparent";
        ripple.style.transform = "scale(0)";
        ripple.style.animation = `ripple-wave ${0.8 + i * 0.1}s ease-out`;
        ripple.style.pointerEvents = "none";
        ripple.style.zIndex = "1000";

        const size = 20 + i * 15;
        ripple.style.width = ripple.style.height = size + "px";
        ripple.style.left = rect.left + rect.width / 2 - size / 2 + "px";
        ripple.style.top = rect.top + rect.height / 2 - size / 2 + "px";

        document.body.appendChild(ripple);

        setTimeout(() => {
          if (ripple.parentNode) {
            ripple.remove();
          }
        }, 1000);
      }, i * 150);
    }
  };

  const createContinuousRipple = (element) => {
    if (!element || careersClicked) return;

    const existingRipples = element.querySelectorAll(".continuous-ripple");
    existingRipples.forEach((ripple) => ripple.remove());

    for (let i = 0; i < 3; i++) {
      const ripple = document.createElement("span");
      ripple.className = "continuous-ripple";

      const size = 30 + i * 10;
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = `calc(50% - ${size / 2}px)`;
      ripple.style.top = `calc(50% - ${size / 2}px)`;
      ripple.style.borderColor =
        i === 0 ? "#1599b9" : i === 1 ? "#18a4c7" : "#12819c";
      ripple.style.animationDelay = `${i * 0.7}s`;

      element.style.position = "relative";
      element.appendChild(ripple);
    }
  };

  const handleCareersClick = (e, href) => {
    if (href === "/careers") {
      if (!careersClicked) {
        e.preventDefault();

        setShowRippleEffect(false);
        setIsCareersShaking(true);
        createRippleEffect(e);

        setTimeout(() => {
          setShowCareersEffect(true);
          sessionStorage.setItem("careersClicked", "true");
          setCareersClicked(true);
        }, 800);

        setTimeout(() => {
          window.location.href = href;
        }, 1600);
      }
    }
  };

  useEffect(() => {
    if (showRippleEffect && !careersClicked) {
      const careersElements = document.querySelectorAll('a[href="/careers"]');
      careersElements.forEach((element) => {
        createContinuousRipple(element);
      });

      const interval = setInterval(() => {
        if (showRippleEffect && !careersClicked) {
          const careersElements =
            document.querySelectorAll('a[href="/careers"]');
          careersElements.forEach((element) => {
            createContinuousRipple(element);
          });
        }
      }, 2100);

      return () => clearInterval(interval);
    } else {
      const ripples = document.querySelectorAll(".continuous-ripple");
      ripples.forEach((ripple) => ripple.remove());
    }
  }, [showRippleEffect, careersClicked]);

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <>
      <AnimatePresence>
        {showCareersEffect && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setShowCareersEffect(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl border border-white/20"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl mb-4"
              >
                🚀
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {t("careers.welcome")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t("careers.exploreOpportunities")}
              </p>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                className="w-12 h-12 border-4 border-[#1599b9] border-t-transparent rounded-full mx-auto mb-4 animate-spin"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-sm text-gray-500"
              >
                {t("careers.redirecting")}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-[#F4F4F2]"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="w-16 h-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleCareersClick(e, item.href)}
                  className={`font-medium transition-colors relative ${
                    currentPath === item.href
                      ? "text-primary font-semibold"
                      : "text-gray-800 hover:text-primary"
                  } ${
                    item.href === "/careers" && !careersClicked
                      ? `cursor-pointer ${
                          isCareersShaking ? "water-shake" : "water-pulse"
                        }`
                      : "cursor-pointer"
                  }`}
                  onAnimationEnd={() => setIsCareersShaking(false)}
                  id={`nav-${item.href.replace("/", "")}`}
                >
                  {item.label}

                  {item.href === "/careers" && !careersClicked && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-2 w-2 h-2 bg-red-500 rounded-full"
                    />
                  )}
                </a>
              </motion.div>
            ))}

            <div className={`fixed inset-0 ${isOpen ? "block" : "hidden"}`}>
              <ModeForm isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="hidden md:inline-block cursor-pointer bg-[#1599b9] text-white font-bold px-5 py-2 rounded-full hover:bg-[#12819c] transition-colors"
            >
              {t("nav.contact")}
            </motion.button>

            <div className="relative ml-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsLangOpen(!isLangOpen)}
                onBlur={() => setTimeout(() => setIsLangOpen(false), 150)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:border-gray-300 transition-colors shadow-sm min-w-[120px] cursor-pointer"
              >
                <ReactCountryFlag
                  countryCode={currentLanguage.country}
                  svg
                  style={{
                    width: "20px",
                    height: "15px",
                  }}
                  title={currentLanguage.name}
                />
                <span className="text-sm font-medium text-gray-700 hidden lg:block">
                  {currentLanguage.name}
                </span>
                <HiChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                />
              </motion.button>

              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                >
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      whileHover={{ backgroundColor: "#f8fafc" }}
                      onClick={() => changeLanguage(lang.code)}
                      className={`flex items-center gap-3 w-full px-4 py-2 text-left transition-colors cursor-pointer ${
                        i18n.language === lang.code
                          ? "bg-blue-50 text-blue-600 font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <ReactCountryFlag
                        countryCode={lang.country}
                        svg
                        style={{
                          width: "20px",
                          height: "15px",
                        }}
                        title={lang.name}
                      />
                      <span className="text-sm">{lang.name}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLangOpen(!isLangOpen)}
                onBlur={() => setTimeout(() => setIsLangOpen(false), 150)}
                className="flex items-center gap-1 p-2 rounded-lg bg-white border border-gray-200 shadow-sm cursor-pointer"
              >
                <ReactCountryFlag
                  countryCode={currentLanguage.country}
                  svg
                  style={{
                    width: "20px",
                    height: "15px",
                  }}
                  title={currentLanguage.name}
                />
                <HiChevronDown
                  className={`w-3 h-3 text-gray-500 transition-transform ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                />
              </motion.button>

              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                >
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      whileHover={{ backgroundColor: "#f8fafc" }}
                      onClick={() => changeLanguage(lang.code)}
                      className={`flex items-center gap-3 w-full px-3 py-2 text-left transition-colors cursor-pointer ${
                        i18n.language === lang.code
                          ? "bg-blue-50 text-blue-600 font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <ReactCountryFlag
                        countryCode={lang.country}
                        svg
                        style={{
                          width: "20px",
                          height: "15px",
                        }}
                        title={lang.name}
                      />
                      <span className="text-sm">{lang.name}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl text-gray-800 p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </motion.button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg border-t"
          >
            <nav className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      handleCareersClick(e, item.href);
                      if (item.href !== "/careers" || careersClicked) {
                        setIsMenuOpen(false);
                      }
                    }}
                    className={`font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                      currentPath === item.href
                        ? "text-primary font-semibold bg-blue-50"
                        : "text-gray-800 hover:bg-gray-50"
                    } ${
                      item.href === "/careers" && !careersClicked
                        ? `cursor-pointer ${
                            isCareersShaking ? "water-shake" : "water-pulse"
                          }`
                        : ""
                    }`}
                    onAnimationEnd={() => setIsCareersShaking(false)}
                    id={`mobile-nav-${item.href.replace("/", "")}`}
                  >
                    {item.label}
                    {item.href === "/careers" && !careersClicked && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-red-500 rounded-full"
                      />
                    )}
                  </a>
                </motion.div>
              ))}
              <div className="border-t pt-4 mt-2">
                <div className="flex items-center gap-2 px-4 py-2 text-gray-700 mb-2">
                  <HiGlobe className="w-5 h-5" />
                  <span className="font-medium">{t("nav.language")}</span>
                </div>
                <div className="space-y-1">
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      whileHover={{ backgroundColor: "#f8fafc" }}
                      onClick={() => changeLanguage(lang.code)}
                      className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                        i18n.language === lang.code
                          ? "bg-blue-50 text-blue-600 font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <ReactCountryFlag
                        countryCode={lang.country}
                        svg
                        style={{
                          width: "20px",
                          height: "15px",
                        }}
                        title={lang.name}
                      />
                      <span className="text-sm">{lang.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setIsOpen(true);
                  setIsMenuOpen(false);
                }}
                className="bg-[#18a4c7] text-white font-bold py-3 px-4 rounded-full text-center mt-4 hover:bg-[#1599b9] transition-colors cursor-pointer"
              >
                {t("nav.contact")}
              </motion.button>
            </nav>
          </motion.div>
        )}
      </motion.header>
    </>
  );
};

export default Header;
