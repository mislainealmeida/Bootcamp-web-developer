

let colaborador = parseInt(gets());
let horasTrabalhadas = parseInt(gets());
let valorHora = parseFloat(gets());

let salario= parseFloat(horasTrabalhadas * valorHora).toFixed(2);
print("NUMBER = " + colaborador);
print("SALARY = U$ " + salario);