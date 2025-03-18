var customerName = "bob";
const leastFavoriteCustomer = "boby"

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
};

function setBestCustomer(){
    bestCustomer = 'not bob';
};

function overwriteBestCustomer(){
    return bestCustomer = `maybe bob`;
};

function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer = "mark"
}