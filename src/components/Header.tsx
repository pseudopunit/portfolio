import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Box className={styles.header}>
      <Box className={styles.container}>
        <Box className={styles.leftContainer}>
          <Box
            className={styles.image}
            component="img"
            src={"/assets/profile2.png"}
            alt="profile image"
          />
          <Box>
            <Typography className={styles.nameText}>Punit Choudhary</Typography>
            <Typography className={styles.posText}>
              Software developer
            </Typography>
            <Typography className={styles.motoText}>
              To pursue an inspiring career within a healthy and growing
              environment.
            </Typography>
          </Box>
        </Box>
        <Box className={styles.iconContainer}>
          <Link
            href="https://www.linkedin.com/in/punit014/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className={styles.icon} />
          </Link>
          <Link
            href="https://www.instagram.com/also.puneet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className={styles.icon} />
          </Link>
          <Link
            href="https://github.com/pseudopunit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub className={styles.icon} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
