//setting types
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = 9;//cannot define a variable as a string then change its value to a number, either set myString to 'any' or convert the number to a string


//Setting the types for function parameters
function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 console.log(sayHello(9));//once again the variable was set to only have strings, so either set it to 'any' or convert the number to a string


 //Optional parameters
 function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 console.log(fullName("Jimbo", "Jones"));//very simple, put a uestioni mark after the parameter to make it optional(middleName?:)


 // Interfaces and function parameters
 interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belt: 4
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));//typo error for jay: needs to be belts


// Classes and function parameters
 class Ninja {
    fullName: String
    firstName: String
    lastName: String
    constructor(){
        this.fullName = '${firstName} ${lastName}';
    }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 const shane = new Ninja;
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
 }
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(Ninja){
    return `Ready to whiteboard an algorithm, ${Ninja.fullName}?`
 }
 // Now this has problems:
 console.log(study(turing));//solved by defining the fullname in parameters and study() parameters are ninja.


 //Arrow Functions
 var x; //defined x and y
 var y;
 var increment = x => x + 1;
 // This works great:
 console.log(increment(3));
 var square = x => {x * x};
 // This is not showing me what I want:
 console.log(square(4));
 // This is not working:
 var multiply = (x,y) => {x * y};
 // Nor is this working:
 var math = (x, y) => {var sum = x + y;//added {}
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference]};//need to define x

//Arrow Functions and 'this'
    class Elephant {
        constructor(public age: number){}
        birthday = age =>{//solved?
            this.age++;
        }
           
     }
     const babar = new Elephant(8);
     setTimeout(babar.birthday, 1000)
     setTimeout(function(){
        console.log(`Babar's age is ${babar.age}.`)
        }, 2000)
     // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.