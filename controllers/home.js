module.exports = app => {
  const Usuario = app.models.usuario;

  const HomeController = {
    index: (req, res, next) => {
      res.render('home/index');
    },
    login: (req, res, next) => {
      const email = req.body.usuario.email;
      const nome = req.body.usuario.nome;
      if (email && nome) {
        const usuario = req.body.usuario;
        usuario['contatos'] = [];
        req.session.usuario = usuario;
        res.redirect('/contatos');
      } else {
        res.redirect('/');
      }
    },
    logout: (req, res, next) => {
      req.session.destroy();
      res.redirect('/');
    },
  };
  return HomeController;
};
