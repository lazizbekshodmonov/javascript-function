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

let personalMoviesDB = {
    "count": {},
    "movies": {},
    "gender": [],
    "privat": false
};

function personalRequestSend(request) {
    return prompt(request);
}

for ( let i = 0; i < 1; i++){
    personalMoviesDB.count = +personalRequestSend("Nechta kino ko'rgansiz?")
    console.log(personalMoviesDB.count)
    if (personalRequestSend() !== 0 && personalRequestSend() !== "" && !isNaN(personalRequestSend())){
        for (let i = 0; i < 1; i++){
            personalMoviesDB.movies = personalRequestSend("Oxirgi ko'rgan filmlaringizdan biri");
            if (personalRequestSend() !== 0 && personalRequestSend() !== ""){

            }
        }
    }else {
        console.log("Error")
    }
}

