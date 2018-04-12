class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    SayName(){
        console.log("Ninja Name Is: " +this.name);
    }
    ShowStats(){
        console.log(this.name+"'s Health is "+this.health+", Speed is "+ this.speed+" strength is "+ this.strength);
    }
    DrinkSake(){
        this.health = this.health + 10;
        console.log(this.name + " Drank Sake and gained 10 Health! Health is now: " + this.health);
    }
}
class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.wisdom = 10;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }
    SpeakWisdom(){
        super.DrinkSake()
        console.log("Wise Message")
    }
}
///x = new Ninja("Johnathan")
///x.DrinkSake()
const superSensei = new Sensei("Master Splinter");
superSensei.SpeakWisdom();
superSensei.ShowStats();