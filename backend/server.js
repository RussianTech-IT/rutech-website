const express = require('express')
const app = express()
const PORT = 5000
const jsonPosts = require("./database/posts.json")

// security send requiests header CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

// admin panel
app.get('/api', (req, res) => {
    res.json("You inside API")
})

app.get("/api/posts", (req, res) => {
    res.json(jsonPosts)
})

app.listen(PORT, () => { console.log("Server started in http://localhost:5000") })