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

const currentDateTransfer = document.getElementById('dateInTransfer');
var today = new Date().toISOString().split('T')[0];
fields[2].setAttribute('min', today);
currentDateTransfer.setAttribute('min', today);
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
                const toAccount = document.getElementById('toAccountInTransfer');

                toAccount.classList.remove('hide');
                transferPage.classList.remove('domesticView');
                transferPage.classList.remove('internationalView');
                transferPage.classList.add('LOSView');
                domesticView.classList.add('hide');
                internationalView.classList.add('hide');
        }
}

var endofCheck = 5;//used to determine when to stop checking for errors for the different views

function toDomestic() {
        if (document.getElementById('domestic').checked) {
                endofCheck = 11;
                document.getElementById('summaryWithoutTransfer').classList.add('hide');
                const domesticView = document.getElementById('domesticViewInterface');
                const internationalView = document.getElementById('internationalViewInterface');
                const transferPage = document.getElementById('transferCenter');
                const toAccount = document.getElementById('toAccountInTransfer');

                toAccount.classList.add('hide');
                transferPage.classList.add('domesticView');
                transferPage.classList.remove('internationalView');
                domesticView.classList.remove('hide');
                internationalView.classList.add('hide');
        }
}

function toInternational() {
        if (document.getElementById('international').checked) {
                endofCheck = 12;
                document.getElementById('summaryWithoutTransfer').classList.add('hide');
                const domesticView = document.getElementById('domesticViewInterface');
                const internationalView = document.getElementById('internationalViewInterface');
                const transferPage = document.getElementById('transferCenter');
                const toAccount = document.getElementById('toAccountInTransfer');

                toAccount.classList.add('hide');
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
                billpay();
        }

        message.classList.remove("slowlyhide");
        setTimeout(() => {
                message.classList.add("slowlyhide");
        }, 2000);
        

}

function confirmTransfer() {
        const errors = document.getElementsByClassName('transferField');
        const errorMessage = document.getElementsByClassName('errorMessageTransfer');
        const currentView = document.getElementById('transferCenter');

        var empty = false;

        for (i = 0; i < endofCheck; i++) {
                if (i == 1 && (document.getElementById('domestic').checked || document.getElementById('international').checked)) {

                        i++;
                }
                i
                if (errors[i].value == '')
                        if (errors[i].value == '')
                                empty = true;
        }

        if (empty)
                errorMessage[0].classList.remove('hide');
        else {
                updateTranscations();
                for (i = 0; i < errors.length; i++) {
                        errors[i].value = '';
                }
                errorMessage[0].classList.add('hide');
                payoffButtonTransfer();
                cancelTransfer();
        }
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
        let account = document.getElementById('payoff-account').value
        const accountNum = document.getElementById('account-numbers').value;
        const cardNum = document.getElementById('cardsSelect').value;
        let availableToUse = user.accounts[account].availableToUse
        let amountDue = user.accounts[accountNum].creditCard[cardNum].amountDue
        document.getElementById('payoff-input').setAttribute("max",amountDue)
        document.getElementById('payoff-balance').innerHTML = "Available Balance: <br> " + format(availableToUse)
        document.getElementById('tobePaid-amount').innerHTML =  format(amountDue) + " EGP"
        
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
                error.innerHTML = `<i class="bi bi-x-circle-fill"></i> No fields can be empty`
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
        if (!cardSelect.options[cardSelect.selectedIndex].innerHTML.includes('Credit')) {
                creditPage.classList.add('hide');
                limit.classList.add('slowlyhide');
        } else {
                creditPage.classList.remove('hide');
                limit.classList.remove('slowlyhide');
        }
        loadCreditTransactions();
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
        accounts:[
                {
                        accountNumber: "540076330348",
                        debitNumber:"9876543210987654",
                        balance: 7179540,
                        availableToUse: 7179540,
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
                                        balance: 7174380,
                                }
                        ],
                        creditCard:[
                                {  
                                cardNumber: "3614167248272936", 
                                limit: 50000, 
                                points: 50600, 
                                amountDue: 5160, 
                                expiryDate: "06/29/2023",
                                transactions: [
                                        {
                                                transactionDate: "16/05/2023",
                                                valueDate: "17/05/2023",
                                                details: "Amazon",
                                                amountPaid: 1000,
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
                                ],
                                rewards:[false,false,false,false,false,false] 
                        }
                ],
                debitTransaction:[
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
                },
                {
                        accountNumber: "540051080372",
                        debitNumber:"5423216780987654",
                        balance: 2519,
                        availableToUse: 2519,
                        type:"saving",
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
                        ],
                        creditCard:[
                                {  
                                cardNumber: "3614608682512591",
                                limit: 20500,
                                points: 20600,
                                amountDue: 224,
                                expiryDate: "10/29/2023",
                                transactions: [
                                        {
                                                transactionDate: "30/05/2023",
                                                valueDate: "30/05/2023",
                                                details: "Starbucks",
                                                amountPaid: 60,
                                               
                                        },
                                        {
                                                transactionDate: "28/05/2023",
                                                valueDate: "28/05/2023",
                                                details: "Uber",
                                                amountPaid: 44,
                                                
                                        },
                                        {
                                                transactionDate: "10/06/2023",
                                                valueDate: "10/06/2023",
                                                details: "Steam",
                                                amountPaid: 120,
                                        }
                                ],
                                rewards:[false,false,false,false,false,false]
                         }
                        ],
                        debitTransaction:[
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
                                        amountPaid: 400,
                                },
                                {
                                        transactionDate: "28/05/2023",
                                        valueDate: "28/05/2023",
                                        details: "Netflix",
                                        amountPaid: 160.00,
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
                        installment: 2000000 * 1.1 / 32,
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
                        installment: 2000000 * 1.1 / 32,
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
                        installment: 2000000 * 1.1 / 32,
                        type: "Car",
                        status: "Rejected",
                        currency: "EGP",
                }
        ],
        loanApplications:[],

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

let notifno = 0
// load notif-panel dynamically
function loadNotifications(notifs, filter) {
        notificationFilter = filter
        const fragment = document.createDocumentFragment();
        let x = 0
        for (let i = 0; i < user.notifications.length; i++) {
                x++
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
                        <h6><i class=${(notifs[i].type == "Transfer" ? "bi-arrow-down-left-circle-fill" : "bi-alarm-fill")}></i>${notifs[i].type}<i class="bi-x-octagon"></i></h6>
                        
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
        notifno = x
        document.getElementById('notif-bubble').innerHTML = x
        
        document.getElementById('notif-bubble-nav').innerHTML = x
        const notifList = document.getElementById('notif-list')
        notifList.innerHTML = "";
        notifList.appendChild(fragment);
        addNotifEventListners()
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

//notif-addlisteners
function addNotifEventListners(){

        const closeNotif = document.getElementsByClassName('bi-x-octagon')
        for(let i = 0; i < closeNotif.length; i++){
                closeNotif[i].addEventListener('click', () => {
                       user.notifications.splice(i,1)
                       loadNotifications(user.notifications, notificationFilter);
                })
        }
}

//change balance
function changeBalance(){
        const accountNum = document.getElementById('account-numbers').value;
        const account = user.accounts[accountNum];
        document.getElementById('summary-available-to-use').innerHTML=`CR ${format(account.availableToUse)} EGP`;
        document.getElementById('summary-balance').innerHTML=`CR ${format(account.balance)} EGP`;
}
changeBalance();

//summary-Transactions
function loadTransactions() {
        const fragment = document.createDocumentFragment();
        const accountNum = document.getElementById('account-numbers');
        const account = user.accounts[accountNum.value];
        const header = document.getElementById('summary-table-header');
        for (let i = account.transactions.length - 1; i >= 0; i--) {
                const tr = document.createElement('tr');
                const trans = account.transactions[i];
                tr.innerHTML = `<td>${trans.transactionDate}</td>
                <td>${trans.valueDate}</td>
                <td>${trans.details}</td>
                <td>CR ${format(trans.debitCredit)} EGP</td>
                <td >CR ${format(trans.balance)} EGP</td>`
                fragment.appendChild(tr);
        }
        const table = document.getElementById('summary-transactions-table');
        table.innerHTML = ``;
        table.appendChild(header);
        header.after(fragment);
}
loadTransactions();

function updateTranscations() {
        //fetching fields from the transfer page
        const inputFields = document.getElementsByClassName('transferField');

        const accountNum = document.getElementById('transfer-account');
        const account = user.accounts[accountNum.value];
        account.transactions.push({
                transactionDate: inputFields[4].value,
                valueDate: inputFields[4].value,
                details: inputFields[0].value,
                debitCredit: inputFields[2].value,
                balance: account.availableToUse - inputFields[2].value,
        })
        account.availableToUse = account.availableToUse - inputFields[2].value;
        loadTransactions();
}

// tr.innerHTML = `<td>${inputFields[3].value}</td>
// <td>${inputFields[4].value}</td>
// <td>${'to' + inputFields[4].value}</td>
// <td>CR ${inputFields[2].value + inputFields[3].value} </td>
// <td >CR ${format(trans.balance)} EGP</td>`



//load Credit cards 
function loadCredits(){
        const accountNum = document.getElementById('account-numbers').value;
        const account = user.accounts[accountNum];
        const fragment = document.createDocumentFragment();
        let i = 0;
        for (let i = 0; i < account.creditCard.length; i++){
                const option = document.createElement('option');
                const cardNum = account.creditCard[i].cardNumber;
                option.innerHTML= `${cardNum} (Credit)`;
                option.value = i;
                fragment.appendChild(option);
        }
        const option = document.createElement('option');
        const cardNum = account.debitNumber;
        option.innerHTML= `<option value ="${i}"> ${cardNum} (Debit) </option>`;
        fragment.appendChild(option);
        const cardSelect = document.getElementById('cardsSelect');
        cardSelect.innerHTML='';
        cardSelect.appendChild(fragment);
        loadCreditTransactions();
}
loadCredits();

//change transactions and rewards to credit cards
function loadCreditTransactions(){
        const fragment = document.createDocumentFragment();
        const accountNum = document.getElementById('account-numbers');
        const account = user.accounts[accountNum.value];
        const cardSelect = document.getElementById('cardsSelect');
        const cardNum = document.getElementById('cardsSelect').value;
        const limit = document.getElementById('Limit');
        const points = document.getElementById('card-info-points');
        const dueDate = document.getElementById('dueDate');
        const amountDue = document.getElementById('amountDue');
        const header = document.getElementById('cards-table-header');
        if (cardSelect.options[cardSelect.selectedIndex].innerHTML.includes('Credit')){
                limit.innerHTML = `Limit: ${format(account.creditCard[cardNum].limit)} EGP`;
                points.innerHTML = `Points: ${format(account.creditCard[cardNum].points)} Point`
                if(account.creditCard[cardNum].amountDue!=0){ 
                        document.getElementById('card-payment').classList.remove('hide');
                        dueDate.innerHTML=`${account.creditCard[cardNum].expiryDate}`;
                        amountDue.innerHTML = `${format(account.creditCard[cardNum].amountDue)} EGP`;
                }else{
                        document.getElementById('card-payment').classList.add('hide');
                }
                for (let i = account.creditCard[cardNum].transactions.length-1; i >= 0 ; i--) {
                        const tr = document.createElement('tr');
                        const cardtrans = account.creditCard[cardNum].transactions[i];
                        tr.innerHTML = 
                        `<td>${cardtrans.transactionDate}</td>
                        <td>${cardtrans.valueDate}</td>
                        <td>${cardtrans.details}</td>
                        <td>${format(cardtrans.amountPaid)} EGP</td>`
                        fragment.appendChild(tr);
                }
        }else{
                points.innerHTML=`Avalibale Balance: ${format(account.availableToUse)}`;
                for (let i = account.debitTransaction.length-1; i >= 0 ; i--) {
                        const tr = document.createElement('tr');
                        const cardtrans = account.debitTransaction[i];
                        tr.innerHTML = 
                        `<td>${cardtrans.transactionDate}</td>
                        <td>${cardtrans.valueDate}</td>
                        <td>${cardtrans.details}</td>
                        <td>${format(cardtrans.amountPaid)} EGP</td>`
                        fragment.appendChild(tr);
                }   
        }
        const table = document.getElementById('credit-transactions-table');
        table.innerHTML=``;
        table.appendChild(header);
        header.after(fragment);
        const redeemButton = document.getElementsByClassName('redeemButton')
        for(let i = 0; i < redeemButton.length; i++){
                const cardNum = document.getElementById('cardsSelect').value;
                const accountNum = document.getElementById('account-numbers').value;
                if (user.accounts[accountNum].creditCard[cardNum].rewards[i] == false) {
                        if (redeemButton[i].disabled) {
                        redeemButton[i].disabled = false;
                        redeemButton[i].innerHTML = "Redeem";
                        }
                } else {
                        if (!redeemButton[i].disabled) {
                        redeemButton[i].disabled = true;
                        redeemButton[i].innerHTML = "Redeemed";
                        }
                }
        }
}
//change account
document.getElementById('account-numbers').addEventListener('change', ()=>{
        loadTransactions();
        changeBalance();
        loadCredits();
        cardSelect();
})      
// cards
function format(x) {
        x = Math.floor(x)
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
                if (i != 0 && x.length > 3) {
                        s = x.substring(0, i) + "," + s
                }
                else {
                        s = x
                }
        
                return s
}
document.getElementById('payoff-account').addEventListener('change',()=>{
        let account = document.getElementById('payoff-account').value
        let availableToUse = user.accounts[account].availableToUse
        document.getElementById('payoff-balance').innerHTML = "Available Balance: <br> " + format(availableToUse) + " EGP"  
})
// payoff card
document.getElementById('cardPayment-payoff').addEventListener('click', () => {
        let accountNum = document.getElementById('account-numbers').value
        let account = document.getElementById('payoff-account').value
        let amount = document.getElementById('payoff-input').value;
        const cardNum = document.getElementById('cardsSelect').value;
        let balance = user.accounts[account].balance
        let availableToUse = user.accounts[account].availableToUse
        let amountDue = user.accounts[accountNum].creditCard[cardNum].amountDue
        if(amount <= availableToUse && amount <= amountDue) {
                
                balance -= amount
                user.accounts[account].balance = balance

                availableToUse -= amount
                user.accounts[account].availableToUse = availableToUse

                amountDue -= amount
                user.accounts[accountNum].creditCard[cardNum].amountDue = amountDue
                
                //update payoff module
                document.getElementById('payoff-balance').innerHTML = "Available Balance: <br> " + format(availableToUse) + " EGP"

                // update card-payment module
                document.getElementById('amountDue').innerHTML = format(amountDue) + "EGP"

                // remove card-payment module
                if(amountDue == 0) {
                        document.getElementById('card-payment').classList.add('hide');
                }
                payoffButton()
        }else if(amount > availableToUse){
                const error = document.getElementById('errorPayoff');
                error.innerHTML = `<i class="bi bi-x-circle-fill"></i> no enough money`
                error.classList.remove('hide');
        }else{
                const error = document.getElementById('errorPayoff');
                error.innerHTML = `<i class="bi bi-x-circle-fill"></i> incorrect amount`
                error.classList.remove('hide');     
        }

        // calling payoffButton()

})

let date = new Date();

// notif payoff-card
document.getElementById('cardPayment-reminder').addEventListener('click', () => {
        const account = document.getElementById('account-numbers').value;
        let dateTime = document.getElementById('cardPayment-reminder-dateTime').value
        const cardNum = document.getElementById('cardsSelect').value;
        const accountNum = document.getElementById('account-numbers').value;
        let date = dateTime.substring(0,10)
        let time = dateTime.substring(11,16)
        user.notifications.unshift({
                state: "unread",
                type: "Reminder",
                title: "Payoff credit Card",
                amount: format(user.accounts[accountNum].creditCard[cardNum].amountDue),
                detail: "card no." + user.accounts[accountNum].creditCard[cardNum].cardNumber,
                date: date,
                time: time
        })
        loadNotifications(user.notifications, notificationFilter);
})

// redeem points
const redeemButtons = document.getElementsByClassName('redeemButton')
for(let i = 0; i < redeemButtons.length; i++){
        const cardNum = document.getElementById('cardsSelect').value;
        const accountNum = document.getElementById('account-numbers').value;
        if (user.accounts[accountNum].creditCard[cardNum].rewards[i] === false) {
                if (redeemButtons[i].disabled) {
                  redeemButtons[i].disabled = false;
                  redeemButtons[i].innerHTML = "Redeem";
                }
              } else {
                if (!redeemButtons[i].disabled) {
                  redeemButtons[i].disabled = true;
                  redeemButtons[i].innerHTML = "Redeemed";
                }
              }
        redeemButtons[i].addEventListener('click', (event) => {
                const cardNum = document.getElementById('cardsSelect').value;
                const accountNum = document.getElementById('account-numbers').value;
                let points = user.accounts[accountNum].creditCard[cardNum].points
                points -= rewards[i].value;
                if(points >= 0){
                        user.accounts[accountNum].creditCard[cardNum].points = points
                        document.getElementById('card-info-points').innerHTML = 'Points: ' + format(points) + "Point"
                        user.accounts[accountNum].creditCard[cardNum].rewards[i]=true;
                        redeemPoints(i);
                } 
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

        user.loanApplications.push({
                amount: amount,
                currency: currency,
                type: type,
                status: "pending"
        })    
        tr.innerHTML = `<td class="oddDataLeft">${format(amount) + " " + currency}</td>
                        <td>${date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()}</td>
                        <td>${type}</td>
                        <td>Pending</td>`
        table.appendChild(tr);
})


let loanSelected = 0

// loan-pay

// loan-pay-load
function loadLoans(){
        let fragment = document.createDocumentFragment()

        let head = document.createElement('tr')
        head.innerHTML = `
        <th>TOTAL AMOUNT</th>
        <th>DUE AMOUNT</th>
        <th>NEXT INSTALLMENT DATE</th>
        <th>LOAN TYPE</th>`;

        fragment.appendChild(head)
        for(let i = 0; i < user.loans.length; i++){
                
                const temp = document.createElement('tr');
                const loan = user.loans[i];

                temp.innerHTML = `<td>${format(loan.amount) + " " +  loan.currency}</td>
                <td>${format(loan.installment) + " " + loan.currency}</td>
                <td>${loan.date}</td>
                <td>${loan.type }</td>
                <td>
                        <button class = "loan-pay" onclick="payPopOpenLoan()" style="margin-top: 6px;">PAY</button>
                </td>
                <td>
                        <div class="reminderFlex">
                        <input type="datetime-local" data-placeholder="SET REMINDER" required
                                    aria-required="true" />
                        <button class="loanReminderConfirm loan-rem">CONFIRM</button>
                        </div>
                </td>`;


                fragment.appendChild(temp)
        }
        let table  = document.getElementById('loans-table')
        table.innerHTML = ""
        table.appendChild(fragment)

        const loanPayments = document.getElementsByClassName('loan-pay')
        for(let i = 0; i < loanPayments.length; i++) {
        loanPayments[i].addEventListener('click', () => {
                loanSelected = i
                let loan = user.loans[i]
                document.getElementById('loan-pay-amount').innerHTML = format(loan.installment) + " " + loan.currency;
                document.getElementById('loan-pay-avB').innerHTML = format(user.accounts[document.getElementById('loan-pay-account').value].availableToUse)
        })
        }
}
loadLoans();

document.getElementById('loan-pay-account').addEventListener('change',()=>{
        document.getElementById('loan-pay-avB').innerHTML = format(user.accounts[document.getElementById('loan-pay-account').value].availableToUse)
})



// loan-pay-confirm
document.getElementById('loan-pay-confirm').addEventListener('click',() => {
        let amount = user.loans[loanSelected].installment;
        let accountIndex = document.getElementById('loan-pay-account').value
        let balance = user.accounts[accountIndex].balance;
        let availableToUse = user.accounts[accountIndex].availableToUse;
        
        if(amount <= availableToUse){
                availableToUse -= amount
                balance -= amount
                user.accounts[accountIndex].balance = balance
                user.accounts[accountIndex].availableToUse = availableToUse
        }
        changeBalance();
        // add edits to balance
        document.getElementById('loans-table').children[loanSelected + 1].innerHTML = ""

        
})

// loan-reminder
const loanReminders = document.getElementsByClassName('loan-rem');
for(let i = 0; i < loanReminders.length; i++) {
        loanReminders[i].addEventListener('click', () => {
                let dateTime = loanReminders[i].previousElementSibling.value;
                let date = dateTime.substring(0, 10)
                let time = dateTime.substring(11, 16)
                user.notifications.unshift({
                        state: "unread",
                        type: "Reminder",
                        title: "Pay loan installment",
                        amount: format(user.loans[i].installment),
                        detail: "loan no" + user.loans[i].number,
                        date: date,
                        time: time,
                })
                loadNotifications(user.notifications, notificationFilter);
        })
}




//bill-pay
function billpay() {
        //fetching fields from the transfer page

        const inputFields = document.getElementsByClassName('billsDropDown');
        const amount=document.getElementsByClassName("amountInBills");
        const account = user.accounts[inputFields[0].value];
        account.transactions.push({
                transactionDate: new Date().getFullYear()+"-"+new Date().getMonth()+"-"+new Date().getDay(),
                valueDate: new Date().getFullYear()+"-"+new Date().getMonth()+"-"+new Date().getDay(),
                details: inputFields[1].value,
                debitCredit: amount[0].value,
                balance: account.availableToUse - amount[0].value,
        })
        account.availableToUse = account.availableToUse - amount[0].value;
        loadTransactions();
}

//bill-notifi
document.getElementById('bill-save-reminder-button').addEventListener('click', () => {
        const dateTime = document.getElementById('bill-dateTime-input').value
        const date = dateTime.substring(0, 10);
        const time = dateTime.substring(11, 16);
        const amount = document.getElementById('bill-amount-input');
        const name = document.getElementById('bill-name-input');
        user.notifications.unshift({
                state: "unread",
                type: "Reminder",
                title: name.value + " Bill Due",
                amount: format(amount.value),
                detail: "Pay the" + name.value,
                date: date,
                time: time
        })
        loadNotifications(user.notifications, notificationFilter);
        secondbill();
})