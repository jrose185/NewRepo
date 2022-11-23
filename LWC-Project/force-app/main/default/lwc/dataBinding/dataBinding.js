import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {

    myName ='Bora';
    age = 20;

    dynamicBinding='Test';
    //2.create property .DONT FORGET PROPERTY ON TOP LIKE COUNTRY
    country;
    clickedButtonLabel
    handleInput(event){
    //event HOLDS the data that comes from input elemets
    //event detail.value equals the user input value
    // this is ued to acces the JS properties .In Salesforce we should say this.
    // We assign the user Input Va;ue to dynamicBinding

    this.dynamicBinding=event.target.value

    }
   // assign user input to country
   // 4. assign user input to country property
    handleInputChange(event){

    this.country = event.target.value;    
    }
    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }
   }