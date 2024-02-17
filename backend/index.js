import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { getAllCards, uploadData } from './controllers.js';

const app = express();

dotenv.config();
let PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/cards', getAllCards);

app.get('/upload', uploadData);

try {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
} catch (e) {
  console.log(e);
}
