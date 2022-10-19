let x = parseInt(gets()); //distância (Km)
let y = parseFloat(gets());// combustível (L)

// TODO Realize o cálculo do consumo médio do automóvel.
const consumoMedio = parseFloat(x/y) ;

console.log(`${consumoMedio.toFixed(3)} km/l`);