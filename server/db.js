import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bcrypt from 'bcrypt';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'user',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.post('/signup', async (req, res) => {
  console.log('Received signup request:', req.body);

  const { username, email, password, confirmPassword } = req.body;

  // Validate input
  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ success: false, message: 'Please fill in all fields' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ success: false, message: 'Passwords do not match' });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into the database
    const sql = 'INSERT INTO accounts (username, email, password, confirmPassword) VALUES (?, ?, ?, ?)';
    db.query(sql, [username, email, password, confirmPassword], (err, result) => {
      if (err) {
        console.error('Error inserting into database:', err);
        return res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
      } else {
        console.log('Inserted into database successfully:', result);
        return res.status(201).json({ success: true, message: 'User registered successfully' });
      }
    });
  } catch (error) {
    console.error('Error hashing password:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
  console.log('Received login request:', req.body);

  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Please provide email and password' });
  }

  try {
    // Query the database to check if the user exists
    const sql = 'SELECT * FROM accounts WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        return res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
      }

      if (results.length === 0) {
        // User not found
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }

      // Check if the provided password matches the hashed password in the database
      const match = await bcrypt.compare(password, results[0].password);

      if (match) {
        // Login successful
        console.log('Login successful');
        return res.status(200).json({ success: true, message: 'Login successful' });
      } else {
        // Incorrect password
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});


const PORT = 8081;

app.listen(8081, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
