var myNum: number = 5;
let myString: string = "Hello Universe";
var myArr: Array<number> = [1,2,3,4];
let myObj: {[key: string]: (string | number)} = {name: 'Bill'};
var anythingVariable: any = "Hey";
anythingVariable = 25; 
const arrayOne: boolean[] = [true, false, true, true]; 
const arrayTwo: (number|string|boolean)[] = [1,'abc',true,2];
myObj = { x: 5, y: 10 };
class MyNode{
    private _priv: number;
    constructor(public val: Number){}
    doSomething(){
        this._priv = 10
    }
};
const myNodeInstance: MyNode = new MyNode(1)
console.log(myNodeInstance.val);
function myFunction(): void{
    console.log("Hello World");
    return;
}
function sendingErrors(): never {
	throw new Error('Error message');
}
