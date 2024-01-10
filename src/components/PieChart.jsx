import React from 'react'
import { Box, Text, Flex,Image } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import piee from "../assets/piee.svg"
import dot from "../assets/dot.svg"
ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = () => {


 const data = {
  labels: ['Adani', 'Reliance', 'Eskos', 'Merion', 'Ruzette', 'Steller','Rezicure','Shaurya','Orlife'],
  datasets: [
    {
      label: 'CO2',
      data: [12, 19, 3, 5, 2, 3,8,9,4],
      backgroundColor: [
        '#7c95ea',
        '#544b8d',
        '#b54f69',
        '#e994b1',
        '#3bb85e',
        'cyan',
        '#ffc400',
        'brown',
        'red'

      ],
      borderColor: [
        '#7c95ea',
        '#544b8d',
        '#b54f69',
        '#e994b1',
        '#3bb85e',
        'cyan',
        '#ffc400',
        'brown',
        'red'
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    
    <Box
 
    w={"38%"}
   
    m={"16px 0px 16px 20px"}
    borderRadius={"8px"}
    boxShadow={
      "0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)"
    }
    bgColor={"#FFF"}
  >
    <Flex 
    justifyContent={'space-between'}
    >
      <Text
        color="black"
        m={"0px 0px 20px 20px"}
        fontFamily="Inter"
        fontSize="14px"
        fontStyle="normal"
        fontWeight="500"
        lineHeight="normal"
        pt={'25px'}
      >
        Emission by Supplier
      </Text>
     <Flex border={'1px solid #EBEBEB'} gap={'6px'}
     mr={'20px'}
     boxShadow={'0px 0.5px 4px 0px rgba(0, 0, 0, 0.02), 0px 2px 16px 0px rgba(0, 0, 0, 0.02), 0px 8px 80px 0px rgba(0, 0, 0, 0.04)'}
     borderRadius={'12px'}
     mt={'10px'}
     >
     <Image src={piee} alt="pie" p={'4px 6px'}  />
     <Image src={dot} alt="pie" p={'8px 4px'}  />
     </Flex>

    </Flex>
    <Box mt={'30px'}><Doughnut data={data} /></Box>
  </Box>
  )
}

export default PieChart