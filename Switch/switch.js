let ulang = true;

while (ulang) {
  //   let angka = parseInt(prompt('Masukkan angka  '));
  //   if (angka === 1) {
  //     alert(`anda memasukkan angka ${angka}`);
  //   } else if (angka === 2) {
  //     alert(`anda memasukka angka ${angka}`);
  //   } else {
  //     alert(`invalid`);
  //   }

  //   switch (angka) {
  //     case 1:
  //       alert(`anda memasukkan angka ${angka}`);
  //       break;
  //     case 2:
  //       alert(`anda memasukkan angka ${angka}`);
  //       break;
  //     default:
  //       break;
  //   }
  let item = prompt('masukkan nama makanan / minuman : \n (Cth: nasi, daging, susu, hamburger, softdrink.');

  switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
      alert(`${item} adalah makanan / minuman sehat`);
      break;
    case 'hamburger':
    case 'softdrink':
      alert(`${item} adalah makanan / minuman tidak sehat`);
      break;

    default:
      alert(`${item} tidak ada dalam pilihan`);
      break;
  }
  ulang = confirm('lagi?');
}
