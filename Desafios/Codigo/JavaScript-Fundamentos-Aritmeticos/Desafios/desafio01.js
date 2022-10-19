let valores = new Array();
let contador = 0;

//adicionar no array
for (let i = 0; i < 6; i++) {
    let valor = parseFloat(gets());
    var adicionar = valores.push(valor);
}

for (let i = 0; i < 6; i++) {
    let selecionado = valores[i];
    
    // contar positivos
    if (selecionado > 0) {
      contador = contador + 1;
    }
}
//imprimir na tela
print(`${contador} valores positivos`);