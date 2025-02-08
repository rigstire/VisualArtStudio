"use client"; // Marking this as a client-side component
import { Box, Typography, Container, Card, CardContent, Grid, Button } from "@mui/material";
import Image from "next/image";
import YouTube from "react-youtube";
import { useState } from "react";

const FactsPage = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const videoOpts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0, // Prevent auto-play
    },
  };

  const handleVideoClick = (videoId: string) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  return (
    <Box sx={{ bgcolor: "#F5F7FA", minHeight: "100vh", py: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: 400,
          background: "linear-gradient(45deg, #1e3c72, #2a5298)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Our Portfolio
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 750, opacity: 0.9 }}>
        Explore our stunning portfolio and bring your vision to life with captivating visuals that inspire!
        </Typography>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={6}>
          {/* FACT 1: Solar Panel Cleaning (Model) */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 4 }}>
              <Image 
                src="/images/lionpic.jpg" 
                alt="Dirty vs Clean Solar Panels"
                layout="intrinsic" 
                width={800} 
                height={500} 
                quality={100}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              {/* <CardContent>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  The Power Difference: Dirty vs. Clean Solar Panels
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                  On August 3, 2023, RPS Solar Pumps conducted a real-world experiment to assess the impact of cleaning solar panels on energy efficiency.
                  The test revealed that dirty panels produced just 145 Watts of energy. After cleaning, the output increased to 183 Watts, showing a
                  remarkable 26% increase in energy efficiency! This experiment underscores the importance of cleaning your panels to boost solar energy
                  production. Watch the full comparison in the video below.
                </Typography>
              </CardContent> */}
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 4 }}>
              <Image 
                src="/images/fruitspic.jpg" 
                alt="Solar Panel Cleaning"
                layout="intrinsic" 
                width={800} 
                height={500} 
                quality={100}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />

            </Card>
          </Grid>





          FACT 6: Bird Proofing

        </Grid>
      </Container>


      <Box sx={{ py: 8, textAlign: "center", bgcolor: "#153e75", color: "#FFD700", mt: 8 }}>
        <Typography variant="h5" fontWeight={600}>
        Elevate Your Space with Stunning Visual Art
        </Typography>
        <Typography variant="h6" sx={{ mt: 1, opacity: 0.9 }}>
        Transform your environment with captivating artwork that inspires and enhances any space. Explore our portfolio and bring creativity to life today!
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            px: 5,
            fontSize: "1.2rem",
            bgcolor: "#FFD700",
            color: "#153e75",
            "&:hover": { bgcolor: "#FFC107" },
          }}
          href="mailto:officialtopsoftware@gmail.com"
        >
          Contact Us Today
        </Button>
      </Box>
    </Box>
  );
};

export default FactsPage;