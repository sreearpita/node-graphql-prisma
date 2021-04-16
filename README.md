# node-graphql-prisma
A casestudy constructed using node graphql and prisma where a user can signup, login and post feeds. 
The subscription functionality also helps to get update on every new feed.

use the command 'npx prisma studio' to access the prisma database and view the table values. This will host the db ui on port no 5555.
use the command 'node src/index.js' to start the server . it will be hosted on 4000.

Major Graphql Api queries :



 1>>>> this mutation will help create a new user with the provided parameters and return you a authorisation token.
api query :

mutation {
  signup(name: "shree", email: "shree@gmail.com", password: "shree@123") {
    token
    user {
      id
    }
  }
}



2>>>> this mutation helps the existing user to login and returns all the feeds created by the particular user

api query :
mutation {
  login(email: "shree@gmail.com", password: "shree@123") {
    token
    user {
      email
      links {
        url
        description
      }
    }
  }
}

http header: (replace the 'SECURE_TOKEN' with the jwt token you got while signup)
{
  "Authorization": "Bearer SECURE_TOKEN"
}



3>>>>> this helps create a new feed for a particular user

api query :
mutation{
  post(url:"www.newpost2.com" description:"new post2 desc"){
    id
    description
    url
  }
}

http header: (replace the 'SECURE_TOKEN' with the jwt token that we received while login)
{
  "Authorization": "Bearer SECURE_TOKEN"
}
