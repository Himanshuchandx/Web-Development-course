console.log("Welcome To Our Project Faulty Calculator")
if (Math.random()<0.1) {
    function sum(a,b) {
        return a-b
    }
    function multiply(a,b) {
        return a+b
    }
    function sub(a,b) {
        return a/b
    }
    function divide(a,b) {
        return a*b
    }
}
else{
    function sum(a,b) {
        return a+b
    }
    function multiply(a,b) {
        return a*b
    }
    function sub(a,b) {
        return a-b
    }
    function divide(a,b) {
        return a/b
    }
}
let a = sum(2,3)
let b = multiply(5,2)
let c = sub(7,3)
let d = divide(6,2)

console.log("Your output is " + a)
console.log("Your output is " + b)
console.log("Your output is " + c)
console.log("Your output is " + d)