import { MAX } from "mssql";
import { getConnection, sql } from "../../database";

export const listadoDashboard = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      // .input("dni", sql.VarChar(50), req.body.dni)
      .execute("[reportes].[usp_app_listado_dashboards]");
    let data = result.recordsets;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const listadoReporteIngresosVSEgresos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("fechaIni", sql.VarChar(50), req.body.fechaIni)
      .input("fechaFin", sql.VarChar(50), req.body.fechaFin)
      .execute("[reportes].[usp_app_listado_ingresos_vs_egresos]");
    let data = result.recordsets;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const listadoReporteAsistencias = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("dni", sql.VarChar(50), req.body.dni)
      .input("fechaIni", sql.VarChar(50), req.body.fechaIni)
      .input("fechaFin", sql.VarChar(50), req.body.fechaFin)
      .execute("[reportes].[usp_app_listado_asistencias]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const listadoReporteHorasSemanales = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("semanaID", sql.Int, req.body.semanaID)
      .execute("[reportes].[usp_app_listado_horas_semanales]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const listadoReporteActividadesxTrabajador = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("dni", sql.VarChar(50), req.body.dni)
      .input("fechaIni", sql.VarChar(50), req.body.fechaIni)
      .input("fechaFin", sql.VarChar(50), req.body.fechaFin)
      .execute("[reportes].[usp_app_listado_trabajadores_actividades]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};