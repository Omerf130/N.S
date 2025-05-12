import { Box, Container, Paper, Typography } from "@mui/material";
import SectionTitle from "../common/SectionTitle";
import { useMediaMatch } from "../hooks/useMediaMatch";

const Spacial = () => {
  const isMobile = useMediaMatch("(max-width: 500px)");
  return (
    <Box id="services">
      <Container className="services">
        <SectionTitle
          title="ההתמחות שלי"
          className="services-title"
          variant="h2"
        />
        <Paper
          // className="services-list"
          sx={{
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "unset",
          }}
        >
          <Box>
            <Typography variant={isMobile ? "h6" : "h5"}>
              התחום שבו אני מתמחה במיוחד הוא עיצוב מטבחים, הלב הפועם של כל בית.
              אני יוצרת חללים שמביאים יחד פרקטיות, נוחות וסטייל, תוך מחשבה על כל
              פרט - מתכנון הארונות ועד תאורה, חומרים וזרימה במרחב.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Spacial;
