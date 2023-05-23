import { MAX } from "mssql";
import { getConnection, sql } from "../../database";
import configMensaje from "../Configuracion/configMensaje";


export const listadoPerfilesWEB = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .execute("[seguridad].[usp_app_listado_perfilesweb]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const obtenerPerfiles = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idPerfil", sql.Int, req.body.idPerfil)
      .execute("[seguridad].[usp_app_obtener_perfilesweb]");
    let data = result.recordsets;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const crea_edita_PerfilWeb = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idPerfilWeb", sql.Int, req.body.registroDatos.idPerfilWeb)
      .input("descripcion", sql.VarChar(250), req.body.registroDatos.descripcion)
      .input("accesosWeb", sql.VarChar(MAX), req.body.registroDatos.accesosWeb)
      .input("accion", sql.Int, req.body.registroDatos.accion)
      .input("login", sql.VarChar(50), req.body.registroDatos.login)
      .execute("[seguridad].[usp_app_crea_edita_elimina_perfilesWeb]");
      console.log(req.body.registroDatos.accesosWeb);
    let data = result.recordset;
    let message = data[0]
    configMensaje('testcapstone2023@gmail.com', 'perfil web', message[''] + ' con DESCRIPCION : ' + req.body.registroDatos.descripcion + ' y ACCESOS: ' + req.body.registroDatos.accesosWeb);
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const elimina_PerfilWeb = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idPerfilWeb", sql.Int, req.body.registroDatos.idPerfilWeb)
      .input("accion", sql.Int, req.body.registroDatos.accion)
      .input("login", sql.VarChar(50), req.body.registroDatos.login)
      .execute("[seguridad].[usp_app_crea_edita_elimina_perfilesWeb]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

