import { Box, Container, Paper, Typography } from "@mui/material";
import { useMediaMatch } from "../hooks/useMediaMatch";
import SectionTitle from "../common/SectionTitle";

const data = [
  {
    title: "קבלת לוח השראה",
    desc: [
      "🪄 כאן נבנה לוח השראה אישי שבו נבחר את החומרים, הגוונים והרהיטים שיתאימו לקונספט הנבחר.",
      "🪄 הלוח כולל דוגמאות של טקסטורות, צבעים ורהיטים, כדי להמחיש את האווירה הכללית והסגנון של החלל.",
      "🪄 נבחן יחד את האלמנטים השונים כדי לוודא שהכול מתואם עם החזון שלכם.",
    ],
    id: "1",
  },
  {
    title: "הדמיה עבור החלל הנבחר",
    desc: [
      "🪄 ניצור הדמיה תלת-ממדית של החלל, שתאפשר לכם לראות כיצד כל אלמנט משתלב יחד.",
      "🪄 ההדמיה תכלול פרטי עיצוב כמו ריהוט, תאורה, צבעים ואפילו פרטים כמו צמחייה ואביזרים.",
      "🪄 בכך תוכלו לקבל תחושה מוחשית של החלל לפני ביצוע השינויים.",
    ],
    id: "2",
  },
  {
    title: "חוברת תוכניות (הרלוונטית לפרויקט)",
    desc: [
      "🪄 תוכנית רהיטים: מפרטת את מיקום הרהיטים, מידותיהם וסוגיהם, כדי להבטיח זרימה נכונה בחלל.",
      "🪄 תוכנית ריצוף: מציגה את סוגי הריצוף, הכיוונים והחיבורים בין החומרים השונים.",
      "🪄 תוכנית גבס: מפרטת על קירות גבס, נישות ומבנים נוספים שיתווספו לחלל.",
      "🪄 תוכנית חשמל: כוללת מיקום שקעים, מפסקים ופתרונות תאורה.",
      "🪄 תוכנית תאורה: מציגה את סוגי התאורה (תקרה, שולחן, ריצפה) והכיוונים שלהן להדגשת האווירה.",
      "🪄 תוכנית חדר רחצה: מפרטת את מיקום הכלים הסניטריים, הארונות והאביזרים.",
      "🪄 תוכנית נגרות ומטבח: כוללת את כל הפרטים הנדרשים לבניית מטבח פונקציונלי ואסתטי, כולל מיקום הארונות, השיש והציוד.",
    ],
    id: "3",
  },
  {
    title: "ייעוץ וליווי במהלך הביצוע",
    desc: [
      "🪄 במהלך תהליך הביצוע, אני אשמור על תקשורת קבועה עם הספקים והקבלנים, כדי לוודא שהפרויקט מתנהל בהתאם לתוכניות ולחזון שלכם.",
      "🪄 אני אהיה כאן כדי לענות על שאלות, לספק פתרונות ולבצע התאמות במידת הצורך.",
    ],
    id: "4",
  },
  {
    title: "שירות לאחר סיום הפרויקט",
    desc: [
      "🪄 לאחר סיום העבודה, אני זמינה להמשך ייעוץ, פתרונות לתחזוקה ושיפורים נוספים בעתיד, על מנת להבטיח שהחלל שלכם יישאר בדיוק כפי שדמיינתם.",
    ],
    id: "5",
  },
];

export default function Plans() {
  const isMobile = useMediaMatch("(max-width: 768px)");
  const isMiniMobile = useMediaMatch("(max-width: 500px)");

  return (
    <Box id="plans" sx={{ py: 8, position: "relative", zIndex: 2 }}>
      <Container
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
            לאחר פגישת היכרות, בה אבין את הצרכים והרצונות שלכם, נבחר יחד קונספט
            עיצובי. במהלך התהליך, אני אציג בפניכם את השלבים השונים בכדי להבטיח
            שהפרויקט יענה על הציפיות שלכם ויהיה מותאם אישית לצרכים שלכם. להלן
            פירוט של כל שלב:
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
      </Container>
    </Box>
  );
}
