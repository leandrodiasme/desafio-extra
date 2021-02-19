const actions = [
    {
    name: "action",
    type: "list",
    message: "O que você deseja fazer?:",
    choices: ["Cadastrar novo Pet", "Listar todos os Pets", "Buscar pet por nome"],
  },
];

const createPet = [
    {
        type: 'number',
        name: 'id',
        message: 'Qual será o ID do Pet?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do Pet?'
    },
    {
        type: 'input',
        name: 'breed',
        message: 'Qual a raça do Pet?'
    },
    {
        type: 'input',
        name: 'owner',
        message: 'Qual o nome do dono?'
    }
];

module.exports = {actions,createPet};