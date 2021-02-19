const inquirer = require('inquirer');
const fs = require('fs')
const {actions, createPet}  = require('./questions');

function Pet(id, nome, raca, nomeDono){
    this.id = id;
    this.nome = nome;
    this.raca = raca;
    this.nomeDono = nomeDono;
}


let meuPet = new Pet(5, "Tobiass", "basset", "leandro");

if(meuPet.nome == "Tobias"){

for (var prop in meuPet) {
    console.log(prop + " = " + meuPet[prop]);
  }

}

inquirer.prompt(actions).then((choice)=>{
  switch(choice.action){
    case "Cadastrar novo Pet":

      inquirer.prompt(createPet).then((create)=>{
        
        const idPet = create.id;
        var namePet = create.name;
        var breed = create.breed;
        var owner = create.owner;

        let novoPet = new Pet(idPet, namePet, breed, owner);
        console.log(novoPet);

      })


      break;
    case "Listar todos os Pets":
      console.log("Ele quer listar todos os pets");
      break;
    case "Buscar pet por nome":
      console.log("Ele quer procurar um pet");
      break;
  }
})
