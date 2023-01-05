import { pool } from "../db.js"

export const getProv = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM prov');
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createProv = async (req, res) => {
  const { nombreComercial, razonSocial, rfc, direccion, telefono, representanteLegal, correoElectronico, tipoProducto } =
    req.body;

  if (
    nombreComercial == null ||
    razonSocial == null ||
    rfc == null ||
    direccion == null ||
    telefono == null ||
    representanteLegal == null ||
    correoElectronico == null ||
    tipoProducto == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const [rows] = await pool.query('INSERT INTO prov (nombreComercial, razonSocial, rfc, direccion, telefono, representanteLegal, correoElectronico, tipoProducto) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [nombreComercial, razonSocial, rfc, direccion, telefono, representanteLegal, correoElectronico, tipoProducto]);
    res.send({ nombreComercial, razonSocial, rfc, direccion, telefono, representanteLegal, correoElectronico, tipoProducto });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProvById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM prov WHERE id_prov = ?', [id]);
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteProvById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('DELETE FROM prov WHERE id_prov = ?', [id]);
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateProvById = async (req, res) => {
  const { nombreComercial, razonSocial, rfc, direccion, telefono, representanteLegal, correoElectronico, tipoProducto } =
    req.body;
  const { id } = req.params;

  if (
    nombreComercial == null &&
    razonSocial == null &&
    rfc == null &&
    direccion == null &&
    telefono == null &&
    representanteLegal == null &&
    correoElectronico == null &&
    tipoProducto == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const [rows] = await pool.query('UPDATE prov SET nombreComercial = IFNULL(?, nombreComercial), razonSocial = IFNULL(?, razonSocial), rfc = IFNULL(?, rfc), direccion = IFNULL(?, direccion), telefono = IFNULL(?, telefono), representanteLegal = IFNULL(?, representanteLegal), correoElectronico = IFNULL(?, correoElectronico), tipoProducto = IFNULL(?, tipoProducto) WHERE id_prov = ?', [nombreComercial, razonSocial, rfc, direccion, telefono, representanteLegal, correoElectronico, tipoProducto, id]);
    res.send({
      id,
      nombreComercial,
      razonSocial,
      rfc,
      direccion,
      telefono,
      representanteLegal,
      correoElectronico,
      tipoProducto,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};