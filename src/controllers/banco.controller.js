import { pool } from "../db.js"

export const getTransf = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM edotransf');
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createTransf = async (req, res) => {
  const { Notarjeta_org, Notarjeta_Dst, monto, fecha, id_movimiento } =
    req.body;

  if (
    Notarjeta_org == null ||
    Notarjeta_Dst == null ||
    monto == null ||
    fecha == null ||
    id_movimiento == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const [rows] = await pool.query('INSERT INTO edotransf (Notarjeta_org, Notarjeta_Dst, monto, fecha, id_movimiento) VALUES (?, ?, ?, ?, ?)', [Notarjeta_org, Notarjeta_Dst, monto, fecha, id_movimiento]);
    res.send({ Notarjeta_org, Notarjeta_Dst, monto, fecha, id_movimiento });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTransfById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM edotransf WHERE idEdo = ?', [id]);
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteTransfById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('DELETE FROM edotransf WHERE idEdo = ?', [id]);
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateTransfById = async (req, res) => {
  const { Notarjeta_org, Notarjeta_Dst, monto, fecha, id_movimiento } =
    req.body;
  const { id } = req.params;

  if (
    Notarjeta_org == null &&
    Notarjeta_Dst == null &&
    monto == null &&
    fecha == null &&
    id_movimiento == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const [rows] = await pool.query('UPDATE edotransf SET Notarjeta_org = IFNULL(?, Notarjeta_org), Notarjeta_Dst = IFNULL(?, Notarjeta_Dst), monto = IFNULL(?, monto), fecha = IFNULL(?, fecha), id_movimiento = IFNULL(?, id_movimiento) WHERE idEdo = ?', [Notarjeta_org, Notarjeta_Dst, monto, fecha, id_movimiento, id]);
    res.send({
      id,
      Notarjeta_org,
      Notarjeta_Dst,
      monto,
      fecha,
      id_movimiento,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};