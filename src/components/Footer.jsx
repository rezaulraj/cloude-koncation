import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MdMail } from "react-icons/md";

const Footer = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.2,
      backgroundColor: "#46C0DC",
      color: "#0f2529",
      rotate: 360,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  const linkVariants = {
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
      x: 5,
      color: "#3b82f6",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const copyrightVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const socialIcons = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/cloudkonektion0",
      color: "#1877F2",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/cloudkonektion/",
      color: "#E4405F",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@cloudkonektion0",
      color: "#FF0000",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@cloudkonektion",
      color: "#000000",
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/cloudkonektion",
      color: "#000000",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/cloudkonektion/",
      color: "#0A66C2",
    },
    {
      icon: FaPinterest,
      href: "https://www.pinterest.com/cloudkonektion/",
      color: "#BD081C",
    },
  ];

  return (
    <motion.footer
      className="bg-[#0f2529] text-white py-12"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <motion.h2
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            {t("footer.footerFront")} <span className="text-primary">®</span>
          </motion.h2>
          <motion.p
            className="text-sm text-primary mt-2"
            variants={itemVariants}
          >
            {t("footer.footerPara")}
          </motion.p>

          <motion.div
            className="mt-6"
            variants={logoVariants}
            whileHover="hover"
          >
            <Link to={"/"}>
              <motion.img
                src="/logo2.jpeg"
                alt="Cloud Konektion"
                width={150}
                height={200}
                className="h-auto w-40"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h3 className="text-lg font-bold mb-3" whileHover={{ x: 5 }}>
            {t("footer.footerContact")}
          </motion.h3>

          <motion.p className="flex items-center gap-2" variants={itemVariants}>
            <MdMail />
            <Link
              to="mailto:help@cloudkonektion.eu"
              className="hover:underline"
              whileHover={{ scale: 1.05 }}
            >
              help@cloudkonektion.eu
            </Link>
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 mt-6"
            variants={containerVariants}
          >
            {socialIcons.map((social, index) => (
              <motion.div
                key={index}
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
                custom={index}
              >
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  to={social.href}
                  className="p-2 border border-white transition rounded block"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                >
                  <social.icon />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h3 className="text-lg font-bold mb-3" whileHover={{ x: 5 }}>
            {t("footer.footertext")}
          </motion.h3>
          <motion.ul className="space-y-2" variants={containerVariants}>
            {[
              { to: "/", text: t("footer.footerLink1") },
              { to: "/employers", text: t("footer.footerLink2") },
              { to: "/applicants", text: t("footer.footerLink3") },
              { to: "/about", text: t("footer.footerLink4") },
            ].map((link, index) => (
              <motion.li key={index} variants={linkVariants}>
                <Link
                  to={link.to}
                  className="hover:text-primary block py-1"
                  whileHover="hover"
                >
                  {link.text}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div className="space-y-5" variants={itemVariants}>
          <motion.h3 className="text-lg font-bold mb-3" whileHover={{ x: 5 }}>
            {t("footer.footerOffice")}
          </motion.h3>
          <motion.div className="space-y-3" variants={containerVariants}>
            <motion.h4
              className="text-[16px] font-bold"
              variants={itemVariants}
            >
              {t("footer.footerAddress")}
            </motion.h4>
            <motion.p
              className="flex items-center gap-2"
              variants={itemVariants}
            >
              <a
                href="https://www.google.com/maps/place/112-116+Whitechapel+Rd,+Greater,+London+E1+1JE,+UK/@51.7663045,0.2966749,7.5z/data=!4m6!3m5!1s0x48761ccc7c9cb58b:0x837ef31a0b99463!8m2!3d51.5179036!4d-0.0640677!16s%2Fg%2F11y7qkpf90?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] hover:text-primary transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                112-116 Whitechapel Road, London, England, E1 1JE
              </a>
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="border-t border-gray-600 mt-10 pt-6 text-sm text-gray-400 text-center md:text-left container max-w-7xl mx-auto px-6"
        variants={copyrightVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.p
          className="text-sm text-center"
          whileHover={{ scale: 1.05, color: "#ffffff" }}
        >
          Copyright © {new Date().getFullYear()} Cloud Konektion
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
