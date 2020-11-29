const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];   // cores somente pelo hexadecimal
//#f15025
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
// Cor hxadecimal começa com # e vai do 0 até 9 junto com as letras A até F. 6 ao total
btn.addEventListener('click', function(){
    let hexColor = '#';     // vai começar com # e depois seguido de 6 caracteres pegando-os do nosso array. Depois podemos fazer um loop para iterar a # com os 6 caracteres
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()]
        //hexColor += hex[0];     // em cada iteração só vamos adicionar um valor do nosso array, pegando 6 deles. Aqui pedimos para pegar, em todas as iterações, o zero que formou o preto
    }
color.textContent = hexColor;       // nosso target do text content vai receber o nosso hexColor do array e fazer amesma coisa com o body 
document.body.style.backgroundColor = hexColor;     // background vai ser a cor do nosso hexColor que geramos no loop
});

function getRandomNumber(){         //    função para pegar os índices aleatórios e nos mostrar um hexa aleatório também do nosso array
    return Math.floor(Math.random() * hex.length);      // fizemos um arredondamento do nosso número aleatório, mas dessa vez multiplicando em cima do length do nosso array de hexadecimal para ter certeza que vamos ter os valores entre 0 e do último índice do array(que é o F)
}


