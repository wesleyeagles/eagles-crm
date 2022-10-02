import { Box, Button, Menu, MenuButton, MenuItem, MenuList, StatDownArrow } from "@chakra-ui/react"

export const Header = () => {
    return (
        <Box paddingInline={6} w='100%' h='12vh' display='flex' alignItems='center' justifyContent='space-between' boxShadow='0px 4px 15px 0px #00000020'>
            <Box>
                EAGLES CRM
            </Box>

            <Box display='flex' gap={10}>
                <Menu>
                    <MenuButton>
                        <Button colorScheme='messenger' rightIcon={<StatDownArrow color='#FFF' paddingTop='2px' />}>
                            Clientes
                        </Button>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            Silveira Soares
                        </MenuItem>
                        <MenuItem>
                            Comabe
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton>
                        <Box w='40px' h='40px' borderRadius='100%' border='solid 1px #000'>

                        </Box>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            Logout
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    )
}