function collectData() {
    var nama = prompt("Masukkan nama Anda:");
    var usia = prompt("Masukkan usia Anda:");
    var kota = prompt("Masukkan kota Anda:");

    var data = {
        nama: nama,
        usia: usia,
        kota: kota
    };
    console.log("Data yang dikumpulkan:");
    console.log(data);

    fetch('https://example.com/data-collector', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(result => {
        console.log('Data terkirim:', result);
    })
    .catch(error => {
        console.error('Ada masalah dengan pengiriman data:', error);
    });
}

collectData();