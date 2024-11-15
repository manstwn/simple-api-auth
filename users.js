// users.js
const db = require('./db');

// Create a new user
async function createUser(username, password) {
  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  await db.execute(sql, [username, password]);
}

// Find a user by username
async function findUserByUsername(username) {
  const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0]; // Returns the first matching user or undefined if not found
}

module.exports = { createUser, findUserByUsername };
