import { Box, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        backgroundImage: 'url("/pics/hero.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "80vh",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" component="h1">
        Welcome to My Static Site
      </Typography>
    </Box>
  );
}