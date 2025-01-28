// object literal

// let mhs = {
//   nama: 'Andhika',
//   npm: 15420913,
//   email: 'ndhkptr@gmail.com',
//   jurusan: 'Informatika',
// };

// function decalaration

function buatObjectMhs(nama, npm, email, jurusan) {
  let mhs = {};

  mhs.nama = nama;
  mhs.npm = npm;
  mhs.email = email;
  mhs.jurusan = jurusan;

  return mhs;
}

let mhs2 = buatObjectMhs('andhika', 15420913, 'ndhkptr@gmail.com', 'Informatika');
let mhs3 = buatObjectMhs('david', 15420925, 'bcusweng@gmail.com', 'Informatika');

// constructor

function Mahasiswa(nama, npm, email, jurusan) {
  this.nama = nama;
  this.npm = npm;
  this.email = email;
  this.jurusan = jurusan;
}

let mhs4 = new Mahasiswa('erik', 15420915, 'erik@gmail.com', 'Informatika');
var a = 10;
let b = 20;
function cobaDis() {
  var a = 20;
  console.log(this.a + a);
}
cobaDis();
