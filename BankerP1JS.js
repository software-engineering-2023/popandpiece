const summaryButton = document.getElementById("summary");
const CCButton = document.getElementById("CC");
const loansButton = document.getElementById("loans");
const ComplaintsButton = document.getElementById("Complaints");
const ManageButtonb1 = document.getElementById("b1");
const ManageButtonb2 = document.getElementById("b2");
const ManageButtonb3 = document.getElementById("b3");


const summaryPage = document.getElementById("summaryPage");
const cardsPage = document.getElementById("cardsPage");
const loansPage = document.getElementById("loansPage");
const billsPage = document.getElementById("billsPage");

const summaryIcon = document.getElementById("houseIcon");
const CCIcon = document.getElementById("CCIcon");
const loansIcon = document.getElementById("pigIcon");
const ComplaintsIcon = document.getElementById("chatIcon");

const icon= document.getElementById("profile-icon");
const icon2= document.getElementById("profile-icon2");
const accountsettings= document.getElementById("accountsettings");
const background= document.getElementById("background");
background.classList.add("hide");

const approveButton = document.getElementById("bTa");
const declineButton = document.getElementById("bTd");
const table = document.getElementById("loanstrial");
const table2 = document.getElementById("loanstrial2");
const row2 = table2.getElementsByTagName("tr");
const row = table.getElementsByTagName("tr");
const table3 = document.getElementById("loanstrial3");
const row3 = table3.getElementsByTagName("tr");

function switchSummary() {

        cardsPage.classList.replace('show','hide');
        loansPage.classList.replace('show','hide');
        billsPage.classList.replace('show','hide');

        CCButton.classList.replace('clicked','notclicked');
        loansButton.classList.replace('clicked','notclicked');
        ComplaintsButton.classList.replace('clicked','notclicked');

        CCIcon.classList.replace('bi-credit-card-2-back-fill','bi-credit-card-2-back');
        loansIcon.classList.replace('bi-piggy-bank-fill','bi-piggy-bank');
        ComplaintsIcon.classList.replace('bi-chat-right-dots-fill','bi-chat-right-dots');
        
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
        ComplaintsIcon.classList.replace('bi-chat-right-dots-fill','bi-chat-right-dots');
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
        
        ComplaintsIcon.classList.replace('bi-chat-right-dots-fill','bi-chat-right-dots');
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

function switchManage(){
        cardsPage.classList.replace('show','hide');
        billsPage.classList.replace('show','hide');
        summaryPage.classList.replace('show','hide');
        
        ManageButtonb1.classList.replace('clicked','notclicked');
        ManageButtonb2.classList.replace('clicked','notclicked');
        
        
        ComplaintsIcon.classList.replace('bi-chat-right-dots-fill','bi-chat-right-dots');
        summaryIcon.classList.replace('bi-house-fill','bi-house');
        CCIcon.classList.replace('bi-credit-card-2-front-fill','bi-credit-card-2-front');
        
        loansPage.classList.replace('hide','show');
        ManageButtonb1.classList.replace('notclicked','clicked');
        loansIcon.classList.replace('bi-piggy-bank','bi-piggy-bank-fill');
        switchLoans();
}

function switchApprove(id){
        row[id].classList.add("slowlyhideA");
        setTimeout(() => {
            row[id].classList.add("hide")
            var found=false;
            var j=1;
            for(i=1;i<row.length;i++){
                    if(!(row[i].classList.contains("hide"))){
                            found=true;
                    }
                    if(j%2==0){
                        row[i].classList.remove("oddRow");
                    }
                    else{
                        row[i].classList.add("oddRow");
                    }
                    if(!row[i].classList.contains("hide")){
                        j++;
                    }
            }
            if(!found){
                row[0].classList.add("hide");
            }
            // 👇️ hides element (still takes up space on page)
            // box.style.visibility = 'hidden';
          }, 500);
}
function switchDecline(id){
        row[id].classList.add("slowlyhideD");
        setTimeout(() => {
            row[id].classList.add("hide")
            var found=false;
            var j=1;
            for(i=1;i<row.length;i++){
                    if(!(row[i].classList.contains("hide"))){
                            found=true;
                    }
                    if(j%2==0){
                        row[i].classList.remove("oddRow");
                    }
                    else{
                        row[i].classList.add("oddRow");
                    }
                    if(!row[i].classList.contains("hide")){
                        j++;
                    }
            }
            if(!found){
                row[0].classList.add("hide");
            }
            // 👇️ hides element (still takes up space on page)
            // box.style.visibility = 'hidden';
          }, 500);
}
function switchApprove2(id){
        row2[id].classList.add("slowlyhideA");
        setTimeout(() => {
            row2[id].classList.add("hide")
            var found=false;
            var j=1;
            for(i=1;i<row2.length;i++){
                    if(!(row2[i].classList.contains("hide"))){
                            found=true;
                    }
                    if(j%2==0){
                        row2[i].classList.remove("oddRow");
                    }
                    else{
                        row2[i].classList.add("oddRow");
                    }
                    if(!row2[i].classList.contains("hide")){
                        j++;
                    }
            }
            if(!found){
                row2[0].classList.add("hide");
            }
            // 👇️ hides element (still takes up space on page)
            // box.style.visibility = 'hidden';
          }, 500);
}
function switchDecline2(id){
        row2[id].classList.add("slowlyhideD");
        setTimeout(() => {
            row2[id].classList.add("hide")
            var found=false;
            var j=1;
            for(i=1;i<row2.length;i++){
                    if(!(row2[i].classList.contains("hide"))){
                            found=true;
                    }
                    if(j%2==0){
                        row2[i].classList.remove("oddRow");
                    }
                    else{
                        row2[i].classList.add("oddRow");
                    }
                    if(!row2[i].classList.contains("hide")){
                        j++;
                    }
            }
            if(!found){
                row2[0].classList.add("hide");
            }
            // 👇️ hides element (still takes up space on page)
            // box.style.visibility = 'hidden';
          }, 500);
}
function switchApprove3(id){
        row3[id].classList.add("slowlyhideA");
        setTimeout(() => {
            row3[id].classList.add("hide")
            var found=false;
            var j=1;
            for(i=1;i<row3.length;i++){
                    if(!(row3[i].classList.contains("hide"))){
                            found=true;
                    }
                    if(j%2==0){
                        row3[i].classList.remove("oddRow");
                    }
                    else{
                        row3[i].classList.add("oddRow");
                    }
                    if(!row3[i].classList.contains("hide")){
                        j++;
                    }
            }
            if(!found){
                row3[0].classList.add("hide");
            }
            // 👇️ hides element (still takes up space on page)
            // box.style.visibility = 'hidden';
          }, 500);
}
function switchDecline3(id){
        row3[id].classList.add("slowlyhideD");
        setTimeout(() => {
            row3[id].classList.add("hide")
            var found=false;
            var j=1;
            for(i=1;i<row3.length;i++){
                    if(!(row3[i].classList.contains("hide"))){
                            found=true;
                    }
                    if(j%2==0){
                        row3[i].classList.remove("oddRow");
                    }
                    else{
                        row3[i].classList.add("oddRow");
                    }
                    if(!row3[i].classList.contains("hide")){
                        j++;
                    }
            }
            if(!found){
                row3[0].classList.add("hide");
            }
            // 👇️ hides element (still takes up space on page)
            // box.style.visibility = 'hidden';
          }, 500);
}
function showSettings(){
    if(!accountsettings.classList.contains("left")){
        accountsettings.classList.add("left");
        background.classList.remove("hide");
    }
    else{
    accountsettings.classList.remove("left")
    background.classList.add("hide");
    }
}
function changecolor(){
 
    icon.classList.add("white");
    icon.classList.remove("black");
    icon2.classList.remove("white");
    icon2.classList.add("black");

}
function back(){
    icon.classList.remove("white");
    icon.classList.add("black");
    icon2.classList.add("white");
    icon2.classList.remove("black");
}
function backtologin(){
    window.location = "proj.html"
}
function hideSettings(){
    accountsettings.classList.remove("left")
    background.classList.add("hide");
    for( i = 0; i < popups.length;i++){
        popups[i].classList.add("hide");
    }
}