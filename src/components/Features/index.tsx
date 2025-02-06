import { featuresData } from "./featuresData";
import SingleFeature from "./SingleFeature";

const Features = () => {
  return (
    <section className="relative bg-black text-white py-20">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/video/washingvid.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>

      {/* Overlay to Darken Video for Better Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Features Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Cleaning Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
