# Roadmap

- [x] Email pengumpulan/konfirmasi, komentar langsung/balasan dan nilai kepada pihak terkait diterapkan; tugas baru tetap lonceng. Kolaborator dosen menerima/menolak undangan, meninjau versi terkumpul dan mengubah satu nilai akhir beraudit; pemilik dapat mencabut akses. Tidak mengubah teacher predicate, draft/private discussion/pengelolaan/donasi tetap ditolak. Tes terisolasi lulus dan halaman undangan/penolakan akses tanpa galat di desktop/ponsel.
- [ ] Verifikasi kolaborator end-to-end dan email aktivitas nyata: sesi hanya Super, belum ada undangan nyata; butuh akun dosen/kolaborator/mahasiswa uji yang diizinkan. Tidak mengirim undangan/email atau mengubah nilai akun nyata untuk tes.

- [x] Permintaan pengumpulan: formulir proyek diberi penjelasan terpisah dari jawaban; tugas baru menerima teks, tautan HTTPS, PDF/DOCX/XLSX secara bawaan tanpa mengubah tugas lama; dosen tetap memilih format. Tes format dan pengumpulan lulus.

- [x] Template rekomendasi lima fase opsional dan lampiran contoh dosen per tugas: migrasi 0052, lima DOCX tersaji, pilihan acuan/upload dosen, unduhan mahasiswa dan Super beraudit. 17 tes lulus; build OK; halaman tugas nyata Super dan kelima berkas diunduh melalui pemeriksaan HTTP tanpa galat. Tidak mengubah LPPM/Funding atau tugas lama.
- [ ] Uji unggah contoh dosen dan pengumpulan mahasiswa melalui halaman nyata: sesi tersedia hanya Super Admin, bukan dosen/mahasiswa; memerlukan identitas uji yang diizinkan, tidak memberikan role atau bergabung otomatis.

- [x] Permintaan terbaru: keterangan pilihan fase dan ikon, salin kode gabung, nama dosen/anggota, undangan dengan tombol Gabung dan status keanggotaan tanpa bergabung otomatis; 21 tes lulus, build OK, nama anggota nyata dan penolakan kode salah terverifikasi tanpa galat. Tidak mengubah keanggotaan nyata.
- [ ] Verifikasi Gabung berhasil dan dialog Bagikan/Fase pada akun dosen — sesi yang tersedia adalah Super Admin, bukan dosen/anggota kelas; membutuhkan akun uji yang diizinkan, tanpa memberikan role atau bergabung ke kelas nyata otomatis.

- [x] Notifikasi akses dosen: pemicu aktif untuk lonceng dan email hanya saat akses benar-benar diberikan/dicabut; 44 tes terisolasi/regresi lulus dan build OK. Preferensi email/suppression tetap dihormati, retry tidak menggandakan pesan. Tidak mengubah role nyata atau mengirim ulang pemberitahuan akses lama; pengiriman akses sungguhan belum diuji. Inbox email uji sebelumnya telah dikonfirmasi; pengingat tugas tetap nonaktif.

- [x] Tampilan Kelas: navigasi bersama, ringkasan jumlah, filter/pencarian, ilustrasi keadaan kosong, detail/tugas, kelola dosen dan rekomendasi diperbarui tanpa perubahan alur/izin. Empat tes regresi lulus; build OK; sesi pengguna membuka empat halaman dan dialog Gabung tanpa galat, desktop/ponsel tanpa overflow. Detail/tugas berisi data belum diverifikasi karena kelas masih kosong.

- [x] Permintaan terbaru: moderasi publik dan donasi dipisahkan, proyek publik Kelas masuk daftar umum lewat proyeksi aman, draft disimpan sebelum menautkan proyek, riwayat tautan Super lengkap, audit menolak ID kosong, backlog pengingat dilaporkan; 132 tes/22 berkas lulus dan build OK. Alur GCR dijelaskan dalam laporan.
- [ ] Prioritas C–I: implementasi utama tersedia dan 122 tes lulus; belum siap penggunaan penuh — verifikasi dosen/mahasiswa dan storage nyata membutuhkan identitas kelas uji yang diizinkan; pembayaran menunggu koneksi/rahasia; email menunggu alamat dan konfirmasi inbox. Publikasi/donasi/pengingat tidak diaktifkan.

- [x] Crowdfunding Umum: guard moderasi, kontribusi terverifikasi, settlement atomik/idempoten, histori finansial terlindungi; 21 tes lulus termasuk regresi Kelas
- [x] Crowdfunding Umum: halaman daftar/detail, pencarian, tautan proyek, status donasi tertutup dan pengajuan creator tersedia
- [ ] Crowdfunding Umum: pembayaran nyata tertahan — koneksi Stripe dan rahasia verifikasi belum tersedia; jangan menyatakan pembayaran siap
- [ ] Crowdfunding Umum: uji pengajuan/persetujuan akun nyata tertahan — mint sesi --self gagal karena peminta belum punya akun yang cocok; perlu login pratinjau

- [x] Audit pengirim notifikasi: domain send terverifikasi; From existing root; fanout masih notify
- [x] Pengirim email fanout menjadi send, From root sesuai konfigurasi tetap; auth/helper sudah cocok; tiga promosi hanya in-app; 6 tes terisolasi, tanpa replay/pengiriman
- [ ] Pembayaran Kelas — checkout akun-terverifikasi dan settlement atomik/idempoten diterapkan; pengujian layanan nyata tertahan karena koneksi Stripe dan rahasia webhook belum tersedia; flag tetap nonaktif
- [x] Satu email uji — satu email welcome berstatus sent; pengguna mengonfirmasi masuk inbox pada 19 Oktober 2026 04:01 UTC.
- [ ] Pemeriksaan kegagalan email penuh 24 jam — belum tersedia rentang 24 jam setelah perubahan pengirim.

- [x] Langkah 0 Kelas: periksa campaign, donasi, akses, notifikasi, dan email; susun rencana
- [x] Tahap 1 Kelas: skema disetujui dengan revisi 11 tabel dan penerapan bertahap
- [x] Tahap 1(a): lima tabel+role diterapkan; 16 tes terisolasi dan izin database aktual diperiksa; berhenti
- [x] Tahap 1(b.1): class_id/donation_active dan flag publikasi tertutup; enam tes pengunci lolos sebelum lanjut
- [x] Tahap 1(b.2): empat tabel RLS privat; tes dosen/lintas mahasiswa dan dua tambahan (a) lolos sebelum lanjut
- [x] Tahap 1(b.3): tiga kolom verifikasi, indeks unik dan penutupan kontribusi/order kelas; lima tes lolos
- [x] Perbaikan terarah bagian (b): akses setelah keluar kelas diperbaiki; regresi pemilik/dosen/lintas mahasiswa dan bergabung ulang lulus
- [x] Tahap C database: komentar/lampiran privat, audit dan notifikasi lonceng diterapkan; 8 tes terisolasi lulus, total 46 tes database lulus
- [ ] Tahap D (kode tersedia; uji nyata tertahan): editor fase dan inbox Super beraudit tersedia; verifikasi akun nyata dan kelanjutan undangan melalui pendaftaran tertahan karena sesi peminta belum tersedia
- [ ] Tahap E (autosave selesai; storage nyata tertahan): postingan draft/terbit/edit, draft mahasiswa, versi, unggah privat dan unduh 5 menit dibangun; 61 tes terisolasi lulus; uji storage nyata wajib tertahan karena identitas uji belum tersedia; autosave postingan dan verifikasi lintas perangkat mengikuti setelah uji akun
- [ ] Tahap F: balasan/lampiran per postingan dan inbox privat tersedia, unduhan Super beraudit; uji diskusi/unggah nyata tertahan karena tidak ada kelas dan identitas dosen uji yang diizinkan
- [ ] Tahap G: proyek/fase/rekomendasi dan riwayat Super beraudit tersedia; rekomendasi terikat versi. Moderasi publik kini terpisah melalui RPC dan kontrol Super di tab proyek; publikasi tidak membuka donasi, persetujuan donasi hanya menerima campaign active dengan versi graded/eligible. Seluruh aktivasi tetap terkunci; pembayaran nyata tertahan koneksi Stripe/rahasia webhook.
- [ ] Tahap H: dispatch/log, manual 24 jam, H-1 zona waktu, idempotensi dan runner tersedia; belum mengirim/antre email nyata, pengingat nonaktif; menunggu alamat satu email uji dan konfirmasi inbox
- [ ] Tahap I: 132 tes dalam 22 berkas lulus (Kelas, crowdfunding, autosave, LPPM, event); build OK. Sesi pengguna membuka daftar Kelas/Super/rekomendasi dan crowdfunding tanpa galat, ponsel tanpa overflow, tetapi semua kelas kosong: bukan bukti alur end-to-end. Regresi Funding/login penuh, storage nyata dan donasi sandbox belum terverifikasi.
- [x] Pengirim notification_email_fanout diterapkan setelah persetujuan, auth/helper sudah selaras; tanpa pengiriman
- [x] Pengirim payment_reminder menjadi send; nol kegagalan baru no_matching_sender saat pemeriksaan singkat, bukan bukti pemantauan penuh 24 jam
- [ ] Pengingat tugas Kelas tetap nonaktif; syarat inbox telah dikonfirmasi, aktivasi pengingat bukan cakupan notifikasi akses dosen.

- [x] Tampilan LPPM lima fase di seluruh daftar, detail, dan monitoring tanpa mengubah tahap tersimpan
- [x] Buktikan dan koreksi hanya hubungan dokumen lama jika error
- [x] Uji pemetaan fase, tahap tidak dikenal, serta tampilan stepper
- [ ] Verifikasi tampilan LPPM dengan data akun Admin/Super Admin — belum ada sesi; izin sebelumnya ditolak

- [x] Penyimpanan privat dan struktur data advertisement
- [x] Fungsi pengelolaan dan penyajian media
- [x] Modal advertisement responsif setelah login
- [x] Halaman Super Admin, unggah media, dan preview desktop/mobile
- [x] Uji tampilan responsif dan alur pengaturan
- [x] Format pengingat terstruktur dan bebas dengan sapaan otomatis
- [x] Unggah virtual background sebagai tautan unduhan email
- [x] Uji format email, sapaan, keamanan isi, dan penyimpanan draft; pratinjau kedua format diperiksa
- [ ] Uji unggah, simpan, dan kirim melalui akun Admin/Super Admin — menunggu pengguna masuk di pratinjau