module.exports.index = function(application, req, res){

  var connection =  application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  var quantidade = 5 ;

  noticiasModel.getUltimasNoticias(quantidade, function(error, result){
    console.log(result);
    res.render('home/index',{noticias:result});
  });
   
}