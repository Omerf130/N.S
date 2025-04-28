import { Box, Container, Paper, Typography } from "@mui/material";

const services = [
  { id: 1, text: "תכנון ועיצוב פנים" },
  { id: 2, text: "הדמיות תלת מימד" },
  { id: 3, text: "בחירת חומרים וריהוט" },
  { id: 4, text: "התמחות בעיצוב מטבחים" },
  { id: 5, text: "ליווי אישי לאורך כל התהליך" },
];

const Services = () => {
  return (
    <Container className="services">
      <Typography variant="h2">שירותים</Typography>
      <Paper className="services-list" sx={{backgroundColor:"transparent", border:"none", boxShadow:"unset"}}>
        {services.map((service) => (
          <Box
            key={service.id}
          >
            <Typography variant="h6">{service.text}</Typography>
          </Box>
        ))}
      </Paper>
    </Container>
  );
};

export default Services;
