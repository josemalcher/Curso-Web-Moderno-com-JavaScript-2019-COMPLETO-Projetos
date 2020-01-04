function compras(trabalho1, trabalho2){
    const compraSorvete = trabalho1 || trabalho2
    const compraTV50 = trabalho1 && trabalho2
    //const compraTV32 =  !!(trabalho1 ^ trabalho2) // bitwise XOR
    const compraTV32 = trabalho1 != trabalho2
    const manterSaudavel = !compraSorvete // operador unário

    return { compraSorvete, compraTV50, compraTV32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

/*
{
  compraSorvete: true,
  compraTV50: true,
  compraTV32: false,
  manterSaudavel: false
}
{
  compraSorvete: true,
  compraTV50: false,
  compraTV32: true,
  manterSaudavel: false
}
{
  compraSorvete: true,
  compraTV50: false,
  compraTV32: true,
  manterSaudavel: false
}
{
  compraSorvete: false,
  compraTV50: false,
  compraTV32: false,
  manterSaudavel: true
}
 */

