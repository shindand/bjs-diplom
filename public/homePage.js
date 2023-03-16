
const userFormOut = new LogoutButton();
userFormOut.action = data => ApiConnector.logout(response => {
    if (response.success) {
       location.reload();
     }
 });


ApiConnector.current(response => ProfileWidget.showProfile(response.data));


let userExchangeRate = new RatesBoard();

function exchangeRate() {  
    ApiConnector.getStocks(response => {if (response.success) {
            userExchangeRate.clearTable();
            userExchangeRate.fillTable(response.data);
          }
     });
}

exchangeRate();
setInterval(() => exchangeRate(), 2000);


let userFavorites = new FavoritesWidget();

ApiConnector.getFavorites(response => {
    if (response.success) {
        userFavorites.clearTable();
        userFavorites.fillTable(response.data);
        userMoneyManager.updateUsersList(response.data);
        userFavorites.setMessage(response.success, "Список пользователей успешно загружен");
    }
    else {
        userFavorites.setMessage(response.success, response.error);
     }
});

userFavorites.addUserCallback = data => ApiConnector.addUserToFavorites(data, response => {
    if (response.success) {
        userFavorites.clearTable();
        userFavorites.fillTable(response.data);
        userFavorites.setMessage(response.success, "Пользователь успешно добавлен");
     }
     else {
        userFavorites.setMessage(response.success, response.error);
     }
 });

userFavorites.removeUserCallback = data => ApiConnector.removeUserFromFavorites(data, response => {
    if (response.success) {
        userFavorites.clearTable();
        userFavorites.fillTable(response.data);
        userFavorites.setMessage(response.success, "Пользователь удален");
    }
    else {
        userFavorites.setMessage(response.success, response.error);
     }
});


let userMoneyManager = new MoneyManager();
userMoneyManager.addMoneyCallback = data => ApiConnector.addMoney(data, response => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
        userMoneyManager.setMessage(response.success, "Вам денежка пришла");
    }    
    else {
        userMoneyManager.setMessage(response.success, response.error);
    }
});

userMoneyManager.conversionMoneyCallback = data => ApiConnector.convertMoney(data, response => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
        userMoneyManager.setMessage(response.success, "В мое время, за махинации с валютой сажали...");
    }    
    else {
        userMoneyManager.setMessage(response.success, response.error);
    }
});

userMoneyManager.sendMoneyCallback = data => ApiConnector.transferMoney(data, response => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
        userMoneyManager.setMessage(response.success, "Ваши денежки тю-тю. Сами того пожелали");
    }    
    else {
        userMoneyManager.setMessage(response.success, response.error);
    }
});