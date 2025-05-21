import { Box, Container, Typography } from "@mui/material";
import SectionTitle from "../common/SectionTitle";
import { useMediaMatch } from "../hooks/useMediaMatch";

const Spacial = () => {
  const isMobile = useMediaMatch("(max-width: 500px)");
  return (
    <Box
      id="spacial"
      sx={{
        py: 8,
        px: 0,
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
          flexDirection: "row-reverse",
          gap: 4,
          alignItems: "center",
          "@media (max-width:750px)": {
            flexDirection: "column-reverse",
          },
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url("/pics/spacial.jpeg")',
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
            direction:"rtl",
            textAlign:"center"
          }}
        >
          <SectionTitle
            title="ההתמחות שלי"
            className="spacial-title"
            variant="h2"
          />
          <Typography variant={isMobile ? "h6" : "h5"}>
            התחום שבו אני מתמחה במיוחד הוא עיצוב מטבחים,
          </Typography>
          <Typography variant={isMobile ? "h6" : "h5"}>הלב הפועם של כל בית.</Typography>
          <Typography variant={isMobile ? "h6" : "h5"}>
            אני יוצרת חללים שמביאים יחד פרקטיות, נוחות וסטייל, תוך מחשבה על כל
            פרט - מתכנון הארונות ועד תאורה, חומרים וזרימה במרחב.
          </Typography>
        </Container>
      </Container>
    </Box>
  );
};

export default Spacial;
