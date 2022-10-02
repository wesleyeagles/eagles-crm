import { Box, Input, InputGroup, Heading, InputRightElement, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, Button, Spinner } from "@chakra-ui/react"
import { AiOutlineSearch } from 'react-icons/ai'
import { Link, useParams } from "react-router-dom"
import { useTestQuery } from "../../graphql/generated"
import { AttachmentIcon } from '@chakra-ui/icons'
import { useEffect, useRef } from "react"

export const Content = () => {

    const { data, loading } = useTestQuery()

    const { id } = useParams<{id: string}>()


    if (!data) {
        return (
            <Box w='100%' h='80vh' display='flex' justifyContent='center' alignItems='center'>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                />
            </Box>
        )
    } 

    return(
        <Box padding={6} w='100%' overflow='scroll' id='style-6'>
            <Box w='100%' display='flex' alignItems='center' justifyContent='space-between' id='style-6'>
            <Heading>
                Silveira Soares
            </Heading>
            <InputGroup w='260px'>
            <Input placeholder='Pesquisar...'/>
            <InputRightElement children={<AiOutlineSearch />}/>
            </InputGroup>
            </Box>

            <TableContainer marginTop='32px' id='style-6'>
                <Table variant='simple' size='lg'>
                    <TableCaption>
                        <HStack justify='center' w='100%'>
                        {data.silveiras.length <= 5? 'Maior que 5' : 'Menos que 5'}
                        <Button colorScheme='messenger' minW='30px' w='30px' minH='30px' h='30px'>
                            1
                        </Button>
                        </HStack>
                    </TableCaption>
                    <Thead w='100%'>
                        <Tr borderLeft='2px solid #0078ff' w='100%'>
                            <Th>Editar</Th>
                            <Th>Status</Th>
                            <Th>Nome</Th>
                            <Th>Email</Th>
                            <Th>Telefone</Th>
                            <Th>Empresa</Th>
                            <Th>Setor</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.silveiras.map(lead => {
                            return (
                                <Tr borderLeft='2px solid #0078ff'>
                                    <Td>
                                    <Link to={`/edit/${lead.id}`}>
                                        <AttachmentIcon />
                                    </Link>
                                    </Td>
                                    <Td display='flex' gap='3px'>
                                        <Button _hover={{ bg: lead.statusData === 'Aprovado'? '#00e000' : '' || lead.statusData === 'Em Análise'? '#89a100' : '' }} fontSize='14px' w='100px' h='25px' 
                                        bg={lead.statusData === 'Aprovado'? '#00e000' : '' || 
                                            lead.statusData === 'Em Análise'? '#89a100' : '' ||
                                            lead.statusData === 'Reprovado'? 'red' : ''
                                            } color='#FFF'>

                                            {lead.statusData}
                                        </Button>
                                    </Td>
                                    <Td>{lead.name}</Td>
                                    <Td>
                                        {lead.email}
                                    </Td>
                                    <Td>
                                        {lead.phone}
                                    </Td>
                                    <Td>
                                        {lead.company}
                                    </Td>
                                    <Td>
                                        {lead.section}
                                    </Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}