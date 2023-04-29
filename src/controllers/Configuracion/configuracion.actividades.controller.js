import { MAX } from "mssql";
import { getConnection, sql } from "../../database";

export const listadoActividades = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      //.input("codigo", sql.VarChar(50), req.body.codigo)
      .execute("[configuracion].[usp_app_listado_actividades]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const crea_edita_Actividades = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, req.body.registroDatos.idActividad)
      .input("codigo", sql.VarChar(10), req.body.registroDatos.codigo)
      .input("nombre", sql.VarChar(100), req.body.registroDatos.nombre)
      .input("estado", sql.Bit, req.body.registroDatos.estado)
      .input("login", sql.VarChar(50), req.body.registroDatos.login)
      .input("accion", sql.Int, req.body.registroDatos.accion)
      .execute("[configuracion].[usp_app_crea_edita_elimina_actividades]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const elimina_Actividades = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, req.body.registroDatos.idActividad)
      .input("login", sql.VarChar(50), req.body.registroDatos.login)
      .input("accion", sql.Int(0), req.body.registroDatos.accion)
      .execute("[configuracion].[usp_app_crea_edita_elimina_actividades]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};