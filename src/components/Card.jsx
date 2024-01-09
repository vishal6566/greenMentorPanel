import React from 'react'
import {Box,Text,Flex,Image} from "@chakra-ui/react"
import iline from "../assets/iline.svg"
const Card = ({title,text,border,gradient}) => {
  return (
    <Flex
    flexDir={'column'}
    justifyContent={'space-around'}
    borderRadius={'12px'}
    boxShadow={'0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)'}
   bgColor={'#FFF'}
   height={'134px'}
   border={'1px solid #EBEBEB'}
   pl={'20px'}
    >
       <Box>
       <Flex>
        <Text
        color= 'black'

        fontFamily= 'Inter'
        fontSize= '14px'
        fontStyle= 'normal'
        fontWeight= '500'
        lineHeight= 'normal'
        >{title}</Text>
        <Image src={iline} alt='i-line' />
        </Flex>
        {text?(<Text
        color= 'rgba(0, 0, 0, 0.67)'

        textAlign= 'start'
        fontFamily= 'Poppins'
        fontSize= '8px'
        fontStyle= 'italic'
        fontWeight= '275'
        lineHeight= 'normal'
        >contribution to Scope3</Text>):null}
       </Box>
        <Flex
        bg={`linear-gradient${gradient}`}
        justifyContent={'space-between'}
        borderRadius={'8px'}
        borderLeft={`6px solid ${border}`}
        mr={'20px'}
        py={'15px'}
        pr={'15px'}
        
        >
       <Text
       color= 'black'

       fontFamily= 'Inter'
       fontSize= '14px'
       fontStyle= 'normal'
       fontWeight= '500'
       lineHeight= 'normal'> 126900 CO<sub>2</sub></Text>
       <Text
       color= 'black'

       fontFamily= 'Inter'
       fontSize= '14px'
       fontStyle= 'normal'
       fontWeight= '500'
       lineHeight= 'normal'>7.6%</Text>
        </Flex>
    </Flex>
  )
}

export default Card