let a = 1; 
let b = 2; 
let c = 3; 
let d = 0;
let angulo1 = 100;
let angulo2 = 90;
let angulo3 = 80;

//1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados.//
let soma = a + b;
    console.log(soma);

let subtracao = a - b;
    console.log(subtracao);

let multiplicacao = a * b;
    console.log(multiplicacao);
    
let divisao = a / b;
    console.log(divisao);

let modulo = a % b;
    console.log(modulo);

//2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.//
if (a>b) { 
    console.log(a);
}
else {
    console.log(b);
}

//3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.//
if (a>b && a>c) { 
    console.log(a);
}
else if (b>a && b>c){
    console.log(b);
}
else {
    console.log(c);
}

//4 - Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.//
if (d>0) { 
    console.log("positive");
}
else if (d<0){
    console.log("negative");
}
else {
    console.log("zero");
}

//5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.//
let somaAngulo = angulo1+angulo2+angulo3;
if (somaAngulo===180) { 
    console.log("true");
}
else if (angulo3<0 || angulo2<0 || angulo1<0){
    console.log("erro");
}
else {
    console.log("false");
}

//6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.//
let nomePeca = "rei";
nomePeca = nomePeca.toLowerCase()
switch (nomePeca) {
    case "rei":
        console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.")
    break;
    case "rainha":
        console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.")
    break;
    case "bispo":
        console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.")
    break;
    case "cavalo":
        console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.")
    break;
    case "torre":
        console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.")
    break;
    case "peão":
        console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal.")
    break;
default:
    console.log("Erro no nome da peça")
}

//7 -Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.//
let nota = "70";
if (nota < 0 || nota > 100){
    console.log("Erro");
}
else if (nota>=90) {
    console.log("A");
}
else if (90>nota && nota>=80) {
    console.log("B");
}
else if (80>nota && nota>=70) {
    console.log("C");
}
else if (70>nota && nota>=60) {
    console.log("D");
}
else if (60>nota && nota>=50) {
    console.log("E");
}
else {
    console.log("F");
}

//8 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false //
let numero1 = 1; 
let numero2 = 2; 
let numero3 = 3; 
if (numero1 % 2 == 0 || numero2 % 2 == 0 || numero3 % 2 == 0){
    console.log("true");
}
else{
    console.log("false");
}

//9 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false . //
let numero4 = 2; 
let numero5 = 2; 
let numero6 = 2; 
if (numero4 % 2 != 0 || numero5 % 2 != 0 || numero6 % 2 != 0){
    console.log("true");
}
else{
    console.log("false");
}

//10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos. //
let valorCusto = 10;
let valorVenda = 15;
let quantProdutos = 1000;
let valorCustoComImposto = valorCusto * 1.2;

if (valorCusto<=0 || valorVenda<=0){
    console.log("Erro nos valores de entrada");
}
else {
    let lucroProduto = valorVenda - valorCustoComImposto;
    let lucroLoteProduto = lucroProduto * quantProdutos;
    console.log(lucroLoteProduto)
}

//11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.//
let salarioBruto = 3000;
let aliquota8 = salarioBruto * 0.08;
let aliquota9 = salarioBruto * 0.09;
let aliquota11 = salarioBruto * 0.11;
let aliquotaMax = 570.88;
let descontoInss = 0;

 if (salarioBruto<1556.94){
    descontoInss = aliquota8;
 }
 else if (salarioBruto>1556.94 && salarioBruto<2594.92){
    descontoInss = aliquota9;
 }
 else if (salarioBruto>2594.92 && salarioBruto<5189.82){
    descontoInss = aliquota11;
 }
 else{
    descontoInss = aliquotaMax;
 }

 let salarioBrutoComDescontoInss = salarioBruto - descontoInss;
 console.log(descontoInss)
 console.log(salarioBrutoComDescontoInss)

let descontoIr = 0;
let salarioLiquido = 0;
let aliquotaIrIsento = 0;
let aliquotaIr7 = (salarioBrutoComDescontoInss * 0.075) - 142.80;
let aliquotaIr15 = (salarioBrutoComDescontoInss * 0.15) - 354.80;
let aliquotaIr22 = (salarioBrutoComDescontoInss * 0.225) - 636.13;
let aliquotaIr27 = (salarioBrutoComDescontoInss * 0.275) - 869.36;

 if (salarioBrutoComDescontoInss<1903.98){
    descontoIr = aliquotaIrIsento;
 }
 else if (salarioBrutoComDescontoInss>1903.98 && salarioBrutoComDescontoInss<2826.66){
    descontoIr = aliquotaIr7;
 }
 else if (salarioBrutoComDescontoInss>2826.66 && salarioBrutoComDescontoInss<3751.05){
    descontoIr = aliquotaIr15;
 }
else if (salarioBrutoComDescontoInss>3751.05 && salarioBrutoComDescontoInss<4664.68){
   descontoIr = aliquotaIr22;
}
 else{
    descontoIr = aliquotaIr27;
 }

 salarioLiquido = salarioBrutoComDescontoInss - descontoIr;
 console.log(descontoIr)
 console.log(salarioLiquido)