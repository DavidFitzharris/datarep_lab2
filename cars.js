class Vehicle {
    
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

// let myVehicle = new Vehicle('Ford', 'Silver', '2001');
// let info = myVehicle.Information();

class Cars extends Vehicle {
    constructor(make, model, year, doors){
        //Parent class constructor
        super(make, model, year);
        this.doors = doors;
    }

    Information(){
        //takes in the parent constructor and adds doors
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}

let myCar = new Cars('Mazda', '6', 2014, 5);
myCar.Information();