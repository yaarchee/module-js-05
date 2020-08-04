"use strict";

const start= document.querySelector(".task5-go");

class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */

  static getSpecs( objCar){
    return console.log(JSON.stringify(objCar));
  }

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
  constructor( maxSpeed, price) {
    this._speed = 0;
    this._price = price;
    this._maxSpeed = maxSpeed;
    this._isOn = false;
    this._distance = 0;
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */

  get price(){
    return this._price;
  }

  set price(newPrice){
    this._price = newPrice;
  }



  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    this._isOn = true;
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
    this._isOn = false;
    this._speed = 0;
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    if((value+this._speed)<this._maxSpeed){
      this._speed += value;
    }
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    if((this._speed-value)>0){
      this._speed -= value;
    }
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    this._isOn ? console.log(`пройдена дистанция ${this._distance+=hours*this._speed}`) : console.log(`машина не заведена`);
  }
}

class TeslaCar extends Car{
    constructor( { maxSpeed = 0, price = 0,  name= 'Ракета'} = obj) {
    super(maxSpeed, price);
      this._name = name;

  }
}


const mustang = new TeslaCar({ maxSpeed: 200, price: 2000, name: "Газель" });

start.addEventListener('click', ()=>{

  console.clear();
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);

  Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();

  Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000
});

