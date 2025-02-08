import React from "react";
import Image from "next/image";
import { Card, CardContent, Typography, Grid, Box, Container, Button } from "@mui/material";
import Link from "next/link";

const events = [
  {
    title: "Main Event: Coming Soon",
    description:
      "Stay tuned for our upcoming signature event that will transform the art world. More details will be announced soon!",
    image: "/images/contactimage.jpg",
  },
  {
    title: "Art Lesson",
    description:
      "Join us for an engaging art lesson that will inspire your creativity and refine your technique under expert guidance.",
    image: "/images/dogepic.jpg",
  },
];

const Events = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        minHeight: "100vh",
        py: 8,
        backgroundImage: "url('/images/canvas-texture.jpg')", // Canvas texture background
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: 350,
          background: "linear-gradient(135deg, #FFB74D, #F57C00)",
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
          sx={{ fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}
        >
          Upcoming Events
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: "1.2rem",
            fontWeight: 300,
            opacity: 0.9,
            mt: 1,
            lineHeight: 1.7,
            maxWidth: 700,
          }}
        >
          Explore our curated events that celebrate creativity and artistic expression.
        </Typography>
      </Box>

      {/* Events Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ mt: 6, alignItems: "stretch" }}>
          {events.map((event, index) => (
            <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
              <Card
                elevation={10}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
                  },
                  bgcolor: "#ffffff",
                  color: "#333",
                }}
              >
                {/* Event Image */}
                <Box sx={{ position: "relative", width: "100%", height: 400 }}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                    quality={90}
                    priority={index === 0}
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
                      color: "#F57C00",
                    }}
                    gutterBottom
                  >
                    {event.title}
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
                    {event.description}
                  </Typography>

                  {/* Spacer to push the button to the bottom */}
                  <Box sx={{ flexGrow: 1 }} />

                  {/* Book Now Button */}
                  <Box sx={{ mt: 3 }}>
                    <Link href="/contact" passHref>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#FFB74D",
                          "&:hover": { backgroundColor: "#F57C00" },
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
    </Box>
  );
};

export default Events;

