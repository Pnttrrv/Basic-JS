// Function Expression
let myFunc = function () {
  alert('Hello World');
};

let ulang = true;

let binatang = [];
// binatang = ['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi', myFunc, [1, 'dua', 3]];
binatang = ['kucing'];

for (let i = 0; i < binatang.length; i++) {
  console.log(binatang[i]);
}
// while (ulang) {
//   let delName = prompt('Masukkan nama yang ingin dihapus : ');
//   binatang.shift(delName);
//   console.log(binatang.toString());
//   ulang = confirm('Hapus Lagi ?');
// }

// Memasukkan input-an user kadalam array
while (ulang) {
  let newName = prompt('Masukkan nama binatang : ');
  binatang.push(newName);
  ulang = confirm('Masukkan lagi ?');
}
alert(binatang.length);
console.log(binatang.toString());

// alert(binatang[7][1]);

// Function Declaration
// function myFunc() {
//   alert('Hello World');
// }
