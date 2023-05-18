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