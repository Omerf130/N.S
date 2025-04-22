import { Box, Container, Typography } from "@mui/material";

export default function Projects() {
  return (
    <Box id="Projects" sx={{ py: 8,position:"relative", zIndex: 2 }}>
      <Container>
        <Typography variant="h4" gutterBottom>
         פרויקטים
        </Typography>
        <Typography>
          גלריה
        </Typography>
      </Container>
    </Box>
  );
}
