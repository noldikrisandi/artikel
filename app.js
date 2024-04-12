// Import modul yang dibutuhkan
const express = require("express");
const path = require("path");

// Inisialisasi Express app
const app = express();

// Set view engine ke EJS
app.set("view engine", "ejs");

// Set folder views sebagai lokasi penyimpanan template EJS
app.set("views", path.join(__dirname, "views"));

// start Middleware............................................................................
// Menggunakan middleware express.static untuk menyajikan file statis dari folder public
app.use(express.static(path.join(__dirname, "public")));

// end Middleware..............................................................................

// Route untuk halaman utama
app.get("/", (req, res) => {
  // Render layout.ejs dengan data konten dari index.ejs
  res.render("layout", { title: "Halaman Utama", content: "index" });
});

app.get("/1", function (req, res) {
  res.sendFile(__dirname + "/index.html"); // Mengirimkan file index.html sebagai halaman utama
});

// start Route healhty.........................................................................
app.get("/healhty/kesehatanAnak", (req, res) => {
  res.render("layout", {
    title: "Healhy",
    content: "healhty/kesehatanAnak/kesehatanAnak",
  });
});
app.get("/healhty/kesehatanRemaja/kesehatanRemaja", (req, res) => {
  res.render("layout", {
    title: "Healhy",
    content: "healhty/kesehatanRemaja/kesehatanRemaja",
  });
});
// end Route healhty...........................................................................

// start Route Edukasi ........................................................................
app.get("/edukasi/puisi/puisi", (req, res) => {
  // Render layout.ejs dengan data konten dari index.ejs
  res.render("layout", {
    title: "Halaman Edukasi",
    content: "edukasi/puisi/puisi",
  });
});

app.get("/edukasi/puisi/puisinatal", (req, res) => {
  // Render layout.ejs dengan data konten dari index.ejs
  res.render("layout", {
    title: "Halaman Puisi Natal",
    content: "edukasi/puisi/puisinatal",
  });
});
app.get("/edukasi/puisi/puisinatal2", (req, res) => {
  res.render("layout", {
    title: "Halaman Puisi Natal",
    content: "edukasi/puisi/puisinatal2",
  });
});
app.get(
  "/edukasi/Tips-cara-mudah-mengerjakan-PR,-dijamin-jawabannya-benar-100%",
  (req, res) => {
    res.render("layout", {
      title: "Tips cara mudah mengerjakan PR, dijamin jawabannya benar 100%",
      content:
        "edukasi/Tips-cara-mudah-mengerjakan-PR,-dijamin-jawabannya-benar-100%",
    });
  }
);
app.get(
  "/edukasi/tips&trik/Cara-untuk-meningkatkan-fokus-saat-belajar-dapatkan-nilai-terbaik",
  (req, res) => {
    res.render("layout", {
      title:
        "Cara untuk meningkatkan fokus saat belajar | dapatkan nilai terbaik",
      content:
        "edukasi/tips&trik/Cara-untuk-meningkatkan-fokus-saat-belajar-dapatkan-nilai-terbaik",
    });
  }
);
app.get(
  "/edukasi/tips&trik/Makanan-yang-bisa-membuat-kamu-menjadi-lebih-cerdas",
  (req, res) => {
    res.render("layout", {
      title: "Makanan yang bisa membuat kamu menjadi lebih cerdas",
      content:
        "edukasi/tips&trik/Makanan-yang-bisa-membuat-kamu-menjadi-lebih-cerdas",
    });
  }
);
app.get(
  "/edukasi/self-improvement/3-Kecerdasan-yang-harus-dikuasai,-jika-kamu-ingin-sukses",
  (req, res) => {
    res.render("layout", {
      title: "3 Kecerdasan yang harus dikuasai, jika kamu ingin sukses",
      content:
        "edukasi/self-improvement/3-Kecerdasan-yang-harus-dikuasai,-jika-kamu-ingin-sukses",
    });
  }
);
app.get(
  "/edukasi/self-improvement/Hal-yang-wajib-kamu-ketahui-saat-pertama-kali-masuk-kerja",
  (req, res) => {
    res.render("layout", {
      title: "Hal yang wajib kamu ketahui saat pertama kali masuk kerja",
      content:
        "edukasi/self-improvement/Hal-yang-wajib-kamu-ketahui-saat-pertama-kali-masuk-kerja",
    });
  }
);

// end route edukasi...........................................................................

// start route ayah-bunda .....................................................................
app.get(
  "/Ayah-Bunda/tentang-bayi/Gizi-yang-dibutuhkan-bayi-pada-usia-0-bulan-sampai-12-bulan",
  (req, res) => {
    res.render("layout", {
      title: "Gizi yang dibutuhkan bayi pada usia 0 bulan sampai 12 bulan",
      content:
        "Ayah-Bunda/tentang-bayi/Gizi-yang-dibutuhkan-bayi-pada-usia-0-bulan-sampai-12-bulan",
    });
  }
);
app.get(
  "/Ayah-Bunda/tentang-bayi/Dampak-positif-negatif-menjemur-bayi-menurut-para-ahli",
  (req, res) => {
    res.render("layout", {
      title: "Dampak positif negatif menjemur bayi, menurut para ahli",
      content:
        "Ayah-Bunda/tentang-bayi/Dampak-positif-negatif-menjemur-bayi-menurut-para-ahli",
    });
  }
);
app.get(
  "/Ayah-Bunda/tentang-bayi/Apa-yang-harus-dilakukan-agar-bayi-tumbuh-sehat-dan-cerdas",
  (req, res) => {
    res.render("layout", {
      title: "Apa Yang Harus Dilakukan Agar Bayi Tumbuh Sehat Dan Cerdas?",
      content:
        "Ayah-Bunda/tentang-bayi/Apa-yang-harus-dilakukan-agar-bayi-tumbuh-sehat-dan-cerdas",
    });
  }
);
// end route ayah-bunda .......................................................................

// Jalankan server pada port 3000
app.listen(3000, () => {
  console.log("Server berjalan pada http://localhost:3000/");
});
