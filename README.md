# Parking Lot

## Description

Calculate how much customers should be charged for the use of parking.
The rates that are had are the following:
The first two hours at USD 0.25 each.
The next three at USD 0.20 each.
The next five at USD 0.15 each.
After ten hours the cost for each one is USD 0.10

## Solution

```Javascript

class Parking_Lot
{
    constructor(phours)
    {
        this.hours=phours;
    }
    calculate_charge_use=()=>
    {
       let total=0;
       if(this.hours<=2)
       {
           total=this.hours*.25;
       }
       else
       {
           if(this.hours<=5)
           {
               total=((this.hours-2)*.20)+.50;
           }
           else
           {
               if(this.hours<=10)
               {
                total=((this.hours-5)*.15)+1.10;
               }
               else{
                total=((this.hours-10)*.10)+1.85;  
               }
           }
       }
       return total;
    }
}

```
## Usage

```Javascript

 let Parking_Lot=require("./Parking_Lot").Parking_Lot;
 let parking=new Parking_Lot(12);
 let total=parking.calculate_charge_use();
 console.log("The total to pay for "+parking.hours+" hours is: USD "+ total);


```