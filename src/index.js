import {
    GraphQLServer
} from 'graphql-yoga'

// Type definitions (schema)
const typeDefs = `
type Query {
    me: User!
   }

type User {
    id: ID!
    name: String!
    email: String!
    age: Int
}
`
// Resolvers
const resolvers = {
    Query: {
        me() {
            return {
                id: '1212121',
                name: 'Mike',
                email: 'dasdasd',
                age: 21
            }
        }
    }
}
// GraphQl Server
const server = new GraphQLServer({
    typeDefs,
    resolvers
})
server.start(() => {
    console.log('The server is up!')
})