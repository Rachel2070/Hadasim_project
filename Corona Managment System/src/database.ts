import mongoose from "mongoose";

export const mongoUri = 'mongodb+srv://saritweiss284:P52aROgfhXVVKv7k@cluster0.cefbsnf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDatabase = () =>{
    mongoose.connect(mongoUri)
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Could not connect to MongoDB...', err));
};

export default connectDatabase;