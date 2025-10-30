// server/index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Server OK'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on', PORT));
