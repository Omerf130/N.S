import { Box, Container, Paper, Typography } from "@mui/material";

const data = [
  {
    title: "קבלת לוח השראה",
    desc: "בו מוצג החומרים,הגוונים והרהיטים להגשמת חלומכם.",
    id: "1",
  },
  {
    title: "הדמיה עבור החלל הנבחר",
    desc: "על מנת שתוכלו לראות כיצד הכל הולך להיראות.",
    id: "2",
  },
  {
    title: "חוברת תוכניות (הרלוונטי לפרויקט)",
    desc: "תוכנית רהיטים, תוכנית ריצוף,תוכנית גבס, תוכנית חשמל, תוכנית תאורה,תוכנית חדר רחצה, תוכנית נגרות ומטבח…",
    id: "3",
  },
];

export default function Plans() {
  return (
    <Box id="plans" sx={{ py: 8, position: "relative", zIndex: 2 }}>
      <Container sx={{display:"flex", flexDirection: "column", gap:"10px"}}>
        <Typography variant="h3">המסע שלנו ביחד:</Typography>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            alignItems: "stretch",
            "@media (max-width:750px)": {
              flexDirection: "column",
            },
          }}
        >
          {data.map((item) => (
            <Box
              key={item.id}
              sx={{ flex: 1, display: "flex", alignItems: "stretch" }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: 3,
                  borderRadius: 3,
                  width: "100%",
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              >
                <Typography variant="h5" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body1">{item.desc}</Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
