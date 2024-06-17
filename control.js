export class Control {
    model;  // Название модели

    // Конструктор класса Control
    constructor(model) {
        this.model = model;
    }

    // Имитация внешнего события, вызывающего действие при нажатии кнопки X
    trigger_Action_X() {
        this.model.action_X();
    }

    // Имитация внешнего события, вызывающего действие при нажатии кнопки Y
    trigger_Action_Y() {
        this.model.action_Y();
    }
}