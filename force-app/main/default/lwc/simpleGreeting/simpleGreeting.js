import { LightningElement } from 'lwc';

export default class SimpleGreeting extends LightningElement {

    message = 'Hello, welcome to Lightning Web Components!';

    handleClick() {
        this.message = 'You clicked the button 🎉';
    }
}