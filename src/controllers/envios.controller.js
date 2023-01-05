import { pool } from "../db.js"

export const getEnvios = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM envios');
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createEnvio = async (req, res) => {
  const { destinatario, productos, nombre_destinatario, direccion_origen, direccion_destino, fecha_entrega } =
    req.body;

  if (
    destinatario == null ||
    productos == null ||
    nombre_destinatario == null ||
    direccion_origen == null ||
    direccion_destino == null ||
    fecha_entrega == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const [rows] = await pool.query('INSERT INTO envios (destinatario, productos, nombre_destinatario, direccion_origen, direccion_destino, fecha_entrega) VALUES (?, ?, ?, ?, ?, ?)', [destinatario, productos, nombre_destinatario, direccion_origen, direccion_destino, fecha_entrega]);
    res.send({ destinatario, productos, nombre_destinatario, direccion_origen, direccion_destino, fecha_entrega });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getEnvioById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM envios WHERE id_envio = ?', [id]);
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteEnvioById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('DELETE FROM envios WHERE id_envio = ?', [id]);
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateEnvioById = async (req, res) => {
  const { destinatario, productos, nombre_destinatario, direccion_origen, direccion_destino, fecha_entrega } =
    req.body;
  const { id } = req.params;

  if (
    destinatario == null &&
    productos == null &&
    nombre_destinatario == null &&
    direccion_origen == null &&
    direccion_destino == null &&
    fecha_entrega == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const [rows] = await pool.query('UPDATE envios SET destinatario = IFNULL(?, destinatario), productos = IFNULL(?, productos), nombre_destinatario = IFNULL(?, nombre_destinatario), direccion_origen = IFNULL(?, direccion_origen), direccion_destino = IFNULL(?, direccion_destino), fecha_entrega = IFNULL(?, fecha_entrega) WHERE id_envio = ?', [destinatario, productos, nombre_destinatario, direccion_origen, direccion_destino, fecha_entrega, id]);
    res.send({
      id,
      destinatario,
      productos,
      nombre_destinatario,
      direccion_origen,
      direccion_destino,
      fecha_entrega,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};