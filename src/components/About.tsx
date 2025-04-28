import { Box, Container, Typography } from "@mui/material";
import SectionTitle from "../common/SectionTitle";

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        px: 6,
        display: "flex",
        "@media (max-width:750px)": {
          flexDirection: "column",
        },
        position: "relative",
        zIndex: 2,
      }}
    >
      <Container
        sx={{
          display: "flex",
          gap: 4,
          alignItems: "center",
          "@media (max-width:750px)": {
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url("/pics/about.jpeg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexShrink: 0,
            borderRadius: "10px",
            width: "calc(35vw - 4px)",
            height: "calc(50vw - 6px)",
            "@media (max-width:750px)": {
              width: "calc(120% - 16px)",
              height: "calc(110vw - 8px)",
            },

            maxWidth: 500,
            maxHeight: 650,
          }}
        />
        <Container sx={{ maxWidth: "sm" }}>
          <SectionTitle title="נעים מאוד" className="about-title" variant="h2"/>
          <Typography variant="h5" color="#424242">
            אני נזי שרון, מעצבת פנים עם תשוקה אמיתית לאומנות עיצוב החללים, ובפרט
            בעיצוב מטבחים. עם ראש פתוח וייחודי, אני מאמינה כי כל אתגר הוא
            הזדמנות לחדש וליצור משהו מרגש. אני שואפת לחצות גבולות ולשבור מיתוסים
            מקובלים בתחום העיצוב, ולממש את החלומות של לקוחותיי בעזרת פתרונות
            מותאמים אישית. הגישה שלי היא יסודית וממוקדת, ואני משקיעה את הלב
            והנשמה בכל פרויקט. אני מביאה איתי חשיבה מחוץ לקופסה, ומקשיבה לצרכים
            ולרצונות של לקוחותיי כדי לשלב אותם עם החזון שלי. כך אני יוצרת מרחבים
            שמשקפים את האישיות והסגנון של כל לקוח. עיצוב המטבח הוא תחום שמיוחד
            לי, ואני מתמחה ביצירת חללים פונקציונליים ויפהפיים, המשלבים בין נוחות
            לאסתטיקה. ובסופו של דבר, בואו יחד נהפוך מדמיון… למציאות.
          </Typography>
        </Container>
      </Container>
    </Box>
  );
}
