"use strict"     

const userFormLogin = new UserForm();
 userFormLogin.loginFormCallback = data => ApiConnector.login({login: data.login, password: data.password}, response => {
   if (response) {
      location.reload();return;
    }
   userFormLogin.catch(e);
});

  userFormLogin.registerFormCallback = data => ApiConnector.login({login: data.login, password: data.password}, response => {
    if (response) {
       location.reload();return;
     }
    userFormLogin.catch(e);
 });
 