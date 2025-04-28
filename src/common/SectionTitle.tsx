import { useInView } from 'react-intersection-observer';
import "../App.scss";

interface SectionTitleProps {
  title: string
  className: string
} 

const SectionTitle = ({ title, className = '' }: SectionTitleProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // התחל את האנימציה כש-20% מהכותרת נראית
    triggerOnce: true, // הפעל את האנימציה רק פעם אחת
  });

  console.log(inView)

  return (
    <h2
      ref={ref}
      className={`section-title ${className} ${inView ? 'fade-in' : ''}`}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;