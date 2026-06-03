 const mongoose = require('mongoose');

 const Schema = mongoose.Schema;
 const TaskSchema =new Schema(
    {
        title: {
            type:String,
            required:true
        },
        description:{
            type:String
        },
        completed:{
            type:Boolean,
            default:false
        },
        dueDate:{
            type:Date
        },
    },
       {
        timestamps:true
       } 
    
 );

 module.exports = mongoose.model('Task', TaskSchema);
