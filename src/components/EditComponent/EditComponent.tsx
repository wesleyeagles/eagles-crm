import { useState, FormEvent } from 'react'
import { Box, Button, Divider, Heading, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spinner, Text, Textarea, useDisclosure } from "@chakra-ui/react"
import { useDeleteUserMutation, useFindByIdQuery, useUpdateUserMutation } from "../../graphql/generated"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'


export const EditComponent = () => {

    const { id } = useParams<string>()

    const navigate = useNavigate()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [status, setStatus] = useState('')
    const [commentary, setCommentary] = useState('')
    const [updateUserMutation, {data: userData, error, loading}] = useUpdateUserMutation()
    const [deleteUserMutation] = useDeleteUserMutation()

    const { data } = useFindByIdQuery({
        variables: {
            id: id
        }
    })


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

    async function updateUser(event: FormEvent) {
        event.preventDefault()

        await updateUserMutation({
            variables: {
                id: id,
                commentary: commentary === ''? data?.silveira?.commentary : commentary,
                statusData: status === ''? data?.silveira?.statusData : status
            }
        })

        location.reload()
    }

    async function deleteUser(event: FormEvent) {
        event.preventDefault()

        await deleteUserMutation({
            variables: {
                id: id
            }
        })

        navigate('/')

        setTimeout(() => {
            location.reload()
        }, 300)
        
    }

    

    return (
        <Box padding={6}>
            <HStack align='start'>
            <Box  w='45rem' paddingRight={3}>
            <Heading>
                Dados
            </Heading>
            <Box display='flex'>
            <Box marginTop={3} w='100%'>
                <Text>
                    Nome: {data.silveira?.name}
                </Text>
                <Text marginTop={2}>
                    Email: {data.silveira?.email}
                </Text>

                <Text marginTop={2}>
                    Telefone: {data.silveira?.phone}
                </Text>

                <Text marginTop={2}>
                    Empresa: {data.silveira?.company}
                </Text>

                <Text marginTop={2}>
                    Setor: {data.silveira?.section}
                </Text>
                <Text marginTop={2}>
                    Recebido: <Text as='span' textTransform='capitalize'> {format(parseISO(data.silveira!.createdAt), "EEEE' - 'd' de 'MMMM' - 'k'h'mm", { locale: ptBR})} </Text>
                </Text>
                <Text marginTop={2}>
                    Atualizado: <Text as='span' textTransform='capitalize'> {format(parseISO(data.silveira!.updatedAt), "EEEE' - 'd' de 'MMMM' - 'k'h'mm", { locale: ptBR})} </Text>
                </Text>
                <Text marginTop={2}>
                    Status: {data.silveira?.statusData}
                </Text>
                <Text marginTop={12}>
                    Mensagem:
                </Text>
            </Box>
            <Box>
                <Box>
                    <Text>
                        Comentario:
                    </Text>
                    <Box w='280px' boxShadow='0px 4px 15px 0px #00000050' h='120px' padding={3} borderRadius={12}>
                        {data.silveira?.commentary}
                    </Box>
                </Box>
            </Box>
            </Box>
            <Box marginTop={6} boxShadow='0px 4px 15px 0px #00000050' w='100%' padding={6} h='max-content' borderRadius={12}>
                    {data.silveira?.message}
                </Box>
            </Box>
            <Divider h='80vh' borderColor='gray' orientation='vertical'/>
            <Box paddingLeft={3}>
            <Heading>
                Editar
            </Heading>
            <Box marginTop={3}>
                <form onSubmit={updateUser}>
                <Text>
                    Adicionar comentário:
                </Text>
                <Textarea value={commentary} onChange={(e) => setCommentary(e.target.value)} w='300px' h='110px' border='1px solid' borderColor='blue'/>
                <Select onChange={(e) => setStatus(e.target.value)} marginTop={6} placeholder='Selecione o status' border='1px solid' borderColor='blue'>
                    <option value='Em Análise'>Em Análise</option>
                    <option value='Aprovado'>Aprovado</option>
                    <option value='Reprovado'>Reprovado</option>
                </Select>
                <Box marginTop={40} display='flex' justifyContent='flex-end'>
                    <Button onClick={onOpen} colorScheme='red' marginRight='auto'>
                        Deletar
                    </Button>
                    <Button to='/' as={Link} color='#FFF' colorScheme='orange' marginRight={3}>
                        Voltar
                    </Button>
                    <Button colorScheme='messenger' type='submit'>
                        Salvar
                    </Button>
                </Box>
                </form>
            </Box>
            </Box>
            </HStack>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
                Essa ação não pode ser revertida, tem certeza que deseja continuar com a exclusão?
            </Text>
          </ModalBody>

          <ModalFooter>
            <form onSubmit={deleteUser}>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Voltar
            </Button>
            <Button type='submit' colorScheme='red'>DELETAR!</Button>
            </form>
          </ModalFooter>
        </ModalContent>
      </Modal>

        </Box>
    )
}