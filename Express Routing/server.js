const express = require("express");
const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set("view engine", "ejs");

// Serve static files (CSS)
app.use(express.static("public"));

// Middleware to verify working hours
const checkWorkingHours = (req, res, next) => {
    const now = new Date();
    const day = now.getDay(); // 0 (Sunday) to 6 (Saturday)
    const hour = now.getHours();

    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next();
    } else {
        res.send("Sorry, the web application is only available Monday to Friday, from 9 AM to 5 PM.");
    }
};

app.use(checkWorkingHours);

// Define routes
app.get("/", (req, res) => {
    res.render("layout", { 
        title: "Home", 
        body: "home"  // Path to the home partial
    });
});

app.get("/services", (req, res) => {
    res.render("layout", { 
        title: "Our Services", 
        body: "services" // Path to the services partial
    });
});

app.get("/contact", (req, res) => {
    res.render("layout", { 
        title: "Contact Us", 
        body: "contact"  // Path to the contact partial
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
