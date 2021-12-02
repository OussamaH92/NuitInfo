console.log(connect());

function connect(){

let mysql = require('mysql');

return mysql.createConnection({
  database: 'sauveteur',
  host: "localhost",
  user: "root",
  password: "12345"
});


}

function request(conn,request){
    let sql1 = "SELECT * FROM SAUVEUR where id= ${request}"
    return conn.query(sql1, function(err, result) {
        if (err) throw err;
        console.log("Table EMPLOYEES dropped");
    });
}