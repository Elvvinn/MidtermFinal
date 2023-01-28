const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors())
app.use(bodyParser.json())




const { Schema } = mongoose;

const Schemanew = new Schema({
    imageUrl: { type: String },
    name: { type: String },
    price: { type: Number }
})


const products = mongoose.model("midproducts", Schemanew)



app.get("/products", (req, res) => {
    products.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(404)
        }
    })
})

app.get("/products/:id", (req, res) => {
    const { id } = req.params
    products.findById(id, (err, doc) => {
        if (!err) {
            if (doc) {
                res.send(doc)
            }
        }
        else {
            res.status(404)
        }
    })
})

app.delete("/products/:id", (req, res) => {
    const { id } = req.params
    products.findByIdAndDelete(id, (err, doc) => {
        if (!err) {
            res.send({ message: "Succesfully deleted this item" })
        }
        else {
            res.status(404)
        }
    })
})

app.post("/products", (req, res) => {

    let newproducts = new products({
        imageUrl: req.body.imageUrl,
        name: req.body.name,
        price: req.body.price
    })

    newproducts.save();
    res.send({ message: "Succesfully added items" })

})





app.get("/", (req, res) => {
    res.send("<h1>Port worked</h1>")
})




const PORT = process.env.PORT

const url = process.env.connection_url.replace(
    "<password>",
    process.env.PASSWORD
)

mongoose.set('strictQuery', false);
mongoose.connect(url, (err) => {
    if (!err) {
        console.log("MongoDb is connected")

        app.listen(PORT, () => {
            console.log("Server is running")
        })
    }
})