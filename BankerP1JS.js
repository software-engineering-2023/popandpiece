const summaryButton = document.getElementById("summary");
const CCButton = document.getElementById("CC");
const loansButton = document.getElementById("loans");
const ComplaintsButton = document.getElementById("Complaints");

const summaryPage = document.getElementById("summaryPage");
const cardsPage = document.getElementById("cardsPage");
const loansPage = document.getElementById("loansPage");
const billsPage = document.getElementById("billsPage");

const summaryIcon = document.getElementById("houseIcon");
const CCIcon = document.getElementById("CCIcon");
const loansIcon = document.getElementById("pigIcon");
const ComplaintsIcon = document.getElementById("chatIcon");

function switchSummary() {

        cardsPage.classList.replace('show','hide');
        loansPage.classList.replace('show','hide');
        billsPage.classList.replace('show','hide');

        CCButton.classList.replace('clicked','notclicked');
        loansButton.classList.replace('clicked','notclicked');
        ComplaintsButton.classList.replace('clicked','notclicked');

        CCIcon.classList.replace('bi-credit-card-2-back-fill','bi-credit-card-2-back');
        loansIcon.classList.replace('bi-piggy-bank-fill','bi-piggy-bank');
        ComplaintsIcon.classList.replace('bi-chat-right-dots-fill','bi-chat-right-dots-fill');
        
        summaryPage.classList.replace('hide','show');
        summaryButton.classList.replace('notclicked','clicked');
        summaryIcon.classList.replace('bi-house','bi-house-fill');
}

function switchRequests() {
        
        loansPage.classList.replace('show','hide');
        billsPage.classList.replace('show','hide');
        summaryPage.classList.replace('show','hide');

        loansButton.classList.replace('clicked','notclicked');
        ComplaintsButton.classList.replace('clicked','notclicked');
        summaryButton.classList.replace('clicked','notclicked');

        loansIcon.classList.replace('bi-piggy-bank-fill','bi-piggy-bank');
        ComplaintsIcon.classList.replace('bi-chat-right-dots-fill','bi-chat-right-dots-fill');
        summaryIcon.classList.replace('bi-house-fill','bi-house');

        cardsPage.classList.replace('hide','show');
        CCButton.classList.replace('notclicked','clicked');
        CCIcon.classList.replace('bi-credit-card-2-back','bi-credit-card-2-back-fill');
}

function switchLoans(){
                
        cardsPage.classList.replace('show','hide');
        billsPage.classList.replace('show','hide');
        summaryPage.classList.replace('show','hide');
        
        ComplaintsButton.classList.replace('clicked','notclicked');
        summaryButton.classList.replace('clicked','notclicked');
        CCButton.classList.replace('clicked','notclicked');
        
        ComplaintsIcon.classList.replace('bi-credit-card-2-back-fill','bi-credit-card-2-back');
        summaryIcon.classList.replace('bi-house-fill','bi-house');
        CCIcon.classList.replace('bi-credit-card-2-front-fill','bi-credit-card-2-front');
        
        loansPage.classList.replace('hide','show');
        loansButton.classList.replace('notclicked','clicked');
        loansIcon.classList.replace('bi-piggy-bank','bi-piggy-bank-fill');
}

function switchComplaints(){

        cardsPage.classList.replace('show','hide');
        loansPage.classList.replace('show','hide');
        summaryPage.classList.replace('show','hide');
        
        summaryButton.classList.replace('clicked','notclicked');
        CCButton.classList.replace('clicked','notclicked');
        loansButton.classList.replace('clicked','notclicked');

        summaryIcon.classList.replace('bi-house-fill','bi-house');
        CCIcon.classList.replace('bi-credit-card-2-back-fill','bi-credit-card-2-back');
        loansIcon.classList.replace('bi-piggy-bank-fill','bi-piggy-bank');
        
        billsPage.classList.replace('hide','show');
        ComplaintsButton.classList.replace('notclicked','clicked');
        ComplaintsIcon.classList.replace('bi-chat-right-dots','bi-chat-right-dots-fill');}
