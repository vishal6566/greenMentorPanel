import React from "react";
import { Box, Image, Text, Flex, Select,Button,Menu,
  MenuButton,
  MenuList,
  MenuItem, } from "@chakra-ui/react";
import { TriangleDownIcon,ChevronDownIcon } from "@chakra-ui/icons";
import Peters from "../assets/peters.svg";
import setting from "../assets/setting.svg";
import drop from "../assets/drop.svg";
import beta from "../assets/beta.svg";

const Sidebar = () => {
  return (
    <Box bg={"black"} w={"17%"} h={'fill'} >
      {/* //image */}
      <Box borderBottom={"2px solid #212121"}>
        <Box p={"13px 10px 13px 5px"} w={"90%"} m={"0px 15px 15px 15px"}>
          <Image src={Peters} alt="peters" w={"128px"} h={"47px"} />
        </Box>
      </Box>
      {/* data-in box */}

      <Flex
        flexDir={"column"}
        gap={"10px"}
        p={"10px 15px 15px 5px"}
        borderBottom={"2px solid #212121"}
      >
        <Text
          p={"13px 10px 13px 10px"}
          color="#5C5C5C"
          fontFamily="Inter"
          fontSize="14px"
          fontStyle="normal"
          fontWeight="500"
          lineHeight=" 18px"
          textTransform="uppercase"
        >
          data-in
        </Text>
        <Flex alignItems={"center"} mt={'15px'} >
          <Image src={setting} alt="peters" w={"17px"} h={"17px"} m={"0px 5px 0px 12px"} />
          <Menu>
      <MenuButton as={Button} bg={'none'} color={'white'} rightIcon={<TriangleDownIcon />}>
      Energy
      </MenuButton>
      <MenuList bgColor="#0f382f" color="white" outline={'none'}>
        <MenuItem _hover={{ bgColor: "white", color: "black" }} bgColor="#0f382f">
         Category 1
        </MenuItem>
        <MenuItem _hover={{ bgColor: "white", color: "black" }} bgColor="#0f382f">
          Category 2
        </MenuItem>
        <MenuItem _hover={{ bgColor: "white", color: "black" }} bgColor="#0f382f">
          Category 3
        </MenuItem>
      </MenuList>
    </Menu>
        </Flex>
        <Flex alignItems={"center"} mt={'10px'}>
          <Image src={drop} alt="peters" w={"24px"} h={"24px"} ml={"10px"} />
          <Menu>
      <MenuButton as={Button} bg={'none'} color={'white'} rightIcon={<TriangleDownIcon />}>
      Water and Effluents
      </MenuButton>
      <MenuList bgColor="#0f382f" color="white">
        <MenuItem _hover={{ bgColor: "white", color: "black" }} bgColor="#0f382f">
         Category 1
        </MenuItem>
        <MenuItem _hover={{ bgColor: "white", color: "black" }} bgColor="#0f382f">
          Category 2
        </MenuItem>
        <MenuItem _hover={{ bgColor: "white", color: "black" }} bgColor="#0f382f">
          Category 3
        </MenuItem>
      </MenuList>
    </Menu>
        </Flex>
      </Flex>
      <Flex
        flexDir={"column"}
        gap={"10px"}
        p={"10px 15px 15px 5px"}
        borderBottom={"2px solid #212121"}
      >
        <Text
          p={"13px 10px 13px 10px"}
          color="#5C5C5C"
          fontFamily="Inter"
          fontSize="14px"
          fontStyle="normal"
          fontWeight="500"
          lineHeight=" 18px"
          textTransform="uppercase"
        >
          Analyze
        </Text>
        <Flex alignItems={"center"} mt={'15px'} >
          <Image src={setting} alt="peters" w={"17px"} h={"17px"} m={"0px 5px 0px 12px"} />
          <Text
            color="#FFF"
            fontFamily="Inter"
            fontSize="15px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight=" 18px"
            ml={'10px'}
          >
        Energy
          </Text>
        </Flex>
        <Flex alignItems={"center"} mt={'20px'}>
          <Image src={drop} alt="peters" w={"24px"} h={"24px"} ml={"10px"} />
          <Text
            color="#FFF"
            fontFamily="Inter"
            fontSize="15px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight=" 18px"
            ml={'10px'}
          >
          Waste
          </Text>
          <Image src={beta} alt="peters" w={"30px"} h={"24px"} ml={"4px"} />
        </Flex>
      </Flex>
      <Flex h={'177px'}
      justifyContent={'center'}
      alignItems={'center'}

      >
<Button bgColor="#02ab6c" color={'white'}
p={'20px 33px 20px 33px'}
 fontFamily="Inter"
 fontSize="12px"
 fontStyle="normal"
 fontWeight="500"
 lineHeight=" 18px"
>Open Help Center</Button>
      </Flex>

   
    </Box>
  );
};

export default Sidebar;
