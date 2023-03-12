
const userFormOut = new LogoutButton();
userFormOut.action = data => ApiConnector.logout({data}, response => {
    if (response.success) {
       location.reload();
     }
 });



ApiConnector.current(response => ProfileWidget.showProfile(response.data));


ApiConnector.getStocks(response => userExchangeRate.fillTable(response.data));

function exchangeRate() {  
    ApiConnector.getStocks(response => {if (response.success) {
            userExchangeRate.clearTable();
            userExchangeRate.fillTable(response.data);
          }
     });
}


let userExchangeRate = new RatesBoard();
setInterval(() => exchangeRate(), 2000);


let userFavorites = new FavoritesWidget();
ApiConnector.getFavorites(response => (userFavorites.clearTable(), userFavorites.fillTable(response.data), userMoneyManager.updateUsersList(response.data)));


userFavorites.addUserCallback = data => ApiConnector.addUserToFavorites(data, response => (data, (userFavorites.clearTable(), userFavorites.fillTable(response.data))));


userFavorites.removeUserCallback = data => ApiConnector.removeUserFromFavorites(data, response => (userFavorites.clearTable(), userFavorites.fillTable(response.data)));


let userMoneyManager = new MoneyManager();
userMoneyManager.addMoneyCallback = data => ApiConnector.addMoney(data, response => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
        userMoneyManager.setMessage(response.success, "Вам денежка пришла !!!");
    }    
    else {
        userMoneyManager.setMessage(response.success, "Сожалею, но что-то пошло не так, как хотелось");
    }
    
});

userMoneyManager.conversionMoneyCallback = data => ApiConnector.convertMoney(data, response => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
        userMoneyManager.setMessage(response.success, "В мое время, за махинации с валютой сажали...");
    }    
    else {
        userMoneyManager.setMessage(response.success, "Сожалею, но что-то пошло не так, как хотелось");
    }
    
});

userMoneyManager.sendMoneyCallback = data => ApiConnector.transferMoney(data, response => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
        userMoneyManager.setMessage(response.success, "Ваши денежки тю-тю. Сами того пожелали");
    }    
    else {
        userMoneyManager.setMessage(response.success, "Сожалею, но что-то пошло не так, как хотелось");
    }
    
});