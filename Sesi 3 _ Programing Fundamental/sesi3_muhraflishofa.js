// Sesi3_muhraflishofa.js
// Program membuat segitiga bintang menggunakan loop

let tinggi = 4;
let hasil = "";

for (let i = 1; i <= tinggi; i++) {
  for (let j = 1; j <= i; j++) {
    hasil += "*";
  }
  hasil += "\n";
}

console.log(hasil);