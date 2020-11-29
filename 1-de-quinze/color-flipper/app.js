const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];  // representam quais cores nós temos. rgba para qualquer cor
const btn = document.getElementById('btn');
const color = document.querySelector('.color');  // span cor

// click eventos listener

btn.addEventListener('click', function(){       // toda vez que clicar no botão, trocar a cor do fundo. callback function
    // pegar um número aleatório entre 0 e 3  do nosso array const colors       
    const randomNumber = getRandomNumber();                    // usar o style properties, mais específico a propriedade da cor do fundo, para trocar o nosso valor 
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    // função para gerar os valores aleatórios
    //console.log(document.body);                o body é a propriedade do nosso objeto documento
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);       // somente o Math.random() retorna um número 0.alguma coisa até 0 .999999999 ++; solução seria multiplicar nosso array para retornar um 0.alguma coisa até 3. alguma coisa. Agora gerou de 0.alguma coisa para até o 3.alguma coisa, para resolver isso vamos usar outro método para arredondar o número aleatório para mais próximo dos números inteiros do index do array do 0 até 3
}    // geramos um número aleatório para acessar nosso índice do array das cores