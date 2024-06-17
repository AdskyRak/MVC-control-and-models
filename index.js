import {Model} from "./model.js";   // Импорт класса Model из файла model.js
import {Control} from "./control.js";   // Импорт класса Control из файла control.js

const model = new Model();  // Экземпляр класса Model

// Связка экземпляра класса Model и события
model.subscribe(event => {
    console.log("Model change event received:", event);
});

const control = new Control(model); // Экземпляр класса Control

control.trigger_Action_X(); // Триггер при нажатии кнопки X
control.trigger_Action_Y(); // Триггер при нажатии кнопки Y