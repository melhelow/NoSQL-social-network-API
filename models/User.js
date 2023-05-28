const { Schema, model } = require('mongoose');

const userSchema = new mongoose.Schema({
    
    username: {
         type: String, 
         Unique: true,
         Required: true , 
         Trimmed: true 
        },
    email : {
        type: String, 
        Unique: true,
        required: true,
        validate: {
            validator: () => Promise.resolve(false),
            message: 'Email validation failed'
          }
        },
        thoughs : [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
        friends :[
            {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
        
    },
    {
        toJSON: {
            virtuals: true,
          },
          id: false,  
    }

);


// const user = new User();
// user.email = 'test@test.co';
// user.name = 'test';

// let error;
// try {
//   await user.validate();
// } catch (err) {
//   error = err;
// }
// assert.ok(error);
// assert.equal(error.errors['name'].message, 'Oops!');
// assert.equal(error.errors['email'].message, 'Email validation failed');



userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.user.length;
  });


const User = model('user', userSchema);
module.exports = User;
  