"use strict";

const start= document.querySelector(".task1-go");

const Account = function({login ='777ВАСЯН777', email='777vasyan777@kg.am' } = obj){
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function(){
  return  console.log(`login: ${this.login},  email: ${this.email}`);
};





const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

 // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});


const test = new Account({

});


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

start.addEventListener('click', ()=>{
  console.clear();
  console.log(Account.prototype.getInfo); // function
  mango.getInfo();
  poly.getInfo();
  test.getInfo();
});