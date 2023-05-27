const summaryButton = document.getElementById("summary");
const cardsButton = document.getElementById("cards");
const summaryIcon = document.getElementById("send");
const cardsIcon = document.getElementById("person");
const table = document.getElementById("tablepls");
const row = table.getElementsByTagName("tr");
const message=document.getElementById("notifier");
const annText=document.getElementById("annText");
const button=document.getElementById("buttonpressed");
const reports=document.getElementById("mainbody");
const accounts=document.getElementById("accountcheck");
const popups= document.getElementsByClassName("pop");
const textboxes= document.getElementsByClassName("forgetpass");
const background= document.getElementById("background");
const exitbutton1= document.getElementById("exit1");
const exitbutton2= document.getElementById("exit2");
const exitbutton3= document.getElementById("exit3");
const exitbutton4= document.getElementById("exit4");
const createusername= document.getElementById("createusername");
const createpassword= document.getElementById("createpassword");
const deleteusername= document.getElementById("deleteusername");
const blockusername= document.getElementById("blockusername");
const unblockusername= document.getElementById("unblockusername");
const error= document.getElementById("error");
const accountsettings= document.getElementById("accountsettings");
const icon= document.getElementById("profile-icon");
const icon2= document.getElementById("profile-icon2");
const selector= document.getElementsByClassName("selector")
const emptyspace=document.getElementsByClassName("EmptySpace");
icon2.classList.remove("black");
for(i =0;i<popups.length;i++){
    popups[i].classList.add("hide");
}
button.classList.add("disabled");
message.classList.add("slowlyhide");
accounts.classList.add("hide");
background.classList.add("hide");
error.classList.add("slowlyhide");


function switchSummary() {
        cardsButton.classList.replace('clicked','notclicked');
        summaryButton.classList.replace('notclicked','clicked');
        cardsIcon.classList.replace('bi-person-fill-check','bi-person-check');
        summaryIcon.classList.replace('bi-send-exclamation','bi-send-exclamation-fill');
        reports.classList.remove("hide");
        accounts.classList.add("hide");
        selector[0].classList.remove("goright");
        emptyspace[0].classList.remove("increaselength");
}

function switchCards() {
        summaryButton.classList.replace('clicked','notclicked');
        summaryIcon.classList.replace('bi-send-exclamation-fill','bi-send-exclamation');
        cardsButton.classList.replace('notclicked','clicked');
        cardsIcon.classList.replace('bi-person-check','bi-person-fill-check');
        reports.classList.add("hide");
        accounts.classList.remove("hide");
        selector[0].classList.add("goright");
        emptyspace[0].classList.add("increaselength");
}

function onClick(id) {
    row[id].classList.add("slowlyhide");
    setTimeout(() => {
        row[id].classList.add("hide")
        var found=false;
        var j=1;
        for(i=1;i<row.length;i++){
                if(!(row[i].classList.contains("hide"))){
                        found=true;
                }
                if(j%2==0){
                    row[i].classList.remove("oddRowSummary");
                }
                else{
                    row[i].classList.add("oddRowSummary");
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
      }, 200);
   
    
  }
function disablebut(){
    if(annText.value==""){
        button.classList.add("disabled");
        button.setAttribute("disabled","");
    }
    else{
      
        button.classList.remove("disabled");
        button.removeAttribute("disabled");
    }
}
function test(){
    annText.value="";
    button.classList.add("disabled");
    button.setAttribute("disabled","");
    message.classList.remove("slowlyhide");
    setTimeout(() => {
        message.classList.add("slowlyhide")
      }, 2000);

}
function createaccountpopup(){
background.classList.remove("hide");
popups[0].classList.remove("hide");
popups[1].classList.add("hide");
popups[2].classList.add("hide");
popups[3].classList.add("hide");
createusername.value="";
createpassword.value="";
deleteusername.value="no";
blockusername.value="no";
unblockusername.value="no";
}
function deleteaccountpopup(){
    background.classList.remove("hide");
popups[0].classList.add("hide");
popups[1].classList.remove("hide");
popups[2].classList.add("hide");
popups[3].classList.add("hide");
createusername.value="no";
createpassword.value="no";
deleteusername.value="";
blockusername.value="no";
unblockusername.value="no";
}
function blockaccountpopup(){
    background.classList.remove("hide");
    popups[0].classList.add("hide");
    popups[1].classList.add("hide");
    popups[2].classList.remove("hide");
    popups[3].classList.add("hide");
    createusername.value="no";
    createpassword.value="no";
    deleteusername.value="no";
    blockusername.value="";
    unblockusername.value="no";
}
function unblockaccountpopup(){
    background.classList.remove("hide");
    popups[0].classList.add("hide");
    popups[1].classList.add("hide");
    popups[2].classList.add("hide");
    popups[3].classList.remove("hide");
    createusername.value="no";
    createpassword.value="no";
    deleteusername.value="no";
    blockusername.value="no";
    unblockusername.value="";
}
function hover(){
    exitbutton2.classList.remove("bi-x-circle");
    exitbutton2.classList.add("bi-x-circle-fill");
    exitbutton1.classList.remove("bi-x-circle");
    exitbutton1.classList.add("bi-x-circle-fill");
    exitbutton3.classList.remove("bi-x-circle");
    exitbutton3.classList.add("bi-x-circle-fill");
    exitbutton4.classList.remove("bi-x-circle");
    exitbutton4.classList.add("bi-x-circle-fill");
    }
    function exithover(){
        exitbutton1.classList.add("bi-x-circle");
        exitbutton1.classList.remove("bi-x-circle-fill");
        exitbutton2.classList.add("bi-x-circle");
        exitbutton2.classList.remove("bi-x-circle-fill");
        exitbutton3.classList.add("bi-x-circle");
        exitbutton3.classList.remove("bi-x-circle-fill");
        exitbutton4.classList.add("bi-x-circle");
        exitbutton4.classList.remove("bi-x-circle-fill");
        }
function closepopup(){
        for(i =0;i<popups.length;i++){
            popups[i].classList.add("hide");
        }
        background.classList.add("hide");
}
function nextpopup(){
    var flag=false;
    for(i=0;i<textboxes.length;i++){
        if(textboxes[i].value==""){
flag=true;
        }
    }
    if(flag==true){
    
    error.classList.remove("slowlyhide");
    setTimeout(() => {
        error.classList.add("slowlyhide")
      }, 2000);
    }
    else{
        closepopup();
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
function backtologin(){
    window.location = "proj.html"
}