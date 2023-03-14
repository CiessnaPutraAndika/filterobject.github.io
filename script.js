const mobil = [{
    brand: 'GTR34',
    pintu: 2,
    tahun: 2002,
},
{
    brand: 'SUPRA MK4',
    pintu: 2,
    tahun: 1993,
},
{
    brand: 'EVO 8',
    pintu: 4,
    tahun: 2003,
},
]

let brand = prompt("Pilih mobil : GTR34, SUPRA MK4, EVO 8");
const noMobil = mobil.filter((mbim) => mbim.brand === brand);

console.log(noMobil);