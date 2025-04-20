import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ py: 4, textAlign: "center", bgcolor: "grey.200" }}>
      <Typography variant="body2">&copy; {new Date().getFullYear()} My Static Site</Typography>
    </Box>
  );
}
