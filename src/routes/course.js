const express = require('express')
const course_routes = express.Router()

/*Crear una persona*/
course_routes.post('/',(req,res)=>{})

/*Listar todas las personas existentes */
course_routes.get('/',(req,res)=>{})

/* Consultar una persona en especifico*/
course_routes.get('/:idCourse',(req,res)=>{})

/*Actualizar una persona en especifico*/
course_routes.put('/:idCourse',(req,res)=>{})

/*Eliminar una persona en especifico*/
course_routes.delete('/idCourse',(req,res)=>{})

module.exports = course_routes