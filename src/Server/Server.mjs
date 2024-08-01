import mysql from 'mysql2';
import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }

  // Create database
  connection.query('CREATE DATABASE IF NOT EXISTS percient', (err) => {
    if (err) {
      console.error('Error creating database:', err.stack);
      return;
    }

    // Switch to the new database
    connection.changeUser({ database: 'percient' }, (err) => {
      if (err) {
        console.error('Error changing database:', err.stack);
        return;
      }

      // Create table
      connection.query(`
        CREATE TABLE IF NOT EXISTS login (
          user VARCHAR(255) NOT NULL,
          password VARCHAR(255) NOT NULL,
          PRIMARY KEY (user)
        )
      `, (err) => {
        if (err) {
          console.error('Error creating table:', err.stack);
          return;
        }

        // Insert or update admin user
        const manualPassword = 'admin'; // Manually specified password
        connection.query(`
          INSERT INTO login (user, password)
          VALUES ('naveen.konda@percient.com', ?)
          ON DUPLICATE KEY UPDATE password=VALUES(password)
        `, [manualPassword], (err) => {
          if (err) {
            console.error('Error inserting admin user:', err.stack);
            return;
          }
          console.log('Admin user inserted or updated');
        });
      });
    });
  });
});

// Example endpoint to verify database connection
app.get('/check-login', (req, res) => {
  connection.query('SELECT * FROM login', (err, results) => {
    if (err) {
      console.error('Error fetching login data:', err.stack);
      res.status(500).send('Error fetching login data');
      return;
    }
    res.json(results);
  });
});


app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
  
    connection.query('SELECT * FROM login WHERE user = ? AND password = ?', [username, password], (err, results) => {
      if (err) {
        console.error('Error querying database:', err.stack);
        return res.status(500).send('Internal Server Error');
      }
      if (results.length > 0) {
        // User authenticated, generate a token
        const token = jwt.sign({ username }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
      } else {
        // Authentication failed
        res.status(401).json({ error: 'Invalid credentials' });
      }
    });
  });
  

// Global error handling middleware
app.use((err, req, res) => {
  console.error('Unexpected error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Handle server shutdown
process.on('SIGINT', () => {
  console.log('Shutting down server...');
  connection.end((err) => {
    if (err) {
      console.error('Error closing MySQL connection:', err.stack);
    } else {
      console.log('MySQL connection closed');
    }
    process.exit();
  });
});
