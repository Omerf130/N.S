import { Box, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage:
          'url("/pics/gallery/gallery6.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        overflow: "hidden",
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
           מהדמיון... למציאות...💫
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          פתרונות יצירתיים, תוצאות יצירתיות
        </Typography>
      </Box>
    </Box>
  );
}
