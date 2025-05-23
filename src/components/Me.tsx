import { Box, Container, Paper, Typography } from "@mui/material";
import SectionTitle from "../common/SectionTitle";
import { useMediaMatch } from "../hooks/useMediaMatch";

const Me = () => {
  const isMobile = useMediaMatch("(max-width: 500px)");
  return (
    <Box id="me">
      <Container className="services">
        <SectionTitle
          title="האני מאמין שלי"
          className="services-title"
          variant="h2"
        />
        <Paper
          // className="services-list"
          sx={{
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "unset",
          }}
        >
          <Box sx={{textAlign:"center"}}>
            <Typography variant={isMobile ? "h6" : "h5"}>
              עיצוב פנים עבורי הוא הרבה מעבר ליופי - הוא יצירה של חוויה
              יום-יומית.
            </Typography>
            <Typography variant={isMobile ? "h6" : "h5"}>
              אני מאמינה שבית אמור לא רק להיראות טוב, אלא גם להרגיש נכון
            </Typography>
            <Typography variant={isMobile ? "h6" : "h5"}>
              לשם כך, אני משלבת בין דיוק תכנוני, הקשבה עמוקה והרבה רגש.
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{ marginTop: "7px" }}
            >
              אני לא עובדת עם תבניות - כל פרויקט נולד מתוך האדם שמאחוריו.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Me;
