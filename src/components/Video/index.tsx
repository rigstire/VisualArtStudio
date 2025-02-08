// Video/index.tsx
"use client";

import React from "react";
import SectionTitle from "../Common/SectionTitle";

const Video: React.FC = () => {
  return (
    // Removed py-* classes to eliminate extra vertical padding
    <section className="relative z-10 text-white">
      <div className="container mx-auto px-4">
        {/* Pass mb="0" so the SectionTitle container has no extra bottom margin */}
        <SectionTitle
          title="Discover Our Creative Space"
          paragraph="Step into our vibrant art studio & art school in Mission Viejo. Explore our classes, exhibitions, and events designed to inspire your artistic journey."
          center
          mb="0"
        />

        {/* Video container with no extra top margin */}
        <div className="mt-0">
          <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            >
              <source src="/video/art-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Photo Gallery container with no extra top margin */}
        <div className="mt-0">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/3 px-2">
              <img
                src="/images/fruitspic.jpg"
                alt="Fruit"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <div className="w-full sm:w-1/3 px-2">
              <img
                src="/images/dogepic.jpg"
                alt="Doge"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <div className="w-full sm:w-1/3 px-2">
              <img
                src="/images/lionpic.jpg"
                alt="Lion"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;

