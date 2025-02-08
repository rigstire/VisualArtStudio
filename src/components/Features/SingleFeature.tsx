// SingleFeature.tsx
import React from "react";
import { Feature } from "@/types/feature";

interface SingleFeatureProps {
  feature: Feature;
}

const SingleFeature: React.FC<SingleFeatureProps> = ({ feature }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg text-white">
      <div className="mb-4 text-primary">{feature.icon}</div>
      <h3 className="text-xl font-semibold">{feature.title}</h3>
      <p className="text-sm mt-2">{feature.paragraph}</p>
    </div>
  );
};

export default SingleFeature;

