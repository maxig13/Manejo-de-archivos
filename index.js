const Conteiner = require("./clase.js")
const productos = new Conteiner ("./productos.json")

async function ejecutar (){
    const objeto1 = {
        nombre: 'Campera bomber',
        precio: 30000,
        thumbnail:'url'
    }
    const objeto2 = {
        nombre: 'Campera cuero',
        precio: 35000,
        thumbnail:'url'
    }
    const objeto3 = {
        nombre: 'Campera rompevientos',
        precio: 20000,
        thumbnail:'url'
    }
    await productos.save(objeto1)
}
ejecutar()