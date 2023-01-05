import { pool } from "../db.js"

export const getVentas = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM regventas');
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createVentas = async (req, res) => {
  const { NoOrd, MontoTotal, NoArt, CantidadProd, NoProd, NomProd, DescProd, NoSerieProd, PrecioProd } =
    req.body;

  if (
    NoOrd == null ||
    MontoTotal == null ||
    NoArt == null ||
    CantidadProd == null ||
    NoProd == null ||
    NomProd == null ||
    DescProd == null ||
    NoSerieProd == null ||
    PrecioProd == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const [rows] = await pool.query('INSERT INTO regventas (NoOrd, MontoTotal, NoArt, CantidadProd, NoProd, NomProd, DescProd, NoSerieProd, PrecioProd) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [NoOrd, MontoTotal, NoArt, CantidadProd, NoProd, NomProd, DescProd, NoSerieProd, PrecioProd]);
    res.send({ NoOrd, MontoTotal, NoArt, CantidadProd, NoProd, NomProd, DescProd, NoSerieProd, PrecioProd });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getVentasById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM regventas WHERE idReg = ?', [id]);
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteVentasById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('DELETE FROM regventas WHERE id_pago = ?', [id]);
    res.send(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateVentasById = async (req, res) => {
  const { NoOrd, MontoTotal, NoArt, CantidadProd, NoProd, NomProd, DescProd, NoSerieProd, PrecioProd } =
    req.body;
  const { id } = req.params;

  if (
    NoOrd == null &&
    MontoTotal == null &&
    NoArt == null &&
    CantidadProd == null &&
    NoProd == null &&
    NomProd == null &&
    DescProd == null &&
    NoSerieProd == null &&
    PrecioProd == null
  ) {
    return res
      .status(400)
      .json({ msg: "Solicitud incorrecta. Por favor llene todos los campos" });
  }

  try {
    const [rows] = await pool.query('UPDATE regventas SET NoOrd = IFNULL(?, NoOrd), MontoTotal = IFNULL(?, MontoTotal), NoArt = IFNULL(?, NoArt), CantidadProd = IFNULL(?, CantidadProd), NoProd = IFNULL(?, NoProd), NomProd = IFNULL(?, NomProd), DescProd = IFNULL(?, DescProd), NoSerieProd = IFNULL(?, NoSerieProd), PrecioProd = IFNULL(?, PrecioProd) WHERE idReg = ?', [NoOrd, MontoTotal, NoArt, CantidadProd, NoProd, NomProd, DescProd, NoSerieProd, PrecioProd, id]);
    res.send({
      id,
      NoOrd,
      MontoTotal,
      NoArt,
      CantidadProd,
      NoProd,
      NomProd,
      DescProd,
      NoSerieProd,
      PrecioProd,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};