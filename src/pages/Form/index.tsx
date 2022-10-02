
import { Box, Button, Input, Textarea, VStack } from "@chakra-ui/react"
import { useState, FormEvent } from "react"
import ReactInputMask from "react-input-mask"
import { useTestMutationMutation } from "../../graphql/generated"

export const Form = () => {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')
    const [section, setSection] = useState('')
    const [message, setMessage] = useState('')

    const [testMutationMutation, { data, error, loading}] = useTestMutationMutation()

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        await testMutationMutation({
            variables: {
                name: name,
                email: mail,
                phone: phone,
                company: company,
                section: section,
                message: message
            }
        })
    }


    return (
        <>
        <form onSubmit={handleSubmit}>
        <Box w='400px' margin='60px auto' padding={6} boxShadow='0px 4px 15px 0px #00000030' borderRadius={6}>
        <VStack>
        <Input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Nome' required/>
        <Input value={mail} onChange={(e) => setMail(e.target.value)} type='email' placeholder='Email' required/>
        <Input value={phone} onChange={(e) => setPhone(e.target.value)} mask='(99) 9 9999-9999' as={ReactInputMask} type='text' placeholder='Telefone' required/>
        <Input value={company} onChange={(e) => setCompany(e.target.value)} type='text' placeholder='Empresa' required/>
        <Input value={section} onChange={(e) => setSection(e.target.value)} type='text' placeholder='Setor' required/>
        <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Mensagem' />
        <Input type='hidden' value='Em Análise'/>
        </VStack>
        <Button type='submit' w='100%' bg='blue.400'color='#FFF' marginTop={6}>
            Enviar
        </Button>
        </Box>
        </form>
        </>
    )
}