import { MAX } from "mssql";
import { getConnection, sql } from "../../database";
import configMensaje from "./configMensaje";


export const listadoTrabajadores = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("dni", sql.VarChar(50), req.body.dni)
      .execute("[configuracion].[usp_app_listado_trabajadores]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const obtenerContratos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idPersona", sql.Int, req.body.dni)
      .execute("[configuracion].[usp_app_obtener_contratos]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const crea_edita_PersonasTrabajador = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("accion", sql.Int, req.body.registroDatos.accion)
      .input("idPersona", sql.Int, req.body.registroDatos.idPersona)
      .input("dni", sql.VarChar(50), req.body.registroDatos.dni)
      .input("nombres", sql.VarChar(250), req.body.registroDatos.nombres)
      .input("apellidos", sql.VarChar(250), req.body.registroDatos.apellidos)
      .input("f_nacimiento", sql.VarChar(50), req.body.registroDatos.f_nacimiento)
      .input("login", sql.VarChar(50), req.body.registroDatos.login)
      .input("urlImagen", sql.VarChar(250), req.body.registroDatos.urlImagen)      
      .input("tipoDocu", sql.Int, req.body.registroDatos.tipoDocu)
      .input("trabajadores", sql.VarChar(MAX), req.body.registroDatos.trabajadores)
      .execute("[configuracion].[usp_app_crea_edita_elimina_personas_trabajadores]");
    let data = result.recordset;
    let message = data[0]
    configMensaje('testcapstone2023@gmail.com', 'TRABAJADORES', message[''] + ' con DNI : ' + req.body.registroDatos.dni)
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const elimina_PersonasTrabajador = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("accion", sql.Int, req.body.registroDatos.accion)
      .input("idPersona", sql.Int, req.body.registroDatos.idPersona)
      .input("login", sql.VarChar(50), req.body.registroDatos.login)
      .execute("[configuracion].[usp_app_crea_edita_elimina_personas_trabajadores]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

