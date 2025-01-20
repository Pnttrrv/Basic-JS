let ulang = true;

while (ulang) {
  let p = prompt('Masukkan pilihan anda : \n pilihan: gajah, semut, manusia');

  let comp = Math.floor(Math.random() * 3) + 1;
  let hasil = '';
  if (comp == 1) {
    comp = 'gajah';
  } else if (comp == 2) {
    comp = 'semut';
  } else {
    comp = 'manusia';
  }

  if (p == comp) {
    hasil = 'Draw';
    alert(`Draw`);
  } else if (p == 'gajah') {
    hasil = comp == 'semut' ? 'lose' : 'wins';
  } else if (p == 'manusia') {
    hasil = comp == 'gajah' ? 'lose' : 'wins';
  } else if (p == 'semut') {
    hasil = comp == 'manusia' ? 'lose' : 'wins';
  } else {
    hasil = 'wrong choices';
  }
  if (hasil == 'wrong choices') {
    alert(hasil);
  } else {
    alert(`${hasil}\n Player memilih ${p} dan computer memilih ${comp}. `);
  }
  ulang = confirm('main lagi ?');
}
