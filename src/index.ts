import Server from 'fastify'

const server = Server({
  logger: true
})

// return user's data as  an array 
const user = ["Ali","25","web devoloper"];
server.route({
    method: 'GET',
    url: '/users',
    handler: async (request, reply)=> {
        return user
    }
})
// return an object for Ali's profile 
const Obj = {name:"ali", job:"full-stack developer", age:"25", salary:"10000"}
server.route({
    method: 'GET',
    url: '/profile/ali',
    handler: async (request, reply)=> {
        return Obj
    }
})
// return an array of instagram posts objects
const instagramPosts = [{publisher: "norah", comments:"100", likes:"1K"},{publisher: "amal", comments:"40", likes:"500"},{publisher: "sara", comments:"13K", likes:"103K"}]
server.route({
    method: 'GET',
    url: '/posts',
    handler: async (request, reply)=> {
        return instagramPosts
    }
})

server.listen({ port: 3000 }, function (err, address) {
    if (err) {
        server.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})