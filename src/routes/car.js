const express = require('express')
const car_routes = express.Router()

/*Crear una car*/
car_routes.post('/carro',(req,res)=>{})

/*Listar todas las car existentes */
car_routes.get('/carro',(req,res)=>{})

/* Consultar una car en especifico*/
car_routes.get('/carro:idCar',(req,res)=>{})

/*Actualizar una car en especifico*/
car_routes.put('/carro/:idCar',(req,res)=>{})

/*Eliminar una car en especifico*/
car_routes.delete('/carro/:idCar',(req,res)=>{})


module.exports = car_routes