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
          The Importance of Cleaning Services
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 750, opacity: 0.9 }}>
          {"Discover how proper maintenance and cleaning services can improve the longevity and efficiency of your home and property."}
        </Typography>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={6}>
          {/* FACT 1: Solar Panel Cleaning (Model) */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 4 }}>
              <Image 
                src="/images/solarcleaning.jpeg" 
                alt="Dirty vs Clean Solar Panels"
                layout="intrinsic" 
                width={800} 
                height={500} 
                quality={100}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  The Power Difference: Dirty vs. Clean Solar Panels
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                  {"On August 3, 2023, RPS Solar Pumps conducted a real-world experiment to assess the impact of cleaning solar panels on energy efficiency. The test revealed that dirty panels produced just 145 Watts of energy. After cleaning, the output increased to 183 Watts, showing a remarkable 26% increase in energy efficiency! This experiment underscores the importance of cleaning your panels to boost solar energy production. Watch the full comparison in the video below."}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* FACT 2: The Need for Regular Solar Panel Cleaning */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 4 }}>
              <Image 
                src="/images/supdadupawash.jpg" 
                alt="Solar Panel Cleaning"
                layout="intrinsic" 
                width={800} 
                height={500} 
                quality={100}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  The Need for Regular Solar Panel Cleaning
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                  {"Solar panels are constantly exposed to environmental elements like dust, pollen, bird droppings, algae, and pollutants—all of which diminish their efficiency over time. Regular cleaning not only restores optimum performance but also prevents the buildup of corrosive deposits that can damage panel surfaces. Routine maintenance helps ensure maximum energy output, extends the life of your solar panels, and allows early detection of any potential issues."}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* FACT 3: Roof Cleaning */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 4 }}>
              <Image 
                src="/images/cleanroofdiff.jpeg" 
                alt="Roof Cleaning"
                layout="intrinsic" 
                width={800} 
                height={500} 
                quality={100}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  The Importance of Roof Cleaning
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                  {"Roofs accumulate moss, algae, and dirt, which can lead to decay and leaks over time. Regular cleaning not only protects the structural integrity of your roof by removing harmful buildup, but it also enhances your home&#39;s overall curb appeal. Routine cleaning can reveal early signs of damage, enabling timely repairs that extend your roof&#39;s lifespan and help avoid costly renovations."}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* FACT 4: Gutter Cleaning */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 4 }}>
              <Image 
                src="/images/gutterwash.jpeg" 
                alt="Gutter Cleaning"
                layout="intrinsic" 
                width={800} 
                height={500} 
                quality={100}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  Why Gutter Cleaning is Essential
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                  {"Clogged gutters can lead to water damage, foundation issues, and even pest infestations. Keeping your gutters clean ensures proper water drainage, reduces the risk of mold and structural damage, and prevents debris build-up that can attract unwanted critters. Regular maintenance not only protects your home but also preserves your landscaping from water overflow and erosion."}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* FACT 5: Pressure Washing */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 4 }}>
              <Image 
                src="/images/pressurewashing.jpeg" 
                alt="Pressure Washing"
                layout="intrinsic" 
                width={800} 
                height={500} 
                quality={100}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  Revitalize Your Property with Pressure Washing
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                  {"Our pressure washing service is designed to remove years of accumulated dirt, grime, mold, and algae from exterior surfaces. Beyond dramatically enhancing curb appeal, pressure washing protects surfaces from further deterioration by eliminating hazardous contaminants and preventing slip hazards. This service is an investment in both the aesthetics and long-term maintenance of your property."}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* FACT 6: Bird Proofing */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 4 }}>
              <Image 
                src="/images/birdproof.webp" 
                alt="Bird Proofing"
                layout="intrinsic" 
                width={800} 
                height={500} 
                quality={100}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  Effective Bird Proofing for a Safer Home
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                  {"Effective bird proofing not only stops birds from nesting and leaving unsightly droppings, but it also protects your property from structural damage and corrosion. Our humane, environmentally friendly solutions deter birds without harm, reducing maintenance costs and ensuring a cleaner, healthier living environment. This proactive measure helps safeguard your home&#39;s exterior and enhances its longevity."}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ py: 8, textAlign: "center", bgcolor: "#153e75", color: "#FFD700", mt: 8 }}>
        <Typography variant="h5" fontWeight={600}>
          {"Maximize Your Home&#39;s Cleanliness & Longevity"}
        </Typography>
        <Typography variant="h6" sx={{ mt: 1, opacity: 0.9 }}>
          {"Protect your property from damage and enhance its appearance with our expert cleaning services. Contact us today!"}
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
