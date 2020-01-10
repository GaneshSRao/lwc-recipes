import { LightningElement, api } from 'lwc';

export default class CircularProgressBar extends LightningElement {
    @api percentage;
    @api size;
    @api legend;
}
