const express = require("express");

function objToString(obj) {
    let str = '';
    for (const [p, val] of Object.entries(obj)) {
        str += `${p}::${val}\n`;
    }
    return str;
}

const app = express();

app.get("/", (req, res) => {
    res.send(objToString(req));
});

app.listen(5000, () => {
    console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;