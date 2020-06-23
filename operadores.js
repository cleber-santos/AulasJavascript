/* ===========================================
    Operadores de comparação

    >   Maior
    <   Menor
    >=  Maior igual a
    <=  Menor igual a
    ==  Igual a
    === Igual e do mesmo tipo
    !=  Diferente de
    !== Diferente, inclusive do tipo

================================================ */

/*
// DESAFIO 1

// Verificar se a pessoa é maior de 18 anos
const idade = 16

//Se SIM, deixar entrar, se NÃO, bloquear a entrada
if (idade >= 18) {
    console.log('Deixar entrar')
} else {
    console.log('Bloquear entrada')
}

//se a pessoa tiver 17 anos
//avisar para voltar quando fizer 18 anos
if (idade == 17) {
    console.log('Volte quando fizer 18 anos')
}
*/


/* =================================================
    OPERADORES LÓGICOS

    &&  "E" - As duas condições devem ser verdadeiras para
            que a condição final seja verdadeira.
    ||  "OU" - Uma das condições deve ser verdadeira para
            que a condição final seja verdadeira.
    !   "NÃO" - Nega uma condição.

==================================================== */

// console.log(5 == 5 && 6 == 6); //true
// console.log(5 == 5 && 6 != 6); //false

// console.log(5 == 5 || 6 == 6); //true
// console.log(5 == 5 || 6 != 6); //true

// console.log(!(5 > 6)); //true
// console.log(!(5 < 6)); //false

/*
// DESAFIO 2

// Verificar se a pessoa é maior de 18 anos
const idade = 18

//Se SIM, deixar entrar, se NÃO, bloquear a entrada
//se a pessoa tiver 17 anos
//avisar para voltar quando fizer 18 anos
if (!(idade >= 18) || idade == 17) {
    console.log('Bloquear entrada')
} else {
    console.log('Deixar entrar')
}
*/


/* ===================================================
    OPERADORES DE ARITMÉTICA

    *   Multiplicação
    /   Divisão
    %   Resto da divisão
    +   Adição
    -   Subtração

======================================================= */

/*
console.log(2 * 2); // 4
console.log(2 / 2); // 1
console.log(2 % 1.5); // 0.5
console.log(2 + 2); // 4
console.log(2 - 2); // 0
*/