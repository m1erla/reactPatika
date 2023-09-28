const users = ["Emma Stone", "Furkan Karakus", "Tom Hardy"]

/*
push,
map,
find,
filter,
some,
every,
includes
*/


// users.push("Jennifer")

// users.push("Ryan")

// console.log(users)


const array = [
    {
        name: "Furkan",
        age: 23
    },
    {
        name: "Emma",
        age: 32
    }
]


// for(let i = 0; i < users.length; i++){
//     console.log(users[i])
// }


// map
array.map((item) => {
    console.log(item.name)
})


// find
const find = array.find((item) => item.name === "Furkan" && item.age > 15)
console.log(find)

// filter
const filter = array.filter(({name, age}) => name === "Furkan" && age >15)

console.log(filter)

// some

const some = array.some((item) => item.age === 25)
console.log("some: ", some)

// every
const every = array.every((item) => item.age >= 15)
console.log("every",every)

// includes
const fruits = ['apple', 'banana', 'pineapple']
const isIncluded = fruits.includes('apple')


console.log("include: ",include)