import { pool } from "../db.js"

export const getUser = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createUser = async (req, res) => {
  const { username, password } =
    req.body;

  if (
    username == null ||
    password == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const [rows] = await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
    res.send({ username, password });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};