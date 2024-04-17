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
    const carneHomem = 0.3;
    const carneMulher = 0.2;

    const frangoHomem = 0.1;
    const frangoMulher = 0.1;

    const linguiçaHomem = 0.1;
    const linguiçaMulher = 0.1;

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
    const totalCervejas = adultosQueBebem * 1.750;
    const lata473 = totalCervejas / 473;
    const lata350 = totalCervejas / 350;
    const lata269 = totalCervejas / 269;
    const totalRefrigerantes = (numCriancas + (totalAdultos - adultosQueBebem)) * 0.5;

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
      <p>Carne Bovina: ${(totalCarneHomens + totalCarneMulheres + totalCarneCriancas).toFixed(3)}Kg</p>
      <p>Frango: ${totalFrangoHomens + totalFrangoMulheres + totalFrangoCriancas}Kg</p>
      <p>Linguiça: ${totalLinguicaHomens + totalLinguicaMulheres + totalLinguicaCriancas}Kg</p>
      <p>Carvão: ${carvao}g</p>
      <p>Cerveja: ${totalCervejas}L<br />
      ${lata473} Latas de 473ml<br />
      ${lata350} Latas de 350ml<br />
      ${lata269} Latas de 269ml</p>
      <p>Refrigerante/ Suco: ${totalRefrigerantes}L</p>
    `;
  
    document.getElementById('resultado').innerHTML = resultado;
  }
  