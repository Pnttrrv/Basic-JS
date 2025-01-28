function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return penumpang;
  };
  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert('Angkot masih kosong.');
    }
    for (let i = 0; i < this.penumpang.length; i++) {
      if (namaPenumpang === penumpang[i]) {
        penumpang[i] = undefined;
        this.kas += bayar;
        return penumpang;
      }
    }
  };
}

let angkot1 = new Angkot('Dika', ['Cicaheum', 'Cibiru'], [], 0);
let angkot2 = new Angkot('Tom', ['Podomoro', 'Penjara'], [], 0);
