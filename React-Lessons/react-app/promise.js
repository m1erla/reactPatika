
import axios from "axios"

function restaurants (restaurant) {
    const restaurants= ["beyzade", "inonout"]

   setTimeout(() => {
    console.log("Choice a restaurant you want to go :")
   }, 2000)
}


function getToken(token) {
    const token = '1243';
    setTimeout(() => {
        if(!token){
            console.log("It has been not found any token!"); 
        }else{
            console.log("login...");
            console.log(`${username} ${token} ${password}`);
        }
    }, 2000)
}

const getRestaurants = (restaurant) => {
    return new Promise((resolve, reject) => {
        if(restaurant === 'Beyzade'){
            resolve("Welcome to the Beyzade Kebap")
        }
        reject("There is no found any restaurant in here!")
    })
} 

function login(username, password) {
    setTimeout(() => {
        if("furkan", "emmastone"){
           
        }
    })
}


function callback() {
   setTimeout(() => {

   })

}

