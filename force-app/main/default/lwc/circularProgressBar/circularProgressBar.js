import { LightningElement, api } from 'lwc';

export default class CircularProgressBar extends LightningElement {
    @api percentage;
    @api theme;
    @api size;
    @api legend;

    get containerClass() {
        return (this.percentage / 100) * 360 > 179
            ? `container p50plus ${this.theme} medium`
            : `container ${this.theme} medium`;
    }

    get rotationStyle() {
        return `-webkit-transform: rotate( ${(this.percentage / 100) *
            360}deg); -moz-transform: rotate(${(this.percentage / 100) *
            360}deg); -ms-transform: rotate(${(this.percentage / 100) *
            360}deg); -o-transform: rotate(${(this.percentage / 100) *
            360}deg); transform: rotate(${(this.percentage / 100) *
            360}deg); -ms-transform: rotate(${(this.percentage / 100) *
            360}deg);`;
    }
}
