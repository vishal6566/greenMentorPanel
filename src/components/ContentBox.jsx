import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import TopBar from "./TopBar";

import FilterSection from "./FilterSection";


const ContentBox = () => {
  return (
    <Box w={"83%"} bgColor={'#f5f5f5'}>
      <TopBar />
      <FilterSection />
      
    </Box>
  );
};

export default ContentBox;
