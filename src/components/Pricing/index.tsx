"use client";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Affordable Tuition Options"
          paragraph="Each traditional art class is just $25. Experience top-notch instruction in a creative environment where art comes to life."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            {/* Pricing toggle removed */}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <PricingBox
            packageName="Single Class"
            price={"25"}
            duration={""}
            subtitle="Per class fee"
          >
            <OfferList text="Expert Traditional Instruction" status="active" />
            <OfferList text="Small Class Sizes" status="active" />
            <OfferList text="Hands-on Learning Experience" status="active" />
            <OfferList text="Art Supplies Provided" status="active" />
            <OfferList text="Flexible Scheduling" status="active" />
            <OfferList text="Personalized Feedback" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D35400" />
              <stop offset="1" stopColor="#D35400" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D35400" />
              <stop offset="1" stopColor="#D35400" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
