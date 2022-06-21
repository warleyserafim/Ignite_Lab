import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ojvx0u09ny01xxc43qcrc5/master',
    cache: new InMemoryCache()
})