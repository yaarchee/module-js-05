"use strict";


const start= document.querySelector(".task3-go");

class Storage {
  constructor(arr) {
    this._items = arr;
  }

  get items(){
    return this._items;
  }
  addItem(name){
    this._items.includes(name) ? console.log(`Товар '${name}' уже есть`): this._items.push(name);
  }

  removeItem(name){
    this._items = this._items.filter(item => item !== name);
  }

}


const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);




start.addEventListener('click', ()=>{
  console.clear();
  console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  storage.addItem('Нанитоиды');
  storage.addItem('Дроид');
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
});