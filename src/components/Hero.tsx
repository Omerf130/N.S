import { Box, Typography } from "@mui/material";

export default function Hero() {
  const heroTitle = "Nazi Sharon";

  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: 'url("/pics/gallery/gallery6.jpeg")',
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
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "6rem" },
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {heroTitle.split("").map((char, i) => (
            <span
              className="character"
              key={i}
              style={{ animationDelay: `${(i + 1) * 0.25}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </Typography>

        <Typography variant="h3" sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            mt: 2 
          }}>
          מהדמיון... למציאות...💫
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          פתרונות יצירתיים, תוצאות יצירתיות
        </Typography>
      </Box>
    </Box>
  );
}
