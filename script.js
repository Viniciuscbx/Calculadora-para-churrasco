function calcularChurrasco() {
    const numHomens = parseInt(document.getElementById('numHomens').value) || 0;
    const numMulheres = parseInt(document.getElementById('numMulheres').value) || 0;
    const numCriancas = parseInt(document.getElementById('numCriancas').value) || 0;
    const adultosQueBebem = parseInt(document.getElementById('adultosQueBebem').value) || 0;

    if (adultosQueBebem > numHomens + numMulheres) {
        alert("O número de adultos não pode ultrapassar a soma do número de homens e mulheres.");
        return;
      }
    
    const totalAdultos = numHomens + numMulheres;
// Medida de quantidade de cada tipo de carne por genero 
    const carneHomem = 300;
    const carneMulher = 200;

    const frangoHomem = 100;
    const frangoMulher = 100;

    const linguiçaHomem = 100;
    const linguiçaMulher = 100;
// Calculo para carne bovina
    const totalCarneHomens = numHomens * carneHomem;
    const totalCarneMulheres = numMulheres * carneMulher;
    const totalCarneCriancas = numCriancas * carneMulher;
// Calculo para frango
    const totalFrangoHomens = numHomens * frangoHomem;
    const totalFrangoMulheres = numMulheres * frangoMulher;
    const totalFrangoCriancas = numCriancas * frangoMulher;
// Calculo para linguiça
    const totalLinguicaHomens = numHomens * linguiçaHomem;
    const totalLinguicaMulheres = numMulheres * linguiçaMulher;
    const totalLinguicaCriancas = numCriancas * linguiçaMulher;
// calculo para bebidas
    const totalCervejas = adultosQueBebem * 5;
    const totalRefrigerantes = (numCriancas + (totalAdultos - adultosQueBebem)) * 500;
// Calculo para quantidade total de carnes (bovino, frango e linguiça)
    const totalCarnes = totalCarneHomens + totalCarneMulheres + totalCarneCriancas +
    totalFrangoHomens + totalFrangoMulheres + totalFrangoCriancas +
    totalLinguicaHomens + totalLinguicaMulheres + totalLinguicaCriancas;
// Calculo para quantidade de carvão
    const carvao = (totalCarneHomens + totalCarneMulheres + totalCarneCriancas +
    totalFrangoHomens + totalFrangoMulheres + totalFrangoCriancas +
    totalLinguicaHomens + totalLinguicaMulheres + totalLinguicaCriancas) * 1.5;
  
  
    const resultado = `
      <h2>Quantidade para Comprar:</h2>
      <p>Carne Bovina: ${totalCarneHomens + totalCarneMulheres + totalCarneCriancas}g</p>
      <p>Frango: ${totalFrangoHomens + totalFrangoMulheres + totalFrangoCriancas}g</p>
      <p>Linguiça: ${totalLinguicaHomens + totalLinguicaMulheres + totalLinguicaCriancas}g</p>
      <p>Carvão: ${carvao}g</p>
      <p>Cerveja: ${totalCervejas} latas de 350ml</p>
      <p>Refrigerante/ Suco: ${totalRefrigerantes}ml</p>
    `;
  
    document.getElementById('resultado').innerHTML = resultado;
  }
  