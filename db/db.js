var mysql = require('mysql');
var dbConfig = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '20001120mhx',
  database: 'fury',
};

//data pool
const pool = mysql.createPool(dbConfig);

if (pool) {
  console.log('MySQL server started and connected successfully  ...');
}

//link database
function query(sql, callback) {
  console.log('   ');
  console.info('==========', '[  ', sql, '  ]');
  console.log('   ');
  pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, rows) {
      if(err){
        console.log(err);
      }
      callback(err, rows);
      connection.release();
    });
  });
}
module.exports = {
  query
};