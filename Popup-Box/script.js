let x = true;

while (x) {
  let n = prompt('Masukkan nama : ');
  alert(`Nama anda adalah ${n}`);
  x = confirm('ulang?');
}
