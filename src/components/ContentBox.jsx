import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import TopBar from "./TopBar";
import CardSection from "./CardSection";
import CombinedChart from "./CombinedChart";
import PieChart from "./PieChart";
const ContentBox = () => {
  return (
    <Box w={"83%"}>
      <TopBar />
      <Box
        borderRadius={"8px"}
        bgColor={"#fefefe"}
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
        <Flex>
          <Box
            border={"1px solid red"}
            w={"38%"}
            height={"300px"}
            ml={"20px"}
            borderRadius={"8px"}
            boxShadow={
              "0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)"
            }
            bgColor={"#FFF"}
          >
            <Flex>
              <Text
                color="black"
                m={"0px 0px 20px 20px"}
                fontFamily="Inter"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="normal"
              >
                Emission by Supplier
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ContentBox;
