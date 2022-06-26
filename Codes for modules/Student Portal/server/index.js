import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from './db/index.js';
import routes from './routes/route.js';


const app = express();

app.use(express.json());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());

app.use('/records', routes);

const PORT = process.env.PORT || 5000; 

export default PORT;

app.listen(PORT, db);