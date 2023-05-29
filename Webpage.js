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

const icon = document.getElementById("profile-icon");
const icon2 = document.getElementById("profile-icon2");
const accountsettings = document.getElementById("accountsettings");
var settingsShowen = false;

const fading = document.getElementById('fading');
var noOffFading = false;
const selector = document.getElementsByClassName("selector")

const fields = document.getElementsByClassName("secondbillsentry")
var today = new Date().toISOString().split('T')[0];
fields[2].setAttribute('min', today);
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

        selector[0].classList.remove("goright");
        selector[0].classList.remove("gorightmore");
        selector[0].classList.remove("gorightverymore");
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
        selector[0].classList.add("goright");
        selector[0].classList.remove("gorightmore");
        selector[0].classList.remove("gorightverymore");
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
        selector[0].classList.remove("goright");
        selector[0].classList.add("gorightmore");
        selector[0].classList.remove("gorightverymore");
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
        selector[0].classList.remove("goright");
        selector[0].classList.remove("gorightmore");
        selector[0].classList.add("gorightverymore");
}

function hideSettings() {
        if (!noOffFading) {
                accountsettings.classList.remove("left")
                fading.classList.remove("fade");
        }
}

function showSettings() {
        if (!accountsettings.classList.contains("left")) {
                accountsettings.classList.add("left");
                fading.classList.add('fade');

        }
        else {
                accountsettings.classList.remove("left")
                fading.classList.remove("fade");
        }
}
function backtologin() {
        window.location = "proj.html"
}

function back() {
        icon.classList.remove("white");
        icon.classList.add("black");
        icon2.classList.add("white");
        icon2.classList.remove("black");
}

function changecolor() {

        icon.classList.add("white");
        icon.classList.remove("black");
        icon2.classList.remove("white");
        icon2.classList.add("black");

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
        const errorMessage = document.getElementsByClassName('errorMessageTransfer');
        summaryPage.classList.remove('hide');
        transferPage.classList.add('hide');

        for (i = 0; i < errors.length; i++) {
                errors[i].value = '';
        }

        errorMessage[0].classList.add('hide');
}

function confirmBills() {
        const errors = document.getElementsByClassName('billsField');
        const errorMessage = document.getElementsByClassName('errorMessageTransfer');
        const message = document.getElementById("notifierBills");

        if (errors[0].value == '') {
                message.classList.add('sliderError');
        } else {
                message.classList.remove('sliderError');
                message.innerHTML = 'Bill Paid';
        }

        message.classList.remove("slowlyhide");
        setTimeout(() => {
                message.classList.add("slowlyhide");
        }, 2000);

}

function notifyReport() {
        const message = document.getElementById("notifierReportSettings");
        const text = document.getElementById("reportText");
        const pop = document.getElementById("reportingPop");
        const feedbackButton = document.getElementById('feedback');
        const stolenButton = document.getElementById('Stolen');
        const date = document.getElementById('stolenDate');

        if (feedbackButton.checked) {
                if (text.value != '') {
                        message.classList.remove('sliderError');
                        message.innerHTML = 'Report Sent';
                        fading.classList.remove('fade');
                        pop.classList.add('hide');
                        noOffFading = false;
                }
                else {
                        message.classList.add('sliderError');
                        message.innerHTML = 'Write your Feedback or Problem First';
                }
        }
        else {
                if (date.value != '') {
                        message.classList.remove('sliderError');
                        message.innerHTML = 'Report Sent';
                        fading.classList.remove('fade');
                        pop.classList.add('hide');
                        noOffFading = false;
                }
                else {
                        message.classList.add('sliderError');
                        message.innerHTML = 'choose when did you lose your card';
                }
        }
        message.classList.remove("slowlyhide");
        setTimeout(() => {
                message.classList.add("slowlyhide");
        }, 2000);
}

function toFeedback() {
        const stolenView = document.getElementById('stolenCard');
        const text = document.getElementById('reportText');
        text.value = '';
        stolenView.classList.add('hide');
        text.classList.remove('hide');
}

function toStolenCard() {
        const stolenView = document.getElementById('stolenCard');
        const text = document.getElementById('reportText');
        const date = document.getElementById('stolenDate');

        date.value = '';
        stolenView.classList.remove('hide');
        text.classList.add('hide');
}

function exit1() {
        noOffFading = false;
        const pop = document.getElementById("reportingPop");
        fading.classList.remove('fade');
        pop.classList.add('hide');
}

function notifyClose() {
        const message = document.getElementById("notifierReportSettings");
        const selection = document.getElementById("account-numbersSettings").value;
        if (selection == "choose") {
                message.classList.add('sliderError');
                message.innerHTML = 'Please select an Account first';
        }
        else {
                message.classList.remove('sliderError');
                // message.classList.add('slider');
                message.innerHTML = 'Closing Requested';
        }
        message.classList.remove("slowlyhide");
        setTimeout(() => {
                message.classList.add("slowlyhide");
        }, 1000);
}

function notifyOpen() {
        const message = document.getElementById("notifierReportSettings");
        const selections = document.getElementById("account-createSettings").value;
        if (selections == "Type") {
                message.classList.add('sliderError');
                message.innerHTML = 'Please select a type first';
        }
        else {
                message.classList.remove('sliderError');
                message.innerHTML = 'Openning Requested';
        }
        message.classList.remove("slowlyhide");
        setTimeout(() => {
                message.classList.add("slowlyhide");
        }, 1000);
}

function reportError() {
        const errorPop = document.getElementById('reportingPop');
        errorPop.classList.remove('hide');
        hideSettings();
        noOffFading = true;
        fading.classList.add('fade');
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
        const error = document.getElementById('errorPayoff');

        bigDiv.classList.remove('hide');
        popMenu.classList.remove('hide');
        error.classList.add('hide');
}

function hover() {
        const exitbutton = document.getElementById('exit');
        exitbutton.classList.remove("bi-x-circle");
        exitbutton.classList.add("bi-x-circle-fill");

        const exitbutton1 = document.getElementById('exit1');
        exitbutton1.classList.remove("bi-x-circle");
        exitbutton1.classList.add("bi-x-circle-fill");
}
function exithover() {
        const exitbutton = document.getElementById('exit');
        exitbutton.classList.add("bi-x-circle");
        exitbutton.classList.remove("bi-x-circle-fill");

        const exitbutton1 = document.getElementById('exit1');
        exitbutton1.classList.add("bi-x-circle");
        exitbutton1.classList.remove("bi-x-circle-fill");
}
function closepopup() {
        const bigDiv = document.getElementById('bigDiv');
        const popMenu = document.getElementById('popMenu');
        const number = document.getElementById('payoff-input');

        number.value = "";
        bigDiv.classList.add("hide");
        popMenu.classList.add("hide");
}

function payoffButton() {
        const message = document.getElementById("notifier");
        const numField = document.getElementById("payoff-input");
        if (!numField.value == "") {
                closepopup();
                message.classList.remove("slowlyhide");
                setTimeout(() => {
                        message.classList.add("slowlyhide");
                }, 2000);
        } else {
                const error = document.getElementById('errorPayoff');
                error.classList.remove('hide');
        }
}


function payPopOpenLoan() {
        const bigDiv1 = document.getElementById('bigDiv1');
        const popMenu1 = document.getElementById('popMenu1');
        const error1 = document.getElementById('errorPayoff1');
        bigDiv1.classList.remove('hide');
        popMenu1.classList.remove('hide');
        error1.classList.add('hide');
}

function hoverLoan() {
        const exitbutton2 = document.getElementById('exit2');
        exitbutton2.classList.remove("bi-x-circle");
        exitbutton2.classList.add("bi-x-circle-fill");
}
function exithoverLoan() {
        const exitbutton2 = document.getElementById('exit2');
        exitbutton2.classList.add("bi-x-circle");
        exitbutton2.classList.remove("bi-x-circle-fill");
}
function closepopupLoan() {
        const bigDiv1 = document.getElementById('bigDiv1');
        const popMenu1 = document.getElementById('popMenu1');
        bigDiv1.classList.add("hide");
        popMenu1.classList.add("hide");
}
function payoffButtonLoan() {
        const message1 = document.getElementById("notifier1")
        closepopupLoan();
        message1.classList.remove("slowlyhide");
        setTimeout(() => {
                message1.classList.add("slowlyhide");
        }, 2000);
}

function redeemPoints(x) {
        const redeemButton = document.getElementsByClassName('redeemButton');
        redeemButton[x].disabled = true;
        redeemButton[x].innerHTML = 'Redeemed';
}
function cardSelect() {
        const cardSelect = document.getElementById('cardsSelect');
        const creditPage = document.getElementById('creditPage');
        const limit = document.getElementById('Limit')
        if (!cardSelect.value.includes('Credit')) {
                creditPage.classList.add('hide');
                limit.classList.add('slowlyhide');
        } else {
                creditPage.classList.remove('hide');
                limit.classList.remove('slowlyhide');
        }
}

function secondbill() {
        const message = document.getElementById("notifierBills");
        var bool = false;
        for (i = 0; i < fields.length; i++) {
                if (fields[i].value == "") {
                        bool = true;
                }
        }
        if (bool) {
                message.innerHTML = "dont leave any field empty"
                message.classList.add("sliderError");

        }
        else {

                message.innerHTML = "Reminder set"
                message.classList.remove("sliderError");


        }
        message.classList.remove("slowlyhide");
        setTimeout(() => {
                message.classList.add("slowlyhide");
        }, 2000);
}

let user = {
        name: "elon Musk",
        accounts: [
                {
                        accountNumber: "540076330348",
                        debitNumber: "9876543210987654",
                        balance: 7174380.80,
                        availableToUse: 7174380,
                        type: "running",
                        transactions: [
                                {
                                        transactionDate: "03/05/2023",
                                        valueDate: "09/05/2023",
                                        details: "Sunrise Language School",
                                        debitCredit: 60000,
                                        balance: 8164380.9,
                                },
                                {
                                        transactionDate: "13/05/2023",
                                        valueDate: "17/05/2023",
                                        details: "Mercedes-Benz",
                                        debitCredit: 1000000.91,
                                        balance: 7164380.9,
                                },
                                {
                                        transactionDate: "28/05/2023",
                                        valueDate: "28/05/2023",
                                        details: "Madinaty",
                                        debitCredit: 50000.10,
                                        balance: 7174380.8,
                                }
                        ]
                },
                {
                        accountNumber: "540051080372",
                        debitNumber: "5423216780987654",
                        balance: 3579.85,
                        availableToUse: 4130,
                        type: "saving",
                        transactions: [
                                {
                                        transactionDate: "28/05/2023",
                                        valueDate: "28/05/2023",
                                        details: "Vodafone Red",
                                        debitCredit: 300.53,
                                        balance: 5380.90,
                                },
                                {
                                        transactionDate: "28/05/2023",
                                        valueDate: "28/05/2023",
                                        details: "Jumia",
                                        debitCredit: 1000.41,
                                        balance: 5080.37,
                                },
                                {
                                        transactionDate: "28/05/2023",
                                        valueDate: "28/05/2023",
                                        details: "DHL",
                                        debitCredit: 500.11,
                                        balance: 4079.96,
                                }
                        ]
                }
        ],

        creditCards: [
                {
                        accountNumber: "540076330348",
                        cardNumber: "3614167248272936",
                        limit: 50000,
                        points: 50600,
                        amountDue: 26000,
                        expiryDate: 06 / 29,
                        transactions: [
                                {
                                        transactionDate: "16/05/2023",
                                        valueDate: "17/05/2023",
                                        details: "Amazon",
                                        amountPaid: 999.99,
                                },
                                {
                                        transactionDate: "18/05/2023",
                                        valueDate: "18/05/2023",
                                        details: "Carrefour",
                                        amountPaid: 4000.33,
                                },
                                {
                                        transactionDate: "28/05/2023",
                                        valueDate: "28/05/2023",
                                        details: "Netflix",
                                        amountPaid: 160.00,
                                }
                        ]
                },
                {
                        accountNumber: "540051080372",
                        cardNumber: "3614608682512591",
                        limit: 20500,
                        points: 20600,
                        amountDue: 13000,
                        expiryDate: 06 / 29,
                        transactions: [
                                {
                                        transactionDate: "30/05/2023",
                                        valueDate: "30/05/2023",
                                        details: "Starbucks",
                                        amountPaid: 60.42,

                                },
                                {
                                        transactionDate: "28/05/2023",
                                        valueDate: "28/05/2023",
                                        details: "Uber",
                                        amountPaid: 44.91,

                                },
                                {
                                        transactionDate: "10/06/2023",
                                        valueDate: "10/06/2023",
                                        details: "Steam",
                                        amountPaid: 120.91,
                                }
                        ]
                }
        ],

        loans: [
                {
                        accountNumber: "540051080372",
                        number: "191922009764869L",
                        date: "12/03/2023",
                        amount: 2000000,
                        period: 32,
                        installment: this.amount * 1.1 / this.period,
                        type: "Car",
                        status: "Accepted",
                        currency: "EGP",
                },
                {
                        accountNumber: "540076330348",
                        number: "173906995243957L",
                        amount: 2000000,
                        date: "12/03/2023",
                        period: 32,
                        installment: this.amount * 1.1 / this.period,
                        type: "Car",
                        status: "Rejected",
                        currency: "EGP",
                },
                {
                        accountNumber: "540076330348",
                        number: "173906995243957L",
                        amount: 2000000,
                        date: "12/03/2023",
                        period: 32,
                        installment: this.amount * 1.1 / this.period,
                        type: "Car",
                        status: "Rejected",
                        currency: "EGP",
                }
        ],

        notifications: [
                {
                        state: "unread",
                        type: "Transfer",
                        title: "Received",
                        amount: 50259,
                        detail: "Bezoz, Jeff LB",
                        date: "2023/07/14",
                        time: "18:00",
                },
                {
                        state: "unread",
                        type: "Reminder",
                        title: "Water Bill due",
                        amount: 250,
                        sender: "bills",
                        date: "2023/07/14",
                        time: "16:00",
                },
                {
                        state: "read",
                        type: "Reminder",
                        title: "Payoff credit card",
                        amount: 12600,
                        detail: "card no. 3614167248272936",
                        date: "5/06/2023",
                        time: "14:00",
                }
        ]
}
let selectedAccount = 0;
let selectedCard = 0;

rewards = [
        { value: 5500 },
        { value: 2000 },
        { value: 4000 },
        { value: 1500 },
        { value: 1000 },
        { value: 2000 }
]


// load notif-panel dynamically
function loadNotifications(notifs, filter) {
        notificationFilter = filter
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < user.notifications.length; i++) {
                if (filter != "All" && filter != notifs[i].type + "s") {
                        continue;
                }
                const div = document.createElement('div');
                div.classList.add('notif-item');
                if (notifs[i].state == "unread") {
                        div.classList.add('notif-item-is-active')
                }
                div.innerHTML =
                        `<div class = "notif-item-head"> 
                        <h6><i class=${(notifs[i].type == "Transfer" ? "bi-arrow-down-left-circle-fill" : "bi-alarm-fill")}></i>${notifs[i].type}</h6>
                </div>
                <div class = "notif-item-body">
                        <p class = "notif-time">${notifs[i].time}</p>
                        <p class = "notif-date">${notifs[i].date}</p>
                        <h5>${notifs[i].title}</h5>
                        <p class = "notif-detail"> ${notifs[i].amount} USD</p>
                        <br><p class = "notif-detail"> ${notifs[i].amount}</p>
                </div>`;
                fragment.appendChild(div)


        }
        const notifList = document.getElementById('notif-list')
        notifList.innerHTML = "";
        notifList.appendChild(fragment);
}
let notificationFilter = "All"

loadNotifications(user.notifications, notificationFilter);

// expand collapse notif-panel
document.getElementById('notif').addEventListener('click', () => {
        const notifIcon = document.getElementById('notif-icon')
        const notifPanel = document.getElementById('notif-panel')
        if (notifIcon.classList.contains('bi-bell')) {
                notifPanel.classList.remove('notif-panel-is-hidden')
        }
        else {
                notifPanel.classList.add('notif-panel-is-hidden')
        }
        notifIcon.classList.toggle('bi-bell')
        notifIcon.classList.toggle('bi-bell-fill')
})

// notif-panel filter
const filters = document.getElementById('notif-filter').children
for (let i = 0; i < filters.length; i++) {
        filters[i].addEventListener('click', (event) => {
                for (let j = 0; j < filters.length; j++) {
                        if (filters[j].classList.contains('notif-filter-is-active')) {
                                filters[j].classList.remove('notif-filter-is-active')
                        }
                }
                event.srcElement.classList.add('notif-filter-is-active');
                loadNotifications(user.notifications, event.srcElement.innerHTML + "")
        })
}

// cards
function format(x) {
        x = x + ""
        let i = x.length
        let s
        if (i > 2) {
                s = x.substring(i - 3, i)
                i -= 3
        }

        while (i > 2) {
                s = x.substring(i - 3, i) + "," + s
                i -= 3
        }
        if (i != 0) {
                s = x.substring(0, i) + "," + s
        }

        return s
}
// payoff card
document.getElementById('cardPayment-payoff').addEventListener('click', () => {
        let account = document.getElementById('payoff-account').value
        let amount = document.getElementById('payoff-input').value;
        let balance = user.accounts[account].balance
        let availableToUse = user.accounts[account].availableToUse
        let amountDue = user.creditCards[selectedCard].amountDue
        if (amount <= availableToUse && amount <= amountDue) {

                balance -= amount
                user.accounts[account].balance = balance

                availableToUse -= amount
                user.accounts[account].availableToUse = availableToUse

                amountDue -= amount
                user.creditCards[selectedCard].amountDue = amountDue

                //update payoff module
                document.getElementById('payoff-balance').innerHTML = "Available Balance: <br>" + format(availableToUse)

                // update card-payment module
                document.getElementById('amountDue').innerHTML = format(amountDue) + "EGP"

                // remove card-payment module
                if (amountDue == 0) {
                        document.getElementById('card-payment').style.display = "none";
                }
        }

        // calling payoffButton()
        payoffButton()
})

let date = new Date();

// notif payoff-card
document.getElementById('cardPayment-reminder').addEventListener('click', () => {
        let dateTime = document.getElementById('cardPayment-reminder-dateTime').value
        let date = dateTime.substring(0, 10)
        let time = dateTime.substring(11, 16)
        user.notifications.push({
                state: "unread",
                type: "Reminder",
                title: "Payoff credit Card",
                amount: format(user.creditCards[selectedCard].amountDue),
                detail: "card no." + user.creditCards[selectedCard].cardNumber,
                date: date,
                time: time
        })
        loadNotifications(user.notifications, notificationFilter);
})

// redeem points
const redeemButtons = document.getElementsByClassName('redeemButton')
for (let i = 0; i < redeemButtons.length; i++) {
        redeemButtons[i].addEventListener('click', (event) => {
                let points = user.creditCards[selectedCard].points
                points -= rewards[i].value;
                if (points >= 0) {
                        user.creditCards[selectedCard].points = points
                        document.getElementById('card-info-points').innerHTML = 'Points: ' + (points > 999 ? Math.floor(points / 1000) + "," : "") + points % 1000
                }
                console.log(user.creditCards[0].points);
        })
}

// loans
// loan-app
document.getElementById('loan-app-submit').addEventListener('click', () => {
        const account = document.getElementById('loan-app-account').value;
        const type = document.getElementById('loan-app-type').value;
        const amount = document.getElementById('loan-app-amount').value
        const currency = document.getElementById('loan-app-currency').value
        const table = document.getElementById('loan-applied')
        const tr = document.createElement('tr');


        const date = new Date()
        console.log("helloo")
        tr.innerHTML = `<td class="oddDataLeft">${format(amount) + " " + currency}</td>
                        <td>${date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()}</td>
                        <td>${type}</td>
                        <td>Pending</td>`
        table.appendChild(tr);
})



