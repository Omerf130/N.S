import { Typography } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import React from "react";
import SectionTitle from "../common/SectionTitle";

const Rec: React.FC = () => {
  const recommendations = [
    {
      id: 1,
      text: "העבודה שלך פשוט מדהימה! הצלחת להבין בדיוק מה רציתי וליצור משהו ייחודי שמתאים לי. אני מקבלת המון מחמאות!",
      author: "מספרת ויוה",
      rating: 5,
    },
    {
      id: 2,
      text: "תהליך העבודה איתך היה נעים וקל. היית קשובה לצרכים שלי והצעת רעיונות יצירתיים. התוצאה הסופית עלתה על כל הציפיות שלי!",
      author: "אורלי א.",
      rating: 5,
    },
    {
      id: 3,
      text: "המקצועיות שלך והיכולת שלך לתפוס את החזון שלי הפכו את הפרויקט הזה לחוויה חיובית. אני בהחלט אעבוד איתך שוב בעתיד!",
      author: "נסיה ג.",
      rating: 5,
    },
    {
      id: 4,
      text: "העיצוב שיצרת עבורי לא רק שיפר את המראה של העסק שלי, אלא גם הגדיל את המעורבות של הלקוחות. תודה על העבודה המצוינת!",
      author: "יוסי א.",
      rating: 5,
    },
    {
      id: 5,
      text: "הייתה לי חוויה נהדרת לעבוד איתך! היית זמינה לכל שאלה, והרגשתי שאני בידיים טובות. אני ממליצה עליך לכל מי שמחפש מעצבת מוכשרת!",
      author: "שרונה ק.",
      rating: 5,
    },
  ];

  return (
    <div
      className="rec-gallery"
      style={{ maxWidth: "800px", margin: "40px auto"}}
    >
      {/* <Typography variant="h2" sx={{position:"relative", textAlign:"center"}}>מה הלקוחות שלי אומרים</Typography> */}
      <SectionTitle title="מה הלקוחות שלי אומרים" className="rec-title" variant="h2"/>

      <Splide
        options={{
          type: "loop",
          perPage: 1,
          perMove: 1,
          autoplay: true,
          interval: 5000,
          rewind: true,
          pauseOnHover: true,
          pauseOnFocus: true,
          arrows: true,
          pagination: true,
        }}
        aria-label="Recommendations Gallery"
      >
        {recommendations.map((rec) => (
          <SplideSlide key={rec.id}>
            <div
              style={{
                padding: "2rem",
                border: "1px solid #ddd",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                textAlign: "center",
                color: "#000",
                backgroundColor: "#fff",
              }}
            >
              <p style={{ fontSize: "1.2rem", margin: "1rem 0" }}>{rec.text}</p>
              <p style={{fontStyle:"italic"}}>{rec.author}</p>
              <div style={{ color: "#f39c12", fontSize: "1.5rem" }}>
                {"★".repeat(rec.rating)}
                {"☆".repeat(5 - rec.rating)}
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Rec;
