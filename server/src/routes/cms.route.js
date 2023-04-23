const express = require("express")
const router = express.Router()

router.get("/", (_, res) => {
    res.status(200).send("Server is up and running")
})

router.use("/users", require("./user.route"))

router.get("*", (_, res) => {
    res.status(404).send("404 Not Found!")
})

module.exports = router