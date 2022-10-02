import { Box, Button, Menu, VStack } from "@chakra-ui/react"

export const Aside = () => {
    return (
        <Box w='210px' h='88vh' boxShadow='4px 0px 15px 0px #00000015' padding={6}>
            <VStack align='start' spacing={3}>
            <Button colorScheme='messenger' w='100%' justifyContent='start'>
                Silveira Soares
            </Button>

            <Button colorScheme='messenger' w='100%' justifyContent='start'>
                Comabe
            </Button>
            </VStack>
        </Box>
    )
}