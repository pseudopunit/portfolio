import React, { useState, useEffect, useRef } from "react";
import { Box, IconButton } from "@mui/material";
import styles from "./Carousel.module.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Carousel = ({
  activeSlide,
  onSlideChange,
  animationType = "slide", // 'slide' or 'fade'
  animationDuration = 500,
  children,
}) => {
  const [currentSlideHeight, setCurrentSlideHeight] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const activeSlideElement = carouselRef.current.children[activeSlide];
      setCurrentSlideHeight(activeSlideElement.clientHeight);
    }
  }, [activeSlide, children]);

  const handlePrev = () => {
    const newIndex = (activeSlide - 1 + children.length) % children.length;
    onSlideChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeSlide + 1) % children.length;
    onSlideChange(newIndex);
  };

  return (
    <Box
      className={styles.container}
      ref={carouselRef}
      style={{
        paddingBottom: `${currentSlideHeight}px`,
      }}
    >
      {children.map((child, index) => (
        <Box
          key={index}
          style={{
            opacity: index === activeSlide ? 1 : 0,
            transition: `opacity ${animationDuration / 1000}s ease-in-out`,
            zIndex: index === activeSlide ? 1 : 0,
          }}
          className={styles.slide}
        >
          {child}

          {index === activeSlide && (
            <>
              <IconButton onClick={handlePrev} className={styles.prevBtn}>
                <ChevronLeft />
              </IconButton>
              <IconButton onClick={handleNext} className={styles.nextBtn}>
                <ChevronRight />
              </IconButton>
            </>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Carousel;
