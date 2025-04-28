import { useInView } from "react-intersection-observer";
import "../App.scss";
import { Typography } from "@mui/material";

interface SectionTitleProps {
  title: string;
  className: string;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const SectionTitle = ({ title,variant, className = "" }: SectionTitleProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Typography
      variant={variant}
      ref={ref}
      className={`section-title ${className} ${inView ? "fade-in" : ""}`}
    >
      {title}
    </Typography>
  );
};

export default SectionTitle;
