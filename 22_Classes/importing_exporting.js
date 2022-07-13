class Employees{

    constructor(Name,Year_of_joining,Domain){
        this.name=Name;
        this.yearfrom=Year_of_joining;
        this.field=Domain;
    }

    // Company is here method which is accessing class property!
    Company(){
        return `we are the company originated in Uream and ${this.name} and ${this.yearfrom} with domain specific ${this.field}`
    }


    Working_Experince(){
        return 2022-this.yearfrom     
    }


    // This is a static method which doesn't take any property of class but storred in class which can be called idrectyly by obj.static.

    static additn(a,b){
        return a*b;
    }

}


export default class DataScientists extends Employees{
    constructor(Name,Year_of_joining,Domain,Software_using){
        super(Name,Year_of_joining,Domain);
        this.paid_software_used=Software_using;

    }
    showing(){
        return `This is the employee name :-${this.name} who is working from year ${this.yearfrom} and is currntlyworkingas ${this.field} wiht ${this.paid_software_used} as paid software  `;
    }
}