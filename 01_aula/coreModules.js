const fs = require('fs')

fs.readFile("teste.txt", "utf-8", (erro, dados) => {
  if (erro) {
    console.error(erro);

  } else {
    console.log(dados);

  }
})

const mensagem = "TEXTO muito legal. pra ver se funciona :)"

fs.writeFile("teste2oterno.txt", mensagem, "utf-8", (erro) =>{
  if (erro) {
    console.log("Deu erro, tmj lek");
    
  } else {
    console.log("Arquivo escrivido!");
    
  }
})

const mensagem2 = "\na mesma mensagem só que diferente"

fs.appendFile("teste2oterno.txt", mensagem2, "utf-8", (erro) =>{
  if (erro) {
    console.log("Deu erro, tmj lek");
    
  } else {
    console.log("Arquivo escrivido!");
    
  }
})

fs.unlink("teste2oterno.txt", mensagem2, "utf-8", (erro) =>{
  if (erro) {
    console.log("Nao consegui apagar o arquivo");
    
  } else {
    console.log("arquivo apagado!");
    
  }
})
