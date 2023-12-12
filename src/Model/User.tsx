class User{
    constructor(
        private name:string,
        private gender:string,
        private phoneNumber:string,
        private email:string,
        private password?:string,
        private role?:string,private id?:number){

    }
    set Name(value:string){this.name=value;}
    get Name(){return this.name;}
    set Gender(value:string){this.gender=value;}
    get Gender(){return this.gender;}
    set PhoneNumber(value:string){this.phoneNumber=value;}
    get PhoneNumber(){return this.phoneNumber;}
    set Email(value:string){this.email=value;}
    get Email(){return this.email;}
    set Password(value:string){this.password=value;}
    get Password():string|undefined{return this.password;}
    set Role(value:string){this.role=value;}
    get Role():string|undefined{return this.role;}
    set Id(value:number){this.id=value;}
    get Id():number|undefined{return this.id;}
}