import { Box, Container, Typography } from "@mui/material";

const Services = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        px: 6,
        display: "flex",
        "@media (max-width:750px)": {
          flexDirection: "column",
        },
        position: "relative",
        zIndex: 2,
      }}
    >
      <Container
        sx={{
          display: "flex",
          gap: 4,
          alignItems: "center",
          "@media (max-width:750px)": {
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexShrink: 0,
            borderRadius: "10px",
            width: "calc(35vw - 4px)",
            height: "calc(50vw - 6px)",
            "@media (max-width:750px)": {
              width: "calc(120% - 16px)",
              height: "calc(110vw - 8px)",
            },

            maxWidth: 500,
            maxHeight: 650,
          }}
        />
        <Container sx={{ maxWidth: "sm" }}>
          <Typography variant="h3" gutterBottom>
            מסלולים:
          </Typography>
          <Typography variant="h5" color="#424242">
            מעויינים
          </Typography>
        </Container>
      </Container>
    </Box>
  )
}

export default Services