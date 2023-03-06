"use strict"

  function loginFormCallback(data) {
    ApiConnector.login({login: data.login, password: data.password}, response => console.log(response));
      
    if (response) {
      location.reload();
      return;
    }
      
 }
   
  function rigisterFormCallback(data) {
    ApiConnector.login({login: data.login, password: data.password}, response => console.log(response));
      
    if (response) {
      location.reload();
      return;
    }
    console.log("Ошибка регистрации");
  }
     

  const userForm = new UserForm();

  loginFormCallback({login: 'oleg@demo.ru', password: 'demo',});

  userForm.registerFormCallback = data => registerFormCallback(data);
