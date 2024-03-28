import express from "express"; // Importing Express framework
const cors = require('cors'); // Importing CORS middleware
import connectDatabase from './database'; // Importing function to connect to MongoDB
import memberRoutes from './routes/member.routes'; // Importing member routes

const app = express(); // Creating Express application
const port = process.env.PORT || 4000; // Setting server port

app.use(cors()); // Enabling CORS
app.use(express.json()); // Parsing request bodies as JSON
connectDatabase(); // Connecting to MongoDB

// Route to handle requests to the root URL
app.get('/', (req, res) => {
    res.status(200).json({ status: 'success', message: 'Server is up and running!' }); // Sending a success response
});

app.use('/api/members', memberRoutes); // Mounting member routes

app.listen(port, () => {
    console.log(`Server running on port ${port}`) // Starting the server
});
