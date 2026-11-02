// Klasična deklaracija funkcije

function izracunajProsjek(a, b) {

return (a + b) / 2;

}

// Moderna streličasta funkcija (Arrow)

const pomnozi = (x, y) => x * y;

let p = izracunajProsjek(4, 5); // 4.5

let m = pomnozi(3, 4); // 12

console.log(`Prosjek: ${p}, Množenje: ${m}`);