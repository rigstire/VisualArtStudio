// SectionTitle.tsx
import React from "react";

interface SectionTitleProps {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      {/* Removed the default mb-4 from h2 */}
      <h2 className="mb-0 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
        {title}
      </h2>
      {/* Remove any default margins on the paragraph */}
      <p className="m-0 text-base leading-relaxed text-body-color md:text-lg">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;


