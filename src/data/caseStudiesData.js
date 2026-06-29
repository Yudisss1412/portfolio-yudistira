// Case Studies Data Configuration
export const caseStudies = {
  akrab: {
    id: "akrab",
    category: "Management & E-Commerce",
    title: "Akrab — Empowering the UMKM Ecosystem through Digital Transformation",
    featuredImage: "/akrab-admin-dashboard.png",
    role: "Lead Fullstack Developer",
    industry: "Retail & E-Commerce",
    githubUrl: "https://github.com/Yudisss1412/akrab",
    liveUrl: "https://akrab-production-9a4e.up.railway.app/",
    vision: "Platform E-Commerce AKRAB merupakan solusi digital terintegrasi yang dirancang untuk mendigitalisasi ekosistem perdagangan pada Paguyuban UMKM AKRAB di Banyuwangi. Proyek ini dibangun dengan fokus pada kemudahan pengelolaan inventaris dan perluasan jangkauan pasar bagi para pelaku usaha lokal melalui antarmuka yang modern dan fungsional.",
    problems: [
      "Pencatatan inventaris gudang yang masih manual menggunakan kertas, rentan terhadap selisih stok.",
      "Sulitnya melakukan rekapitulasi data transaksi penjualan dari berbagai cabang secara real-time.",
      "Kurangnya media promosi digital terpusat yang memudahkan pembeli luar daerah melihat katalog produk lokal."
    ],
    solutions: [
      "Membangun dashboard admin terpusat dengan sistem kontrol manajemen stok otomatis.",
      "Integrasi modul pencatatan transaksi yang merekam setiap aktivitas kas masuk dan keluar secara instan.",
      "Menyediakan halaman katalog publik responsif yang dapat diakses dengan cepat di perangkat mobile dan desktop."
    ],
    technologies: [
      { name: "Laravel", desc: "Core Backend & MVC Routing" },
      { name: "MySQL", desc: "Database Relasional untuk Integritas Data" },
      { name: "Tailwind CSS", desc: "Desain Antarmuka Modern & Responsif" },
      { name: "JavaScript", desc: "Interaktivitas Client-Side & DOM Manipulation" }
    ],
    mockups: [
      {
        title: "Dashboard Admin",
        description: "Panel admin terpusat untuk memantau ringkasan penjualan, transaksi, dan stok barang menipis.",
        image: "/akrab-admin-dashboard.png"
      },
      {
        title: "Katalog Produk",
        description: "Halaman katalog utama dengan fitur pencarian dan filter kategori produk UMKM.",
        image: "/akrab-katalog-produk.png"
      },
      {
        title: "Keranjang Belanja",
        description: "Fitur keranjang belanja interaktif yang memungkinkan pengguna menambah dan mengubah jumlah pesanan.",
        image: "/akrab-keranjang-belanja.png"
      },
      {
        title: "Halaman Checkout",
        description: "Formulir pemesanan terintegrasi dengan ringkasan biaya sebelum proses checkout.",
        image: "/akrab-halaman-checkout.png"
      },
      {
        title: "Manajemen Inventaris",
        description: "Modul khusus admin untuk mempermudah restock barang dan mengedit detail produk.",
        image: "/akrab-manajemen-inventaris.png"
      }
    ]
  },
  tanitalk: {
    id: "tanitalk",
    category: "Agricultural Web Portal",
    title: "TaniTalk V2 — Empowering Local Farmers Communities",
    featuredImage: "/portfolio-yudistira/zumb-homepage-booking.png", // fallback placeholder
    role: "Backend & Database Developer",
    industry: "Agriculture & Tech",
    githubUrl: "#",
    liveUrl: "#",
    vision: "TaniTalk V2 merupakan platform portal informasi pertanian berbasis web yang dirancang khusus untuk memberdayakan komunitas petani lokal. Platform ini menyediakan akses mudah ke tips bertani, info harga komoditas terupdate, dan forum diskusi untuk saling berbagi pengalaman.",
    problems: [
      "Kurangnya akses informasi berkala mengenai tips penanganan hama dan penyakit tanaman.",
      "Fluktuasi harga pasar komoditas tani yang tidak transparan bagi petani di pedesaan.",
      "Terbatasnya ruang komunikasi antarpetani untuk berdiskusi dan berbagi pengalaman bercocok tanam."
    ],
    solutions: [
      "Menyediakan sistem manajemen artikel tips bertani terintegrasi yang dikurasi oleh admin ahli.",
      "Membangun modul harga pasar real-time untuk transparansi harga komoditas utama.",
      "Membuat modul forum diskusi/komunitas interaktif dengan fitur kategori topik pertanian."
    ],
    technologies: [
      { name: "PHP 8", desc: "Core backend scripting tanpa framework" },
      { name: "MySQL", desc: "Database penyimpanan relasi user, artikel, dan forum" },
      { name: "CSS3", desc: "Desain antarmuka kustom yang bersih dan fungsional" },
      { name: "JavaScript", desc: "DOM manipulation untuk interaktivitas dinamis" }
    ],
    mockups: [
      {
        title: "Homepage Portal",
        description: "Halaman beranda utama menyajikan informasi tips bertani dan harga pasar terpopuler.",
        image: "/zumb-homepage-booking.png"
      },
      {
        title: "Forum Diskusi",
        description: "Halaman diskusi komunitas tempat petani saling mengajukan pertanyaan dan berbagi solusi.",
        image: "/zumb-rating-review.png"
      }
    ]
  },
  imk_clothing: {
    id: "imk_clothing",
    category: "Responsive E-Commerce",
    title: "IMK Clothing Store — Clean and Modern Frontend Shop Experience",
    featuredImage: "/Screenshot (1895).png",
    role: "Frontend Developer",
    industry: "Fashion & Retail",
    githubUrl: "#",
    liveUrl: "#",
    vision: "Proyek akademik yang berfokus pada perancangan antarmuka toko pakaian online modern dari nol menggunakan vanilla HTML, CSS, dan JavaScript. Menekankan prinsip kegunaan (usability) dan layout responsif untuk memberikan pengalaman belanja yang optimal bagi pelanggan.",
    problems: [
      "Desain e-commerce yang sering kali terlalu rumit dan membingungkan pengguna baru.",
      "Tampilan web e-commerce yang lambat dibuka atau rusak saat diakses melalui smartphone.",
      "Sulitnya mendesain form login yang menarik dan aman secara visual tanpa framework CSS."
    ],
    solutions: [
      "Merancang layout minimalis dengan struktur hirarki informasi yang rapi dan mudah dinavigasi.",
      "Menggunakan CSS Flexbox dan Media Queries kustom untuk memastikan responsivitas 100%.",
      "Membuat modal login interaktif dengan animasi CSS bertransisi halus."
    ],
    technologies: [
      { name: "HTML5", desc: "Struktur semantik dokumen web" },
      { name: "CSS3", desc: "Desain layout Grid/Flexbox dan animasi hover kustom" },
      { name: "Vanilla JS", desc: "Manajemen event DOM untuk modal login dan navigasi" },
      { name: "Font Awesome", desc: "Perpustakaan ikon grafis modern" }
    ],
    mockups: [
      {
        title: "Homepage Catalog",
        description: "Tampilan utama toko dengan katalog produk terpopuler dan banner promo.",
        image: "/Screenshot (1895).png"
      },
      {
        title: "Login Modal",
        description: "Popup modal login interaktif dengan form validasi sisi klien.",
        image: "/Screenshot (1896).png"
      },
      {
        title: "Product Detail",
        description: "Detail spesifikasi pakaian dengan galeri gambar dan tombol keranjang.",
        image: "/Screenshot (1897).png"
      }
    ]
  },
  zumb: {
    id: "zumb",
    category: "Restaurant Reservation",
    title: "Zumb Restaurant — Immersive Dine-In Booking System",
    featuredImage: "/zumb-homepage-booking.png",
    role: "Frontend Designer & Developer",
    industry: "Food & Hospitality",
    githubUrl: "#",
    liveUrl: "#",
    vision: "Zumb Restaurant adalah proyek desain web restoran keluarga yang memadukan menu makanan interaktif, keranjang belanja dengan penghitung subtotal otomatis, serta formulir reservasi meja (booking) instan untuk menghadirkan kenyamanan bagi pelanggan dine-in.",
    problems: [
      "Sulitnya melakukan pemesanan meja secara online tanpa harus menelepon restoran secara manual.",
      "Menu makanan statis yang tidak menampilkan detail harga dan ketersediaan bahan secara interaktif.",
      "Keranjang belanja pesanan makanan yang sering membingungkan pelanggan terkait total harga sebelum pajak."
    ],
    solutions: [
      "Membangun form booking meja interaktif dengan pemilihan tanggal, waktu, dan jumlah tamu.",
      "Merancang menu makanan modern berbasis CSS Grid dengan tag harga dan status ketersediaan bahan.",
      "Implementasi modul shopping cart berbasis JS yang melakukan perhitungan harga otomatis secara real-time."
    ],
    technologies: [
      { name: "HTML5", desc: "Struktur dokumen situs" },
      { name: "CSS3", desc: "Efek animasi, CSS Grid, dan variabel kustom" },
      { name: "JavaScript", desc: "Perhitungan transaksi keranjang belanja dan status meja" }
    ],
    mockups: [
      {
        title: "Homepage & Reservation",
        description: "Halaman utama restoran lengkap dengan formulir instan pemesanan meja.",
        image: "/zumb-homepage-booking.png"
      },
      {
        title: "Food Menu Grid",
        description: "Daftar menu andalan dengan desain grid yang menarik minat kuliner pembaca.",
        image: "/zumb-food-menu.png"
      },
      {
        title: "Shopping Cart",
        description: "Popup keranjang belanja pesanan makanan beserta kalkulator total harga otomatis.",
        image: "/zumb-shopping-cart.png"
      },
      {
        title: "Payment Methods",
        description: "Pilihan metode pembayaran (Cash, E-Money, Card) untuk kemudahan transaksi.",
        image: "/zumb-payment-method.png"
      },
      {
        title: "Reviews",
        description: "Sistem ulasan bintang dan testimoni dari pelanggan setia Zumb Restaurant.",
        image: "/zumb-rating-review.png"
      }
    ]
  },
  vending_machine: {
    id: "vending_machine",
    category: "Analytics Dashboard",
    title: "KM Vending Machine Dashboard — Multi-Location Monitoring Tool",
    featuredImage: "/Home (2).png",
    role: "Lead Frontend Engineer",
    industry: "IoT & Analytics",
    githubUrl: "https://github.com/Kampus-Merdeka-Software-Engineering/km-feb24-jakarta-3",
    liveUrl: "https://github.com/Kampus-Merdeka-Software-Engineering/km-feb24-jakarta-3",
    vision: "Dashboard pemantauan dan analisis performa mesin penjual otomatis (vending machine) multi-lokasi yang dibuat selama program Kampus Merdeka. Menghadirkan visualisasi data yang kaya, manajemen stok inventaris mesin, dan penyesuaian tema kustom untuk operasional harian.",
    problems: [
      "Pemilik vending machine kesulitan memantau sisa stok produk di masing-masing lokasi secara jarak jauh.",
      "Kurangnya grafik ringkasan penjualan harian/mingguan yang terstruktur untuk bahan evaluasi bisnis.",
      "Kebutuhan pengujian performa UI dashboard di berbagai perangkat layar (mobile, tablet, PC) oleh tim QA."
    ],
    solutions: [
      "Implementasi sistem visualisasi stok inventaris per mesin penjual otomatis.",
      "Membuat widget ringkasan pendapatan, transaksi, dan produk terlaris dengan penyaringan filter.",
      "Menambahkan simulator preview responsif (Layout Toggler) yang mengubah ukuran layar dashboard dalam satu klik."
    ],
    technologies: [
      { name: "HTML5", desc: "Penyusunan dashboard layout" },
      { name: "CSS3", desc: "Variabel warna tema kustom, preview frame, dan layout responsif" },
      { name: "JavaScript", desc: "Filtering data dinamis dan manipulasi DOM lokal" },
      { name: "JSON Data Source", desc: "Data dummy penunjang visualisasi dashboard" }
    ],
    mockups: [
      {
        title: "Dashboard Overview",
        description: "Halaman utama visualisasi grafik total transaksi, pendapatan, dan stok produk.",
        image: "/Home (2).png"
      },
      {
        title: "Landing Page",
        description: "Halaman pengantar portal monitoring vending machine.",
        image: "/Intro.png"
      },
      {
        title: "Login Page",
        description: "Autentikasi admin dashboard menggunakan standard input validation.",
        image: "/Login.png"
      },
      {
        title: "Create Account",
        description: "Formulir pendaftaran admin baru dengan kustomisasi preferensi tema.",
        image: "/Create Account.png"
      },
      {
        title: "About Us",
        description: "Halaman profil tim pengembang dan informasi tujuan proyek perangkat lunak.",
        image: "/About Us.png"
      }
    ]
  },
  wms_admin: {
    id: "wms_admin",
    category: "Warehouse Administration",
    title: "Mukti Sari WMS Admin — Next.js Enterprise Warehouse Management Dashboard",
    featuredImage: "/mukti-sari-wms-dashboard.png",
    role: "Frontend Developer",
    industry: "Logistics & Supply Chain",
    githubUrl: "#",
    liveUrl: "#",
    vision: "Mukti Sari WMS Admin adalah dashboard administrasi canggih berbasis Next.js App Router yang dirancang khusus untuk mengelola operasional logistik gudang Mukti Sari Group. Berfokus pada kemudahan melacak stok masuk/keluar, shift kerja operator, dan laporan penjualan.",
    problems: [
      "Aplikasi internal gudang yang rumit digunakan dan tidak ramah bagi operator gudang di lapangan.",
      "Kebutuhan tabel data yang dinamis yang bisa memuat ribuan baris data produk tanpa performa menurun.",
      "Sulitnya melakukan koordinasi shift kerja operator gudang dengan log pergantian stok barang masuk."
    ],
    solutions: [
      "Merancang antarmuka bersih dengan navigasi sidebar intuitif dan responsive mobile shell.",
      "Membangun komponen Reusable Data Table dengan pencarian cepat, laci filter, dan paginasi.",
      "Menyediakan halaman stok opname, movement, dan log shift operator gudang terintegrasi."
    ],
    technologies: [
      { name: "Next.js 14", desc: "App Router untuk perutean modul admin yang cepat" },
      { name: "React 18", desc: "Pembuatan komponen UI modular" },
      { name: "Tailwind CSS", desc: "Desain sistem UI admin yang rapi dan konsisten" },
      { name: "Bun", desc: "Package manager berkinerja tinggi" }
    ],
    mockups: [
      {
        title: "Dashboard Overview",
        description: "Ringkasan total produk, status stok menipis, log shift operator, dan grafik penjualan harian.",
        image: "/mukti-sari-wms-dashboard.png"
      },
      {
        title: "Login Page",
        description: "Halaman login dengan branding korporasi Mukti Sari Group.",
        image: "/mukti-sari-wms-login.png"
      },
      {
        title: "Master Data Produk",
        description: "Tabel data produk gudang lengkap dengan fitur edit varian harga dan barcode.",
        image: "/mukti-sari-wms-master-produk.png"
      },
      {
        title: "Stok Barang",
        description: "Modul pelacakan stok opname dan riwayat pergerakan logistik gudang.",
        image: "/mukti-sari-wms-stok-barang.png"
      },
      {
        title: "Shift Operator",
        description: "Jadwal dan status shift kerja operator gudang serta pelaporan kas masuk harian.",
        image: "/mukti-sari-wms-shift.png"
      }
    ]
  },
  zoneinsticnt: {
    id: "zoneinsticnt",
    category: "UI/UX Research & Design",
    title: "Zoneinsticnt WMS — Shoe Manufacture Mobile App Prototype",
    featuredImage: "/iPhone 14 & 15 Pro Max - 3 HOMEPAGE.png",
    role: "UI/UX Researcher & Designer",
    industry: "Manufacturing & Design",
    githubUrl: "https://www.figma.com/design/6S15rLbwzVObcvKWb9bUan/Project---Pandawa-Team?node-id=0-1&p=f&t=6BQAqnCkAj0bC4aU-0",
    liveUrl: "https://www.figma.com/proto/6S15rLbwzVObcvKWb9bUan/Project---Pandawa-Team?node-id=0-1&t=6BQAqnCkAj0bC4aU-1",
    vision: "Desain dan prototipe interaktif aplikasi mobile Warehouse Management System (WMS) untuk manufaktur sepatu yang dirancang menggunakan Figma. Dibuat selama program MSIB di PT Stechoq Robotika Indonesia dengan menerapkan metode Design Thinking untuk menghasilkan UX yang efisien bagi pekerja gudang.",
    problems: [
      "Pekerja gudang kesulitan mencatat masuk-keluar ribuan jenis tipe sepatu secara cepat dan akurat.",
      "Penentuan lokasi rak penyimpanan sepatu yang tidak beraturan sehingga menghabiskan waktu pencarian barang.",
      "Kebutuhan visualisasi desain yang siap diuji ke pengguna sebelum masuk ke tahap pengembangan kode."
    ],
    solutions: [
      "Mengintegrasikan fitur kamera pemindai barcode untuk lookup data produk instan lewat ponsel.",
      "Merancang peta sebaran stok gudang (Stock Monitoring) dengan sistem prioritas rak FIFO.",
      "Membangun High-Fidelity Prototype interaktif di Figma lengkap dengan transitions dan micro-interactions."
    ],
    technologies: [
      { name: "Figma", desc: "Pembuatan User Flow, Wireframe, Design System, dan Prototipe" },
      { name: "Design Thinking", desc: "Framework riset (Empathize, Define, Ideate, Prototype, Test)" },
      { name: "Usability Testing", desc: "Validasi kenyamanan desain dengan metrik penyelesaian tugas" }
    ],
    mockups: [
      {
        title: "Mobile Homepage",
        description: "Tampilan beranda utama aplikasi gudang di perangkat mobile.",
        image: "/iPhone 14 & 15 Pro Max - 3 HOMEPAGE.png"
      },
      {
        title: "Barcode Scanner",
        description: "Desain antarmuka scan barcode cepat untuk memeriksa info barang masuk/keluar.",
        image: "/original-08b320e17be7ee148af1614a41c3a01a.png"
      },
      {
        title: "Stock Monitoring",
        description: "Halaman daftar stok barang dengan navigasi pencarian instan.",
        image: "/inventory list row hover.png"
      },
      {
        title: "Order Shipping & Tracking",
        description: "Halaman pemantauan rincian pengiriman barang dari gudang.",
        image: "/iPhone 14 & 15 Pro Max - 3 Tracking.png"
      },
      {
        title: "Inventory Dropdowns",
        description: "Elemen navigasi dropdown detail kategori sepatu untuk memudahkan sorting data.",
        image: "/inventory list drop downs.png"
      }
    ]
  },
  galeri_seni: {
    id: "galeri_seni",
    category: "Interactive Art Exhibition",
    title: "Galeri Seni Studio — Contemporary Art Exhibition & Audio Guide Portal",
    featuredImage: "/galeri-seni-home.png",
    role: "Lead Fullstack Developer",
    industry: "Art, Education & Web",
    githubUrl: "#",
    liveUrl: "#",
    vision: "Galeri Seni Studio merupakan platform eksibisi seni kontemporer berbasis web yang dirancang untuk memamerkan koleksi lukisan secara dinamis. Platform ini menghadirkan pengalaman visual sinematik dengan splash loader interaktif, 3D carousel, scroll horizontal untuk karya unggulan, dan fitur panduan audio terintegrasi untuk menceritakan filosofi setiap lukisan.",
    problems: [
      "Eksibisi seni online yang terasa statis dan kurang memberikan kesan emosional seperti berkunjung langsung.",
      "Pembaca kesulitan memahami makna filosofis karya seni lukis jika hanya berupa teks keterangan singkat.",
      "Layout situs seni yang kaku dan tidak memanjakan mata penikmat visual seni rupa kontemporer."
    ],
    solutions: [
      "Membangun transisi visual dinamis seperti splash screen loader progresif dan 3D carousel.",
      "Menyediakan panduan audio deskriptif terintegrasi di setiap karya lukis utama.",
      "Merancang layout bernuansa minimalis-sinematik dengan skema warna kontras gelap-terang."
    ],
    technologies: [
      { name: "Laravel 12", desc: "Kerangka Backend modern dengan routing efisien" },
      { name: "Blade Templating", desc: "UI render struktur layout halaman" },
      { name: "Tailwind CSS v4", desc: "Sistem desain web minimalis modern" },
      { name: "JavaScript & Swiper", desc: "Interaksi 3D carousel dan fluid layouts" },
      { name: "Framer Motion", desc: "Transisi animasi halaman yang halus" }
    ],
    mockups: [
      {
        title: "Homepage Gallery",
        description: "Halaman depan galeri seni yang menyajikan 3D Carousel lukisan terpopuler dan Splash Loader.",
        image: "/galeri-seni-home.png"
      },
      {
        title: "Virtual Gallery Collection",
        description: "Daftar eksibisi lukisan kurasi lengkap dengan filter klasifikasi media lukis.",
        image: "/galeri-seni-gallery.png"
      },
      {
        title: "Artwork Detail & Audio Guide",
        description: "Halaman deskripsi lukisan Mimpi di Musim Gugur dengan kontrol pemutar audio penjelasan filosofi.",
        image: "/galeri-seni-detail.png"
      },
      {
        title: "Art Journal",
        description: "Blog kumpulan artikel ulasan perkembangan kesenian kontemporer dari kurator studio.",
        image: "/galeri-seni-journal.png"
      },
      {
        title: "Online Viewing Room (OVR)",
        description: "Ruang eksklusif digital dengan efek visual horizontal scroll lukisan resolusi tinggi.",
        image: "/galeri-seni-ovr.png"
      }
    ]
  },
  saas_serangkai: {
    id: "saas_serangkai",
    category: "Integrated Business SaaS ERP",
    title: "SaaS Serangkai — All-In-One Enterprise Business Operations Ecosystem",
    featuredImage: "/serangkai-home.png",
    role: "Fullstack Web Architect",
    industry: "B2B, SaaS & Enterprise ERP",
    githubUrl: "#",
    liveUrl: "#",
    vision: "SaaS Serangkai adalah ekosistem operasional bisnis terintegrasi all-in-one yang menghubungkan manajemen HR (Serangkai Talenta), pembukuan & akuntansi (Serangkai Jurnal), serta manajemen inventaris & rantai pasok (Serangkai Kelola). Platform ini dibangun untuk membantu transformasi digital operasional perusahaan skala UMKM hingga Enterprise.",
    problems: [
      "Perusahaan terpaksa membeli banyak software terpisah untuk HR, Keuangan, dan Gudang yang datanya tidak saling sinkron.",
      "Proses kalkulasi penggajian (payroll) karyawan yang sering terjadi human-error akibat data absensi terpisah.",
      "Stok inventaris gudang yang terjual tidak langsung terpotong di pencatatan keuangan akuntansi."
    ],
    solutions: [
      "Mengintegrasikan seluruh divisi bisnis (HR, Akuntansi, Gudang) dalam satu dashboard terpusat.",
      "Otomatisasi penggajian (payroll) bulanan yang terkoneksi langsung dengan absensi digital karyawan.",
      "Sinkronisasi real-time antara stok barang terjual dengan pencatatan harga pokok penjualan (HPP) pembukuan."
    ],
    technologies: [
      { name: "Laravel 12", desc: "Core Backend Engine, REST API, & Data Security" },
      { name: "Tailwind CSS", desc: "Desain sistem UI dashboard ERP yang bersih" },
      { name: "Vite & Vanilla JS", desc: "Kompilasi aset super cepat dan interaktivitas frontend" },
      { name: "AWS Services", desc: "Hosting cloud server lokal Jakarta berkecepatan tinggi" },
      { name: "MySQL", desc: "Database penyimpanan relasi transaksional korporasi" }
    ],
    mockups: [
      {
        title: "SaaS Homepage",
        description: "Landing page utama SaaS Serangkai dengan visualisasi interaktif ekosistem bisnis.",
        image: "/serangkai-home.png"
      },
      {
        title: "ERP Modules & Products",
        description: "Modul utama yang mencakup sistem Talenta, Jurnal, dan Kelola.",
        image: "/serangkai-produk.png"
      },
      {
        title: "Pricing & Plans",
        description: "Skema paket harga berlangganan interaktif yang disesuaikan skala operasional perusahaan.",
        image: "/serangkai-harga.png"
      },
      {
        title: "Business Solutions",
        description: "Halaman detail solusi untuk segmen UMKM, Menengah, dan Korporasi Enterprise.",
        image: "/serangkai-solusi.png"
      },
      {
        title: "Resource Center & Insights",
        description: "Dokumentasi bantuan, panduan tutorial, dan integrasi OpenAPI pengembang.",
        image: "/serangkai-insights.png"
      }
    ]
  }
};
