// let numberOfFilms = +prompt("Qancha film ko'rgansiz?");
//
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
//
//
// let a = prompt("Oxirgi ko'rgan filmlaringizdan biri?"),
//     b = +prompt("Uni qancha baholagan bo'lardingiz?");
//
//
// personalMovieDB.movies[a] = b;
// console.log(personalMovieDB);
// Dars uchun vazifa:
//
// 1) Loop yordamida filmlar haqidagi foydalanuvchi savollarini avtomatlashtirish..
//
// 2) Agar foydalanuvchi javobni bo'sh qator sifatida qoldirsa,
// javobni bekor qilsa yoki kiritgan film nomi 50 belgidan uzunroq bo'lsa, savollar qayta so'ralsin.
//
// 3) If dan foydalanib personalMovieDB.count ni tekshiring  agar u 10 dan kam bo'lsa -
// "Ko'rilgan filmlar soni kam", agar 10 dan 30 gacha bo'lsa - "Siz klassik tomoshabinsiz" va agar 30 dan ko'p bo'lsa -
// — "Siz kino ishqibozisiz" so'zlari consolga chiqarilisin. Agar variantlardan hech biri mos kelmasa, "Xatolik yuz berdi" so'zi consolga chiqsin.
//
// 4) Mashq qiling va siklni yana ikkita usulda qayta yozing
// noinspection InfiniteLoopJS

let personalMoviesDB = {
    "count": {},
    "movies": {},
    "gender": [],
    "privat": false
}, personalRequest;

function checkTheResult (request){

    for (let i = 0; i < 1; i++){

        personalRequest = prompt(request);

        if (personalRequest !== 0 && personalRequest !== "" && personalRequest !== null){
        }
        else {
            i--;
            alert("Error");
        }
    }
    return personalRequest;
}
function checkTheFan () {
    if (personalMoviesDB.count < 10){
        alert("Ko'rilgan filmlar soni kam!");
    }else if ( personalMoviesDB.count > 10 && personalMoviesDB.count < 30){
        alert("Siz klassik tomoshabinsiz!");
    }else if (personalMoviesDB.count > 30){
        alert("Siz kino ishqibozisiz!");
    }
}
personalMoviesDB.count = +checkTheResult("Nechta kino ko'rgansiz?");

checkTheFan();

personalMoviesDB.movies[checkTheResult("Oxirgi ko'rgan kinoyingiz?")] = +checkTheResult("Unga qanday baho berasiz?");

console.log(personalMoviesDB);



