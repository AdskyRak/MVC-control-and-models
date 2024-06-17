export class Model {
    #control_name;  // Название контроллера (приватное поле)
    #description;   // Описание модели (приватное поле)

    // Конструктор класса Model
    constructor(control_name, description) {
        this.#control_name = control_name;
        this.#description = description;
        this.data = {};
        this.subscribers = [];
    }

    // Геттер-функция для получения значения приватного поля control_name
    get_control_name() {
        console.log(`control_name: ${this.#control_name}`);
    }

    // Геттер-функция для получения значения приватного поля description
    get_description() {
        console.log(`description: ${this.#description}`);
    }

    // Реализация механик действий при нажатии кнопки X
    action_X() {
        console.log("Action X executed");
        this.data.state = 'X';
        this.notify({ type: 'ACTION_X', payload: this.data });
    }

    // Реализация механик действий при нажатии кнопки Y
    action_Y() {
        console.log("Action Y executed");
        this.data.state = 'Y';
        this.notify({ type: 'ACTION_Y', payload: this.data });
    }

    // Связь экземпляра класса Model и события от экземпляра класса Control
    subscribe(callback) {
        this.subscribers.push(callback);
    }

    // Уведомление обо всех событиях, привязанных к экземпляру класса Model
    notify(event) {
        this.subscribers.forEach(callback => callback(event));
    }
}