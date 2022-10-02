import { BrowserRouter } from 'react-router-dom'
import { Router } from './components/Router'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import { ApolloServer } from './lib/apollo'

import './main.css'
 
export const App = () => {
  return (
    <BrowserRouter>
    <ApolloProvider client={ApolloServer}>
    <ChakraProvider>
      <Router />
    </ChakraProvider>
    </ApolloProvider>
    </BrowserRouter>
  )
}
