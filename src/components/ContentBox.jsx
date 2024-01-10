import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import TopBar from "./TopBar";
import CardSection from "./CardSection";
import CombinedChart from "./CombinedChart";
import PieChart from "./PieChart";
import FilterSection from "./FilterSection";
import Table from "./Table";
import TableDisplay from "./Table";

const ContentBox = () => {
  return (
    <Box w={"83%"} bgColor={'#f5f5f5'}>
      <TopBar />
      <FilterSection />
      <Box
        borderRadius={"8px"}
        bgColor={"#fefefe"}
       
        mr={'10px'}
        boxShadow={
          "0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)"
        }
      >
        <CardSection />
        <Box
          bgColor={"#FFF"}
          pt={"20px"}
          borderRadius={"8px"}
          w={"83%"}
          m={"20px 0px 0px 20px"}
          boxShadow={
            "0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)"
          }
        >
          <Text
            color="black"
            m={"0px 0px 20px 20px"}
            fontFamily="Inter"
            fontSize="14px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
          >
            Emission/Revenue
          </Text>
          <CombinedChart />
        </Box>
        <Flex  gap={8}>
         <PieChart />
         <TableDisplay />
        </Flex>
      </Box>
    </Box>
  );
};

export default ContentBox;
