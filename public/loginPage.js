"use strict"     

const userFormLogin = new UserForm();
 userFormLogin.loginFormCallback = data => ApiConnector.login(data, response => {
   if (response.success) {
      location.reload();
    }
    else {
       userFormLogin.setLoginErrorMessage(response.error);
    }
});

  userFormLogin.registerFormCallback = data => ApiConnector.login(data, response => {
    if (response.success) {
       location.reload();
     }
     else {
       userFormLogin.setRegisterErrorMessage(response.error);
     }
 });
 