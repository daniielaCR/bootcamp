const express= require('express')
const dotenv = require('dotenv')
const colors = require('colors')

//vincular el archivo env
dotenv.config(
    {path: './config/.env'}
)
//contruir objeto
app=express()

//rutas de prueba
app.get('/prueba/:id', (request, response) =>{
    response.send(`hola, ${request.params.id}`)
})
//rutas de bootcamps
//endpoint
app.get('/bootcamps',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se mostraran los bootcamps`
    })
})
app.listen( process.env.PUERTO , () => {
    console.log(`Servidor en ejecucion ${process.env.PUERTO}`.bgYellow.green )
})


//traer bootcamp
app.get('/bootcamps/:id',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se mostraran los bootcamps cuyo id es ${req.params.id}`
    })
})

//crear un bootcamp
app.post('/bootcamps',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se creara un bootcamp`
    })
})

//editara bootcamp
app.put('/bootcamps/:id',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se editara los bootcamps cuyo id es ${req.params.id}`
    })
})

//borrar bootcamp
app.put('/bootcamps/:id',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se borrara los bootcamps cuyo id es ${req.params.id}`
    })
})
//_______________________________________________________________________________________________________

//USERS


//traer todos los usuarios
app.get('/users',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se mostraran todos los usuarios`
    })
})


//traer bootcamp
app.get('/usuers/:id',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se mostraran los usuarios cuyo id es ${req.params.id}`
    })
})

//crear un bootcamp
app.post('/users',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se creara un usuario`
    })
})

//editara bootcamp
app.put('/users/:id',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se editara los usuarios cuyo id es ${req.params.id}`
    })
})

//borrar usurio
app.delete('/users/:id',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se borrara los usuarios cuyo id es ${req.params.id}`
    })
})

//_____________________________________________________________

//REVIEWS

//traer todos los REVIEWS
app.get('/reviews',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se mostraran todos los reviews`
    })
})


//traer reviews
app.get('/reviews/:id',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se mostraran losreviews cuyo id es ${req.params.id}`
    })
})

//crear un reviews
app.post('/reviews',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se creara unreviews`
    })
})

//editara reviews
app.put('/reviews/:id',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se editara los reviews cuyo id es ${req.params.id}`
    })
})

//borrar reviews
app.delete('/reviews/:id',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se borrara los reviews cuyo id es ${req.params.id}`
    })
})

//______________________________________________________________________________________________________

//courses

//traer todos los courses
app.get('/courses',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se mostraran todos los courses`
    })
})


//traer courses
app.get('/courses/:id',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se mostraran los courses cuyo id es ${req.params.id}`
    })
})

//crear un courses
app.post('/courses',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se creara un courses`
    })
})

//editara courses
app.put('/courses/:id',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se editara los courses cuyo id es ${req.params.id}`
    })
})

//borrar courses
app.delete('/courses/:id',(req, res) => {
    res.json({
        sucess: true,
        msg:`aqui se borrara los courses cuyo id es ${req.params.id}`
    })
})
