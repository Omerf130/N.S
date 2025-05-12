import { Box, Container, Paper, Typography } from "@mui/material";
import SectionTitle from "../common/SectionTitle";
import { useMediaMatch } from "../hooks/useMediaMatch";

const services = [
  { id: 1, text: "🪄 - תכנון ועיצוב מטבחים בהתאמה אישית" },
  { id: 2, text: "🪄 - עיצוב חללים פרטיים וציבוריים" },
  { id: 3, text: "🪄 - ליווי מלא משלב הרעיון ועד לביצוע" },
  { id: 4, text: "🪄 - ייעוץ למתכננים בעצמם" },
];

const Services = () => {
    const isMobile = useMediaMatch("(max-width: 500px)");
  return (
    <Box id="services">
      <Container className="services">
        <SectionTitle title="שירותים" className="services-title" variant="h2" />
        <Paper
          className="services-list"
          sx={{
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "unset",
          }}
        >
          {services.map((service) => (
            <Box>
              <Box key={service.id}></Box>
              <Typography variant={isMobile ? "h6" : "h5"}>{service.text}</Typography>
            </Box>
          ))}
        </Paper>
      </Container>
    </Box>
  );
};

export default Services;
