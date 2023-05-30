// const { default: mongoose } = require('mongoose');
const db = require("../config/connection")
const { User ,Thought} = require ('../models');
const usersData = require("./users.json")
const thoughtsData = require("./thought.json")

const seedUsers = async () => {
    try {
        db.once('open', async () => {
            await User.deleteMany({})
            await User.insertMany(usersData)
          
            console.log("Seeding done!")
          });
      } catch (err) {
        console.log(err)
      }
}

const seedThoughts = async () => {
  try {
      db.once('open', async () => {
          await Thought.deleteMany({})
          await Thought.insertMany(thoughtsData)
        
          console.log("Seeding done!")
        });
    } catch (err) {
      console.log(err)
    }
}

seedUsers();
seedThoughts();





// const {users ,toughts ,reactions} = require ('./data');

// connection.on('error', (err) => err);

// connection.once('open', async () => {
//   console.log('connected');

//   const users = [];

  

//   users.push({

//     username,
//     email,

//   });


//     await User.thoughts.insertOne(users);
//     await User.friends.insertOne(users);

// console.table(users);
// console.info('Seeding complete! 🌱');


// })