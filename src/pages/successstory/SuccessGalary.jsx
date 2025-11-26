import React, { useState } from "react";
import success1 from "/images/visasuccess.jpeg";
import success2 from "/images/visasuccess2.jpeg";
import success3 from "/images/visasuccess.jpeg";
import success4 from "/images/visasuccess2.jpeg";
import success5 from "/images/visasuccess.jpeg";
import success6 from "/images/visasuccess2.jpeg";
import success7 from "/images/visasuccess.jpeg";
import success8 from "/images/visasuccess2.jpeg";
import { useTranslation } from "react-i18next";

const SuccessGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  const successStories = [
    {
      id: 1,
      image: success1,
      title: "USA Student Visa",
      description:
        "John successfully got his student visa for Harvard University",
    },
    {
      id: 2,
      image: success2,
      title: "UK Work Visa",
      description: "Sarah approved for UK skilled worker visa",
    },
    {
      id: 3,
      image: success3,
      title: "Canada PR",
      description: "Mike and family received Canadian permanent residency",
    },
    {
      id: 4,
      image: success4,
      title: "Australia Tourist Visa",
      description: "Family vacation approved for Australia",
    },
    {
      id: 5,
      image: success5,
      title: "Germany Work Visa",
      description: "Tech professional visa for Berlin",
    },
    {
      id: 6,
      image: success6,
      title: "Japan Student Visa",
      description: "Student visa for Tokyo University",
    },
    {
      id: 7,
      image: success7,
      title: "France Schengen",
      description: "Business travel visa approved",
    },
    {
      id: 8,
      image: success8,
      title: "New Zealand Work",
      description: "Working holiday visa success",
    },
  ];

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

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {t("successstory.subheading1")}{" "}
          <span className="text-[#46C0DC]">
            {t("successstory.subheading2")}
          </span>
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <div
              key={story.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
              onClick={() => openImage(story, index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute top-4 right-4">
                  <span className="bg-[#46C0DC] text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    ✓ Approved
                  </span>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors duration-200"
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
          </button>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
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
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
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
          </button>

          <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-contain max-h-[80vh] rounded-lg shadow-2xl"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-200">{selectedImage.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ✓ Visa Approved
                  </span>
                  <span className="text-sm text-gray-300">
                    {currentIndex + 1} / {successStories.length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-sm">
            Use ← → arrows to navigate • ESC to close
          </div>
        </div>
      )}

      <div className="fixed top-1/4 left-10 w-4 h-4 bg-blue-300 rounded-full opacity-20 animate-bounce"></div>
      <div className="fixed top-1/2 right-16 w-6 h-6 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="fixed bottom-1/3 left-20 w-3 h-3 bg-green-300 rounded-full opacity-30 animate-bounce delay-1000"></div>
    </div>
  );
};

export default SuccessGallery;
