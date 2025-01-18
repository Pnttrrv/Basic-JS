let jmlAngkot = 10;
let noAngkot = 1;
let angkotBeroperasi = 6;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log(`Angkot no. ${noAngkot} beroperasi dengan baik.`);
  } else {
    console.log(`Angkot no. ${noAngkot} sedang tidak beroperasi.`);
  }
}
