export function createApp() {
  const businessInfo = {
    name: "Warung Makan Bu Sari",
    type: "Food & Beverage",
    description: "Warung makan tradisional yang menyajikan masakan Jawa autentik dengan resep turun temurun. Spesialisasi gudeg, soto ayam, dan nasi pecel dengan sambal khas yang pedas dan gurih.",
    phone: "+6281234567890",
    whatsapp: "https://wa.me/6281234567890",
    email: "info@warungmakanbusari.com",
    address: "Jl. Raya Contoh No. 123, Kota, Provinsi",
    hours: "Senin - Minggu: 08:00 - 22:00",
    social: {
      instagram: "@warungmakanbusari",
      facebook: "Warung Makan Bu Sari",
      tiktok: "@warungmakanbusari"
    }
  };

  const menu = [
    {name: "Gudeg Komplit", price: 35000, description: "Gudeg nangka, ayam kampung, telur, krecek, sambal goreng krecek"},
    {name: "Gudeg Telur", price: 25000, description: "Gudeg nangka, telur, sambal goreng krecek"},
    {name: "Soto Ayam Kampung", price: 30000, description: "Soto ayam kampung dengan kuah kaldu rempah yang kaya rasa"},
    {name: "Nasi Pecel", price: 18000, description: "Nasi hangat dengan berbagai sayuran segar dan sambal khas Bu Sari"},
    {name: "Sate Kambing", price: 40000, description: "Sate kambing yang empuk dan lezat, disajikan dengan bumbu kacang"},
    {name: "Bakmi Jawa", price: 22000, description: "Bakmi Jawa dengan cita rasa gurih dan sedikit manis"},
    {name: "Sayur Asem", price: 15000, description: "Sayur asem dengan rasa asam segar dan sedikit pedas"},
    {name: "Es Teh Manis", price: 5000, description: "Minuman segar untuk menemani hidangan Anda"},
    {name: "Es Jeruk", price: 7000, description: "Minuman segar dari perasan jeruk asli"},
    {name: "Teh Hangat", price: 5000, description: "Teh hangat yang nikmat untuk menghangatkan tubuh"},
    {name: "Kopi Susu", price: 8000, description: "Kopi susu yang creamy dan nikmat"},
    {name: "Jus Alpukat", price: 12000, description: "Jus alpukat yang segar dan kaya nutrisi"},
    {name: "Wedang Uwuh", price: 10000, description: "Minuman tradisional Jawa yang hangat dan rempah"},
    {name: "Ayam Goreng Kremes", price: 30000, description: "Ayam goreng dengan tekstur kulit yang renyah"},
    {name: "Ikan Bakar", price: 45000, description: "Ikan bakar pilihan dengan bumbu rempah yang lezat"},
    {name: "Paket Hemat A (Gudeg + Es Teh)", price: 38000, description: "Paket hemat Gudeg Komplit + Es Teh Manis"},
    {name: "Paket Hemat B (Soto Ayam + Nasi)", price: 33000, description: "Paket hemat Soto Ayam Kampung + Nasi Putih"}

  ];

  const testimonials = [
    {name: "Budi Santoso", review: "Rasanya sangat autentik! Seperti masakan ibu saya sendiri.  Sambalnya juara!"},
    {name: "Ani Lestari", review: "Tempatnya nyaman, pelayanan ramah, dan makanan enak banget!  Sukses terus Bu Sari!"},
    {name: "Rudi Hartono", review: "Gudegnya paling enak di kota ini!  Saya selalu pesan online untuk keluarga."},
    {name: "Siti Aminah", review: "Suka banget sama soto ayamnya, kuahnya gurih dan ayamnya empuk.  Porsi besar juga!"},
    {name: "Joko Widodo", review: "Warung Makan Bu Sari adalah pilihan tepat untuk menikmati masakan Jawa yang lezat dan autentik. Rekomendasi banget!"}
  ];


  const aboutContent = `
    <p class="text-lg text-gray-800 mb-4">Warung Makan Bu Sari berdiri sejak tahun 1985, berawal dari sebuah warung kecil di pinggir jalan yang dikelola oleh Ibu Sari.  Dengan resep turun temurun dari nenek moyangnya, Ibu Sari berhasil menciptakan cita rasa masakan Jawa yang autentik dan memikat hati banyak pelanggan.  Keahliannya dalam mengolah bumbu rempah-rempah menghasilkan hidangan yang kaya rasa, gurih, dan pedas yang pas di lidah.</p>
    <p class="text-lg text-gray-800 mb-4">Visi kami adalah menjadi warung makan tradisional ternama di kota ini yang tetap mempertahankan kualitas rasa dan keramahan pelayanan. Kami berkomitmen untuk selalu menggunakan bahan-bahan segar dan berkualitas tinggi dalam setiap hidangan.  Misi kami adalah untuk melestarikan cita rasa masakan Jawa dan memberikan pengalaman kuliner yang tak terlupakan bagi setiap pelanggan.</p>
    <p class="text-lg text-gray-800 mb-4">Nilai-nilai yang kami junjung tinggi adalah kejujuran, keramahan, kebersihan, dan kualitas.  Kami selalu berusaha untuk memberikan pelayanan terbaik dan menciptakan suasana yang nyaman bagi para pelanggan.  Tim kami terdiri dari para koki berpengalaman dan staf yang ramah dan profesional, yang selalu siap untuk melayani Anda dengan sepenuh hati. Ibu Sari sendiri masih aktif di dapur, memastikan setiap hidangan tercipta dengan sempurna.</p>
    <p class="text-lg text-gray-800 mb-4">Filosofi masakan kami adalah untuk menciptakan hidangan yang tidak hanya lezat, tetapi juga menyehatkan dan penuh cinta.  Kami percaya bahwa makanan adalah bagian penting dari kehidupan, dan setiap hidangan yang kami sajikan adalah wujud rasa syukur kami kepada Tuhan Yang Maha Esa. Resep-resep turun temurun kami jaga agar tetap autentik, dengan sentuhan modernisasi dalam penyajian. </p>
    <img src="chef_photo.jpg" alt="Chef Profile" class="w-64 h-auto mx-auto rounded-lg shadow-md mt-6 mb-4">
  `;

  const servicesContent = `
    <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center">Menu Lengkap</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${menu.map(item => `
        <div class="bg-white shadow-md rounded-lg p-6">
          <h3 class="text-xl font-bold text-gray-800 mb-2">${item.name}</h3>
          <p class="text-gray-700 mb-2">${item.description}</p>
          <p class="text-gray-900 font-bold">Rp ${item.price}</p>
        </div>
      `).join('')}
    </div>
  `;

  const testimonialsContent = `
    <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center">Testimoni Pelanggan</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${testimonials.map(item => `
        <div class="bg-white shadow-md rounded-lg p-6">
          <p class="text-gray-700 italic mb-2">"${item.review}"</p>
          <p class="text-gray-800 font-bold">- ${item.name}</p>
        </div>
      `).join('')}
    </div>
  `;

  const contactContent = `
    <h2 class="text-3xl font-bold text-gray-200 mb-4 text-center">Hubungi Kami</h2>
    <div class="max-w-2xl mx-auto text-center">
        <p class="text-gray-200 mb-4">${businessInfo.address}</p>
        <p class="text-gray-200 mb-4">Jam Operasional: ${businessInfo.hours}</p>
        <p class="text-gray-200 mb-4">Telepon: ${businessInfo.phone}</p>
        <p class="text-gray-200 mb-4">Email: ${businessInfo.email}</p>
        <a href="${businessInfo.whatsapp}" class="text-gray-300 hover:text-gray-100" target="_blank">WhatsApp</a>
    </div>
    <!-- Map Embed would go here -->
  `;

  const footerContent = `
    <div class="text-center py-4">
      <p class="text-gray-400 text-sm">&copy; ${new Date().getFullYear()} Warung Makan Bu Sari. All rights reserved.</p>
      <div class="flex justify-center space-x-4 mt-2">
        <a href="${businessInfo.social.instagram}" target="_blank" class="text-gray-300 hover:text-gray-100">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="${businessInfo.social.facebook}" target="_blank" class="text-gray-300 hover:text-gray-100">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="${businessInfo.social.tiktok}" target="_blank" class="text-gray-300 hover:text-gray-100">
          <i class="fab fa-tiktok"></i>
        </a>
      </div>
    </div>
  `;


  return `
    <!DOCTYPE html>
    <html lang="id" class="scroll-smooth">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${businessInfo.name}</title>
      <meta name="description" content="${businessInfo.description}">
      <meta name="keywords" content="Food & Beverage, Warung Makan Bu Sari, Indonesia, Masakan Jawa, Gudeg, Soto Ayam, Nasi Pecel">
      <meta property="og:title" content="${businessInfo.name}">
      <meta property="og:description" content="${businessInfo.description}">
      <meta property="og:type" content="business.business">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    </head>
    <body class="font-sans bg-gray-50">
      ${/*NAVIGATION HEADER*/`
      <nav class="bg-white shadow-lg fixed w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <h1 class="text-2xl font-bold text-gray-900">${businessInfo.name}</h1>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="#home" class="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#menu" class="text-gray-700 hover:text-blue-600 transition-colors">Menu</a>
              <a href="#testimonials" class="text-gray-700 hover:text-blue-600 transition-colors">Testimoni</a>
              <a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <a href="${businessInfo.whatsapp}" target="_blank" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>
      `}
      ${/*HERO SECTION*/`
      <section id="home" class="pt-16 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div class="text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
              ${businessInfo.name}
            </h1>
            <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              ${businessInfo.description}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="${businessInfo.whatsapp}" target="_blank" class="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Pesan Sekarang
              </a>
              <a href="#menu" class="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Lihat Menu
              </a>
            </div>
          </div>
        </div>
      </section>
      `}
      ${/*ABOUT SECTION*/`<section id="about" class="py-20 bg-white">${aboutContent}</section>`}
      ${/*MENU SECTION*/`<section id="menu" class="py-20 bg-gray-50">${servicesContent}</section>`}
      ${/*TESTIMONIALS SECTION*/`<section id="testimonials" class="py-20 bg-white">${testimonialsContent}</section>`}
      ${/*CONTACT SECTION*/`<section id="contact" class="py-20 bg-gray-900 text-white">${contactContent}</section>`}
      ${/*FOOTER*/`<footer class="bg-gray-800 text-white py-12">${footerContent}</footer>`}
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
            });
          });
        });
      </script>
    </body>
    </html>
  `;
}
