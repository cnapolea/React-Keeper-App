import mongoose from "mongoose";
import {Schema} from mongoose;

const NotesSchema = new Schema ({
    notes: [{title: String, content: String}]
}); 

const Notes = new mongoose.model('Note', NotesSchema);


export default Notes;