function suit() {
  let lagi = true;

  while (lagi) {
    let ulang = 0;
    let angka = Math.floor(Math.random() * 10) + 1;
    console.log(angka);

    let player = 0;
    while (player != angka && ulang <= 2) {
      player = parseInt(prompt('Masukkan angka pilihan anda : \n 1-10'));
      if (player == angka) {
        alert(`anda benar`);
      } else if (player > angka) {
        alert('terlalu tinggi');
      } else {
        alert('terlalu rendah');
      }
      if (player != angka && ulang == 2) {
        alert('kesempatan anda habis!');
      }
      ulang++;
    }
    lagi = confirm('Main lagi ?');
  }
}
