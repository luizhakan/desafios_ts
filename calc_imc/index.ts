const peso: number = 58;
const altura: number = 1.69;

const imcAtual: number = peso / (altura * altura);
const imcDesejado: number = 22;
const pesoIdeal: number = imcDesejado * (altura * altura);
const diferencaDePeso: number = pesoIdeal - peso;

if (imcAtual < 18.5) {
  console.log(`Imc: ${imcAtual.toFixed(1)}. Classificação: Magreza`);
} else if (imcAtual <= 24.9) {
  console.log(`Imc: ${imcAtual.toFixed(1)}. Classificação: Normal`);
} else if (imcAtual <= 29.9) {
  console.log(`IMC: ${imcAtual.toFixed(1)}. Classificação: Sobrepeso`);
} else if (imcAtual <= 34.9) {
  console.log(`IMC: ${imcAtual.toFixed(1)}. Classificação: Obesidade Grau I`);
} else if (imcAtual <= 39.9) {
  console.log(`IMC: ${imcAtual.toFixed(1)}. Classificação: Obesidade Grau II`);
} else if (imcAtual >= 40) {
  console.log(`IMC: ${imcAtual.toFixed(1)}. Classificação: Obesidade Grau III`);
}

if (diferencaDePeso > 0) {
  console.log(
    `Você pode ganhar até ${diferencaDePeso.toFixed(
      1
    )} kg para atingir um IMC saudável.`
  );
} else if (diferencaDePeso < 0) {
  console.log(
    `Você precisa perder ${Math.abs(diferencaDePeso).toFixed(
      1
    )} kg para atingir um IMC saudável.`
  );
} else {
  console.log(`Você está com um peso saudável.`);
}
