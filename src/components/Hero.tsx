import { Box, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage:
          'url("/pics/gallery/WhatsApp Image 2025-04-22 at 18.10.30.jpeg")',
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

      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h1" component="h1">
          Nazi Sharon
        </Typography>

        <Typography variant="h3" sx={{ mt: 2 }}>
           מהדמיון... למציאות... 💫
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          פתרונות יצירתיים, תוצאות יצירתיות
        </Typography>
      </Box>
    </Box>
  );
}
