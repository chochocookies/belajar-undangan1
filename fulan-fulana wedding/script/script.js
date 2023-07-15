const form = document.querySelector('form');
const hasilUcapan = document.getElementById('hasil-ucapan');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nama = document.getElementById('nama').value;
  const ucapan = document.getElementById('ucapan').value;
  const kehadiran = document.getElementById('kehadiran').value;
  const jumlahPeserta = document.getElementById('jumlah_peserta').value;

  const hasil = `
    <p><strong>Nama Lengkap:</strong> ${nama}</p>
    <p><strong>Ucapan:</strong> ${ucapan}</p>
    <p><strong>Kehadiran:</strong> ${kehadiran}</p>
    <p><strong>Jumlah Peserta yang Hadir:</strong> ${jumlahPeserta}</p>
  `;

  hasilUcapan.innerHTML = hasil;
});
