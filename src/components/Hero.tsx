import { Box, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: 'url("/pics/gallery/WhatsApp Image 2025-04-21 at 17.32.48 (1).jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        overflow: "hidden",
        // "@media (max-width:600px)": {
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "contain"
        // },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      <Typography
        variant="h3"
        component="h1"
        sx={{ position: "relative", zIndex: 2 }}
      >
        Welcome to My Static Site
      </Typography>
    </Box>
  );
}
