import express from 'express';
const app = express();
const Students = [
    "Areej",
    "ibrahim",
    "saad",
    "saad",
    "ibrahim",
    "Areej",
]
const Studentlist = (req, res) => {
    let output = "<ul>"
    for (let i = 0; i < Students.length; i++) {
        output += "<li>" + Students[i] + "</li>";
    }
    output += "</ul>"
    res.send(output)
}
app.get("/students", Studentlist)
app.listen(5000)
