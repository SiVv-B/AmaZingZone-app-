import express from 'express'
import data from './data.js '
const app = express ()


app.get("/api/products",(req, res)=>{
    res.send(data.products)
})
app.get("/api/products/slug/:slug",(req, res)=>{
    const product = data.products.find(x=> x.slug ===req.params.slug)
    if(product) {
        console.log("product page displayed")
        res.send(product)
    } else {
        res.status(404).send({message: "product not found"})
    }
})
app.get("/api/products/:id",(req, res)=>{
    const product = data.products.find(x=> x._id ===req.params.id)
    if(product) {
        console.log("product found by id")
        res.send(product)
    } else {
        res.status(404).send({message: "product not found"})
    }
})

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`server listening to port ${port}`)
})