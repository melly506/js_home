'use strict'
let login = prompt('хто ти');
let message = (login == 'Працівник') ? 'Привіт' :
(login == 'Директор') ? 'Вітаю' :
(login == '') ? 'Немає логіну' :
  '';
alert(message);