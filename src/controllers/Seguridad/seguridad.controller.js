import { getConnection, querys, sql } from "../../database";
const jwt = require("jsonwebtoken")

/* CREATE TOKEN FOR USE */
export const login = async (req, res) => {
  const secret = 'Hola4@dsf'
  try {
    const pool = await getConnection();
    const result = await pool.request()
      .input('username', sql.VarChar(50) ,req.body.user)
      .input('password', sql.VarChar(50) ,req.body.password)
      .execute('[seguridad].[usp_app_login]');
    ;
   let userData = result.recordset[0]
  if(userData.lengh == 0 || userData == undefined){
    res.status(400);
    res.send("Usuario y/o passsword incorrectos");
  }
  let token = jwt.sign(userData, secret, { expiresIn: '1h'})
  res.status(200).json({"token": token});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export const loginMovil = async (req, res) => {
  const secret = 'Hola4@dsf'
  try {
    const pool = await getConnection();
    const result = await pool.request()
      .input('username', sql.VarChar(50) ,req.body.user)
      .input('password', sql.VarChar(50) ,req.body.password)
      .execute('[seguridad].[usp_app_login]');
    ;
   let userData = result.recordset[0]
  if(userData.lengh == 0 || userData == undefined){
    res.status(400);
    res.send.json({message:"Usuario y/o passsword incorrectos", success : false});
  }
  let token = jwt.sign(userData, secret)
  res.status(200).json({"jwt": token, "user": userData, success : true });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export const opbtenerPermisos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("user", sql.Int, req.body.user)
      .execute("[seguridad].[usp_app_obtener_permisos]");
    let data = result.recordset;
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}