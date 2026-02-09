//latihan
let layanganFuad = 5;
let colorOne = "merah";
let colorTwo = "biru";
let colorTree = "hijau";
let colorFour = "kuning";
let colorFive = "ungu";

let masukGot = colorTree;
let diCuri = colorFive;

let rusak = 2;
let total = layanganFuad - rusak;

console.log("jumlah layangan fuad adalah " + layanganFuad);
console.log(
  "warna layangan yang masuk got adalah " +
    masukGot +
    " dan yang dicuri adalah " +
    diCuri,
);
console.log("update layangan fuad adalah " + total);

//latihan 2
let iceCreamRafa = 3;
let rasaOne = "matcha";
let rasaTwo = "chocolate";
let rasaTree = "vanilla";

let diberikanKepadaAnhar = rasaTwo;

let punyaAnhar = 1;
let totalIcecreamRafa = iceCreamRafa - punyaAnhar;

console.log("jumlah ice cream rafa adalah " + iceCreamRafa);
console.log(
  "ice cream yang diberikan kepada anhar adalah " + diberikanKepadaAnhar,
);
console.log("update icecream Rafa adalah " + totalIcecreamRafa);

//tugas 30
1;
let permenAna = 30;
let diberikanKepadaBudi = 10;
let updatePermenAnaOne = permenAna - diberikanKepadaBudi;
let updatePermenAnaTwo = updatePermenAnaOne * 2;

console.log(
  "jumlah permen ana yang dimiliki sekarang adalah " + updatePermenAnaOne,
);
console.log("jumlah permen ana adalah " + updatePermenAnaTwo);

2;
let kucingAna = 2;
let kucingPertama = "ali";
let kucingKedua = "hasan";

console.log(
  "nama kucing pertama adalah " +
    kucingPertama +
    " dan nama kucing ke 2 adalah " +
    kucingKedua,
);
console.log(
  "penggabungan ke kucing pertama dan kucing ke dua adalah " +
    kucingPertama +
    kucingKedua,
);

3;
let belalang = "12";
let nyamuk = "11";
let angsa = 10;

let hasilBelalangNyamuk = +belalang + nyamuk;
console.log(hasilBelalangNyamuk);

let hasilNyamukAngsa = +nyamuk + angsa;
console.log(hasilNyamukAngsa);
// hasilBelalangNyamuk: dikarenakan let belalang dan let nyamuk variabelnya string maka hasilnya akan ditambahkan saja tidak dijumlahkan, adapaun hasilNyamukAngsa: itu dikarenakan let angsa tidak termasuk variabel string tapi termasuk variabel numerik/number maka hasilnya akan dijumlahkan walaupun let nyamuknya bervariabel string.

4;
let barangYangDibeliAisha = 10;
let bukuYangDibeliAisha = 8;
let penaYangDibeliAisha = 2;

let hargaBukuFiksi = 5000 * 5;
let hargaBukuNonfiksi = 7000 * 3;
let hargaPena = 2000 * 2;

let hasil = hargaBukuFiksi + hargaBukuNonfiksi + hargaPena;

console.log("Total semua biaya yang harus dibayar Aisha adalah " + hasil);

5;
let penjumlahan1 = 5 + 3 * 2;
let penjumlahan2 = (5 + 3) * 2;
console.log(penjumlahan1);
//karena yang harus dikerjakan adalah perkalian terlebih dahulu jadi 3 * 2 = 6 + 5 = 11
console.log(penjumlahan2);
//karena yang harus dikerjakan adalah yang didalam kurung terlebih dahulu jadi 5 + 3 = 8 * 2 = 16

6;
let kresek = 4;
let kotak = 6;
let ember = 5 + (kresek = kotak);

console.log(kresek);
console.log(kotak);
console.log(ember);
//karena kresek = kotak jadi value kresek di ganti dengan value kotak dan di tambah 5 = 11

7;
let x, y, z;
x = y = z = 5 + 10 + 15;
console.log("nilai x adalah " + x);
console.log("nilai x adalah " + y);
console.log("nilai x adalah " + z);

8;
let money = 4;
money *= 2;
money *= 2;
console.log(money);

9;
let J = 5;
J++;

console.log(J);
//hasil j 6 karena arti dari ++ adalah di tambah 1

let K = 8;
K--;

console.log(K);
//hasil k 7 karena arti dari -- adalah di kurang 1

10;
let room = "hafs";
let age = 18;
let shoesNumber = "42";
let married = false;

console.log(typeof room);
console.log(typeof age);
console.log(typeof shoesNumber);
console.log(typeof married);