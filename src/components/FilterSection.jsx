import React, { useState } from "react";
import { Box, Flex, Select, Text } from "@chakra-ui/react";
import CardSection from "./CardSection";
import CombinedChart from "./CombinedChart";
import PieChart from "./PieChart";
import { useSelector} from "react-redux";
import TableDisplay from "./Table";

const FilterSection = () => {
  const store = useSelector((store) => store.data);
  const [selectedYear, setSelectedYear] = useState("Jan22-Dec23");

  
  const filteredData = store.filter((item) => {
    if (selectedYear === "Jan22-Dec23") {
      return true; 
    } else if (selectedYear === "Jan22-Dec22") {
      return item.year === 2022;
    } else if (selectedYear === "Jan23-Dec23") {
      return item.year === 2023;
    }
    return false;
  });

  return (
    <Box>
      <Flex
        align="center"
        flexDir={"row-reverse"}
        fontSize={"12px"}
        pr={"50px"}
        m={"28px 0px 80px 0px"}
      >
        <Flex border={"1px solid green"} borderRadius={"8px"}>
          <Box p={"10px 0px 0px 10px"}>Show Timeline:</Box>
          <Select
            color={"green"}
            fontWeight={500}
            width="150px"
            fontSize={"12px"}
            border={"none"}
            onChange={(e) => setSelectedYear(e.target.value)}
            value={selectedYear}
          >
            <option value="Jan22-Dec23">Jan22-Dec23</option>
            <option value="Jan22-Dec22">Jan22-Dec22</option>
            <option value="Jan23-Dec23">Jan23-Dec23</option>
          </Select>
        </Flex>
      </Flex>
      <Box
        borderRadius={"8px"}
        bgColor={"#fefefe"}
        mr={"10px"}
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
          <CombinedChart filteredData={filteredData} />
        </Box>
        <Box display={{base:'block',xl:"flex"}} gap={8}>
          <PieChart />
          <TableDisplay />
        </Box>
      </Box>
    </Box>
  );
};

export default FilterSection;
