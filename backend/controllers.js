import { pool } from './db.js';
import { getData } from './getData.js';

export const getAllCards = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cards;');
    return res.status(200).send(result.rows);
  } catch (e) {
    console.log(e);
  }
};

export const uploadData = async (req, res) => {
  try {
    await pool.query('DELETE FROM cards;');
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
