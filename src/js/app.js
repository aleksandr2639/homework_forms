import Controller from './controller';
import Button from './button';

const button = new Button();
button.bindToDOM(document.querySelector('.container'))

const controller = new Controller(button);
controller.build();


