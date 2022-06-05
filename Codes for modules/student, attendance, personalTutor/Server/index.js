import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from './db/index.js';
import studentRoutes from './routes/studentRoute.js';
import personalTutorRoutes from './routes/personalTutorRoute.js';

const app = express();

app.use(express.json());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());

app.use('/records', studentRoutes);
app.use('/records', personalTutorRoutes);

const PORT = process.env.PORT || 5000; 

export default PORT;

app.listen(PORT, db);