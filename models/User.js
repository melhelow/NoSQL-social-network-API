const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    
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
        match: /.+\@.+\..+/
        
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

userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.user.length;
  });


const User = model('user', userSchema);
module.exports = User;
  