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
    for(let i = 0; i< pets.length; i++){
        console.log (pets[i].nome);
    }
}
listarPets();

// console.log(pets);
