const nomePetshop = "PetshopJS";
const fs = require('fs');
let bancoDados = fs.readFileSync('./bancoDados.json');

bancoDados = JSON.parse(bancoDados);

//console.log(bancoDados.pets)
const atualizarBanco = () => {
    let petsAtualizado = JSON.stringify(bancoDados, null, 2);

    fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');
}


const listarPets = () => {
    for(let pet of bancoDados.pets){
        // console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}

const vacinarPet = (pet) => {
    if (!pet.vacinado) {
        pet.vacinado = true
        pet.servicos.push({ nome: 'Vacina'})
        console.log(`${pet.nome} foi vacinado com sucesso!`)
    } else {
        console.log(`Ops, ${pet.nome} já está vacinado!`)
    }
}

const campanhaVacina = () => {
    let petsVacinados = 0

    bancoDados.pets.map(pet => {
        if (!pet.vacinado) {
            vacinarPet(pet)
            petsVacinados++
        }
        return pet;
    })

    console.log(`${petsVacinados} pets foram vacinados nessa campanha!`)
    console.log('')
}


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
    console.log(`Olá, ${pet.nome}!`);
    (servico) ? servico(pet) : console.log ('Só vim dar uma olhadinha!');
    console.log('Tchau, até mais!');
};

const buscarPet = (nomePet) => {

    let petEncontrado = bancoDados.pets.find((pet) => {
        return pet.nome == nomePet;
    });

    return petEncontrado ? petEncontrado : `Nenhum pet encontrado com nome ${nomePet}`;
}

//console.log(buscarPet(''));
//campanhaVacina();

const filtrarTipoPet = (tipoPet) => {

    let petsEncontrados = bancoDados.pets.filter((pet) => {
        return pet.tipo == tipoPet;
    });

    return petsEncontrados;
}

const clientePremium = (pet) => {
    let nServicos = pet.servicos.length
    

    if (nServicos > 5) {
        console.log(`Olá, ${pet.nome}! Você é um cliente especial e ganhou um descontão!`);
    } else {
        console.log(`Olá, ${pet.nome}! Você ainda não tem descontos disponiveis!`);
    }
}

listarPets();
 clientePremium(bancoDados.pets[0])
// darBanhoPet();
// tosarPet();
// apararUnhasPet();


// adicionarPet({
//     "nome": "Tobias",
//     "tipo": "cachorro",
//     "idade": 4,
//     "raca": "poodle",
//     "peso": 9,
//     "tutor": "Junior",
//     "contato": "(81) 99222-3333",
//     "vacinado": false,
//     "servicos": ["corte de unhas"]
// });

//atenderCliente(bancoDados.pets[2]);
