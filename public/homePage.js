

function action (data) {
    ApiConnector.logout(response => ({login: data.login, password: data.password}));
    if (response) {
        location.reload();
    }
}

const userFormout = new LogoutButton();
userFormout.action({login: 'oleg@demo.ru3', password: 'demo'});



ApiConnector.current(response => ProfileWidget.showProfile(response.data));



function exchangeRate() {
    user3.clearTable();
    ApiConnector.getStocks(response => user3.fillTable(response.data));
    
}


let user3 = new RatesBoard();
setInterval(() => exchangeRate(), 1000);



let user4 = new MoneyManager();

let user5 = new FavoritesWidget();
ApiConnector.getFavorites(response => console.log(response));
user5.clearTable();

