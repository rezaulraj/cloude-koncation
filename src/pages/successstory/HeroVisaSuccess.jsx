import React, { useState, useEffect } from "react";
import success1 from "/images/visasuccess.jpeg";
import success2 from "/images/visasuccess2.jpeg";
import success3 from "/images/visasuccess.jpeg";
import roundImage from "/images/round.png";

const HeroVisaSuccess = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      image: success1,
    },
    {
      image: success2,
    },
    {
      image: success3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-[#192C33] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl lg:text-7xl font-bold text-[#46C0DC] leading-tight">
                Visa Success Stories
              </h2>
              <p className="text-xl text-white/90 mt-6 leading-relaxed">
                Real people, real dreams, real success stories. Join thousands
                who have transformed their lives through our visa services.
              </p>
            </div>

            <a
              href="careers"
              className="bg-[#46C0DC] hover:bg-[#3aa8c4] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
            >
              Start Your Success Story
            </a>
          </div>

          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={roundImage}
                  alt="Rotating Background"
                  className="w-5/5 h-5/5 object-contain animate-infinite-rotate opacity-20"
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="relative w-3/4 h-3/4 overflow-hidden">
                      <img
                        src={img.image}
                        alt="Visa Success Celebration"
                        className="w-full h-full object-cover animate-continuous-zoom"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-[#192C33]/20 to-[#46C0DC]/10 rounded-2xl"></div>

              <div className="absolute top-4 right-4 w-8 h-8 bg-[#46C0DC] rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-[#46C0DC] rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes continuous-zoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes infinite-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-continuous-zoom {
          animation: continuous-zoom 8s ease-in-out infinite;
        }

        .animate-infinite-rotate {
          animation: infinite-rotate 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroVisaSuccess;
