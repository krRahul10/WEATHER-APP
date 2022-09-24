const express = require('express')

const app = express()

const PORT = 5000

app.get("/", (req,res) => {
    res.send("welcome to home page")
})

app.get("/about", (req,res) => {
    res.send("welcome to about page")
})

app.get("/weather", (req,res) => {
    res.send("welcome to weather page")
})

app.get("*", (req,res) => {
    res.send("404 error page ")
})

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})