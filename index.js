const nomePetshop = "PetshopJS";
const fs = require('fs');
let bancoDados = fs.readFileSync('./bancoDados.json');

bancoDados = JSON.parse(bancoDados);

console.log(bancoDados.pets)
const atualizarBanco = () => {
    let petsAtualizado = JSON.stringify(bancoDados, null, 2);

    fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');
}


const listarPets = () => {
    for(let pet of bancoDados.pets){
        // console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    vacinarPet(pet.vacinado, pet.nome);
    }
}

const vacinarPet = (vacinado, nome) => {
    (vacinado === false) ? console.log(`${nome} não foi vacinado`) : console.log(`${nome} ja foi vacinado`);
}

const campanhaVacina = () => {
    let naoVacinados = 0;
    for (let pet of bancoDados.pets){
        // (pet.vacinado === false) ? naoVacinados++ : null;
        }
    }
    // console.log(`${naoVacinados} deve(m) ser vacinados!`);


    const adicionarPet = novoPet => {
        console.log(novoPet);
        bancoDados.pets.push(novoPet);
        atualizarBanco();
        console.log(`${novoPet.nome} foi adicionado com sucesso!`);
}

const darBanhoPet = () =>{
    for(let pet of bancoDados.pets){
        const tomouBanho = pet.servicos.includes('banho');
        (tomouBanho == true) ? console.log(`${pet.nome} ja tomou banho.`) : null
    }
}

const tosarPet = () =>{
    for(let pet of bancoDados.pets){
        const tosarPet = pet.servicos.includes('tosa');
        (tosarPet == true) ? console.log(`${pet.nome} está com cabelinho na régua.`) : null
    }
}

const apararUnhasPet = () =>{
    for(let pet of bancoDados.pets){
        const cortarUnhas = pet.servicos.includes('corte de unhas');
        (cortarUnhas == true) ? console.log(`${pet.nome} está de unhas aparadas.`) : null
    }
}

const atenderCliente = (pet, servico) => {
    console.log(`Bem vindo, ${pet.nome}`);
    servico ? servico() : console.log("só vim dar uma olhadinha");
};

campanhaVacina();
listarPets();
darBanhoPet();
tosarPet();
apararUnhasPet();


adicionarPet({
    "nome": "Tobias",
    "tipo": "cachorro",
    "idade": 4,
    "raca": "poodle",
    "peso": 9,
    "tutor": "Junior",
    "contato": "(81) 99222-3333",
    "vacinado": false,
    "servicos": ["corte de unhas"]
});


