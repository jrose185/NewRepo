import NumberOfFailedLogins from '@salesforce/schema/User.NumberOfFailedLogins';
import { LightningElement } from 'lwc';

export default class LoopsAndIteration extends LightningElement {

    cityList =['Dallas','New York', 'Houston','Istanbul'];
   
    customerList = [
        {
         id:1,
         name: "Jim Carrey",
         phone: "+999 888 77 66",
         email: "jim@carrey.com",
         imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVl6f7CWwdVCgb_bEHUT9ZuoY8wz50EET_dw&usqp=CAU"
         },
         {
          id:2,
          name: "Jack Bauer",
          phone: "+888 777 66 55",
          email: "jack@bauer.com",
          imgURL:
          "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
         },
         {
          id:3,
          name: "Chuck Norris",
          phone: "+777 666 55 44",
          email: "chuck@norris.com",
          imgURL:
          "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        },
        //adding another customer
        {
          id:4,
          name:"james fox",
          phone:"+150 256 36 98",
          email:"james@fox.com",
          imgURL:
          "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/6/28/0/FNK_Black-Magic-Cake_s4x3.jpg.rend.hgtvcom.616.462.suffix/1467180384813.jpeg"

        }



      ];    
      



  }

   

