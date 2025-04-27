import { useRef, useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Projects = () => {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);
  const [splideInstances, setSplideInstances] = useState({ main: null, thumbs: null });

  useEffect(() => {
    if (splideInstances.main && splideInstances.thumbs) {
        //@ts-ignore
      splideInstances.main.sync(splideInstances.thumbs);
    }
  }, [splideInstances]);

  return (
    <div className='projects'>
      {/* Main Carousel */}
      <Splide
        ref={mainRef}
        options={{
          type: 'fade',
          heightRatio: 0.5,
          pagination: false,
          arrows: false,
          cover: true,
        }}
        onMounted={(splide:any) => {
          // Save the main Splide instance
          setSplideInstances((prevState) => ({ ...prevState, main: splide }));
        }}
      >
        <SplideSlide>
          <img src="https://images.unsplash.com/photo-1743485237407-e00bfb75163e?w=500&auto=format&fit=crop&q=60" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://plus.unsplash.com/premium_photo-1710865692399-6fe10f968711?w=500&auto=format&fit=crop&q=60" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://images.unsplash.com/photo-1744068631576-132a67696f5b?w=500&auto=format&fit=crop&q=60" alt="Image 3" />
        </SplideSlide>
      </Splide>

      {/* Thumbnails Carousel */}
      <Splide
        ref={thumbsRef}
        options={{
          fixedWidth: 100,
          fixedHeight: 64,
          isNavigation: true, // tells splide that thumbs control another splide
          gap: 10,
          focus: 'center',
          pagination: false,
          cover: true,
          breakpoints: {
            600: {
              fixedWidth: 66,
              fixedHeight: 40,
            },
          },
        }}
        onMounted={(splide:any) => {
          // Save the thumbs Splide instance
          setSplideInstances((prevState) => ({ ...prevState, thumbs: splide }));
        }}
      >
        <SplideSlide>
          <img src="https://images.unsplash.com/photo-1743485237407-e00bfb75163e?w=500&auto=format&fit=crop&q=60" alt="Thumbnail 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://plus.unsplash.com/premium_photo-1710865692399-6fe10f968711?w=500&auto=format&fit=crop&q=60" alt="Thumbnail 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://images.unsplash.com/photo-1744068631576-132a67696f5b?w=500&auto=format&fit=crop&q=60" alt="Thumbnail 3" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Projects;