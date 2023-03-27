import { MAX } from "mssql";
import { getConnection, sql } from "../database";


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


export const crea_edita_Clientes = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("accion", sql.Int, req.body.registroDatos.accion)
      .input("id", sql.Int, req.body.registroDatos.idCliente)
      .input("dni", sql.VarChar(50), req.body.registroDatos.dni)
      .input("nombre", sql.VarChar(250), req.body.registroDatos.nombre)
      .input("apellido", sql.VarChar(250), req.body.registroDatos.apellido)
      .input("telefono", sql.VarChar(20), req.body.registroDatos.telefono)
      .input("direccion", sql.VarChar(250), req.body.registroDatos.direccion)
      .input("estado", sql.Int, req.body.registroDatos.estadon)
      .input("login", sql.VarChar(50), req.body.registroDatos.login)
      .input("host", sql.VarChar(50), req.body.registroDatos.host)
      .execute("[dashboard].[usp_app_crea_edita_elimina_clientes]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const elimina_Clientes = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("accion", sql.Int, req.body.registroDatos.accion)
      .input("id", sql.Int, req.body.registroDatos.idCliente)
      .input("login", sql.VarChar(50), req.body.registroDatos.login)
      .input("host", sql.VarChar(50), req.body.registroDatos.host)
      .execute("[dashboard].[usp_app_crea_edita_elimina_clientes]");
    let data = result.recordset;
    console.log(data);
    console.log(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

