import React from 'react'
import {Box} from "@chakra-ui/react"
import TopBar from './TopBar'
import CardSection from './CardSection'
const ContentBox = () => {
  return (
    <Box w={'83%'}>
      <TopBar/>
      <CardSection />
    </Box>
  )
}

export default ContentBox