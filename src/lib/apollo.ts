import { ApolloClient, InMemoryCache } from "@apollo/client";
import { onError } from 'apollo-link-error'

const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
  })

export const ApolloServer = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl8p0wi4x1iir01uqgjm38c3j/master',
    headers: {
        'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjQ1NzU2NDUsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2w4cDB3aTR4MWlpcjAxdXFnam0zOGMzai9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiM2E3MWRmNTAtMWRlMi00NjVmLWI5YTItZDY5MzMzZjNiMGQ5IiwianRpIjoiY2w4cDFkMDZnMWpvejAxdWtkY3RwNjIzYSJ9.L3NU36f9ufIWg4_WH31WNml_i6KFmAb5fu5eiBLS5TvCdYpKAUz8fy2uFc1iBQapQxbMf-iYNdJLw4LmMvCBeprxi7ObmvordKRT9epxw6MCHPddgoJUsvJ5WnXesCTQYUF6l0ME6ukQh9QbWxOZSHsrOMXNQGIcpLCNC_KxdNqDdGDHj6iu-1tn9_spsi1Vcb9Q-_bwNoMiaKPSn1v89hXPzocx8UGwMhzQWvCOsGDj2g-2gVsk4DPGDQi3fegxtj2FUCaqxT8eL6cnWUQRCMFN3g4X9hFvxtesWe0u5pO1xRFrtAVoHST57x4tW8VHU2RyJ3WWEfnkasrlGsPw7ZHlh3BN6YgK2CpHAJdWxw_Shax11sALnl5wMv540gCN7-ilZbR1naSyuIIiRfb-lHgrRTm9JPzj0IqPvLBPv3mT4qnzPCdEfy81ulYKn-oXGFmAZB6GMZn5wcrVJimVSb50GTfZ-XJIBJEmqyK8Mf4Fti9ncSFbBX39EApKzyqSZBKv-8mmDIL7iwVTBed23fcUeyiRj4-we_CDlVjlKi2OiT5lwNIdFAashT7iV8m3kfwYJxI8RVS2GSEHpny_m7cKXjPeDZIaILqD2ZWnZgQwR-GxEB6DVpZd0R3opJHmkmW7tHAhwkTW-D8X4QITEhuf2NmgEM_WHl1ZAJwL3o0`
    },

    cache: new InMemoryCache()
})