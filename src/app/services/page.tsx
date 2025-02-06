import React from "react";
import Image from "next/image";
import { Card, CardContent, Typography, Grid, Box, Container, Button } from "@mui/material";
import Link from "next/link";

const services = [
  {
    title: "Pressure Washing",
    description:
      "Our expert pressure washing services remove dirt, mold, and grime from exterior surfaces, leaving them spotless. Whether it's your driveway, patio, or home siding, we restore surfaces to their original look with safe and effective cleaning techniques.",
    image: "/images/pressurewashing.jpeg",
  },
  {
    title: "Bird Proofing",
    description:
      "Protect your property from unwanted birds with our professional bird-proofing solutions. We install durable barriers and deterrents that prevent nesting and damage while ensuring the safety of your home or business.",
    image: "/images/birdproof.webp",
  },
  {
    title: "Solar Cleaning",
    description:
      "Improve your solar panel efficiency with our thorough cleaning services. We remove dust, debris, and environmental pollutants, allowing your panels to absorb maximum sunlight and generate optimal energy output.",
    image: "/images/solarcleaning.jpeg",
  },
  {
    title: "Concrete Cleaning",
    description:
      "Revitalize your concrete surfaces with deep cleaning that removes oil stains, algae, and other buildup. Our industrial-grade equipment restores the look of sidewalks, parking lots, and driveways with long-lasting results.",
    image: "/images/concretecleaning.webp",
  },
  {
    title: "Gutter Cleaning",
    description:
      "Keep your gutters free of debris to prevent blockages and water damage. Our thorough gutter cleaning service ensures proper drainage and protects your property from potential leaks and foundation issues.",
    image: "/images/guttercleaning.jpeg",
  },
  {
    title: "Soft Washing Homes",
    description:
      "A gentle yet powerful cleaning solution for your home's exterior. Our soft washing technique safely removes mildew, algae, and stains from siding, roofing, and delicate surfaces without causing any damage.",
    image: "/images/guttercleaningtwo.png",
  },
];

const Services = () => {
  return (
    <Box sx={{ bgcolor: "#1e3c72", minHeight: "100vh", py: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: 350,
          background: "linear-gradient(135deg, #1e3c72, #2a5298)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: "1.2rem",
            fontWeight: 300,
            opacity: 0.9,
            marginTop: 1,
            lineHeight: 1.7,
            maxWidth: 700,
          }}
        >
          High-quality exterior cleaning solutions designed to protect and enhance your property.
        </Typography>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ mt: 6, alignItems: "stretch" }}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
              <Card
                elevation={8}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.03)" },
                  bgcolor: "#2a5298",
                  color: "white",
                }}
              >
                {/* Service Image */}
                <Box sx={{ position: "relative", width: "100%", height: 400 }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    quality={80}
                    priority={index < 2}
                  />
                </Box>

                {/* Card Content */}
                <CardContent
                  sx={{
                    textAlign: "left",
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    gutterBottom
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "'Roboto', sans-serif",
                      opacity: 0.9,
                      lineHeight: 1.8,
                      mb: 2,
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* Spacer to push the button to the bottom */}
                  <Box sx={{ flexGrow: 1 }} />

                  {/* Book Now Button */}
                  <Box sx={{ mt: 3 }}>
                    <Link href="/contact" passHref>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#ff9800",
                          "&:hover": { backgroundColor: "#f57c00" },
                          fontWeight: "bold",
                          fontSize: "1rem",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                        fullWidth
                      >
                        Book Now
                      </Button>
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ py: 8, textAlign: "center", bgcolor: "#153e75", color: "white", mt: 8 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Contact us today for a free consultation and get your property looking brand new!
        </Typography>
      </Box>
    </Box>
  );
};

export default Services;
