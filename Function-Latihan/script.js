function hitungVolume() {
  function nilai(a, b) {
    return a * a * a + b * b * b;
  }
  let a = parseInt(prompt('Masukkan nilai sisi kubus A : '));
  let b = parseInt(prompt('Masukkan nilai sisi kubus B :'));

  var volume = nilai(a, b);
  alert(volume);
}

function tambah() {
  function nilai() {
    let hasil = 0;
    for (let i = 0; i < arguments.length; i++) {
      hasil += arguments[i];
    }
    return hasil;
  }
  let add = nilai(1, 2, 3, 4);
  alert(add);
}

function kali() {
  function nilai(a, b) {
    return a * b;
  }
  //   let a = parseInt(prompt('Masukkan nilai 1 : '));
  //   let b = parseInt(prompt('Masukkan nilai 2 : '));
  var hasil = nilai(tambah(1, 2), tambah(1, 4));
  alert(hasil);
}
