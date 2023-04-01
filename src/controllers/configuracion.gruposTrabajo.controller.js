import { MAX } from "mssql";
import { getConnection, sql } from "../database";


export const listadoGruposTrabajo = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      // .input("dni", sql.VarChar(50), req.body.dni)
      .execute("[configuracion].[usp_app_listado_grupo_trabajo]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const obtenerTrabajadores = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idGrupoTrab", sql.Int, req.body.idGrupo)
      .execute("[configuracion].[usp_app_obtener_trabajadores]");
    let data = result.recordsets;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const crea_edita_Grupo_Trabajo = async (req, res) => {
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
      .execute("[configuracion].[usp_app_crea_edita_elimina_grupo_trabajo]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const elimina_Grupo_Trabajo = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("accion", sql.Int, req.body.registroDatos.accion)
      .input("idPersona", sql.Int, req.body.registroDatos.idPersona)
      .input("login", sql.VarChar(50), req.body.registroDatos.login)
      .execute("[configuracion].[usp_app_crea_edita_elimina_grupo_trabajo]");
    let data = result.recordset;
    console.log(data);
    console.log(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

