import { Box, Container, Typography, TextField, Button } from "@mui/material";

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Contact
        </Typography>
        <form>
          <TextField label="Name" fullWidth margin="normal" />
          <TextField label="Email" fullWidth margin="normal" />
          <TextField
            label="Message"
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Send
          </Button>
        </form>
      </Container>
    </Box>
  );
}
