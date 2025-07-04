import { useState } from "react";
import { testimonials } from "../constants/data.js";
import TestimonialItem from "../components/TestimonialItem.jsx";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonials.length;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials" className="relative z-10 py-24 md:py-28 lg:py-40 bg-[#ede7f6]">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-black mb-12">Words from our customers</h1>

        <div className="relative max-w-3xl mx-auto overflow-hidden">
          {/* Carousel Inner */}
          <div className="carousel-inner transition duration-500 ease-in-out">
            <TestimonialItem
              key={testimonials[currentIndex].id}
              item={testimonials[currentIndex]}
              containerClassName="transition-all duration-500 ease-in-out"
            />
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full"
          >
            ❯
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-black" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
