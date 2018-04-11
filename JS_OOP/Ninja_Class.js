function Ninja(name){
    const self = this;
    ///"this" problem workaround for functions to call self ^^^
    this.name = name;
    this.health = 100;///default
    const speed = 3;
    const strength = 3;
    ///declaring variables ^^^
    this.sayName = function(){
        console.log("My Ninja Name Is ",self.name, "!")
        return this;
    }
    this.showstats = function(){
        console.log("name: ", self.name," strength: ", strength, " Speed: ", speed, " Health: ", self.health)
        return this;
    }
    this.drinksake = function(){
        this.health = this.health + 10
        console.log(this.name, "drank sake and gained 10 health, new health is:",this.health)
        return this;
    }
}
const Brian = new Ninja("Brian")
Brian.sayName();
Brian.showstats();
Brian.drinksake();