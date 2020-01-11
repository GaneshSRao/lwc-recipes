import { LightningElement, track } from 'lwc';

export default class ApiPropertiesMultiple extends LightningElement {
    @track 
    percentage = 10;

    @track
    themeOptions = [
        { value: 'blue', label: 'Blue' },
        { value: 'green', label: 'Green' },
        { value: 'orange', label: 'Orange' },
        { value: 'red', label: 'Red' }
    ];

    @track
    themeValue = 'blue';

    handleThemeChange(event) {
        this.themeValue = event.target.value;
    }

    handlePercentageChange(event) {
        this.percentage = event.target.value;
    }
}
