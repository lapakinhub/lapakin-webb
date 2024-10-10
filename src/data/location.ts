export type LocationData = {
    [province: string]: string[];
};

export const locationData: LocationData = {
    "Aceh": ["Banda Aceh", "Sabang", "Lhokseumawe", "Langsa", "Meulaboh", "Takengon", "Blangpidie", "Bireuen", "Sigli", "Calang"],
    "Sumatera Utara": ["Medan", "Binjai", "Pematangsiantar", "Tanjungbalai", "Tebing Tinggi", "Sibolga", "Gunung Sitoli", "Padangsidimpuan", "Labuhan Batu"],
    "Sumatera Barat": ["Padang", "Bukittinggi", "Payakumbuh", "Solok", "Pariaman", "Sawahlunto", "Padang Panjang", "Pesisir Selatan", "Agam"],
    "Riau": ["Pekanbaru", "Dumai", "Siak", "Rengat", "Bengkalis", "Pelalawan", "Indragiri Hilir", "Kampar", "Rokan Hulu"],
    "Kepulauan Riau": ["Tanjungpinang", "Batam", "Karimun", "Natuna", "Lingga", "Anambas"],
    "Jambi": ["Jambi", "Sungai Penuh", "Muaro Jambi", "Tebo", "Merangin", "Sarolangun", "Tanjung Jabung Timur", "Tanjung Jabung Barat", "Batanghari"],
    "Sumatera Selatan": ["Palembang", "Lubuklinggau", "Pagar Alam", "Prabumulih", "Banyuasin", "Muara Enim", "Lahat", "Ogan Komering Ulu", "Ogan Ilir"],
    "Bangka Belitung": ["Pangkal Pinang", "Tanjung Pandan", "Muntok", "Sungailiat", "Manggar", "Koba", "Mentok"],
    "Bengkulu": ["Bengkulu", "Argamakmur", "Muko-Muko", "Kaur", "Rejang Lebong", "Kepahiang", "Seluma", "Lebong"],
    "Lampung": ["Bandar Lampung", "Metro", "Lampung Selatan", "Tanggamus", "Way Kanan", "Pesawaran", "Pringsewu", "Lampung Tengah", "Mesuji"],
    "Banten": ["Serang", "Tangerang", "Cilegon", "Pandeglang", "Lebak", "South Tangerang"],
    "DKI Jakarta": ["Jakarta Barat", "Jakarta Pusat", "Jakarta Selatan", "Jakarta Timur", "Jakarta Utara"],
    "Jawa Barat": ["Bandung", "Bekasi", "Bogor", "Cimahi", "Depok", "Tasikmalaya", "Cirebon", "Sukabumi", "Karawang", "Purwakarta"],
    "Jawa Tengah": ["Semarang", "Surakarta", "Magelang", "Pekalongan", "Tegal", "Salatiga", "Kudus", "Purwokerto", "Pati", "Jepara"],
    "DI Yogyakarta": ["Yogyakarta", "Sleman", "Bantul", "Kulon Progo", "Gunung Kidul"],
    "Jawa Timur": ["Surabaya", "Malang", "Sidoarjo", "Gresik", "Pasuruan", "Mojokerto", "Blitar", "Kediri", "Banyuwangi", "Jember"],
    "Bali": ["Denpasar", "Singaraja", "Tabanan", "Gianyar", "Bangli", "Klungkung", "Karangasem", "Badung", "Jembrana"],
    "Nusa Tenggara Barat": ["Mataram", "Bima", "Sumbawa", "Dompu", "Sumbawa Besar", "Lombok Timur", "Lombok Barat", "Lombok Tengah"],
    "Nusa Tenggara Timur": ["Kupang", "Maumere", "Ende", "Ruteng", "Waingapu", "Atambua", "Larantuka", "Bajawa", "Soe"],
    "Kalimantan Barat": ["Pontianak", "Singkawang", "Ketapang", "Mempawah", "Sambas", "Sanggau", "Kapuas Hulu", "Landak"],
    "Kalimantan Tengah": ["Palangka Raya", "Sampit", "Pangkalan Bun", "Muara Teweh", "Buntok", "Kapuas", "Kuala Kurun"],
    "Kalimantan Selatan": ["Banjarmasin", "Banjarbaru", "Martapura", "Pelaihari", "Kandangan", "Rantau", "Tanjung", "Marabahan"],
    "Kalimantan Timur": ["Balikpapan", "Samarinda", "Bontang", "Tenggarong", "Sangatta", "Penajam", "Berau"],
    "Kalimantan Utara": ["Tanjung Selor", "Tarakan", "Nunukan", "Malinau", "Sebatik"],
    "Sulawesi Utara": ["Manado", "Bitung", "Tomohon", "Kotamobagu", "Airmadidi", "Tondano", "Amurang"],
    "Sulawesi Tengah": ["Palu", "Poso", "Luwuk", "Toli-Toli", "Donggala", "Buol", "Morowali"],
    "Sulawesi Selatan": ["Makassar", "Palopo", "Parepare", "Gowa", "Maros", "Bantaeng", "Bone", "Selayar"],
    "Sulawesi Tenggara": ["Kendari", "Baubau", "Kolaka", "Wakatobi", "Raha", "Buton", "Muna", "Bombana"],
    "Gorontalo": ["Gorontalo", "Limboto", "Kwandang", "Tilamuta", "Marisa", "Atinggola"],
    "Sulawesi Barat": ["Mamuju", "Majene", "Polewali", "Mamasa", "Pasangkayu"],
    "Maluku": ["Ambon", "Tual", "Masohi", "Dobo", "Namlea", "Saumlaki"],
    "Maluku Utara": ["Ternate", "Tidore", "Sofifi", "Morotai", "Weda", "Tobelo"],
    "Papua": ["Jayapura", "Timika", "Wamena", "Merauke", "Nabire", "Biak", "Sarmi"],
    "Papua Barat": ["Manokwari", "Sorong", "Fakfak", "Raja Ampat", "Bintuni"],
    "Papua Tengah": ["Nabire", "Paniai", "Dogiyai", "Mimika", "Deiyai"],
    "Papua Pegunungan": ["Wamena", "Jayawijaya", "Yalimo", "Lanny Jaya", "Nduga"],
    "Papua Selatan": ["Merauke", "Mappi", "Asmat", "Boven Digoel", "Okaba"]
};
