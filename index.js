// // INRODUÇÃO A PROGRAMAÇÃO WEB.

// // Criar um programa que calcula a média das grades entre os students e envia mensagem do cálculo da média.

// const student01 = 'Cleber' // string, aspas simples.
// const gradeAluno01 = 9.8

// const student02 = "Mayk" // string, aspas duplas
// const gradeAluno02 = 10

// const student03 = 'Fulano'
// const gradeAluno03 = 2

// const name3 = `Diego e ${student01}` // Template string, usa cráse, e pode colocar uma variavel dentro de outra.

// const average = (gradeAluno01 + gradeAluno02 + gradeAluno03) / 3

// /*
// para saber qual o tipo da variavel, é só colocar no
// console.log() typeof antes da variavel que deseja saber
// exemplo: console.log(typeof student01)
// */

// if (average > 5) {
//     console.log(`A média foi de ${average}. Congrats`)
// } else {
//     console.log('A média é menor que 5.')
// }


// // ======= OBJETOS =====================================================================

// //Objetos é um conjuto de qualidades em uma variavel.
// //Um objeto é feito usando as {} ex: const name ={atributo1, atributo2, ...}


// const student01 = {
// name: "Cleber",
// grade: 9.8
// }

// const student02 = {
// name: "Mayk",
// grade: 10
// }

// const student03 = {
// name: "Fulano",
// grade: 2
// }

// const average = (student01.grade + student02.grade + student03.grade) / 3


// // ======= ARRAY (VETORES) =============================================================

// // Coleção de objetos.
// // Ela é feita dentro das []

// //Exemplo 1
// const students = [
// {   // posição 0
//     name: "Cleber",
//     grade: 9.8
// },
// {   // posição 1
//     name: "Mayk",
//     grade: 10
// },
// {   // posição 2
//     name: "Fulano",
//     grade: 2 
// }
// ]

// const average = (students[0].grade + students[1].grade + students[2].grade) / 3
// console.log(average);

// // Exemplo 2
// const nameAlunos = ["Cleber", "Mayk", "Fulano"]
// console.log(students);


// // =========== FUNÇÕES =================================================================

// // Criar um programa que calcula a média
// // das classes de students e envia mensagem do cálculo da média.

// const classA = [
//     {
//         name: "Cleber",
//         grade: 9.8
//     },
//     {
//         name: "Mayk",
//         grade: 3
//     },
//     {
//         name: "Fulano",
//         grade: 2
//     }
// ]

// const classB = [
//     {
//         name: "Diego",
//         grade: 10
//     },
//     {
//         name: "Enzo",
//         grade: 10
//     },
//     {
//         name: "Adriana",
//         grade: 2
//     }
// ]

// function calculateAverage(students) {
// return (students[0].grade + students[1].grade + students[2].grade ) / 3
// }

// const average1 = calculateAverage(classA)
// const average2 = calculateAverage(classB)

// function sendMessage(average, class){
// if (average > 5) {
//     console.log(` ${class} de ${average}. Congrats!`);
// } else {
//     console.log(` ${class} é menor que 5`);        
// }
// }

// sendMessage(average1, 'classA')
// sendMessage(average2, 'classB')


// =========== Estrutura de repetição ==================================================

const classA = [
    {
        name: "Cleber",
        grade: 10
    },
    {
        name: "Mayk",
        grade: 10
    },
    {
        name: "João",
        grade: 3.2
    },
    {
        name: "Maria",
        grade: 4.5
    }
]

const classB = [
    {
        name: "Diego",
        grade: 5.6
    },
    {
        name: "Enzo",
        grade: 8
    },
    {
        name: "Adriana",
        grade: 5.5
    },
    {
        name: "Tony",
        grade: 2
    },
    {
        name: "Steve",
        grade: 3.2
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length
    return average
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

function sendMessage(average, group) {
    if (average > 5) {
        console.log(`${group} averege: ${average}. Congrats!`)
    } else {
        console.log(`${group} averege: ${average}. is not good.`)
    }
}

sendMessage(average1, 'classA')
sendMessage(average2, 'classB')


// ============== BOOLEAN ==============================================================

// Marcar students como flunkeds se a grade for menor que 5 e também enviar uma mensagem.

function markAsFlunked(student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`student ${student.name} flunked!`)
    }
}

function studentsReprovado(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

studentsReprovado(classA)
studentsReprovado(classB)