import mongoose from 'mongoose';

//Defining the schema for todo item 
const TodoSchema = new mongoose.Schema({

    title: {
        type: String,
        required: "Please enter Title"
    },

    description: {
        type: String
    },

    dueDate: {
        type: Date,
        required:"Please enter due date"
    },

    dueTime: {
        type: String,
        required:"Please enter due time"
    },

    status:{
       type: String,
       default:"Active"
    }

},

    {
        versionKey: false
    }

);

// By default mongo DB will assign an ID to a todo item. Creating a virtual ID in schema
TodoSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

TodoSchema.set('toJSON', { virtuals: true });

const model = mongoose.model('todo', TodoSchema)


//Exporting the model so that we can import in other file
export default model