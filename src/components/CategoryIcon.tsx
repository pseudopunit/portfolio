import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./CategoryIcon.module.css";

const CategoryIcon = ({ title, icon, isActive, onCategoryClick }) => {
  return (
    <Box
      className={styles.container}
      onClick={onCategoryClick}
    >
      <Box className={styles.iconContainer}>{icon}</Box>
      <Typography className={styles.catText}>{title}</Typography>
    </Box>
  );
};

export default CategoryIcon;
