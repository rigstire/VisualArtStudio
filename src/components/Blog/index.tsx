import SectionTitle from "../Common/SectionTitle";
import React from "react";

const ServiceItem = ({ title, description }) => (
  <div className="p-6 bg-white shadow-lg rounded-lg text-center dark:bg-gray-800">
    <h3 className="text-xl font-bold text-black dark:text-white">{title}</h3>
    <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Services"
          paragraph="We provide top-quality exterior cleaning services for your home and business."
          center
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <ServiceItem
            title="Pressure Washing"
            description="Remove dirt, grime, and mold to restore your property's appearance."
          />
          <ServiceItem
            title="Solar Panel Cleaning"
            description="Improve energy efficiency by keeping your solar panels clean."
          />
          <ServiceItem
            title="Bird Proofing"
            description="Prevent birds from nesting and causing damage to your property."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
