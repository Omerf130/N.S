import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { DICT } from "../consts";

const sections = [
  { label: DICT.about, id: "about" },
  { label: DICT.plans, id: "plans" },
  { label: DICT.services, id: "services" },
  { label: DICT.gallery, id: "gallery" },
  { label: DICT.contact, id: "contact" },
];

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        mt: 5,
        py: 3,
        px: 2,
        textAlign: "center",
        backgroundColor: "#fff",
        color: "#9e9e9e",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box sx={{ mb: 2 }}>
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            underline="hover"
            color="inherit"
            sx={{ mx: 1 }}
          >
            {section.label}
          </Link>
        ))}
      </Box>
      <Typography variant="h4">Nazi Sharon</Typography>
      <Typography variant="body2">זכויות יוצרים, כל הזכויות שמורות</Typography>
      <Typography variant="body2">
        © 2025 omer faclieru בניית אתרים
      </Typography>
    </Box>
  );
};

export default Footer;
