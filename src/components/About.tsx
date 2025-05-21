import { Box, Button, Container, Typography } from "@mui/material";
import SectionTitle from "../common/SectionTitle";
import { useMediaMatch } from "../hooks/useMediaMatch";
import { RiContactsLine } from "react-icons/ri";

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
            backgroundImage: 'url("/pics/about2.jpeg")',
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
        <Container
          sx={{
            maxWidth: "sm",
            padding: "0",
            display: "flex",
            flexDirection: "column",
            height:"100%",
            gap: "30px",
            justifyContent:"space-between"
          }}
        >
          <Typography variant={isMobile ? "h6" : "h5"} color="#697565">
            כמו סמל היין ויאנג - אני מאמינה שעיצוב טוב הוא שילוב הרמוני של
            ניגודים.
          </Typography>
          <SectionTitle
            title="נעים מאוד,"
            className="about-title"
            variant={isMobile ? "h3" : "h2"}
          />
          <Box sx={{display:"flex", flexDirection:"column", gap:5}}>
          <Typography variant={isMobile ? "h6" : "h5"} color="#697565">
            אני נזי שרון, מעצבת פנים עם התמחות בעיצוב מטבחים.
          </Typography>
          <Typography variant={isMobile ? "h6" : "h5"} color="#697565">
            בגישה פתוחה וייחודית, אני רואה בכל אתגר הזדמנות לחדש, להעז וליצור
            משהו שמעורר רגש. אני חותרת לפרוץ גבולות ולשבור תפיסות שגרתיות בתחום
            העיצוב, כדי לממש את החלומות של לקוחותיי דרך פתרונות אישיים ומדויקים.
          </Typography>
          <Typography variant={isMobile ? "h6" : "h5"} color="#697565">
            בין פונקציונליות לאסתטיקה, בין חלום למציאות - אני יוצרת חללים
            שמשקפים את האישיות והמהות שלכם.
          </Typography>
          </Box>
          <Button
            className="nav-item"
            href="#contact"
            sx={{
              left: "10px",
              bottom: "10px",
              backgroundColor: "rgba(0,0,0,0.8)",
              color: "#fff",
              borderRadius: "8px",
              marginBottom:"-7px",
              display:"flex",
              alignItems:"center",
              gap:5,
            }}
          >
            <Typography fontSize={30} color="#fff">
              הפגישה הראשונה עליי - בואו נתחיל
            </Typography>
            <RiContactsLine size={30} color="#fff" />
          </Button>
        </Container>
      </Container>
    </Box>
  );
}
