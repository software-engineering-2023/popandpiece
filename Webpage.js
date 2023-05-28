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

function confirmTransfer() {
        const errors = document.getElementsByClassName('transferField');
        const errorMessage = document.getElementsByClassName('errorMessageTransfer');
        const currentView = document.getElementById('transferCenter');
        var empty = false;

        for (i = 0; i < endofCheck; i++) {
                if (errors[i].value == '')
                if (errors[i].value == '')
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
        const number = document.getElementById('numberInput');

        number.value = "";
        bigDiv.classList.add("hide");
        popMenu.classList.add("hide");
}
function payoffButton(){
        const message=document.getElementById("notifier");
        const numField = document.getElementById("numberInput");
        if(!numField.value == ""){
        closepopup();
        message.classList.remove("slowlyhide");
        setTimeout(() => {                        
        message.classList.add("slowlyhide");
        }, 2000);
        }else{
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
function payoffButtonLoan(){
        const message1=document.getElementById("notifier1")
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

document.getElementById('notif').addEventListener('click',() => {
        const notifIcon = document.getElementById('notif-icon')
        const notifPanel = document.getElementById('notif-panel')
        if(notifIcon.classList.contains('bi-bell')){
            notifPanel.classList.remove('notif-panel-is-hidden')
        }
        else {
            notifPanel.classList.add('notif-panel-is-hidden')
        }
        notifIcon.classList.toggle('bi-bell')
        notifIcon.classList.toggle('bi-bell-fill')
})
