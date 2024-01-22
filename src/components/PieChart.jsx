import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import piee from "../assets/piee.svg";
import dot from "../assets/dot.svg";
import { useSelector} from "react-redux";
ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = () => {
  const [name, setName] = useState([]);
  const [emissionData, setEmissionData] = useState([]);
  const store = useSelector((store) => store.data);

  useEffect(() => {
  
    


    const uniqueSupplierNames = Array.from(new Set(store.map((data) => data.supplier)));


    const aggregatedData = uniqueSupplierNames.map((supplierName) => 
    store
      .filter((data) => data.supplier === supplierName)
      .reduce((sum, current) => sum + current.emissions, 0)
  );

 
    setName(uniqueSupplierNames);
    setEmissionData(aggregatedData);
  }, [store]);

 


  const data = {
    labels: name,
    datasets: [
      {
        label: "CO2",
        data: emissionData,
        backgroundColor: [
          "#7c95ea",
          "#544b8d",
          "#b54f69",
          "#e994b1",
          "#3bb85e",
          "cyan",
          "#ffc400",
          "brown",
          "red",
        ],
        borderColor: [
          "#7c95ea",
          "#544b8d",
          "#b54f69",
          "#e994b1",
          "#3bb85e",
          "cyan",
          "#ffc400",
          "brown",
          "red",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box
      w={{base:"70%",xl:"38%"}}
    
      height={'full'}
    
      m={"16px 0px 16px 20px"}
      borderRadius={"8px"}
      boxShadow={
        "0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)"
      }
      bgColor={"#FFF"}
    >
      <Flex justifyContent={"space-between"}>
        <Text
          color="black"
          m={"0px 0px 20px 20px"}
          fontFamily="Helvetica Neue"
          fontSize="14px"
          fontStyle="normal"
          fontWeight="500"
          lineHeight="normal"
          pt={"25px"}
        >
          Emission by Supplier
        </Text>
        <Flex
          border={"1px solid #EBEBEB"}
          gap={"6px"}
          mr={"20px"}
          boxShadow={
            "0px 0.5px 4px 0px rgba(0, 0, 0, 0.02), 0px 2px 16px 0px rgba(0, 0, 0, 0.02), 0px 8px 80px 0px rgba(0, 0, 0, 0.04)"
          }
          borderRadius={"12px"}
          mt={"10px"}
        >
          <Image src={piee} alt="pie" p={"4px 6px"} />
          <Image src={dot} alt="pie" p={"8px 4px"} />
        </Flex>
      </Flex>
      <Box mt={"30px"} p={'20px'} >
        <Doughnut data={data} />
      </Box>
    </Box>
  );
};

export default PieChart;
