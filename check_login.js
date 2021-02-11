"use strict"
alert("Начало");
let login=promt("Input your login");
let password;
if(login="Admin"){
    password=promt("input password");
        if(password="Я главный"){
            alert("Здравствуйте");
        } else if(password == '' || password == null){
            alert("Отменено")
        } else{
            alert("Неверный пароль")
        }
}else if(login == '' || login == null){
    alert("отменено")
}else{
    alert("Я вас не знаю")
}
