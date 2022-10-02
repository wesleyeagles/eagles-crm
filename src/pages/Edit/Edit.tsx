import { Box } from "@chakra-ui/react"
import { Aside } from "../../components/Aside"
import { EditComponent } from "../../components/EditComponent/EditComponent"
import { Header } from "../../components/Header"

export const Edit = () => {
    return (
        <Box>
        <Header />
        <Box display='flex'>
        <Aside />
        <EditComponent />
        </Box>
        </Box>
    )
}