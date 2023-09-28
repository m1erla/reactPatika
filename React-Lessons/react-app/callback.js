import fetch from "node-fetch"
import axios from "axios"

setTimeout(() => {
    console.log("Hello Emily Jean Stone")
}, 5000)

setInterval(() => {
    console.log("This log is will be working every second")
}, 1000)

const sayHello = (cb) =>{
    cb()
}

sayHello(() => {
    console.log("Hello")
})


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) => { console.log("Users loaded", users)

//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((data) => data.json())
//   .then((post) => console.log("Post Loaded", post))
// })

// async function getData(){
//     const data = await( await fetch("https://jsonplaceholder.typicode.com/users")).json()

//     console.log(data)

//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json()
//     console.log(post1)

//     const post2 = await( await fetch("https://jsonplaceholder.typicode.com/posts/3")).json()

//     console.log(post2)
 
// }
// getData()

// (async () => {
//     const {data: users} = await axios("https://jsonplaceholder.typicode.com/users")

//     const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1")

//     const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2")

//     console.log("Users: " ,users)
//     console.log("Post1: ",post1)
//     console.log("Post2" ,post2)
// })()


// Anonim function
// (async () => {
//     console.log("Hello Emily")
// })()

const getUsers = () => {
    return new Promise(async (resolve, reject) => {

    
        const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1")

        resolve(post1)
   
        
    })
}

const getPost = (post_id) =>{
    return new Promise(async(resolve, reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id)

        resolve(data)
        // reject("Something wrong!")
    })
}

const getComments = (number) => {
    return new Promise((resolve, reject) => {
        if(number === 1){
        resolve({text: "Hi!"})
    }
    reject("There is a problem!")
    })
}

(async () => {
   await getUsers()
    .then((data) => console.log(data))
    .catch((e) => console.log(e))
    
    await getPost(1)
    .then((data) => console.log(data))
    .catch((e) => console.log(e))
    
})()

(async () => {
    try{
        const user = await getUsers()

        const post = await getPost(1)
     
        console.log("User: " ,user)
     
        console.log("Post: " ,post)
    }catch(e){
     console.log(e)
    }
  

})()

Promise.all([getPost(1), getUsers()]).then(console.log).catch(console.log)

