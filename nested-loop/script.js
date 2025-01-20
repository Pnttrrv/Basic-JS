// // let bintang = prompt('masukkan jumalah bintang');
let baris = 1;
let hasil = '';
let spasi = '';
// for (baris; baris <= 10; baris++) {

// }
let n = 5;
// for (baris; baris <= n; baris++) {
//   for (let spasi = 1; spasi <= baris; spasi++) {
//     hasil += '  ';
//   }
//   for (let kolom = 1; kolom <= n - baris + 1; kolom++) {
//     hasil += '* ';
//   }
//   hasil += '\n';
// }

for (baris; baris < 2 * n; baris++) {
  let c = baris >= n ? 2 * n - baris : baris;
  for (let kolom = 1; kolom <= c; kolom++) {
    hasil += `* `;
  }
  hasil += '\n';
}

console.log(hasil);
