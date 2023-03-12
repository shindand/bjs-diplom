"use strict"     

const userFormLogin = new UserForm();
 userFormLogin.loginFormCallback = data => ApiConnector.login({data}, response => {
   if (response.success) {
      location.reload();
    }
    else {
       userFormLogin.setLoginErrorMessage("Ошибка авторизации. Неверный пароль/логин");
    }
});

  userFormLogin.registerFormCallback = data => ApiConnector.login({data}, response => {
    if (response.success) {
       location.reload();
     }
     else {
       userFormLogin.setLoginErrorMessage("Ошибка регистрации. Попробуйте еще раз");
     }
 });
 