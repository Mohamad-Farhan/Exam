const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mybook'
});
connection.connect((err)=>{
    if(err) throw err;
    console.log("connectes :)")
})