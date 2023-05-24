const summaryButton = document.getElementById("summary");
const cardsButton = document.getElementById("cards");
const loansButton = document.getElementById("loans");
const billsButton = document.getElementById("bills");

const summaryPage = document.getElementById("summaryPage");
const cardsPage = document.getElementById("cardsPage");
const loansPage = document.getElementById("loansPage");
const billsPage = document.getElementById("billsPage");

const summaryicon = document.getElementById("houseIcon");
const cardsicon = document.getElementById("cardsIcon");
const loansicon = document.getElementById("safwatIcon");
const billsicon = document.getElementById("waterIcon");

function switchSummary() {

        cardsPage.classList.remove('show');
        cardsPage.classList.add('hide');
        cardsButton.classList.remove('clicked');
        cardsButton.classList.add('notclicked');
        cardsIcon.classList.replace('bi-credit-card-2-front-fill','bi-credit-card-2-front');

        summaryPage.classList.remove('hide');
        summaryPage.classList.add('show');
        summaryButton.classList.remove('notclicked');
        summaryButton.classList.add('clicked');
        summaryicon.classList.replace('bi-house','bi-house-fill');
        
}

function switchCards() {

        summaryPage.classList.add('hide');
        summaryPage.classList.remove('show');
        summaryButton.classList.remove('clicked');
        summaryButton.classList.add('notclicked');
        summaryicon.classList.replace('bi-house-fill','bi-house');

        cardsPage.classList.add('show');
        cardsPage.classList.remove('hide');
        cardsButton.classList.remove('notclicked');
        cardsButton.classList.add('clicked');
        cardsIcon.classList.replace('bi-credit-card-2-front','bi-credit-card-2-front-fill');

}
