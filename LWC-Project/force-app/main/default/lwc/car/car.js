   import { LightningElement } from 'lwc';

   export default class Car extends LightningElement {
  //property that holds input value
   engineType;
   handleEngineChange(event){
    //user entered value will be assigned to engineType property
   //user input means onchange=handlechange
    this.engineType=event.target.value
   }

 }