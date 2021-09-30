class BMI {
    //Adding constructor to class BMI
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    //creating the method
    calculateBMI() {

        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }
}

//creating an instance
let myBMI = new BMI(1.79,80);
//invoke method
let calculatedBMI = myBMI.calculateBMI();
console.log(calculatedBMI);