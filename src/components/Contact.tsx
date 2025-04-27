import { useState } from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";
import { useMediaMatch } from "../hooks/useMediaMatch";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const isMobile = useMediaMatch("(max-width: 768px)");

  const handleSubmit = () => {
    const phoneNumber = "+972545866554";
    const message = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage: ${content}`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      "+",
      ""
    )}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const isFormValid = name.trim() && email.trim() && content.trim();

  return (
    <Container
      className="contact"
      maxWidth="lg"
      sx={{
        mt: 5,
        direction: "rtl",
        position: "relative",
        backgroundColor: "rgb(192, 8, 57)",
        borderRadius: "10px",
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
          justifyContent: "space-between",
          gap: 4,
          maxHeight:isMobile ? "unset" : "500px",
        }}
      >
        {/* My Details Section */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h4" sx={{ color: "#fff" }}>
            הפרטים שלי
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocalPhoneIcon sx={{ color: "#fff" }} />
            <Typography sx={{ color: "#fff" }}>טלפון: +972545866554</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <MailOutlineIcon sx={{ color: "#fff" }} />
            <Typography sx={{ color: "#fff" }}>אימייל: example@mail.com</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EditLocationIcon sx={{ color: "#fff" }} />
            <Typography sx={{ color: "#fff" }}>מיקום: תל אביב, ישראל</Typography>
          </Box>
          {/* <Typography sx={{ color: "#fff" }}>
            הצהרת נגישות: האתר תואם להנגישות ברמה A ואנו עובדים לשיפור תמידי
          </Typography> */}
        </Box>

        {/* Contact Form Section */}
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            paddingLeft: 2,
            borderLeft: "2px solid #ccc",
            backgroundColor: "#f4f4f4",
            padding: "10px",
            height: "550px",
            marginTop: "-30px",
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            borderRadius:"10px",
            border:"none",
          }}
        >
          <Typography variant="h2" sx={{ position: "relative", mb: 4 }}>
            השאירו פרטים ונדבר
          </Typography>
          <TextField
            label="שם" // "Name" in Hebrew
            placeholder="הכנס את שמך"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            InputLabelProps={{ style: { textAlign: "right" } }}
            inputProps={{ style: { textAlign: "right" } }}
          />
          <TextField
            label="אימייל" // "Email" in Hebrew
            placeholder="הכנס את האימייל שלך"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            InputLabelProps={{ style: { textAlign: "right" } }}
            inputProps={{ style: { textAlign: "right" } }}
          />
          <TextField
            label="תוכן ההודעה" // "Message Content" in Hebrew
            placeholder="הכנס את תוכן ההודעה שלך"
            variant="outlined"
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            InputLabelProps={{ style: { textAlign: "right" } }}
            inputProps={{ style: { textAlign: "right" } }}
          />
          <Button
            variant="contained"
            color="success"
            onClick={handleSubmit}
            disabled={!isFormValid}
            fullWidth
          >
            שלח בוואטסאפ
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
