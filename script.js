// Data Produk dengan gambar
const produk = [
    { nama: "Samsung Galaxy Tab A9 WiFi 4/64 GB - Graphite", harga: 1709100, gambar: "https://tse3.mm.bing.net/th?id=OIP.W2cJhfGgd8UmqejyIVhN7wHaHa&pid=Api" },
    { nama: "Samsung Galaxy Tab A9 4/64 GB - Graphite", harga: 2150100, gambar: "https://tse3.mm.bing.net/th?id=OIP.W2cJhfGgd8UmqejyIVhN7wHaHa&pid=Api" },
    { nama: "Samsung Galaxy Tab A9+ 8/128 GB - Graphite", harga: 3999000, gambar: "https://tse3.mm.bing.net/th?id=OIP.W2cJhfGgd8UmqejyIVhN7wHaHa&pid=Api" },
    { nama: "Samsung Galaxy Tab S9 FE WiFi 6/128 GB - Gray", harga: 5899000, gambar: "https://tse1.mm.bing.net/th?id=OIP.vXzPIgLSd5jdHTURt2ay8AHaHa&pid=Api" },
    { nama: "Samsung Galaxy Tab S9 FE 6/128 GB - Gray", harga: 6849000, gambar: "https://tse4.mm.bing.net/th?id=OIP.fFGlKADy60SXSt3RqRwkKAHaHa&pid=Api" },
    { nama: "Samsung Galaxy Tab S9 FE+ WiFi 8/128 GB - Silver", harga: 7799000, gambar: "https://tse4.mm.bing.net/th?id=OIP.uAJICHLp65XpXBuMx9mnWgHaHa&pid=Api" },
    { nama: "Samsung Galaxy A14", harga: 2250000, gambar: "https://tse2.mm.bing.net/th?id=OIP.SyP2Kesd1y8XJrDxvo8oOAHaHa&pid=Api" },
    { nama: "Samsung Galaxy M34 5G", harga: 4500000, gambar: "https://tse1.mm.bing.net/th?id=OIP.FaOP-QsOSeWn35MVxlXoJAHaHa&pid=Api" },
    { nama: "Samsung Galaxy S24", harga: 8999999, gambar: "https://tse1.mm.bing.net/th?id=OIP.N6lzS3OqDqnLA8fq9TX1QgHaEK&pid=Api" },
    { nama: "Samsung Galaxy Z Flip5", harga: 15000000, gambar: "https://tse3.mm.bing.net/th?id=OIP.zSWi_6oQatqp7H4SUKKwcAAAAA&pid=Api" },
    { nama: "Samsung Galaxy Z Fold5", harga: 25000000, gambar: "https://tse4.mm.bing.net/th?id=OIP.J0Ldx8MKFWfajR-lygpOTwHaEJ&pid=Api" },
    { nama: "Sony PlayStation 2", harga: 200000, gambar: "https://tse1.mm.bing.net/th?id=OIP.N7yKBhRj4sQtzNKsuIJyjAHaFH&pid=Api" },
    { nama: "Sony PlayStation 3 Slim", harga: 470000, gambar: "https://tse4.mm.bing.net/th?id=OIP.7XiPAXAAmCxDIM25840qwQHaHW&pid=Api" },
    { nama: "Sony PlayStation 4 Slim", harga: 1621000, gambar: "https://tse1.mm.bing.net/th?id=OIP.oAQOXw49K7RZ5iv9UmiRuAHaHa&pid=Api" },
    { nama: "Sony PlayStation 4 Pro", harga: 2921000, gambar: "https://tse1.mm.bing.net/th?id=OIP.Pjba5EpErt45l4RHRujBBgHaEK&pid=Api" },
    { nama: "Sony PlayStation 5", harga: 6899000, gambar: "https://tse2.mm.bing.net/th?id=OIP.85148_Q0AssOMoMDuWNhPAHaFj&pid=Api" },
    { nama: "iPhone 11", harga: 6249000, gambar: "https://tse4.mm.bing.net/th?id=OIP.4QvBM--yWL40l1T9ZA6KpgHaHq&pid=Api" },
    { nama: "iPhone 12", harga: 7499000, gambar: "https://tse2.mm.bing.net/th?id=OIP.0H_GXDBmj8t95s1KzMU5GAHaL5&pid=Api" },
    { nama: "iPhone 13", harga: 8999000, gambar: "https://tse1.mm.bing.net/th?id=OIP.UW5Dj1fI5GDiWQilfcWxzAHaE8&pid=Api" },
    { nama: "iPhone 14", harga: 12249000, gambar: "https://tse3.mm.bing.net/th?id=OIP.pTMGD0hI-xUBuSVFyCq7nAHaFI&pid=Api" },
    { nama: "iPhone 15", harga: 12999000, gambar: "https://tse3.mm.bing.net/th?id=OIP.zrIBWbtRRhVIFWjmefpLngHaEK&pid=Api" },
    { nama: "iPhone 16", harga: 16499000, gambar: "https://tse2.mm.bing.net/th?id=OIP.y4O4WINSNwMKEsigA7BFSQHaEK&pid=Api" },
    { nama: "Google Pixel 8a", harga: 8000000, gambar: "https://tse2.mm.bing.net/th?id=OIP.p-pnWetFE0u4toEHMnswwgHaFF&pid=Api" },
    { nama: "Google Pixel 9", harga: 15800000, gambar: "https://tse4.mm.bing.net/th?id=OIP.7j7UWotc78Oh4dn8OSjqtAHaFj&pid=Api" },
    { nama: "Google Pixel 9 Pro", harga: 19000000, gambar: "https://tse4.mm.bing.net/th?id=OIP.l51-EP-KnixvoL-SB58VxwHaEK&pid=Api" },
    { nama: "Google Pixel 9 Pro XL", harga: 23800000, gambar: "https://tse2.mm.bing.net/th?id=OIP.KF3EIqtl48wr28l4DzPWpwHaEK&pid=Api" },
    { nama: "Google Pixel 9 Pro Fold", harga: 28500000, gambar: "https://tse4.mm.bing.net/th?id=OIP.fdGJ0e6moUPKMfrCQqX3lAHaEK&pid=Api" },
    { nama: "Acer Aspire 5 A514", harga: 9499000, gambar: "https://api.mdp.co.id/upload/pictures/product/LP9715.jpg" },
    { nama: "Acer Nitro 5 AN515", harga: 11999000, gambar: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/96/MTA-140411759/no-brand_no-brand_full01.jpg" },
    { nama: "Acer Swift Go AI SFG14", harga: 13999000, gambar: "https://elevenkomputer.com/12689-large_default/acer-swift-go-14-ai-sfg14-73-731a-pure-silver.jpg" },
    { nama: "Asus Vivobook 14X OLED A1403", harga: 12799000, gambar: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//107/MTA-83745683/asus_asus-vivobook-14x-a1403za-oleds753-core-i7-12700h-16gb-512gb-ssd-blue_full01.jpg" },
    { nama: "Asus ZenBook 14 UX425EA", harga: 13499000, gambar: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//103/MTA-83746308/asus_asus-zenbook-ux425ea-bm551ts-intel-core-i5-1135g7-ram-8gb-ssd-512gb_full01.jpg" },
    { nama: "Asus TUF Gaming F15 FX506", harga: 15499000, gambar: "https://www.softcom.co.id/wp-content/uploads/2021/03/FA506QM-R736B6G-O-1.jpg" },
    { nama: "Lenovo IdeaPad Slim 1 11IGL05", harga: 3200000, gambar: "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/28/ca36e82a-4e73-4a88-9ac1-ccc1aed9ea36.png" },
    { nama: "Lenovo ThinkBook 14 G2 ARE", harga: 10500000, gambar: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/8/23/242db61e-777b-4bc2-b5cc-3e817a4f6072.jpg" },
    { nama: "Lenovo LOQ 15IAX9I", harga: 11950000, gambar: "https://images.tokopedia.net/img/cache/700/VqbcmM/2024/1/13/86033dac-1040-4e81-80cf-619492cda505.jpg" },
    { nama: "HP 15s eq2136AU", harga: 6799000, gambar: "https://assets.nikshanonline.com/wp-content/uploads/2024/02/HP-15s-AMD-Ryzen-3-5300U-15.6-inch39.6cm-FHD-Anti-Glare-Laptop-8GB-RAM512-GB-SSDAMD-Radeon-GraphicsWin-11-15s-eq2213AU-1.png" },
    { nama: "HP Pavilion x360 14", harga: 9999000, gambar: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/7/17/1b01f4c4-9bf1-43a6-a95a-2b5a33852f8e.jpg" },
    { nama: "HP Victus 16", harga: 14999000, gambar: "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/11/16/137a084a-8b6e-4f12-88d6-2ad584949fe3.jpg" },
    { nama: "Canon PIXMA TS207", harga: 700000, gambar: "https://s3-ap-southeast-1.amazonaws.com/hnsgsfp/9/images/2023/Scratch-Resistant+Surface.jpg" },
    { nama: "Canon PIXMA G1020", harga: 2000000, gambar: "https://smb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com/products/62571/772116/g1020.1661573668.jpg" },
    { nama: "Canon PIXMA G6060", harga: 4500000, gambar: "https://pdbimg.choice.com.au/canon-pixma-megatank-g6060_5.jpg" }
];

function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = "";
    products.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('product-item');
        div.innerHTML = `
            <div class="info">
                <h3>${product.nama}</h3>
                <img src="${product.gambar}" alt="${product.nama}">
                <p><strong>Harga: </strong>Rp${product.harga.toLocaleString()}</p>
            </div>
        `;
        productList.appendChild(div);
    });
}

// Pencarian Berdasarkan Nama Produk
function searchByName(data, target) {
    return data.filter(item => item.nama.toLowerCase().includes(target.toLowerCase()));
}

// Pencarian Berdasarkan Harga
function searchByPrice(data, target) {
    const targetPrice = parseInt(target); // Mengonversi input menjadi angka
    return data.filter(item => item.harga <= targetPrice); // Produk dengan harga <= target
}

// Fungsi untuk Mengurutkan Produk Berdasarkan Harga (QuickSort)
function quickSort(data) {
    if (data.length <= 1) return data;
    const pivot = data[Math.floor(data.length / 2)];
    const left = data.filter(item => item.harga < pivot.harga);
    const middle = data.filter(item => item.harga === pivot.harga);
    const right = data.filter(item => item.harga > pivot.harga);
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Event Listener untuk Form Pencarian
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchOption = document.getElementById('searchOption').value;
    const searchInput = document.getElementById('searchInput').value;

    let results = [];

    if (searchOption === '1') {
        results = searchByPrice(produk, searchInput);  // Pencarian berdasarkan harga
    } else if (searchOption === '2') {
        results = searchByName(produk, searchInput);  // Pencarian berdasarkan nama
    }

    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = "<h3>Hasil Pencarian</h3>";
    if (results.length > 0) {
        displayProducts(results);  // Menampilkan hasil pencarian
    } else {
        searchResults.innerHTML += "<p>Produk tidak ditemukan</p>";
    }
});

// Menampilkan semua produk yang telah diurutkan
displayProducts(quickSort(produk));
