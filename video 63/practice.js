let a = [1,2,3,4,5,6,7,8,9,10]
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

// a.forEach((value , index,arr) => {
//     console.log(value,index,arr)
// });

// let object ={
//     a:1,
//     b:2,
//     c:3
// }

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(key,element)
//     }
// }

// Especially For Arrays Forof

for (const iterator of a) {
    console.log(iterator)
}