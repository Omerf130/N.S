import { CssBaseline, Box } from "@mui/material";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.scss"
import Plans from "./components/Plans";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app">
      <CssBaseline />
      <Navbar />
      <Box component="main">
        <Hero />
        <About />
        <Plans/>
        <Projects/>
        <Contact />
      </Box>
      <Footer />
    </div>
  );
}

export default App;
