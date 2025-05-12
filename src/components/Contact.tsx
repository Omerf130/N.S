import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { useMediaMatch } from "../hooks/useMediaMatch";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SectionTitle from "../common/SectionTitle";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FaTiktok } from "react-icons/fa";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const isFormValid = name.trim() && email.trim() && content.trim();

  return (
    <Box id="contact" sx={{position:"relative", display:"flex", justifyContent:"center",backgroundColor:"#fff"}}>
      <Container
        className="contact"
        maxWidth="lg"
        sx={{
          mt: 5,
          direction: "rtl",
          position: "relative",
          borderRadius: "10px",
          color:"#000",
          maxWidth:"700px !important",
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          gap:"15px"
        }}
      >
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
              borderLeft: isMobile ? "none" : "2px solid #ccc",
              padding: "10px",
              marginTop: "-30px",
              borderRadius: "10px",
              border: "none",
            }}
          >
            <SectionTitle
              title="צור קשר"
              className="contact-title"
              variant="h2"
            />
            <Box sx={{display:"flex", gap:"10px"}}>
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
            </Box>
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
          <Box>
              {/* Social Media Icons */}
              <Box sx={{ display: "flex" }}>
              <IconButton
                color="inherit"
                onClick={() =>
                  openLink(
                    "https://www.instagram.com/nazi_sharon_designer/?igsh=aHgyZTBoeDg2eHQx&utm_source=qr#"
                  )
                }
              >
                <InstagramIcon sx={{ fontSize: "26px" }} />
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() =>
                  openLink(
                    "https://www.facebook.com/nazzisharoninteriordesigner?mibextid=wwXIfr&rdid=9Ys8vEyx2VxdjAHf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1QbreJaXbc%2F%3Fmibextid%3DwwXIfr#"
                  )
                }
              >
                <FacebookIcon sx={{  fontSize: "26px" }} />
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() =>
                  openLink(
                    "https://www.tiktok.com/@nazisharon9?_t=ZS-8vuhcnubIZE&_r=1"
                  )
                }
              >
                <FaTiktok size={26} />
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() => openLink(`https://wa.me/+972545866554`)}
              >
                <WhatsAppIcon sx={{fontSize: "26px" }} />
              </IconButton>
            </Box>
          </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column-reverse" : "row",
            justifyContent: "space-between",
            gap: 4,
            maxHeight: isMobile ? "unset" : "500px",
          }}
        >
          
          {/* My Details Section */}
          <Box
            sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography variant="h4" sx={{textAlign:"center"}}>
              Nazi Sharon
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LocalPhoneIcon  />
              <Typography >
                טלפון: +972545866554
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <MailOutlineIcon  />
              <Typography >
                אימייל: Nazisharon@icloud.com
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginBottom: 2,
              }}
            >
              <EditLocationIcon  />
              <Typography >
                מיקום: אשדוד, ישראל
              </Typography>
            </Box>

          

          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
