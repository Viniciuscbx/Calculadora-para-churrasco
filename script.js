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
    const carneHomem = 400;
    const carneMulher = 300;
  
    const frangoHomem = 200;
    const frangoMulher = 200;
  
    const linguiçaHomem = 200;
    const linguiçaMulher = 200;
  
    // Calculo para carne bovina
    const totalCarneHomens = (numHomens * carneHomem);
    const totalCarneMulheres = (numMulheres * carneMulher);
    const totalCarneCriancas = (numCriancas * carneMulher);
  
    // Calculo para frango
    const totalFrangoHomens = (numHomens * frangoHomem);
    const totalFrangoMulheres = (numMulheres * frangoMulher);
    const totalFrangoCriancas = (numCriancas * frangoMulher);
  
    // Calculo para linguiça
    const totalLinguicaHomens = (numHomens * linguiçaHomem);
    const totalLinguicaMulheres = (numMulheres * linguiçaMulher);
    const totalLinguicaCriancas = (numCriancas * linguiçaMulher);

    // Calculo para os acompanhamentos
    const totalArroz = (totalAdultos * 90) / 1000;
    const totalBatata = (totalAdultos * 50) / 1000;
    const totalCenoura = (totalAdultos * 50) / 1000;
    const totalMaionese =  (totalAdultos * 50) / 1000;
    const totalPaoDeAlho = totalAdultos + numCriancas;
  
    // Calculo para bebidas
    const totalCervejas = adultosQueBebem * 6;
    const totalCervejasLitros = (totalCervejas * 350) / 1000;
    const totalRefrigerantes = (numCriancas + (totalAdultos - adultosQueBebem));
  
    // Calculo para quantidade total de carnes (bovino, frango e linguiça)
    const totalCarnes = (
      parseFloat(totalCarneHomens) + parseFloat(totalCarneMulheres) + parseFloat(totalCarneCriancas) +
      parseFloat(totalFrangoHomens) + parseFloat(totalFrangoMulheres) + parseFloat(totalFrangoCriancas) +
      parseFloat(totalLinguicaHomens) + parseFloat(totalLinguicaMulheres) + parseFloat(totalLinguicaCriancas)
    );
  
    // Calculo para quantidade de carvão
    const carvao = (
      parseFloat(totalCarneHomens) + parseFloat(totalCarneMulheres) + parseFloat(totalCarneCriancas) +
      parseFloat(totalFrangoHomens) + parseFloat(totalFrangoMulheres) + parseFloat(totalFrangoCriancas) +
      parseFloat(totalLinguicaHomens) + parseFloat(totalLinguicaMulheres) + parseFloat(totalLinguicaCriancas)
    ) * 1.5;
  
    const resultado = `
      <h2>Quantidade para comprar para:</h2>
      <h3> ${totalAdultos} adultos e ${numCriancas} crianças. ${totalAdultos + numCriancas} pessoas.</h3>
      <h4>Carnes.</h4>
      <p>Carne Bovina: ${(totalCarneHomens + totalCarneMulheres + totalCarneCriancas) / 1000}Kg</p>
      <p>Frango: ${(totalFrangoHomens + totalFrangoMulheres + totalLinguicaCriancas) / 1000}Kg</p>
      <p>Linguiça: ${(totalLinguicaHomens + totalFrangoMulheres + totalLinguicaCriancas) / 1000}kg</p>
      <p>Carvão: ${carvao / 1000}Kg</p>
      <h4>Acompanhamentos:</h4>
      <p>Arroz: ${totalArroz}Kg</p>
      <p>Maionese: ${totalBatata}Kg de batatas, ${totalCenoura}Kg de cenouras e ${totalMaionese}Kg de maionese de sua preferência.</p>
      <p>Pão de alho: ${totalPaoDeAlho} unidades</p>
      <h4>Bebidas.</h4>
      <p>Cerveja: ${totalCervejas} Latas de 350ml = ${totalCervejasLitros}L</p>
      <p>Refrigerante/ Suco: ${totalRefrigerantes}L</p>
    `;
  
    document.getElementById('resultado').innerHTML = resultado;
  }
  