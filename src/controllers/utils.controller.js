import { MAX } from "mssql";
import { getConnection, sql } from "../database";


export const listadoCombos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("opcion", sql.Int, req.body.opcion)
      .input("param1", sql.VarChar(MAX), req.body.param1)
      .input("param2", sql.VarChar(MAX), req.body.param2)
      .execute("[configuracion].[usp_app_listado_combos]");
    let data = result.recordsets;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

