const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("todo okey");
  });

//Crear una ruta que reciba nombre y apellido por medio de params (ruta parametrizada) y devuelva por un res.send un query string armando un saludo (ej: res.send(`Hola ${nombre}`) ).
app.get("/saludo/:name/:lastname", (req, res) => {
    res.send(`Hola ${req.params.name} ${req.params.lastname}`);
  });
//http://localhost:3000/saludo/esteban/colunga

//Crear una ruta “dividir” la cual reciba dos parámetros (ruta parametrizada) divisor y dividendo, la misma tiene que devolver un res.json({error: "no se puede dividir por cero"}) si el usuario ingresa un 0, si no es el caso devolver res.json({resultado}).
app.get("/dividir/:dividendo/:divisor", (req, res) => {
    let dividendo = Number(req.params.dividendo);
    let divisor = Number(req.params.divisor);
    if (divisor === 0) {
      res.send("No se puede dividir por cero");
    } else {
      res.json({
        resultado: dividendo / divisor,
      });
    }
  });
//http://localhost:3000/dividir/10/4
//http://localhost:3000/dividir/10/0

//Crear una ruta que sume dos valores (ruta parametrizada), pero poner una condición de que no se puedan enviar números menores que cero, y el resultado se debe devolver por medio de un res.json({resultado}).
app.get("/suma/:num1/:num2", (req, res) => {
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    if (num1 < 0 || num2 < 0) {
      res.send("No se permiten números negativos");
    } else {
      res.json({
        suma: num1 + num2,
      });
    }
  });
  //http://localhost:3000/suma/15/7
  //http://localhost:3000/suma/15/-4

//Crear una ruta que reciba un numero (ruta con query) si el número es impar debe devolver un res.send("no autorizado") , y si el número es par debe devolver res.send("autorizado").
app.get("/autorizado", (req, res) => {
    let num = Number(req.query.num);
    if (num % 2 === 0) {
      res.send("autorizado");
    } else {
      res.send("no autorizado");
    }
  });
  
// (autorizado) http://localhost:3000/autorizado?num=8
// (no autorizado) http://localhost:3000/autorizado?num=5

//Crear una ruta “lista de compras” (ruta con query) que devuelva un objeto con 5 productos, se debe usar res.json({objeto}).
app.get("/listadecompras", (req, res) => {
    res.json({
      producto1: req.query.producto1,
      producto2: req.query.producto2,
      producto3: req.query.producto3,
      producto4: req.query.producto4,
      producto5: req.query.producto5,
    });
  });

  //http://localhost:3000/listadecompras/?producto1=mate&producto2=bombilla&producto3=yerba&producto4=lapicera&producto5=cartas

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})