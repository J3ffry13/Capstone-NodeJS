import { getConnection, querys, sql } from "../database";
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

/*
try {
        await pool.connect();
        const result = await pool.request()
            .input('Name', req.query.name)
            .execute(`SearchEmployee`);
        const employees = result.recordset;

        res.json(employees);
    } catch (error) {
        res.status(500).json(error);
    }
*/