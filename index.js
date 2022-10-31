const express = require("express");

function convertToText(obj) {
    var string = [];
    if (typeof (obj) == "object" && (obj.join == undefined)) {
        string.push("{");
        for (prop in obj) {
            string.push(prop, ": ", convertToText(obj[prop]), ",");
        };
        string.push("}");

    } else if (typeof (obj) == "object" && !(obj.join == undefined)) {
        string.push("[")
        for (prop in obj) {
            string.push(convertToText(obj[prop]), ",");
        }
        string.push("]")

        //is function
    } else if (typeof (obj) == "function") {
        string.push(obj.toString())

        //all other values can be done with JSON.stringify
    } else {
        string.push(JSON.stringify(obj))
    }

    return string.join("")
}

const app = express();

app.get("/", (req, res) => {
    res.send(convertToText(req));
});

app.listen(5000, () => {
    console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;