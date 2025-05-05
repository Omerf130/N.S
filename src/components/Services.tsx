import { Box, Container, Paper, Typography } from "@mui/material";
import SectionTitle from "../common/SectionTitle";

const services = [
  { id: 1, text: "תכנון פנים למגורים" },
  { id: 2, text: "עיצוב משרדים" },
  { id: 3, text: "ייעוץ עיצובי" },
  { id: 4, text: "עיצוב חללים ציבוריים" },
  { id: 5, text: "תכנון תאורה" },
  { id: 6, text: "בחירת צבעים וחומרים" },
];

const Services = () => {
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
              <Typography variant="h6">{service.text}</Typography>
            </Box>
          ))}
        </Paper>
      </Container>
    </Box>
  );
};

export default Services;
