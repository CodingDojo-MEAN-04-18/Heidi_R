var myNum: number = 5;
let myString: string = "Hello Universe";
var myArr: Array<number> = [1,2,3,4];
class myObj {[key: string]: (string | number)} = {name: 'Bill'};
var anythingVariable: any = "Hey";
anythingVariable = 25; 
var arrayOne: Array <boolean> = [true, false, true, true]; 
var arrayTwo: any =  [1, 'abc', true, 2];
let newobj = new myObj({ x: 5, y: 10 });
class MyNode{
    constructor(val: Number){
        this.val = 0;
        this.val = val;
    }
    doSomething(){
        this._priv = 10
    }
    return MyNode;
}());
myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
	throw new Error('Error message');
}
