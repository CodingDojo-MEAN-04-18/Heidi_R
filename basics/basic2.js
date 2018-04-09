function magic_multiply(x, y){
    switch(x,y){
        case x.constructor === Array:
            console.log("isarray");
            break;
        case x.constructor != Array:
            console.log("nope")
            console.log(x,y)
    }
}
let test1 = magic_multiply([1, 2, 3], 2);
console.log("test1", test1)