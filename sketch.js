let P = [];
let t = [];
let r; // Materi Kelas: input user
let KInput; // Input user untuk K
let K = 300; // Tugas: r dan K input user

// Ini juga bisa jadi input
let P0 = 20;
let dt = 0.1;
let tMax = 10;

let grafik; // Chart JS

function setup() {
  createCanvas(400, 400);

  r = createInput("0.8"); // Input default adalah 0.8
  r.position(200, 420);
  let p = createP("Konstanta pertumbuhan"); // Teks biasa
  p.style('font-size', '14px');
  p.position(200, 380);

  KInput = createInput("300"); // Input default untuk K adalah 300
  KInput.position(20, 420);
  let kLabel = createP("K (Kapasitas Lingkungan)"); // Teks untuk K
  kLabel.style('font-size', '14px');
  kLabel.position(20, 380);

  grafik = new Chart(this, config);

  solve(); // Untuk inisiasi, jalankan terlebih dahulu solve()
  r.changed(solve); // Jika input r berganti, jalankan fungsi solve
  KInput.changed(solve); // Jika input K berganti, jalankan fungsi solve
}

function draw() {
  background(220);

  grafik.update();
}

function solve() {

  P[0] = P0;
  t[0] = 0;
  rs = float(r.value());
  K  = float(KInput.value()); // Ubah nilai K sesuai input pengguna
  let iterNum = int(tMax / dt);

  for (i = 0; i < iterNum; i++) {
    P[i + 1] = P[i] + dt * rs * P[i] * (1 - P[i] / K);
    t[i + 1] = (i + 1) * dt;
  }
}
