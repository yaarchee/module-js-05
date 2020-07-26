"use strict";

const start= document.querySelector(".task2-go");

class User {
    constructor({name = "Name", age = 0, followers = 0} = obj) {
      this.name = name;
      this.age = age;
      this.followers = followers;
    }

    get info(){
      return  console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
}

const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

 // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

// User Poly is 3 years old and has 17 followers

const test = new User({
  name: 'test',
});



start.addEventListener('click',()=>{
  console.clear();
  mango.info;
  poly.info;
  test.info;
});

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */


