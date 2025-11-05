import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <section id="brand" className="py-20 bg-[#F4F4F2]">
      <div className="container max-w-7xl mx-auto px-4">
        <h4 className="text-secondary text-center text-[26px] font-bold mb-12">
          {t("homepage.brand.brandText")}
        </h4>

        <div className="my-8 overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-8"
            animate={{
              x: [0, -1840], // Adjust this value based on your total width
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* First set */}
            {brand.map((brandImg, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center p-6 rounded-2xl bg-primary/50 shadow-lg"
                style={{ width: "200px" }}
              >
                <img
                  src={brandImg}
                  alt={`brand ${index + 1}`}
                  width={160}
                  height={100}
                  className="object-contain h-16 md:h-20"
                />
              </div>
            ))}
            {/* Second set for seamless loop */}
            {brand.map((brandImg, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center p-6 rounded-2xl bg-primary/50 shadow-lg"
                style={{ width: "200px" }}
              >
                <img
                  src={brandImg}
                  alt={`brand ${index + 1}`}
                  width={160}
                  height={100}
                  className="object-contain h-16 md:h-20"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
