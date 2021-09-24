const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.write("<h1>This is Home 1 Page</h1>");
    res.write("<h1>This is Home Page</h1>");
    res.send();
});
app.get("/about", (req, res) => {
    res.send("This is About Page");
});
app.get("/contact", (req, res) => {
    res.status(200).send("This is Contact Page");
});
app.get("/temp", (req, res) => {
    res.send([
        {
        id: 1,
        name: "Amit",
        },
        {
            id: 2,
            name: "Kumar",
            }
    ]);
    // res.json({
    //     id: 2,
    //     name: "Kumar",
    // });
    // The methods are identical when an object or array is passed, but res.json() will
    // also convert non-objects, such as null and undefined , which are not valid JSON.

});

app.listen(8000, () => {
    console.log("listening to port 8000");
});