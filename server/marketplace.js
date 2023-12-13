// marketplace.js
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 8083;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Provide your MySQL password
  database: 'user',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.post('/addproductform', async (req, res) => {
  try {
    const { name, price, description, image } = req.body;

    const sql = 'INSERT INTO marketplace (name, price, description, image) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, price, description, image], (err, result) => {
      if (err) {
        console.error('Error adding product:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ productId: result.insertId });
      }
    });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
