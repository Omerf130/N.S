import { Box, Container, Typography } from "@mui/material";

export default function Plans() {
  return (
    <Box id="plans" sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Plans
        </Typography>
        <Typography>
          This is a simple about section. You can customize it with more content or imagery.
        </Typography>
      </Container>
    </Box>
  );
}
