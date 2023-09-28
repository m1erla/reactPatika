let name = prompt("Please enter your name")

let tag = document.querySelector("#tag")

tag.innerHTML = `${tag.innerHTML} ${name}`