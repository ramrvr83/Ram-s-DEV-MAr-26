import { LightningElement, wire } from 'lwc';
import getGreetingMessage from '@salesforce/apex/GreetingController.getGreetingMessage';

export default class SimpleGreeting extends LightningElement {

    message;

    @wire(getGreetingMessage)
    wiredMessage({ data, error }) {
        if (data) {
            this.message = data;
        } else if (error) {
            this.message = 'Error fetching message';
            console.error(error);
        }
    }
}