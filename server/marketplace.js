// marketplace.js
import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 8083;

app.use(cors());
app.use(bodyParser.json());

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '', // Provide your MySQL password
  database: 'user',
};

const pool = mysql.createPool(dbConfig);

app.post('/api/products', async (req, res) => {
  try {
    const { name, price, description, image } = req.body;

    const [result] = await pool.query(
      'INSERT INTO products (name, price, description, image) VALUES (?, ?, ?, ?)',
      [name, price, description, image]
    );

    res.json({ productId: result.insertId });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
