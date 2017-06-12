var mysql = require('mysql');

var connMySQL = function(){
  console.log('conexao com o banco estabelecida');
  return connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portal_noticias'
  });
}

module.exports = function(){
  console.log('carregou autoload');
  return connMySQL;
}
  