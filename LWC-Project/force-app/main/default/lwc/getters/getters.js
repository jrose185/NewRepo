import { LightningElement } from 'lwc';
export default class Getters extends LightningElement {
    num1=10;
    num2=20;

     friendList =['nino','ayb','nil'];

     // creating getters to read the sum of the numbers
     get sumOfNumbers(){
        return this.num1+this.num2;
     }
     //creating getter to read the only the first person .get(0)

     get myBestFriend(){

     return this.friendList[0].toUpperCase();
     }
     
     //creating 2 prperties to hold 2 user inputs
      num3;
      num4;
      // to handle first input field (value)
      // the responsibility is assing uset input to the num3 property
      handleNum1(event){

      this.num3=event.target.value;


     }
     //to handle the second field
     //the responsibility is assign second user input to the num3 property
       
     handleNum2(event){

     this.num4=event.target.value; 
      }

     //using getter to calculate the sum of the 2 numbers
     get sumOfNums(){

      return parseInt(this.num3)+parseInt(this.num4);


     }
      // getting the difference
      get differenceOfNums(){
        return parseInt(this.num3) - parseInt(this.num4);
      }
     
      get divisionOfNums(){
        return parseInt(this.num3) / parseInt(this.num4);

      }
      get multiplicationOfNums(){
        return parseInt(this.num3) * parseInt(this.num4);

      }

     }
