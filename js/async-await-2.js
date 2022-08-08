async function sandy(){
    console.warn("4 inside sandy function")
    const response = await fetch('https://api.github.com/users')
    console.warn("5 after response")
    console.log(response)
    const user = await response.json()
    console.log(user)
    console.warn('6 after covert to json')
    return user
}

console.log("1 before calling sandy func")
let details = sandy();
console.log("2 after calling sandy func")
console.log(details)
details.then((details)=>{console.log(details)})
console.error("3 last line of the file")
