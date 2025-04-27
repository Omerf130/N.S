import { CssBaseline, Box } from "@mui/material";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.scss";
import Plans from "./components/Plans";
import Projects from "./components/Projects";
import { useMediaMatch } from "./hooks/useMediaMatch";

function App() {
  const isMobile = useMediaMatch("(max-width: 768px)");

  return (
    <div className={`app ${isMobile ? "mobileView" : ""}`}>
      <CssBaseline />
      <Navbar />
      <Box
        sx={{
          backgroundImage: 'url("/pics/hero.jpeg")',
          position:"fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          flexShrink: 0,
          borderRadius: "10px",
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255,255,255,0.9)",
            zIndex: 1,
          }}
        />
      </Box>
      <Box component="main">
        <Hero />
        <About />
        <Plans />
        <Projects />
        <Contact />
      </Box>
      <Footer />
    </div>
  );
}

export default App;
