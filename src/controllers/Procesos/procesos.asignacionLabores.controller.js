import { MAX } from "mssql";
import { getConnection, sql } from "../../database";
import configMensaje from "../Configuracion/configMensaje";

export const listadoAsignacionLabores = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
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
      .input("inicio", sql.VarChar(50), req.body.registroDatos.inicio)
      .input("final", sql.VarChar(50), req.body.registroDatos.final)
      .input("backgroundColor", sql.VarChar(50), req.body.registroDatos.backgroundColor)
      .input("latitud", sql.VarChar(20), req.body.registroDatos.latitud)
      .input("longitud", sql.VarChar(20), req.body.registroDatos.longitud)
      .input("login", sql.VarChar(50), req.body.registroDatos.login)
      .input("accion", sql.Int, req.body.registroDatos.accion)
      .execute("[procesos].[usp_app_crea_edita_elimina_asignacionLabores]");
    let data = result.recordset;
    let message = data[0] == undefined ? '' : data[0]
    configMensaje('testcapstone2023@gmail.com', 'ASIGNACION DE LABORES', message[''] + ' con DESCRIPCION : ' + req.body.registroDatos.descripcion + ' y DIRECCION: ' + req.body.registroDatos.direccion)
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