import { Box, Container, Typography } from "@mui/material";
import SectionTitle from "../common/SectionTitle";
import { useMediaMatch } from "../hooks/useMediaMatch";

export default function About() {
  const isMobile = useMediaMatch("(max-width: 500px)");
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
            backgroundImage: 'url("/pics/about1.jpeg")',
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
        <Container sx={{ maxWidth: "sm", padding:"0"}}>
          <SectionTitle title="נעים מאוד," className="about-title" variant={isMobile ? "h3" : "h2"}/>
          <Typography variant={isMobile ? "h6" : "h5"} color="#424242">
            כמו סמל היין ויאנג - אני מאמינה שעיצוב טוב הוא שילוב הרמוני של ניגודים.
            
            אני נזי שרון, מעצבת פנים עם תשוקה אמיתית לאמנות עיצוב החללים - ובמיוחד עיצוב מטבחים. כמו עקרון היין ויאנג אני מאמינה שעיצוב מוצלח נולד מאיזון והרמוניה בין ניגודים: פונקציונליות ואסתטיקה, יצירתיות ופרקטיות, חלום ומציאות. 
            בגישה פתוחה וייחודית, אני רואה בכל אתגר הזמדנות לחדש, להעז וליצור משהו שמעורר רגש. אני חותרת לפרוץ גבולות ולשבור תפיסות שגרתיות בתחום העיצוב, כדי לממש את החלומות של לקוחותיי דרך פתרונות אישיים ומדויקים. 
            אני מאמינה בהקשבה אמיתית ובחיבור עמוק לצרכים, לטעמים ולחלומות של כל לקוח. יחד עם ראייה יצירתית מחוץ לקופסה, אני יוצרקת חללים שמשקפים אישיות, סגנון ודרך חיים - לא רק יופי חיצוני. 
            
            תחום המטבחים קרוב לליבי במיוחד: זהו הלב הפועם של הבית, ואני מתמחה בעיצוב חללים שציעים גם נוחות ופונקציונליות, וגם תחושת חום, יופי והרמוניה. 
            
            אז בואו נהפוך יחד דמיון... למציאות.💫
          </Typography>
        </Container>
      </Container>
    </Box>
  );
}
