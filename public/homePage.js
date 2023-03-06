

function action (data) {
    ApiConnector.logout(response => ({login: data.login, password: data.password}));
    if (response) {
        location.reload();
    }
}

//const userFormout = new LogoutButton();
//userForm.LogoutButton = action({login: 'oleg@demo.ru3', password: 'demo'});


ApiConnector.current(response => ({login: 'oleg@demo.ru', password: 'demo'}));
ProfileWidget.showProfile(response);


function exchangeRate() {
    ApiConnector.getStocks(response => ({login: 'oleg@demo.ru', password: 'demo'}));
    fillTable(response);
}

const userForm = new RatesBoard();
exchangeRate();

