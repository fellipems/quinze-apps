// variável contadora inicial 
let count = 0;

// selecionamos todos os botões e colocaremos um Event listener para fazer um loop em todos os botões. Se clicar no botao decrescente, diminui, crescente aumenta e assim por diante
// Selecionando os valores e os botões
const value = document.querySelector('#value');  // procurando o botão com o ID Value. ( # ) para achar nos ID
const btns = document.querySelectorAll('.btn'); // Selecionando todos os botões. ( . ) para achar nas classes

console.log(btns)       // retornará um Lista Node(parecido com um Array de elementos, então temos alguns métodos que podemos usar em uma lista Node, por exemplo o for each, e alguns métodos de Array. Podendo, assim, trnasformar o Node em um array)

btns.forEach(function (btn) {   // ao invés de selecionarmos os botões um por um usando as classes específicas que cada um tem, nós selecionaremos todos eles usando a classe btn e fazendo um looping neles adicionando o event listener
    console.log(btn)
    btn.addEventListener('click', function(e){  // call back function para acessar o event object para checar qual botão que estamos clicando
        //console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;       //usando o event object para pegar o target atual da classe que clicamos
        if(styles.contains('decrease')){    // se a minha variável styles contém uma classe específica, significa que clicamos em algum botão crescente, decrescente e fazemos a lógica do botão selecionado
            count--;
        } else if(styles.contains('increase')){
            count++;
        } else {
            count = 0;
        }
        if(count > 0){
            value.style.color = 'green';
        } 
        if(count < 0){
            value.style.color = 'red';
        }
        if(count === 0){
            value.style.color = "#222"
        }
        value.textContent = count;  // substituí o valor do nosso contador da tela(const value) para a nossa variável contador (count)
    });  // event listener para o click
});        // event listener para acessar cada botão usando o parâmetro
