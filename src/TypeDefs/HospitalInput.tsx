class HospitalInput{
    constructor(private id?:number,
        private  name?:string,
        private locationId?:string){}
    setId(value:number|undefined){this.id=value;}
    setName(value:string|undefined){this.name=value;}
    setLocationId(value:string|undefined){this.locationId=value;}
    getId(){return this.id}
    getName(){return this.name;}
    getLocationId(){return this.locationId;}
}