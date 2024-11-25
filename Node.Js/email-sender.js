const node_email = require("nodemailer")

const transporter = node_email.createTransport({

    service : "gmail",
    auth : {
        user : "muuhamed@gmail.com",
        pass : "******************",
    }
})


const mailOptions = {
    from: 'muuhamed@gmail.com', // Replace with your email
    to: 'muuhamed@gmail.com',   // Replace with your email
    subject: 'Test Email from Node.js',
    text: 'Hello, this is a test email from Node.js!',
};

transporter.sendMail(mailOptions, (err,info) => {

    if(err){
        console.error("Error : ", err)
    } else{
        console.log("Email sent succefully : ", info.response)
    }

    
})