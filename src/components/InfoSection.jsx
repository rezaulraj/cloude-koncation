import React from "react";

const InfoSection = ({
  subtitle,
  title,
  description,
  image,
  imageAlt = "Section Image",
  reverse = false,
}) => {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 items-center gap-12 ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          <div>
            <div className="flex flex-col justify-center items-start">
              <span className="text-[17px] text-primary font-normal font-sans">
                {subtitle}
              </span>
              <h2 className="text-[32px] md:text-[52px] font-medium font-sans mt-4 text-secondary">
                {title}
              </h2>
              <p className="text-[14px] md:text-[16px] text-secondary font-sans mt-4 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={image}
              alt={imageAlt}
              width={600}
              height={600}
              className="object-cover max-w-[400px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
