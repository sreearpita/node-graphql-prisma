//resolver before modularisation and adding authentication-authorisation

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// let links = [{
//   id: 'link-0',
//   url: 'www.google.com',
//   description: 'this is google'
// },
// {
//   id: 'link-1',
//   url: 'www.abc.com',
//   description: 'this is abc'
// }
// ]

// function fetchUserById (id){
//   const result = links.find(newLink => newLink.id==id)
//   return result
// }

// function updateUserById (args){
//   const result = links.find(newLink => newLink.id==args.id)
//   result.description =args.description
//   result.url =args.url
//   return result
// }

//let idCount = links.length

 const Query = {
    // info: () => `resolved value of info`,
    // feed: () => links,
    info: () => `This is the API of a Hackernews Clone`,
    feed: async (parent, args, context) => {
      return context.prisma.link.findMany()
    },
  }

 const Mutation = {
      // 2
      // post: (parent, args) => {
      //    const link = {
      //     id: `link-${idCount++}`,
      //     description: args.description,
      //     url: args.url,
      //   }
      //   links.push(link)
      //   return link
      // },
      post: (parent, args, context, info) => {
        const newLink = context.prisma.link.create({
          data: {
            url: args.url,
            description: args.description,
          },
        })
        return newLink
      },

      getLink: (parent,args, context) =>{
        
        //const result = trees.find(tree => tree.startsWith("m"));
        //const result = links.find(newLink => newLink.id==args.id)
        const LinkById = context.prisma.link.findUnique({
          where:{
            id: parent.id,
          },
        })
        return LinkById
      },
      updateLink: (parent, args, context, info) => {
        const updatedLink = context.prisma.link.update({
          where: {
            id: parent.id,
          },
          data: {
            url: args.url,
            description: args.description,
          },
        })
        return "update completed"
        // return updateUserById(args)
      }
    }

module.exports = {Query,Mutation}