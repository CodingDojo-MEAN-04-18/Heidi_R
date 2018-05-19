class Bike {
    price: Number
    max_speed: String
    miles : any
    constructor(price, speed,miles?) {
        this.miles = 0;
        this.price = price;
        this.max_speed = speed;
    }
    displayInfo(){
        console.log(this.price, this.max_speed, this.miles)
        return this
    }
    ride(){
        console.log("riding...")
        this.miles = this.miles + 10
        return this
    }
    reverse() {
        if (this.miles == 0) {
            console.log("cannot reverse below 0")
            this.miles = 0
            return this.miles
        }
        else {
        console.log("reversing")
            this.miles = this.miles - 10
            if (this.miles < 0) {
                console.log("reversing set to 0")
                this.miles = 0
            }
            return this
        }

    }
}
let bike1 = new Bike(200, "250mph")
let bike2 = new Bike(250, "300mph")
let bike3 = new Bike(100, "20mph")
bike1.ride().ride().ride().reverse().displayInfo()
bike2.ride().ride().reverse().reverse()
bike3.reverse().reverse().reverse().displayInfo()
console.log(bike1.max_speed)