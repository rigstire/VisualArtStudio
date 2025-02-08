"use client";

import { useState } from "react";
import { AppBar, Toolbar, Typography, TextField, MenuItem, Button, Box, Container, Paper, Grid } from "@mui/material";
import Image from "next/image";

const services = [
  "Pressure Washing",
  "Bird Proofing",
  "Solar Cleaning",
  "Concrete Cleaning",
  "Gutter Cleaning",
  "Soft Washing Homes",
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <Box sx={{ bgcolor: "#0A192F", minHeight: "200vh", color: "white", display: "flex", flexDirection: "column",mb: 4 }}>
      {/* Navigation Bar */}

      {/* Contact Section */}
      <Container maxWidth="lg" sx={{ mt: 12, pb: 8 }}>
      <Grid container spacing={6} alignItems="center">
  {/* Left Side: Text + Form */}
  <Grid item xs={12} md={6} sx={{ mt: 6 }}>
    <Typography variant="h3" fontWeight={700} gutterBottom sx={{ mt: 15}}>
      Contact Us
    </Typography>
    <Typography variant="h6" sx={{ opacity: 0.8, mb: 4, lineHeight: 1.5 }}>
    Bring your vision to life with our expert artists. We’re dedicated to delivering stunning, high-quality artwork with creativity and client satisfaction at the heart of everything we do.
    </Typography>

            {/* Contact Info */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Phone:
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8 }}>
                (949) 951-5971
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
                Email:
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8 }}>
              visualartsmurals@cox.net
              </Typography>
            </Box>

            {/* Form */}
            <Paper elevation={10} sx={{ p: 4, borderRadius: 3, bgcolor: "#112D4E" }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  name="name"
                  label="Full Name"
                  variant="outlined"
                  sx={{ mb: 3, bgcolor: "white", borderRadius: 1, "& .MuiOutlinedInput-root": { p: 2 } }}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  name="email"
                  label="Email Address"
                  variant="outlined"
                  sx={{ mb: 3, bgcolor: "white", borderRadius: 1, "& .MuiOutlinedInput-root": { p: 2 } }}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  variant="outlined"
                  sx={{ mb: 3, bgcolor: "white", borderRadius: 1, "& .MuiOutlinedInput-root": { p: 2 } }}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  select
                  name="service"
                  label="Select Service"
                  variant="outlined"
                  sx={{ mb: 3, bgcolor: "white", borderRadius: 1, "& .MuiOutlinedInput-root": { p: 2 } }}
                  onChange={handleChange}
                >
                  {services.map((service, index) => (
                    <MenuItem key={index} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  name="message"
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{ mb: 3, bgcolor: "white", borderRadius: 1, "& .MuiOutlinedInput-root": { p: 2 } }}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    bgcolor: "#F9A826",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    py: 1.5,
                    borderRadius: 2,
                    mt: 2,
                    "&:hover": { bgcolor: "#E68900" },
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Right Side: Image with Proper Sizing */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 500,
                height: 400,
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <Image
                src="/images/contactimage.jpg"
                alt="Pressure Washing Service"
                layout="fill"
                objectFit="cover"
                quality={90}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;
