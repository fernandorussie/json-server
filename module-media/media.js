// media.js
// exports.calculaMedia = (notas) => {
//     const total = notas.reduce((acc, atual) => {
//    return acc + atual
//     })
//     return total / notas.length
// }

// media.js
export function calculaMedia(notas) {
    const total = notas.reduce((acc, atual) => {
   return acc + atual
    })
    return total / notas.length
   }