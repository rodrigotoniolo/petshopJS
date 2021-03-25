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
        // console.log(`O nome do pet é ${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    vacinarPet(pet.vacinado, pet.nome);
    }
}

const vacinarPet = (vacinado, nome) => {
    if (vacinado === false) {
        console.log(`${nome} não foi vacinado`);
    }
    else {
        console.log(`${nome} ja foi vacinado`);
    }
}

const campanhaVacina = () => {
    let naoVacinados = 0;
    for (let pet of pets){
        if (pet.vacinado === false){
            naoVacinados++
        }
    }
    console.log(`${naoVacinados} deve(m) ser vacinados!`);
}

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
        servicos: []
    }
pets.push(petNovo);
console.log(petNovo.nome);
}

adicionarPet();
campanhaVacina();
listarPets();

// console.log(pets);
;