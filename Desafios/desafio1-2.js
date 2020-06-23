
// DESAFIO 1 - 2: Lidando com objetos e vetores ========================================

/* Construção e impressão de objetos.

Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

- Nome: Rocketseat
- Cor: Roxo
- Foco: Programação
- Endereço:
    Rua: Rua Guilherme Gembala
    Número: 260.

Obs.: Para armazenar os dados de endereço da empresa você pode criar objetos intercalados, por exemplo:

    const usuario = {
        nome: "Diego",
        empresa: {
            nome: "Rocketseat"
        }
    };

Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:

    A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260

Obs. Para imprimir em tela utilize o formato de template strings, por exemplo

    console.log(`O nome do usuário é ${usuario.nome}`);

*/

const usuario = {
    nome: "Diego",
    empresa: {
        nome: "Rocketseat",
        Cor: "Roxo",
        foco: "Programação",
        endereco: {
            rua: "Rua Guilherme Gembala",
            numero: 260            
        }
    }
}

console.log(`O usuario ${usuario.nome} trabalha na empresa ${usuario.empresa.nome}, que está localizada na ${usuario.empresa.endereco.rua}, nº ${usuario.empresa.endereco.numero}.`);


/* Vetores e objetos

Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

    { nome: 'C++', especialidade: 'Desktop' }
    { nome: 'Python', especialidade: 'Data Science' }
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }

Por exemplo:

    const objeto = {
    propriedade: [
        { nome: "C++", especialidade: "Desktop" },
        { nome: "JavaScript", especialidade: "Web/Mobile" }
     ]
    };
Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

    O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop
*/

const programador = {
    nome: "Carlos",
    idade: 32,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Javascript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O usuário ${programador.nome}, tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`);
