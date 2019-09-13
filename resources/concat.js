// Concat vs. push example
let a = [1, 2, 3]
a.push(4)
console.log(a)

let b = [4, 5]
const c = a.concat(b)
console.log(a)
console.log(b)
console.log(c)
