// Dom7
var $$ = Dom7;
$$('.logoff').hide();
$$('.promocoesadmindex').hide();
$$('.cl_promocoes').hide();
$$('.orcamentoadmindex').hide();
$$('.cadastropromocao').hide();
$$('.login-screen-open').show();


// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'B&D Telecom', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },
});

// Init/Create left panel view
var mainView = app.views.create('.view-left', {
  url: '/'
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
$$('#my-login-screen .SingUp').on('click', function () {
  var username = $$('#my-login-screen [name="email"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  firebase
    .auth()
    .createUserWithEmailAndPassword(username,password)
    .then( function () {
      app.dialog.alert('Bem vindo: ' + username);
      this.$$('.toolbar-inner').text = 'Bem Vindo: ' + username;
    })
    .catch(function(error){
      console.error(error.code)
      console.error(error.message)
      if (error.code =='auth/ivalid-email'){
        app.dialog.alert('Email invalido no seu formato!!!');
      }$$('#btnSalvar').on('click', function () {
        var formData = app.form.convertToData('#form-user-content')
        var nameInput = $$('#name [name="email"]').val();
        var nameInput = $$('#password [name="password"]').val();
        alert(JSON.stringify(formData))
        firebase.database().ref().child('usuarios').push(JSON.stringify(formData))
    });
  app.loginScreen.close('Falha ao cadastrar, verifique o erro no console');
  })
  app.loginScreen.close('#my-login-screen');
});



$$('#my-login-screen .SingIn').on('click', function () {
  var username = $$('#my-login-screen [name="email"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  firebase
    .auth()
    .signInWithEmailAndPassword(username,password)
    .then( function () {
      app.dialog.alert('Bem vindo: ' + username);
      this.$$('.toolbar-inner').text('Bem Vindo: ' + username + 'você está logado.');

      if(username == "vitor.bomba@terra.com.br"){
        $$('.promocoesadmindex').show();
        $$('.orcamentoadmindex').show();
        $$('.logoff').show();
        $$('.login-screen-open').hide();
        $$('input#email').val('');
        $$('input#password').val('');
        $$('.cadastropromocao').show();
      }
      else{
        $$('.promocoesadmindex').hide();
        $$('.orcamentoadmindex').hide();
        $$('.cl_promocoes').show();
        $$('.logoff').show();
        $$('.login-screen-open').hide();
        $$('input#email').val('');
        $$('input#password').val('');
      }
     
    })
    .catch(function(error){
      console.error(error.code)
      console.error(error.message)
      if (error.code =='auth/user-not-found'){
        app.dialog.alert('Não há registro de usuario correspondente a este identificador. O usuário pode ter sido excluído');
      }
        app.dialog.alert('Verifique o email digitado, e tente novamente!');
    })
  app.loginScreen.close('#my-login-screen');
});



$$('#my-login-screen .SignOut').on('click', function () {
  app.loginScreen.close('#my-login-screen');
  $$('input#email').val('');
  $$('input#password').val('');
  firebase
    .auth()
    .signOut()
    .then( function () {
      this.$$('.toolbar-inner').text('Usuário não autenticado');
      app.dialog.alert('Usuário não autenticado');
      app.loginScreen.close('#my-login-screen');
      $$('.logoff').hide();
      $$('.login-screen-open').show();      
    }, function(error){
      console.error(error)
    })
});

$$('#my-login-screen .login-screen-close').on('click', function () {
  $$('input#emailInput').val('');
  $$('input#passwordInput').val('');
});

$$('.logoff').on('click', function () {
  firebase
    .auth()
    .signOut()
    .then( function () {
      this.$$('.toolbar-inner').text('Usuario Deslogado');
      app.dialog.alert('Usuario Deslogado');
      $$('input#email').val('');
      $$('input#password').val('');
      $$('.logoff').hide();
      $$('.promocoesindex').hide();
      $$('.orcamentoadmindex').hide();
      $$('.cadastropromocao').hide();
      $$('.cl_promocoes').hide();
      $$('.promocoesadmindex').hide();
      $$('.login-screen-open').show();
    }, function(error){
      console.error(error)
    })  
  });



$$('#my-login-screen .SingOut').on('click', function () {
  app.loginScreen.close('#my-login-screen');
    $$('input#email').val('');
    $$('input#password').val('');
    firebase
    .auth()
    .signOut()
    .then( function () {
      this.$$('.toolbar-inner').text('Usuario Deslogado');
      app.dialog.alert('Usuario Deslogado');
      app.loginScreen.close('#my-login-screen');
      $$('.promocoesindex').hide();
      $$('.cl_promocoes').hide();
      $$('.logoff').hide();
      $$('.orcamentoadmindex').hide();
      $$('.login-screen-open').show();
    }, function(error){
        console.error(error)
    })
});


$$('#my-login-screen .login-screen-close').on('click', function () {
  $$('input#email').val('');
  $$('input#password').val('');
})
$$('.logoff').on('click', function() {
  firebase
  .auth()
  .signOut()
  .then( function() {
    this.$$('.toolbar-inner').text('Usuario Deslogado');
    app.diolog.alert('Usuario Deslogado');
    $$('input#email').val('');
    $$('input#password').val('');
    $$('.logoff').hide();
    $$('.login-screen-open').show();
  }, function(error){
    console.error(error)
  })
});


$$('#addButton').on('click', function () {
  var nome = $$('#nome').val();
  var email = $$('#emailorcamento').val();
  var telefone = $$('#telefone').val();
  var mensagem = $$('#mensagem').val();

  var formData = {Nome: nome, Email: email, Telefone: telefone, Mensagem: mensagem}
  console.log(formData);
  firebase.database().ref().child('orcamentos').push(formData)
  .then( function () {
    app.dialog.alert('Obrigado por enviar seu orçamento!');
    $$('input#nome').val('');
    $$('input#emailorcamento').val('');
    $$('input#telefone').val('');
    $$('#mensagem').val("");
  }, function(error){
    app.dialog.alert('Erro, confira o console');
    console.error(error)
  })
});

$$('#addButtonpromocao').on('click', function () {
  var nome = $$('#nomepro').val();
  var fabricante = $$('#fabricante').val();
  var descricao = $$('#descricao').val();
  var preco = $$('#preco').val();

  var formData = {Nome: nome, Fabricante: fabricante, Descricao: descricao, Preco: preco}
  console.log(formData);
  firebase.database().ref().child('promocoes').push(formData)
  .then( function () {
    app.dialog.alert('Promoção Cadastrada com Sucesso');
    $$('input#nomepro').val('');
    $$('input#fabricante').val('');
    $$('input#descricao').val('');
    $$('input#preco').val('');
  }, function(error){
    app.dialog.alert('Erro, confira o console');
    console.error(error)
  })
});



