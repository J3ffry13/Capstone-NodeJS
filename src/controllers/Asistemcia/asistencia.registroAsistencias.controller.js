import { MAX } from "mssql";
import { getConnection, sql } from "../../database";


export const obtenerTrabajador = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("dni", sql.VarChar(50), req.body.dni)
      .execute("[asistencia].[usp_app_obtener_trabajador]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const crea_edita_RegistroAsistencia = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("accion", sql.Int, req.body.registroDatos.accion)
      .input("idRegAsistencia", sql.Int, req.body.registroDatos.idRegAsistencia)
      .input("idPersona", sql.Int, req.body.registroDatos.idPersona)
      .input("idTipo", sql.Int, req.body.registroDatos.idTipo)
      // .input("manual", sql.Bit, req.body.registroDatos.manual)
      // .input("fecha_hora", sql.VarChar(250), req.body.registroDatos.fecha_hora)
      .input("login", sql.VarChar(50), req.body.registroDatos.login)
      .execute("[asistencia].[usp_app_crea_edita_elimina_registro_asistencia]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
