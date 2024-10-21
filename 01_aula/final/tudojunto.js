//Utilização de módulo externo via npm
const minimist = require("minimist")
const argumentos = minimist(process.argv.slice(2))

//Utilizar módulo interno 
const moduloSoma = require("../modulo_interno")
const funcSoma = moduloSoma.soma
const n1 = argumentos["n1"]
const n2 = argumentos["n2"]

funcSoma(n1, n2)


//Utilização de core modules
const fs = require('fs')
const resultado = funcSoma(n1, n2)

fs.writeFile("resultado.txt", resultado, "utf-8", (erro, dados) => {
  if (erro) {
    console.log(erro);
    
    
  } else {
    console.log(dados);
    
  }
})