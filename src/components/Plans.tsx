import { Box, Container, Paper, Typography } from "@mui/material";
import { useMediaMatch } from "../hooks/useMediaMatch";
import SectionTitle from "../common/SectionTitle";
import { IoChatbubbleOutline } from "react-icons/io5";
import ConstructionIcon from "@mui/icons-material/Construction";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { FaRegHandshake } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const data = [
  {
    title: "היכרות מעמיקה",
    desc: ["שיחה ראשונית להקשבה, חיבור והבנת הצרכים"],
    id: "1",
    icon: <IoChatbubbleOutline fontSize={60} />,
  },
  {
    title: "קונספט בהתאמה אישית",
    desc: ["גיבוש רעיון עיצובי ייחודי שמבוסס עליך."],
    id: "2",
    icon: <ColorLensIcon sx={{ fontSize: "60px" }} />,
  },
  {
    title: "פתרונות עיצוביים חכמים",
    desc: ["תכנון מדוייק שמשלב בין פונקציונליות לאסתטיקה."],
    id: "3",
    icon: <ConstructionIcon sx={{ fontSize: "60px" }} />,
  },
  {
    title: "ליווי עד הסוף",
    desc: ["ליווי צמוד בכל שלב עד להגשמה מלאה של הפרויקט"],
    id: "4",
    icon: <FaRegHandshake fontSize={60} />,
  },
];

export default function Plans() {
  const isMobile = useMediaMatch("(max-width: 768px)");
  const isMiniMobile = useMediaMatch("(max-width: 500px)");
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Box id="plans" sx={{ py: 8, position: "relative" }}>
      {isMobile ? (
        <Container
          className="plans-container"
          sx={{ flexDirection: isMobile ? "column" : "row" }}
        >
          <SectionTitle
            title="המסע שלנו ביחד..."
            className="plans-title"
            variant={"h2"}
          />
          <Box
            sx={{
              position: isMobile ? "static" : "sticky",
              top: "80px",
              height: isMobile ? "unset" : "250px",
            }}
          >
            <Typography variant={isMiniMobile ? "h6" : "h5"} color="#697565">
              אני כאן כדי ללוות אותך צעד צעד, להפוך רעיונות למציאות - ושהכל
              ירגיש בדיוק אתה.
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
                    height: `clamp(330px, 25vw, 400px)`,
                    width: `${isMobile ? "95%" : "450px"}`,
                    overflow: "hidden",
                    textAlign: "center",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  {item.icon}

                  <Typography variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {item.desc.map((part, i) => (
                      <Typography
                        key={i}
                        sx={{ fontSize: "18px", textAlign: "center" }}
                        variant="body1"
                      >
                        {part}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </Box>
            ))}
          </Box>
        </Container>
      ) : (
        <Container className="plans-container" sx={{ flexDirection: "column" }}>
          <Box>
            <SectionTitle
              title="המסע שלנו..."
              className="plans-title"
              variant={isMiniMobile ? "h3" : "h2"}
            />
          </Box>
          <Box
            ref={ref}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              margin: `${isMobile ? "0" : "0 20px"}`,
              alignItems: "stretch",
              "@media (max-width:750px)": {
                flexDirection: "column",
              },
            }}
          >
            {data.map((item, i) => (
              <Box
                className={`slot ${inView ? "push-up" : ""}`}
                key={item.id}
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  animationDelay: `${(i + 1) * 0.5}s !important`,
                }}
              >
                {item.icon}
                <Paper
                  elevation={3}
                  sx={{
                    padding: isMobile ? 2 : 4,
                    borderRadius: 3,
                    height: `240px`,
                    minWidth: "200px",
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
                      <Typography
                        key={i}
                        textAlign={"right"}
                        variant="body1"
                        sx={{ fontSize: "20px", textAlign: "center" }}
                      >
                        {part}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </Box>
            ))}
          </Box>
          <Typography
            variant={isMiniMobile ? "h6" : "h5"}
            color="#697565"
            sx={{ textAlign: "center" }}
          >
            אני כאן כדי ללוות אותך צעד צעד, להפוך רעיונות למציאות - ושהכל ירגיש
            בדיוק אתה.
          </Typography>
        </Container>
      )}
    </Box>
  );
}
