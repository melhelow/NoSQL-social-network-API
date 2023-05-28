const users = [
    {
    username:"Aarez",
    email:"email@yahoo.com",
    },
    {
        username:"Aarman",
        email:"adam@hotmail.com",
    },
    {
        username:"Aaron",
        email:"t@gmail.com",
    },

];


const toughts = [
    {
    thoughtContent:"thought number 1",
    createdAt: new Date(),
    username: "Aarez"
    },
    {
        thoughtContent:"thought number 2",
        createdAt: new Date(),
        username: "Aarman"
    },
    {
        thoughtContent:"thought number 3",
        createdAt: new Date(),
        username: "Aaron"
    },

];

const reactions = [
    {
      reactionContent: "i like that",
      createdAt: new Date(),
      username:"Aarez"
    },

    {
        reactionContent: "dislike",
        createdAt: new Date(),
        username:"Aarman"
    },
    {
        reactionContent: "mmm i'll pass",
        createdAt: new Date(),
        username:"Aaron"
    },
  
  

];

module.exports = {users ,toughts ,reactions };