let mhs = {
  nama: 'Andhika',
  umur: 27,
  IPsemester: [2.57, 2.0, 2.5],
  IPKumulatif: function () {
    let total = 0;
    let ips = this.IPsemester;
    for (let i = 0; i < ips.length; i++) {
      total += ips[i];
    }
    return total / ips.length;
  },
};
mhs.IPKumulatif();
