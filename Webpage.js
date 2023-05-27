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

const fading = document.getElementById('fading');

function switchSummary() {

        cardsPage.classList.replace('show', 'hide');
        loansPage.classList.replace('show', 'hide');
        billsPage.classList.replace('show', 'hide');

        cardsButton.classList.replace('clicked', 'notclicked');
        loansButton.classList.replace('clicked', 'notclicked');
        billsButton.classList.replace('clicked', 'notclicked');

        cardsIcon.classList.replace('bi-credit-card-2-front-fill', 'bi-credit-card-2-front');
        loansIcon.classList.replace('bi-piggy-bank-fill', 'bi-piggy-bank');
        billsIcon.classList.replace('bi-droplet-fill', 'bi-droplet');

        summaryPage.classList.replace('hide', 'show');
        summaryButton.classList.replace('notclicked', 'clicked');
        summaryIcon.classList.replace('bi-house', 'bi-house-fill');
}

function switchCards() {

        loansPage.classList.replace('show', 'hide');
        billsPage.classList.replace('show', 'hide');
        summaryPage.classList.replace('show', 'hide');

        loansButton.classList.replace('clicked', 'notclicked');
        billsButton.classList.replace('clicked', 'notclicked');
        summaryButton.classList.replace('clicked', 'notclicked');

        loansIcon.classList.replace('bi-piggy-bank-fill', 'bi-piggy-bank');
        billsIcon.classList.replace('bi-droplet-fill', 'bi-droplet');
        summaryIcon.classList.replace('bi-house-fill', 'bi-house');

        cardsPage.classList.replace('hide', 'show');
        cardsButton.classList.replace('notclicked', 'clicked');
        cardsIcon.classList.replace('bi-credit-card-2-front', 'bi-credit-card-2-front-fill');
}

function switchLoans() {

        cardsPage.classList.replace('show', 'hide');
        billsPage.classList.replace('show', 'hide');
        summaryPage.classList.replace('show', 'hide');

        billsButton.classList.replace('clicked', 'notclicked');
        summaryButton.classList.replace('clicked', 'notclicked');
        cardsButton.classList.replace('clicked', 'notclicked');

        billsIcon.classList.replace('bi-droplet-fill', 'bi-droplet');
        summaryIcon.classList.replace('bi-house-fill', 'bi-house');
        cardsIcon.classList.replace('bi-credit-card-2-front-fill', 'bi-credit-card-2-front');

        loansPage.classList.replace('hide', 'show');
        loansButton.classList.replace('notclicked', 'clicked');
        loansIcon.classList.replace('bi-piggy-bank', 'bi-piggy-bank-fill');
}

function switchBills() {

        cardsPage.classList.replace('show', 'hide');
        loansPage.classList.replace('show', 'hide');
        summaryPage.classList.replace('show', 'hide');

        summaryButton.classList.replace('clicked', 'notclicked');
        cardsButton.classList.replace('clicked', 'notclicked');
        loansButton.classList.replace('clicked', 'notclicked');

        summaryIcon.classList.replace('bi-house-fill', 'bi-house');
        cardsIcon.classList.replace('bi-credit-card-2-front-fill', 'bi-credit-card-2-front');
        loansIcon.classList.replace('bi-piggy-bank-fill', 'bi-piggy-bank');

        billsPage.classList.replace('hide', 'show');
        billsButton.classList.replace('notclicked', 'clicked');
        billsIcon.classList.replace('bi-droplet', 'bi-droplet-fill');
}


function toTransfers() { //this method switches from the summary page to the transfers page
        const summaryPage = document.getElementById('summaryWithoutTransfer');
        const transferPage = document.getElementById('transferCenter');
        summaryPage.classList.add('hide');
        transferPage.classList.remove('hide');
}

function toTransfer() { //this method switches from the transfers' page itself to the transfers' view
        if (document.getElementById('LOSAccount').checked) {
                document.getElementById('summaryWithoutTransfer').classList.add('hide');
                const domesticView = document.getElementById('domesticViewInterface');
                const internationalView = document.getElementById('internationalViewInterface');
                const transferPage = document.getElementById('transferCenter');

                transferPage.classList.remove('domesticView');
                transferPage.classList.remove('internationalView');
                transferPage.classList.add('LOSView');
                domesticView.classList.add('hide');
                internationalView.classList.add('hide');
        }
}

var endofCheck = 3;//used to determine when to stop checking for errors for the different views

function toDomestic() {
        if (document.getElementById('domestic').checked) {
                endofCheck = 9;
                document.getElementById('summaryWithoutTransfer').classList.add('hide');
                const domesticView = document.getElementById('domesticViewInterface');
                const internationalView = document.getElementById('internationalViewInterface');
                const transferPage = document.getElementById('transferCenter');

                transferPage.classList.add('domesticView');
                transferPage.classList.remove('internationalView');
                domesticView.classList.remove('hide');
                internationalView.classList.add('hide');
        }
}

function toInternational() {
        if (document.getElementById('international').checked) {
                endofCheck = 10;
                document.getElementById('summaryWithoutTransfer').classList.add('hide');
                const domesticView = document.getElementById('domesticViewInterface');
                const internationalView = document.getElementById('internationalViewInterface');
                const transferPage = document.getElementById('transferCenter');

                transferPage.classList.add('internationalView');
                internationalView.classList.remove('hide');
                domesticView.classList.remove('hide');

        }
}

function cancelTransfer() {
        const errors = document.getElementsByClassName('transferField');
        const summaryPage = document.getElementById('summaryWithoutTransfer');
        const transferPage = document.getElementById('transferCenter');
        summaryPage.classList.remove('hide');
        transferPage.classList.add('hide');
        for (i = 0; i < errors.length; i++) {
                errors[i].value = '';
        }
}

function confirmTransfer() {
        const errors = document.getElementsByClassName('transferField');
        const errorMessage = document.getElementsByClassName('errorMessageTransfer');
        const currentView = document.getElementById('transferCenter');
        var empty = false;

        for (i = 0; i < endofCheck; i++) {
                if (errors[i].value = '')
                        empty = true;
        }

        if (empty)
                errorMessage[0].classList.remove('hide');
        else {
                for (i = 0; i < errors.length; i++) {
                        errors[i].value = '';
                }
                errorMessage[0].classList.add('hide');
                payoffButtonTransfer();
                cancelTransfer();
        }

}

function payoffButtonTransfer() {
        const message = document.getElementById("notifierTransfer");
        message.classList.remove("slowlyhide");
        setTimeout(() => {
                message.classList.add("slowlyhide");
        }, 2000);
}

function backToSummary() {
        const doneButton = document.getElementById('transferDone');
        const popup = document.getElementsByClassName('popupTransfer');
        popup[0].classList.add('hide');
        fading.classList.remove('fade');

        const summaryPage = document.getElementById('summaryWithoutTransfer');
        const transferPage = document.getElementById('transferCenter');
        summaryPage.classList.remove('hide');
        transferPage.classList.add('hide');
}

function payPopOpen() {
        const bigDiv = document.getElementById('bigDiv');
        const popMenu = document.getElementById('popMenu');

        bigDiv.classList.remove('hide');
        popMenu.classList.remove('hide');
}

function hover() {
        const exitbutton = document.getElementById('exit');

        exitbutton.classList.remove("bi-x-circle");
        exitbutton.classList.add("bi-x-circle-fill");
}
function exithover() {
        const exitbutton = document.getElementById('exit');

        exitbutton.classList.add("bi-x-circle");
        exitbutton.classList.remove("bi-x-circle-fill");
}
function closepopup() {
        const bigDiv = document.getElementById('bigDiv');
        const popMenu = document.getElementById('popMenu');
        const number = document.getElementById('numberInput');

        number.value = "";
        bigDiv.classList.add("hide");
        popMenu.classList.add("hide");
}

