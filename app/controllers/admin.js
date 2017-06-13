module.exports.formulario_inclusao_noticia = function (application, req, res) {
  res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = function (application, req, res) {

  var noticia = req.body;
  console.log(noticia);
  req.assert('titulo', 'Titulo obrigatorio').notEmpty();
  req.assert('resumo', 'Resumo obrigatorio').notEmpty();
  req.assert('resumo', 'Resumo deve conter o minimo de 10 e maximo de 100 caracteres').len(10, 100);
  req.assert('autor', 'Autor obrigatorio').notEmpty();
  req.assert('data_noticia', 'Data obrigatorio').notEmpty().isDate({ format: 'YYYY-MM-DD' });
  req.assert('noticia', 'Noticia obrigatorio').notEmpty();

  var errors = req.validationErrors();

  console.log(errors);

  if (errors) {
    res.render("admin/form_add_noticia", { validacao: errors, noticia: noticia });
    return;
  }

  var connection = application.config.dbConnection();
  var noticiasDAO = new application.app.models.NoticiasDAO(connection);

  noticiasDAO.salvarNoticia(noticia, function (error, result) {
    res.redirect("/noticias");
  });

}