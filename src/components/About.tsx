import { Box, Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        px: 2,
        display: "flex",
        gap: 4,
        flexDirection: {
          xs: "column", // <600px
          sm: "row",    // ≥600px
        },
        alignItems: "center", // nice centering for small screens
      }}
    >
      <Box
        sx={{
          backgroundImage: 'url("/pics/about.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 500,
          width: 400,
          flexShrink: 0,
        }}
      />
      <Container sx={{ maxWidth: "sm" }}>
        <Typography variant="h4" gutterBottom>
          מי אני?
        </Typography>
        <Typography variant="h5">
          אני נזי שרון, מעצבת פנים עם תשוקה אמיתית לאומנות עיצוב החללים...
        </Typography>
      </Container>
    </Box>
  );
}
