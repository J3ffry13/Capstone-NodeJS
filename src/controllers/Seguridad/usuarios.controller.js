import { MAX } from "mssql";
import { getConnection, sql } from "../../database";
import configMensaje from "../Configuracion/configMensaje";


export const listadoUsuarios = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .execute("[seguridad].[usp_app_listado_usuarios]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const obtenerUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idUsuario", sql.Int, req.body.idUsuario)
      .execute("[seguridad].[usp_app_obtener_usuario]");
    let data = result.recordsets;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const crea_edita_Usuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idUsuario", sql.Int, req.body.registroDatos.idUsuario)
      .input("dni", sql.VarChar(20), req.body.registroDatos.dni)
      .input("usuario", sql.VarChar(50), req.body.registroDatos.usuario)
      .input("password", sql.VarChar(50), req.body.registroDatos.password)
      .input("idPerfilWeb", sql.Int, req.body.registroDatos.idPerfilWeb)
      .input("idPersona", sql.Int, req.body.registroDatos.idPersona)
      .input("accion", sql.Int, req.body.registroDatos.accion)
      .input("login", sql.VarChar(50), req.body.registroDatos.login)
      .execute("[seguridad].[usp_app_crea_edita_elimina_usuario]");
      console.log(req.body.registroDatos.accesosWeb);
    let data = result.recordset;
    let message = data[0]
    configMensaje('testcapstone2023@gmail.com', 'USUARIO', message[''] + ' con DNI : ' + req.body.registroDatos.dni + ' y USUARIO: ' + req.body.registroDatos.usuario);
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const elimina_Usuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idUsuario", sql.Int, req.body.registroDatos.idUsuario)
      .input("accion", sql.Int, req.body.registroDatos.accion)
      .input("login", sql.VarChar(50), req.body.registroDatos.login)
      .execute("[seguridad].[usp_app_crea_edita_elimina_usuario]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

