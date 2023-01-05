import { pool } from "../db.js"

export const getPagos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM pagos');
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createPago = async (req, res) => {
  const { Notarjeta_org, Notarjeta_Dst, Fecha_venci_org, Token_org, mto } =
    req.body;

  if (
    Notarjeta_org == null ||
    Notarjeta_Dst == null ||
    Fecha_venci_org == null ||
    Token_org == null ||
    mto == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const [rows] = await pool.query('INSERT INTO pagos (Notarjeta_org, Notarjeta_Dst, Fecha_venci_org, Token_org, mto) VALUES (?, ?, ?, ?, ?)', [Notarjeta_org, Notarjeta_Dst, Fecha_venci_org, Token_org, mto]);
    res.send({ Notarjeta_org, Notarjeta_Dst, Fecha_venci_org, Token_org, mto });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getPagoById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM pagos WHERE id_pago = ?', [id]);
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deletePagoById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('DELETE FROM pagos WHERE id_pago = ?', [id]);
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updatePagoById = async (req, res) => {
  const { Notarjeta_org, Notarjeta_Dst, Fecha_venci_org, Token_org, mto } =
    req.body;
  const { id } = req.params;

  if (
    Notarjeta_org == null &&
    Notarjeta_Dst == null &&
    Fecha_venci_org == null &&
    Token_org == null &&
    mto == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const [rows] = await pool.query('UPDATE pagos SET Notarjeta_org = IFNULL(?, Notarjeta_org), Notarjeta_Dst = IFNULL(?, Notarjeta_Dst), Fecha_venci_org = IFNULL(?, Fecha_venci_org), Token_org = IFNULL(?, Token_org), mto = IFNULL(?, mto) WHERE id_pago = ?', [Notarjeta_org, Notarjeta_Dst, Fecha_venci_org, Token_org, mto, id]);
    res.send({
      id,
      Notarjeta_org,
      Notarjeta_Dst,
      Fecha_venci_org,
      Token_org,
      mto,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};