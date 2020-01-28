//import dependencies to configure node to oracle
const oracledb = require('oracledb')
//define return method
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
//defines password
const psw = 'PASSWORD';
//FUNCTION TO CONNECT AND EXECUTE QUERYES
const run = async(queryVariable) =>{
  //DEFINE MUTABLE VARIABLE 
  let connection;
  try {
      //CONECT TO DATABASE
      connection = await oracledb.getConnection({
          user     : "USERNAME",
          password : psw,
          connectString : "YOUR_CONNECTION_STRING",
      })
      //execute the query
      const result = await connection.execute(queryVariable)
      //commit changes
      await connection.commit()
      console.log(result.rows)
  } catch (error) {
      console.error(err)
  }finally {
    if (connection) {
      try {
        await connection.close()
      } catch (err) {
        console.error(err)
      }
    }
  }
}

module.exports = run