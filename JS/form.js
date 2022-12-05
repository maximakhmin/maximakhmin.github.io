
var tel = document.getElementById('tel');
var mail = document.getElementById('mail');
var but = document.getElementById('reg');
var submit = document.getElementById('submit');

var inputs = document.getElementsByTagName("input");

function newAccount() {

    tel.style.height = "30px";
    tel.style.visibility = "visible";
    tel.style.opacity = "1";
    tel.setAttribute("required", "");

    mail.style.height = "30px";
    mail.style.visibility = "visible";
    mail.style.opacity = "1";
    mail.setAttribute("required", "");

    but.setAttribute("onclick", "loginAccount()");

    but.textContent = 'Войти в созданную запись';


    submit.textContent = 'Зарегистрироваться';
}
function loginAccount() {

    tel.style.height = "0";
    tel.style.visibility = "hidden";
    tel.style.opacity = "0";
    tel.removeAttribute("required");
    tel.value = "";

    mail.style.height = "0";
    mail.style.visibility = "hidden";
    mail.style.opacity = "0";
    mail.removeAttribute("required");
    mail.value = "";

    but.setAttribute("onclick", "newAccount()");

    but.textContent = 'Создать новую учетную запись';

    submit.textContent = 'Войти';
}
function checkInputs() {
    for (let elem of inputs) {
        //alert(elem.value);
        if (elem.value!=="") {
            elem.style.background = '#ffa343';
        }
        else {
            elem.style.background = '#dbdbdb';
        }
    }
}
var timer = setInterval(checkInputs, 1500);

$(function() {
  $('form').submit(function(){
     window.location = 'index.html';
     return false;
  });
});
