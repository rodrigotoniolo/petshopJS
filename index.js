const nomePetshop = "PetshopJS";

let pets = [
    {
        nome: 'Malu',
        tipo: 'cachorro',
        idade: 3,
        raca: 'Spitz',
        peso: 3,
        tutor: 'Joao',
        contato: '(81) 99222-2543',
        vacinado: true,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Bily',
        tipo: 'cachorro',
        idade: 2,
        raca: 'doberman',
        peso: 7,
        tutor: 'Felipe',
        contato: '(81) 99232-2543',
        vacinado: false,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Jolie',
        tipo: 'cachorro',
        idade: 8,
        raca: 'salsicha',
        peso: 6,
        tutor: 'Maria',
        contato: '(81) 99222-2522',
        vacinado: true,
        servicos: ['banho', 'tosa']
    }
];

const listarPets = () => {
    for(let pet of pets){
        // console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    vacinarPet(pet.vacinado, pet.nome);
    }
}

const vacinarPet = (vacinado, nome) => {
    (vacinado === false) ? console.log(`${nome} não foi vacinado`) : console.log(`${nome} ja foi vacinado`);
}

const campanhaVacina = () => {
    let naoVacinados = 0;
    for (let pet of pets){
        (pet.vacinado === false) ? naoVacinados++ : null;
        }
    }
    // console.log(`${naoVacinados} deve(m) ser vacinados!`);


const adicionarPet = () =>{
    let petNovo =
        {
        nome: 'Tobias',
        tipo: 'cachorro',
        idade: 4,
        raca: 'poodle',
        peso: 9,
        tutor: 'Junior',
        contato: '(81) 99222-3333',
        vacinado: false,
        servicos: ['corte de unhas']
    }
pets.push(petNovo);
console.log(petNovo.nome);
}

const darBanhoPet = () =>{
    for(let pet of pets){
        const tomouBanho = pet.servicos.includes('banho');
        (tomouBanho == true) ? console.log(`${pet.nome} ja tomou banho.`) : null
    }
}

const tosarPet = () =>{
    for(let pet of pets){
        const tosarPet = pet.servicos.includes('tosa');
        (tosarPet == true) ? console.log(`${pet.nome} está com cabelinho na régua.`) : null
    }
}

const apararUnhasPet = () =>{
    for(let pet of pets){
        const cortarUnhas = pet.servicos.includes('corte de unhas');
        (cortarUnhas == true) ? console.log(`${pet.nome} está de unhas aparadas.`) : null
    }
}

adicionarPet();
campanhaVacina();
listarPets();
darBanhoPet();
tosarPet();
apararUnhasPet();
// console.log(pets);
