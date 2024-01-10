import React from 'react'
import { Grid, GridItem,Flex,Text } from '@chakra-ui/react'
import Card from './Card'
const CardSection = () => {
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={2} w={'90%'}  pl={'20px'}  css={{ transform: 'translateY(-50px)' }}>
       <GridItem> <Card title={'Current Year Emissions'} text={true} border={'#E03021'}
       gradient={'(0deg, rgba(224, 48, 33, 0.04) 0%, rgba(224, 48, 33, 0.04) 100%), #FFF'}
       /></GridItem>
       <GridItem> <Card title={'Revenue to emission ratio'} text={false} border={'#FFC400'}
       gradient={'(0deg, rgba(255, 196, 0, 0.04) 0%, rgba(255, 196, 0, 0.04) 100%), #FFF'}
       /></GridItem>
       <GridItem> <Card title={'Category-1'} text={true} border={'#3bb85e'} 
       gradient={'(0deg, rgba(59, 184, 94, 0.04) 0%, rgba(59, 184, 94, 0.04) 100%), #FFF'}
       /></GridItem>
       <GridItem
       w={'70%'}> 
<Flex
flexDir={'column'}

bgColor={'#4bbd92'}
justifyContent={'space-around'}
alignItems={'center'}
gap={4}
py={'12px'}
borderRadius={'12px'}
>
<Text
  color= '#FFF'

  fontFamily= 'Inter'
  fontSize= '14px'
  fontStyle= 'normal'
  fontWeight= '400'
  lineHeight= '18px'
  textAlign={'center'}
  w={'70%'}
  >
Total number of reached suppliers
</Text>
<Text
  color= '#FFF'

  fontFamily= 'Inter'
  fontSize= '46px'
  fontStyle= 'normal'
  fontWeight= '500'
  lineHeight= 'normal'
>143</Text>
</Flex>
       </GridItem>
    </Grid>
  )
}

export default CardSection