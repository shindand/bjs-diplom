
const userFormOut = new LogoutButton();
userFormOut.action = data => ApiConnector.login({login: data.login, password: data.password}, response => {
    if (response) {
       location.reload();
     }
 });



ApiConnector.current(response => ProfileWidget.showProfile(response.data));



function exchangeRate() {
    userExchangeRate.clearTable();
    ApiConnector.getStocks(response => userExchangeRate.fillTable(response.data));
    
}


let userExchangeRate = new RatesBoard();
setInterval(() => exchangeRate(), 5000);



let userMoneyManager = new MoneyManager();


let userFavorites = new FavoritesWidget();
ApiConnector.getFavorites(response => userFavorites.fillTable(response.data));


ApiConnector.getFavorites(response => userFavorites.updateUsersList(response.data));




