class Ucenik {

constructor(ime, razred) {

this.ime = ime;

this.razred = razred;

}

predstaviSe() {

return `Ja sam ${this.ime} iz ${this.razred}.`;

}

}

const ucenik = new Ucenik('Ivan', '4.a');

console.log(ucenik.predstaviSe());