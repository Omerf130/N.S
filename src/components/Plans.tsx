import { Box, Container, Paper, Typography } from "@mui/material";
import { useMediaMatch } from "../hooks/useMediaMatch";
import SectionTitle from "../common/SectionTitle";
import { IoChatbubbleOutline } from "react-icons/io5";
import ConstructionIcon from '@mui/icons-material/Construction';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { TbMessages } from "react-icons/tb";

const data = [
  {
    title: "קבלת לוח השראה",
    desc: [
      "היכרות מעמיקה, שיחה ראשונית להקשבה, חיבור והבנת הצרכים"
    ],
    id: "1",
    icon: <IoChatbubbleOutline fontSize={60}/>
  },
  {
    title: "הדמיה עבור החלל הנבחר",
    desc: [
      "קונספט בהתאמה אישית. גיבוש רעיון עיצובי ייחודי שמבוסס עליך."
    ],
    id: "2",
    icon: <ConstructionIcon sx={{fontSize:"60px"}}/>
  },
  {
    title: "חוברת תוכניות (הרלוונטית לפרויקט)",
    desc: [
      "פתרונות עיצוביים חכמים, תכנון מדוייק שמשלב בין פונקציונליות לאסתטיקה."
    ],
    id: "3",
    icon: <ColorLensIcon  sx={{fontSize:"60px"}}/>
  },
  {
    title: "ייעוץ וליווי במהלך הביצוע",
    desc: [
      "ליווי עד הסוף. ליווי צמוד בכל שלב עד להגשמה מלאה של הפרויקט"
    ],
    id: "4",
    icon: <TbMessages fontSize={60}/>
  },
];

export default function Plans() {
  const isMobile = useMediaMatch("(max-width: 768px)");
  const isMiniMobile = useMediaMatch("(max-width: 500px)");

  return (
    <Box id="plans" sx={{ py: 8, position:"relative" }}>
      {/* <Container
        className="plans-container"
        sx={{ flexDirection: isMobile ? "column" : "row" }}
      >
        <Box
          sx={{
            position: isMobile ? "static" : "sticky",
            top: "80px",
            height: isMobile ? "unset" : "250px",
          }}
        >
          <SectionTitle
            title="המסע שלנו ביחד..."
            className="plans-title"
            variant={isMiniMobile ? "h3" : "h2"}
          />
          <Typography variant={isMiniMobile ? "h6" : "h5"} color="#424242">
            אני כאן כדי ללוות אותך צעד צעד, להפוך רעיונות למציאות - ושהכל ירגיש בדיוק אתה.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            margin: `${isMobile ? "0" : "0 20px"}`,
            alignItems: "stretch",
            "@media (max-width:750px)": {
              flexDirection: "column",
            },
          }}
        >
          {data.map((item) => (
            <Box
              key={item.id}
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: isMobile ? "center" : "flex-end",
                zIndex: item.id,
                position: "sticky",
                top: "80px",
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: isMobile ? 2 : 4,
                  borderRadius: 3,
                  height: `clamp(430px, 25vw, 500px)`,
                  width: `${isMobile ? "95%" : "450px"}`,
                  overflow: "hidden",
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
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  {item.desc.map((part, i) => (
                    <Typography key={i} textAlign={"right"} variant="body1">
                      {part}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container> */}
      <Container
        className="plans-container"
        sx={{ flexDirection: "column"  }}
      >
        <Box
        >
          <SectionTitle
            title="המסע שלנו ביחד..."
            className="plans-title"
            variant={isMiniMobile ? "h3" : "h2"}
          />
          <Typography variant={isMiniMobile ? "h6" : "h5"} color="#424242">
            אני כאן כדי ללוות אותך צעד צעד, להפוך רעיונות למציאות - ושהכל ירגיש בדיוק אתה.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap:"wrap",
            gap: 4,
            margin: `${isMobile ? "0" : "0 20px"}`,
            alignItems: "stretch",
            "@media (max-width:750px)": {
              flexDirection: "column",
            },
          }}
        >
          {data.map((item) => (
            <Box
              key={item.id}
              sx={{
                flex: 1,
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems:"center",
                gap:"10px"
              }}
            >
              {item.icon}
              <Paper
                elevation={3}
                sx={{
                  padding: isMobile ? 2 : 4,
                  borderRadius: 3,
                  height: `240px`,
                  // width: `${isMobile ? "95%" : "450px"}`,
                  minWidth:"200px",
                  overflow: "hidden",
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
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  {item.desc.map((part, i) => (
                    <Typography key={i} textAlign={"right"} variant="body1">
                      {part}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
