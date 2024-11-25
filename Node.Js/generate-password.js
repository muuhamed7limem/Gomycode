const generate_password = require("generate-password")

const password = generate_password.generate({
    length : 12,
    numbers : true,
    uppercase : true,
    lowercase : true,
    symbols : true,
})

console.log(`Generated Password : ${password}`)