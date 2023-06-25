import { getConnection, sql } from "../../database";

export const listadoIngresos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("fechaIni", sql.VarChar(20), req.body.fechaIni)
      .input("fechaFin", sql.VarChar(20), req.body.fechaFin)
      .execute("[finanzas].[usp_app_listado_ingresos]");
      let data = result.recordsets;
      res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const crea_edita_Ingresos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, req.body.registroDatos.idIngresos)
      .input("descripcion", sql.VarChar(100), req.body.registroDatos.descripcion)
      .input("monto", sql.Decimal(10,2), req.body.registroDatos.monto)
      .input("fecha", sql.VarChar(20), req.body.registroDatos.fecha)
      .input("login", sql.VarChar(50), req.body.registroDatos.login)
      .input("accion", sql.Int, req.body.registroDatos.accion)
      .execute("[finanzas].[usp_app_crea_edita_elimina_ingresos]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const elimina_Ingresos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, req.body.registroDatos.idIngresos)
      .input("login", sql.VarChar(50), req.body.registroDatos.login)
      .input("accion", sql.Int(0), req.body.registroDatos.accion)
      .execute("[finanzas].[usp_app_crea_edita_elimina_ingresos]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};