// Video/index.tsx
"use client";

import React from "react";
import SectionTitle from "../Common/SectionTitle";

const Video: React.FC = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 text-white">
      <div className="container mx-auto">
        <SectionTitle
          title="Discover Our Creative Space"
          paragraph="Step into our vibrant art studio & art school in Mission Viejo. Explore our classes, exhibitions, and events designed to inspire your artistic journey."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
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
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
