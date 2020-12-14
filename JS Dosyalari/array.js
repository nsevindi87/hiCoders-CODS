let ogrencilerDizisi = ["habil", "Salih", "hamide", "selim"]  // n eleman var. O da n-1 indexte.  Yani 4. eleman 3. indexte
console.log(ogrencilerDizisi[0]);
ogrencilerDizisi[3] = "Halis";
console.log(ogrencilerDizisi.length);

let dayList = ["Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi", "Pazar"];
console.log(dayList);

let nummer = [2,4,6,7,8,12,13,43,55];
console.log(nummer[4],nummer[8]);

let myStringArray = ["Hello", "World"];
let arrayLength = myStringArray.length;
for (let i=0; i<arrayLength; i++){
    console.log(myStringArray[i])
}

let student =[70,58,96,74,57,96,56,85,69];
let notToplami = 0;
let diziuzunlugu = student.length;
for (let sayac=0; sayac<diziuzunlugu; sayac++){
    let studentNotu = student[sayac];
    notToplami = notToplami + studentNotu;  //nottoplami += studentNotu      nottoplaminin üzerine ekle demek. 
}
console.log(notToplami);
console.log("Not ortalama: ", notToplami/diziuzunlugu)