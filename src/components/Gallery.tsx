import { useRef, useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Box, Typography } from "@mui/material";
import SectionTitle from "../common/SectionTitle";

const galleryItems = [
  { id: 1, src: "/pics/gallery/gallery6.jpeg", alt: "image1" },
  { id: 2, src: "/pics/gallery/gallery2.jpeg", alt: "image2" },
  { id: 3, src: "/pics/gallery/gallery3.jpeg", alt: "image3" },
  { id: 4, src: "/pics/gallery/gallery4.jpeg", alt: "image4" },
  { id: 5, src: "/pics/gallery/gallery5.jpeg", alt: "image5" },
  { id: 6, src: "/pics/gallery/gallery1.jpeg", alt: "image6" },
  { id: 7, src: "/pics/gallery/gallery7.jpeg", alt: "image7" },
  { id: 8, src: "/pics/gallery/gallery8.jpeg", alt: "image8" },
  { id: 9, src: "/pics/gallery/gallery9.jpeg", alt: "image9" },
  { id: 10, src: "/pics/gallery/gallery10.jpeg", alt: "image10" },
  { id: 11, src: "/pics/gallery/gallery11.jpeg", alt: "image11" },
  { id: 12, src: "/pics/gallery/gallery12.jpeg", alt: "image12" },
  { id: 13, src: "/pics/gallery/gallery13.jpeg", alt: "image13" },
  { id: 14, src: "/pics/gallery/gallery14.jpeg", alt: "image14" },
  { id: 15, src: "/pics/gallery/gallery15.jpeg", alt: "image15" },
  { id: 16, src: "/pics/gallery/gallery16.jpeg", alt: "image16" },
];

const Gallery = () => {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);
  const [splideInstances, setSplideInstances] = useState({
    main: null,
    thumbs: null,
  });

  useEffect(() => {
    // Once the Splide instances are available, sync them
    if (splideInstances.main && splideInstances.thumbs) {
      //@ts-ignore
      splideInstances.main.sync(splideInstances.thumbs);
    }
  }, [splideInstances]);

  return (
    <Box id="gallery">
      <div style={{position:"relative"}}>
        <SectionTitle
          title="מהדמיון... למציאות 💫"
          className="gallery-title"
          variant="h2"
        />
        {/* Main Carousel */}
        <div style={{ marginBottom: "10px" }}>
          <Splide
            ref={mainRef}
            options={{
              type: "fade",
              heightRatio: 0.5,
              width: "100%",
              pagination: false,
              arrows: false,
              cover: true,
            }}
            onMounted={(splide: any) => {
              // Save the main Splide instance
              setSplideInstances((prevState) => ({
                ...prevState,
                main: splide,
              }));
            }}
          >
            {galleryItems.map((item) => (
              <SplideSlide key={item.id}>
                <img src={item.src} alt={item.alt} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        {/* Thumbnails Carousel */}
        <Splide
          ref={thumbsRef}
          options={{
            fixedWidth: 200,
            fixedHeight: 114,
            isNavigation: true, // tells splide that thumbs control another splide
            gap: 10,
            focus: "center",
            pagination: false,
            cover: true,
            breakpoints: {
              600: {
                fixedWidth: 76,
                fixedHeight: 45,
              },
            },
          }}
          onMounted={(splide: any) => {
            // Save the thumbs Splide instance
            setSplideInstances((prevState) => ({
              ...prevState,
              thumbs: splide,
            }));
          }}
        >
          {galleryItems.map((item) => (
            <SplideSlide key={item.id}>
              <img src={item.src} alt={`Thumbnail ${item.id}`} />
            </SplideSlide>
          ))}
        </Splide>
        <Typography sx={{textAlign:"center", paddingTop:"30px", fontSize:"40px"}}>
          .אם העיצובים האלה גרמו לכם לחייך, לדמיין או לדפדף שוב - כנראה שנועדנו
          לעבוד יחד
        </Typography>
      </div>
    </Box>
  );
};

export default Gallery;
