let patientId = "50";
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId)
console.log(typeof isEnrolled)
console.log(typeof patientInfo)
console.log(typeof patientEmail)
console.log(typeof patientAge)

let base =5;
let altura = 8;
let area = base * altura;
let perimetro = (2*base) + (2*altura);
 console.log(base);
 console.log(altura);
 console.log(area);
 console.log(perimetro);

 let nota = 59;
 if (nota > 80){
     console.log("Parabéns, você foi aprovada(o)!")
 }
 else if (nota < 60){
    console.log("Você foi reprovada(o)")
 }
 else{
 console.log("Você está na nossa lista de espera")
 }

 let status = "lista";
 switch (status) {
  case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;

  case "lista":
    console.log("Você está na nossa lista de espera");
    break;

  case "reprovada":
    console.log("Você foi reprovada(o)");
    break;

  default:
    console.log("Informação não encontrada");
 }