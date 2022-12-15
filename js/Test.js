var EMAIL = "admin@admin.com"
var PASSWORD = "Woehrl4100"

var data = JSON.stringify({
    username: EMAIL,
    password: PASSWORD
})

var encoded_data = encodeURI(data)
console.log(encoded_data)

// Base64 encode the String
var encoded_data = btoa(data)
console.log(encoded_data)


// Base64 decode the String
var decodedString = atob(encoded_data);
console.log(decodedString)