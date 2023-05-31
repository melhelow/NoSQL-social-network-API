const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema ({
    thoughtText:{
        type: String,
        required: true,
        maxlength: 280,

    },
    createdAt :{
        type: Date,
        default: Date.now,  
    },
     username: {
        type: String,
        required: true,
    },
    reactions :[reactionSchema],
},
{
    toJSON: {
      getters: true,
    },
    

  },
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
        createdAt :{
    type: Date,
    default: Date.now,  
    },
},
{
  toJSON: {
    getters: true,
  },
  
},

);

thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

  const Thought = model('thought', thoughtSchema);

  module.exports = Thought;
