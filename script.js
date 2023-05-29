const loginpage= document.getElementById("login");
const registrationpage= document.getElementById("registeration");
const errors= document.getElementsByClassName("error");
const registerfield= document.getElementsByClassName("registerfield");
const usernameform = document.getElementById("username1");
const passwordform = document.getElementById("password1");
const loginerror = document.getElementsByClassName("errormessage");
const exitbutton=document.getElementById("exit");
const exitbutton1=document.getElementById("exit2");
const popup= document.getElementById("popup");
const background=document.getElementById("background");
const changepass= document.getElementById("changepass");
const writeemail= document.getElementById("writeemail");
const writepass= document.getElementById("writepass");
const rewritepass= document.getElementById("rewritepass");
const enteremail =document.getElementById("enteremail");
const enterpass =document.getElementById("enterpass");
const reenterpass =document.getElementById("reenterpass");
var clientpass= "client";
var bankerpass= "banker";
var adminpass= "admin";
registrationpage.classList.add("hide");
loginerror[0].classList.add("hide");
popup.classList.add("hide");
background.classList.add("hide");
changepass.classList.add("hide");
enteremail.classList.add("hide");
enterpass.classList.add("hide");
reenterpass.classList.add("hide");
for(i=0;i<errors.length;i++){
    errors[i].classList.add("hide");
}
function tosignuppage(){
loginpage.classList.add("hide");
registrationpage.classList.remove("hide");
}
function adderrors(){
    if(registerfield[0].value == "client"|| registerfield[0].value=="banker"|| registerfield[0].value=="admin"){
            errors[0].classList.remove("hide");
    }
    else{
        errors[0].classList.add("hide");
    }
    if(registerfield[1].value == "client@gmail.com"||registerfield[1].value == "banker@gmail.com"||registerfield[1].value == "admin@gmail.com"){
        errors[1].classList.remove("hide");
    }
    else{
    errors[1].classList.add("hide");
    }
    if(registerfield[2].value == "01224764545"||registerfield[2].value == "01279932500"||registerfield[2].value == "01060103236"){
        
        errors[2].classList.remove("hide");
       
    }
    else{
    errors[2].classList.add("hide");
    }
    if(registerfield[2].value.length!=11 && registerfield[2].value!=""){
        errors[3].classList.remove("hide");
    }
    else{
    errors[3].classList.add("hide");
    }
    if(registerfield[3].value != registerfield[4].value && registerfield[3].value!=""&& registerfield[4].value!=""){
        errors[4].classList.remove("hide");
    }
    else{
    errors[4].classList.add("hide");
    }
    if(registerfield[5].value =="01234567891011"||registerfield[5].value =="01234567891012"||registerfield[5].value =="01234567891013" ){
        errors[5].classList.remove("hide");
    }
    else{
    errors[5].classList.add("hide");
    }
    if(registerfield[5].value.length!=14 && registerfield[5].value!=""){
        errors[6].classList.remove("hide");
    }
    else{
    errors[6].classList.add("hide");
    }
    var date = new Date(registerfield[6].value);

    if((new Date().getFullYear() -date.getFullYear())<18){
        errors[7].classList.remove("hide");
    }
    else{
    errors[7].classList.add("hide");
    }
    //TODO check if phonenumber and nationalid are numbers

   
}
function tologin(){
    var flag= true;
    for(i =0 ; i<registerfield.length;i++){
        flag=flag && registerfield[i].value!="";
    }
    for(i=0;i<errors.length-1;i++){
        flag=flag && (errors[i].classList.contains("hide"));
    }
    if(!flag){
        errors[8].classList.remove("hide");
    }
    else{
        loginpage.classList.remove("hide");
        registrationpage.classList.add("hide");
        for(i =0 ; i<registerfield.length;i++){
            registerfield[i].value="";
        }
    }
}
function tomainpage(){
    if(usernameform.value=="client" && passwordform.value==clientpass){
        window.location = "userInterface.html"
    }
    else if(usernameform.value=="banker" && passwordform.value==bankerpass){
        window.location = "bankerInterface.html"
    }
    else if(usernameform.value=="admin" && passwordform.value==adminpass){
        window.location = "adminInterface.html"
    }
    else{
        loginerror[0].classList.remove("hide");
    }
}
function hover(){
exitbutton.classList.remove("bi-x-circle");
exitbutton.classList.add("bi-x-circle-fill");
exitbutton1.classList.remove("bi-x-circle");
exitbutton1.classList.add("bi-x-circle-fill");
}
function exithover(){
    exitbutton.classList.add("bi-x-circle");
    exitbutton.classList.remove("bi-x-circle-fill");
    exitbutton1.classList.add("bi-x-circle");
    exitbutton1.classList.remove("bi-x-circle-fill");
    }
function closepopup(){
        background.classList.add("hide");
        popup.classList.add("hide");
        changepass.classList.add("hide");
}
function openpopup(){
    background.classList.remove("hide");
    popup.classList.remove("hide");
    writeemail.value="";
    enteremail.classList.add("hide");
    enterpass.classList.add("hide");
    reenterpass.classList.add("hide");
    writepass.value="";
    rewritepass.value="";
}
function nextpopup(){
    if(writeemail.value==""){
enteremail.classList.remove("hide");
    }
    else{
    popup.classList.add("hide");
    changepass.classList.remove("hide");
    }
}
function changepassword(){
    if(writepass.value==""&&rewritepass.value==""){
        reenterpass.classList.remove("hide");
        enterpass.classList.add("hide");
    }
    else if(writepass.value==rewritepass.value){
        popup.classList.add("hide");
        background.classList.add("hide");
        changepass.classList.add("hide");
        if(writeemail.value=="client@gmail.com"){
            clientpass=writepass.value;
    }
    else if(writeemail.value=="banker@gmail.com"){
            bankerpass=writepass.value;
    }
    else{
        adminpass=writepass.value;
    }

    }
    else{
        enterpass.classList.remove("hide");
        reenterpass.classList.add("hide");
    }
    
}



    