const express = require("express");
const app = express();
const PORT = 3000;


app.set("view engine", "ejs");


app.use(express.static("public"));


const checkWorkingHours = (req, res, next) => {
    const now = new Date();
    const day = now.getDay(); 
    const hour = now.getHours();

    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next();
    } else {
        res.send("Sorry, the web application is only available Monday to Friday, from 9 AM to 5 PM.");
    }
};

app.use(checkWorkingHours);


app.get("/", (req, res) => {
    res.render("layout", { 
        title: "Home", 
        body: "home" 
    });
});

app.get("/services", (req, res) => {
    res.render("layout", { 
        title: "Our Services", 
        body: "services" 
    });
});

app.get("/contact", (req, res) => {
    res.render("layout", { 
        title: "Contact Us", 
        body: "contact"  
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
