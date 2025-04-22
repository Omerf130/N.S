import { Box, Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        px: 6,
        display: "flex",
        gap: 4,
        "@media (max-width:750px)": {
          flexDirection: "column",
        },
        alignItems: "center",
        position: "relative",
        zIndex:2,
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
          // width: {
          //   xs: "100%",
          //   sm: "calc(40% - 16px)",
          // },
          // height: {
          //   xs: "50vw", // 50% of viewport width on mobile
          //   sm: "60vh", // 60% of viewport height on larger screens
          // },
          maxWidth: 500,
        }}
      />
      <Container sx={{ maxWidth: "sm" }}>
        <Typography variant="h4" gutterBottom>
          מי אני?
        </Typography>
        <Typography variant="h5">
          ני נזי שרון, מעצבת פנים עם תשוקה אמיתית לאומנות עיצוב החללים, ובפרט
          בעיצוב מטבחים. עם ראש פתוח וייחודי, אני מאמינה כי כל אתגר הוא הזדמנות
          לחדש וליצור משהו מרגש. אני שואפת לחצות גבולות ולשבור מיתוסים מקובלים
          בתחום העיצוב, ולממש את החלומות של לקוחותיי בעזרת פתרונות מותאמים
          אישית. הגישה שלי היא יסודית וממוקדת, ואני משקיעה את הלב והנשמה בכל
          פרויקט. אני מביאה איתי חשיבה מחוץ לקופסה, ומקשיבה לצרכים ולרצונות של
          לקוחותיי כדי לשלב אותם עם החזון שלי. כך אני יוצרת מרחבים שמשקפים את
          האישיות והסגנון של כל לקוח. עיצוב המטבח הוא תחום שמיוחד לי, ואני מתמחה
          ביצירת חללים פונקציונליים ויפהפיים, המשלבים בין נוחות לאסתטיקה. ובסופו
          של דבר, בואו יחד נהפוך מדמיון… למציאות.
        </Typography>
      </Container>
    </Box>
  );
}
