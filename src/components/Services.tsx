import { Box, Container, Paper, Typography } from "@mui/material";
import SectionTitle from "../common/SectionTitle";

const services = [
  { id: 1, text: "תכנון ועיצוב פנים" },
  { id: 2, text: "הדמיות תלת מימד" },
  { id: 3, text: "בחירת חומרים וריהוט" },
  { id: 4, text: "התמחות בעיצוב מטבחים" },
  { id: 5, text: "ליווי אישי לאורך כל התהליך" },
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
            <Box key={service.id}>
              <Typography variant="h6">{service.text}</Typography>
            </Box>
          ))}
        </Paper>
      </Container>
    </Box>
  );
};

export default Services;
