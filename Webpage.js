const summaryButton = document.getElementById("summary");
const cardsButton = document.getElementById("cards");
const loansButton = document.getElementById("loans");
const billsButton = document.getElementById("bills");

const summaryPage = document.getElementById("summaryPage");
const cardsPage = document.getElementById("cardsPage");
const loansPage = document.getElementById("loansPage");
const billsPage = document.getElementById("billsPage");

const summaryIcon = document.getElementById("houseIcon");
const cardsIcon = document.getElementById("cardsIcon");
const loansIcon = document.getElementById("safwatIcon");
const billsIcon = document.getElementById("waterIcon");

function switchSummary() {

        cardsPage.classList.replace('show','hide');
        loansPage.classList.replace('show','hide');
        billsPage.classList.replace('show','hide');

        cardsButton.classList.replace('clicked','notclicked');
        loansButton.classList.replace('clicked','notclicked');
        billsButton.classList.replace('clicked','notclicked');

        cardsIcon.classList.replace('bi-credit-card-2-front-fill','bi-credit-card-2-front');
        loansIcon.classList.replace('bi-piggy-bank-fill','bi-piggy-bank');
        billsIcon.classList.replace('bi-droplet-fill','bi-droplet');
        
        summaryPage.classList.replace('hide','show');
        summaryButton.classList.replace('notclicked','clicked');
        summaryIcon.classList.replace('bi-house','bi-house-fill');
}

function switchCards() {
        
        loansPage.classList.replace('show','hide');
        billsPage.classList.replace('show','hide');
        summaryPage.classList.replace('show','hide');

        loansButton.classList.replace('clicked','notclicked');
        billsButton.classList.replace('clicked','notclicked');
        summaryButton.classList.replace('clicked','notclicked');

        loansIcon.classList.replace('bi-piggy-bank-fill','bi-piggy-bank');
        billsIcon.classList.replace('bi-droplet-fill','bi-droplet');
        summaryIcon.classList.replace('bi-house-fill','bi-house');

        cardsPage.classList.replace('hide','show');
        cardsButton.classList.replace('notclicked','clicked');
        cardsIcon.classList.replace('bi-credit-card-2-front','bi-credit-card-2-front-fill');
}

function switchLoans(){
                
        cardsPage.classList.replace('show','hide');
        billsPage.classList.replace('show','hide');
        summaryPage.classList.replace('show','hide');
        
        billsButton.classList.replace('clicked','notclicked');
        summaryButton.classList.replace('clicked','notclicked');
        cardsButton.classList.replace('clicked','notclicked');
        
        billsIcon.classList.replace('bi-droplet-fill','bi-droplet');
        summaryIcon.classList.replace('bi-house-fill','bi-house');
        cardsIcon.classList.replace('bi-credit-card-2-front-fill','bi-credit-card-2-front');
        
        loansPage.classList.replace('hide','show');
        loansButton.classList.replace('notclicked','clicked');
        loansIcon.classList.replace('bi-piggy-bank','bi-piggy-bank-fill');
}

function switchBills(){

        cardsPage.classList.replace('show','hide');
        loansPage.classList.replace('show','hide');
        summaryPage.classList.replace('show','hide');
        
        summaryButton.classList.replace('clicked','notclicked');
        cardsButton.classList.replace('clicked','notclicked');
        loansButton.classList.replace('clicked','notclicked');

        summaryIcon.classList.replace('bi-house-fill','bi-house');
        cardsIcon.classList.replace('bi-credit-card-2-front-fill','bi-credit-card-2-front');
        loansIcon.classList.replace('bi-piggy-bank-fill','bi-piggy-bank');
        
        billsPage.classList.replace('hide','show');
        billsButton.classList.replace('notclicked','clicked');
        billsIcon.classList.replace('bi-droplet','bi-droplet-fill');
}
