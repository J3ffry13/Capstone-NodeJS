import { MAX } from "mssql";
import { getConnection, sql } from "../database";

export const listadoAsignacionLabores = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("grupos", sql.VarChar(250), req.body.grupos)
      .input("actividades", sql.VarChar(250), req.body.actividades)
      .execute("[procesos].[usp_app_listado_asignacionLabores]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const crea_edita_AsignacionLabores = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idAsignacion", sql.Int, req.body.registroDatos.idAsignacion)
      .input("idActividad", sql.Int, req.body.registroDatos.idActividad)
      .input("idGrupo", sql.Int, req.body.registroDatos.idGrupo)
      .input("descripcion", sql.VarChar(500), req.body.registroDatos.descripcion)
      .input("direccion", sql.VarChar(500), req.body.registroDatos.direccion)
      .input("fecha", sql.VarChar(50), req.body.registroDatos.fecha)
      .input("login", sql.VarChar(50), req.body.registroDatos.login)
      .input("accion", sql.Int(0), req.body.registroDatos.accion)
      .execute("[procesos].[usp_app_crea_edita_elimina_asignacionLabores]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const elimina_AsignacionLabores = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idAsignacion", sql.Int, req.body.registroDatos.idAsignacion)
      .input("login", sql.VarChar(50), req.body.registroDatos.login)
      .input("accion", sql.Int(0), req.body.registroDatos.accion)
      .execute("[procesos].[usp_app_crea_edita_elimina_asignacionLabores]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};