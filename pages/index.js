import React from "react";
import { Box } from "@mui/material";
import Head from "next/head";
import Header from "../src/components/Header";
import Content from "../src/components/Content";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Box className={styles.app}>
      <Head>
        <title>Portfolio: Punit</title>
      </Head>
      <Header />
      <Content />
    </Box>
  );
};

export default Home;
