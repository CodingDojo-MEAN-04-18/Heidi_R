function Ninja(name){
    const self = this;
    ///"this" problem workaround for functions to call self ^^^
    this.name = name;
    this.health = 100;///default
    const speed = 3;
    const strength = 3;
    ///declaring variables ^^^
    Ninja.prototype.sayName  = function(){///returns Ninja Name
        console.log("My Ninja Name Is ",self.name, "!")
        return this;
    }
    Ninja.prototype.ShowStats = function(){///displays Ninja Stats
        console.log("name: ", self.name," strength: ", strength, " Speed: ", speed, " Health: ", self.health)
        return this;
    }
    Ninja.prototype.drinkSake = function(){///Increases health by 10
        this.health = this.health + 10
        console.log(this.name, "drank sake and gained 10 health, new health is:",this.health)
        return this;
    }
    Ninja.prototype.punch = function(ninja){///decreases health by 5
        ninja.health = ninja.health - 5
        console.log(ninja.name, "punched by", this.name, "and lost 5 health")
        return this;
    }
    Ninja.prototype.kick = function(ninja){///loses 15 health for every point of strength "kicker" has
        const x = 15 * strength
        console.log(ninja.name, "was kicked by", this.name, "and lost", x, "Health")
        return this;
    }
}
///const Brian = new Ninja("Brian")
////Brian.sayName();
///Brian.showstats();
///Brian.drinksake();

const blueNinja = new Ninja("Brian");
const redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);

///blueNinja.kick(redNinja);

///var auto = new Ninja();
///console.log(auto instanceof Ninja)