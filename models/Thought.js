const { Schema, model } = require('mongoose');

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
},
{
    toJSON: {
      getters: true,
    },

  }
);

thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reaction.length;
  });

  const Thought = model('thought', thoughtSchema);
module.exports = Thought;
