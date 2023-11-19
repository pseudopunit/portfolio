import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import CategoryIcon from "./CategoryIcon";
import styles from "./Content.module.css";
import {
  Code,
  SchoolOutlined,
  TaskOutlined,
  WorkHistoryOutlined,
} from "@mui/icons-material";

const autoSlideInterval = 5000;
const categoryList = [
  {
    title: "Skills",
    icon: <Code className={styles.icon} />,
  },
  {
    title: "Experience",
    icon: <WorkHistoryOutlined className={styles.icon} />,
  },
  {
    title: "Projects",
    icon: <TaskOutlined className={styles.icon} />,
  },
  {
    title: "Education",
    icon: <SchoolOutlined className={styles.icon} />,
  },
];

const Content = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    let intervalId;

    if (autoSlideInterval) {
      intervalId = setInterval(() => {
        const nextIndex = (activeSlide + 1) % categoryList.length;
        handleSlideChange(nextIndex);
      }, autoSlideInterval);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [autoSlideInterval, categoryList.length]);

  return (
    <Box className={styles.container}>
      <Carousel activeSlide={activeSlide} onSlideChange={handleSlideChange}>
        <Box className={styles.carousel}>React/Nextjs | Kotlin</Box>
        <Box className={styles.carousel}>Nextuple: 2.5 year</Box>
        <Box className={styles.carousel}>Non-toxifier | Network monitor</Box>
        <Box className={styles.carousel}>
          Indian institute of information & technology, Bhopal
        </Box>
      </Carousel>
      <Box className={styles.categoryContainer}>
        {categoryList.map((c, i) => (
          <CategoryIcon
            title={c.title}
            icon={c.icon}
            isActive={activeSlide === i}
            onCategoryClick={() => handleSlideChange(i)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Content;
