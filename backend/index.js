import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { getData } from './getData.js';
import { pool } from './db.js';

const app = express();

dotenv.config();
let PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/cards', (req, res) => res.status(200).send());

export const uploadData = async (req, res) => {
  try {
    const data = await getData();
    let sampleQuery = data.map(
      (myRow) => `('${myRow.cardId}','${myRow.name}') `
    );
    const text = `INSERT INTO cards (card_id, name) VALUES ${sampleQuery} RETURNING *`;
    const result = await pool.query(text);
    res.send(result.rows[0]);
  } catch (e) {
    console.warn(e.message);
  }
};

app.get('/upload', uploadData);

try {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
} catch (e) {
  console.log(e);
}
