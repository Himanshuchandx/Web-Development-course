let arr = [1,2,3,4,5,6,7,8,9,10]
let newarr = arr.map((e)=>{
    return e**2
})
const Greater_than_25 = (e)=>{
    if (e>25){
        return true
    }
    return false
}
console.log(newarr)
console.log("Here are the number that you want"+newarr.filter(Greater_than_25))
console.log(Array.from("Code with harry"))