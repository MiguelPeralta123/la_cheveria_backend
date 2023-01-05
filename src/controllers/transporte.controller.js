import { pool } from "../db.js"

export const getTransp = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM esttransp');
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createTransp = async (req, res) => {
  const { edoEntr, NoGuia, NoVta, fecha } =
    req.body;

  if (
    edoEntr == null ||
    NoGuia == null ||
    NoVta == null ||
    fecha == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const [rows] = await pool.query('INSERT INTO esttransp (edoEntr, NoGuia, NoVta, fecha) VALUES (?, ?, ?, ?)', [edoEntr, NoGuia, NoVta, fecha]);
    res.send({ edoEntr, NoGuia, NoVta, fecha });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTranspById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM esttransp WHERE idEst = ?', [id]);
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteTranspById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('DELETE FROM esttransp WHERE idEst = ?', [id]);
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateTranspById = async (req, res) => {
  const { edoEntr, NoGuia, NoVta, fecha } =
    req.body;
  const { id } = req.params;

  if (
    edoEntr == null &&
    NoGuia == null &&
    NoVta == null &&
    fecha == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const [rows] = await pool.query('UPDATE esttransp SET edoEntr = IFNULL(?, edoEntr), NoGuia = IFNULL(?, NoGuia), NoVta = IFNULL(?, NoVta), fecha = IFNULL(?, fecha) WHERE idEst = ?', [edoEntr, NoGuia, NoVta, fecha, id]);
    res.send({
      id,
      edoEntr,
      NoGuia,
      NoVta,
      fecha,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};