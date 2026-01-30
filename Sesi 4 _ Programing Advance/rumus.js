// rumus.js
export function kalkulator(angka1, angka2, operator) {
  switch (operator) {
    // case untuk penjumlahan
    case "+":
      return angka1 + angka2;

    // case untuk pengurangan
    case "-":
      return angka1 - angka2;

    // case untuk perkalian
    case "*":
      return angka1 * angka2;

    // case untuk pembagian
    case "/":
      if (angka2 === 0) {
        return "Tidak bisa dibagi dengan nol!";
      }
      return angka1 / angka2;

    default:
      return "Operator tidak valid!";
  }
}
