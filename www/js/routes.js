routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/sobre/',
    url: './pages/sobre.html',
  },
  {
    path: '/contato/',
    url: './pages/contato.html',
  },
  {
    path: '/produtos/',
    url: './pages/produtos.html',
  },
  {
    path: '/endereco/',
    url: './pages/endereco.html',
  },
  {
    path: '/login/',
    url: './pages/login_usuario.html',
  },
  {
    path: '/form/',
    url: './pages/form_cadastro.html',
  },
  {
    path: '/promocoesadm/',
    url: './pages/listar_produtosadm.html',
  },
  {
    path: '/rout_promocoes/',
    url: './pages/promocoes.html',
  },
  {
    path: '/orcamentosadm/',
    url: './pages/listar_orcamentos.html',
  },
  // Left View Pages
  {
    path: '/left-page-1/',
    url: './pages/form.html',
  },
  {
    path: '/estoque/',
    url: './pages/listar_produtos.html',
  },
  {
    path: '/estoqueadm/',
    url: './pages/listar_produtosadm.html',
  },
  {
    path: '/orcamentos/',
    url: './pages/listar_orcamentos.html',
  },
  {
    path: '/left-page-2/',
    url: './pages/left-page-2.html',
  },
  {
    path: '/left-page-3/',
    url: './pages/left-page-2.html',
  },
  {
    path: '/login/',
    url: './pages/form.html',
  },
  // Page Loaders & Router
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
