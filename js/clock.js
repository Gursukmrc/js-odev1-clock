let myName=document.querySelector("#myName");
let myNamein=prompt("lutfen bir isim giriniz");
let myNamein2=myNamein.charAt(0).toUpperCase() + myNamein.slice(1); // girilen ismin ilk harfini buyuk yaptik
myName.innerHTML=myNamein2;


function showTime(){
    let myClock=document.querySelector("#myClock"); // myClock a html deki myClock id sini verdik
    let now= new Date(); // Date i cagirdik.
    let days=["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi",]; // Days gunlerini sirasiyla yazdik
    let day=days[now.getDay()]; // days verisinin icindeki gunleri bugun kacinci gunse ona gore siralanmasini sagladik
    let hour = now.getHours().toString().padStart(2, '0'); // saati aldik ve basina 0 ekledik
    let minute = now.getMinutes().toString().padStart(2, '0'); // dakikayi aldik ve basina 0 ekledik
    let second = now.getSeconds().toString().padStart(2, '0'); // saniyeyi aldik ve basina 0 ekledik
    let time=(`${hour}:${minute}:${second} , ${day}`); // time verisinde saat:dakika:saniye , gun olacak sekilde ayarladik
    myClock.innerHTML=time; // html icerisinde belirttigimiz myClock id sinin icinde yazacak olanin 'time' verisi olacagini belirttik
    setTimeout(showTime,1000) // showTime function unun 1000 milisaniyede bir artacagini yazdik
}
showTime() // showTime function'unu cagirdik.


