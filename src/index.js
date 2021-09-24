const express = require('express');
const path = require('path');
const app = express();

//Frequently used Functions
// get-read
// post-create
// put-update
// delete-delete

// app.get(route, callback);
//The callback function has 2 parameters ,request and response.
//The request object(req) represents the HTTP request and
//has properties for the request query string,parameters,body,
//HTTP headers,etc.

//Similarly, the response object represents the HTTP response
//that the Express app sends when it receives an HTTP request.


console.log(__dirname);
console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");
//To set the view engine
app.set('view engine', "hbs");


// app.use(express.static(staticPath));
//builtin middleware

//template engine route
app.get("", (req, res) => {
    res.render('index.hbs', {
        name:"Amit",
    });
});
app.get("/", (req, res) => {
    res.send("Hello Express!!");
});
app.get("/about", (req, res) => {
    res.send("Hello from about Page!!");
});
app.get("*", (req, res) => {
    res.send("Error 404");
})
app.listen(8000, () => {
    console.log("listening port at 8000");
});