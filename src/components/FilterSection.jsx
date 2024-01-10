import React from 'react';
import { Box, Flex, Select } from '@chakra-ui/react';

const FilterSection = () => {
  return (
    <Flex align="center" flexDir={'row-reverse'} fontSize={'12px'} pr={'50px'}m={'28px 0px 80px 0px'}>
      <Flex border={'1px solid green'} borderRadius={'8px'}>
      <Box p={'10px 0px 0px 10px'}>
        Show Timeline:
      </Box>
      <Select placeholder="Jan22-Dec23" color={'green'} fontWeight={500} width="150px" fontSize={'12px'} border={'none'}>
        <option value="Jan22-Dec23">Jan22-Dec23</option>
        <option value="Jan22-Dec22">Jan22-Dec22</option>
        <option value="Jan23-Dec23">Jan23-Dec23</option>
      </Select>
      </Flex>
    </Flex>
  );
};

export default FilterSection;
