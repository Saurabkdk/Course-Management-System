import mongoose from "mongoose";
import port from '../index.js';

mongoose.connect('mongodb://localhost:27017/course_management')
.then( () => {
    console.log(`Server running on port ${port}`);
})
.catch( (error) => {
    console.log("MongoDB connection connection error", error.message);
});

const db = mongoose.connection;

export default db;