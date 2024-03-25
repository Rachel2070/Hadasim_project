import express from "express";
const cors = require('cors');
import connectDatabase from './database';
import memberRoutes from './routes/member.routes';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
connectDatabase();

app.get('/', (req, res) => {
    res.status(200).json({ status: 'success', message: 'Server is up and running!' });
});

app.use('/api/member', memberRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});