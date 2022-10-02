import React from "react"
import { Aside } from "../../components/Aside"
import { Header } from "../../components/Header"
import { Box } from "@chakra-ui/react"
import { Content } from "../../components/Content"

export const Home = () => {
    return (
        <React.Fragment>
        <Header />
        <Box display='flex'>
        <Content />
        </Box>
        
        
        </React.Fragment>
    )
}