import { pool } from "../db.js"

export const getCart = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM carrito');
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createCart = async (req, res) => {
  const { nombre, marca, precio, cantidad } =
    req.body;

  if (
    nombre == null ||
    marca == null ||
    precio == null ||
    cantidad == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const [rows] = await pool.query('INSERT INTO carrito (nombre, marca, precio, cantidad) VALUES (?, ?, ?, ?)', [nombre, marca, precio, cantidad]);
    res.send({ nombre, marca, precio, cantidad });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

/*
export const getCartById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM edotransf WHERE idEdo = ?', [id]);
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
*/

export const deleteCartById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('DELETE FROM carrito');
    //const [rows] = await pool.query('DELETE FROM carrito WHERE idProducto = ?', [id]);
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

/*
export const updateCartById = async (req, res) => {
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
*/