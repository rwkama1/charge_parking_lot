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
module.exports={Parking_Lot}