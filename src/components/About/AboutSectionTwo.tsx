import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center justify-center">
          <div className="w-full px-4 flex justify-center"> {/* Centers the image container */}
            <div
              className="relative text-center"
              style={{ width: '80%', maxWidth: '900px', height: '500px' }} // Adjust width and height as needed
            >
              <Image
                src="/images/about/solarimage.jpg"
                alt="solarimage.jpg"
                fill
                className="drop-shadow-three dark:drop-shadow-none"
                style={{ objectFit: 'cover', borderRadius: '10px' }} // Cover container & rounded edges
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
