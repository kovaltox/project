// // "use strict";

// // // let numder = 5;
// // // // console.log(4/0);

// // // const obj = {
// // // name:"Alex",
// // // age: 25,
// // // isMarried: false

// // // }
// // // console.log(obj.name);

// // // let arr = [
// // //   'plum.png', 'orange.png', 'apple.bmp', 5
// // // ]
// // // console.log(arr[1]);

// // const arr = [1, 2, 3];

// // const arrObj = {
// //   a: 1,
// //   1: 2,
// //   2: 3,
// // };

// // arrObj.b = '1112'
// // arrObj['b'] = 1111

// // console.log(arrObj['b']);
// // console.log(arrObj.b);
// // // const obj = { a: 1, b: 2 };
// // const obj = {
// //   Anna: 500,
// //   Alice: 800,
// // };

// // alert('sdfsdffs')

// // const result = confirm('Ты тут?')
// // console.log(result);

// // const answer = +prompt('Вам есть 18?', '18')
// // console.log(answer +5);

// // const answers= [];
// // answers[0] = prompt('Как ваше имя?', '')
// // answers[1] = prompt('Как ваше фамилия?', '')
// // answers[0] = prompt('Сколько вам лет?', '')
// // document.write(answers)

// let incr = 10,
//   decr = 10;

// // ++incr
// // --decr
// console.log(incr++, decr--);
// console.log(incr++, decr--);
// console.log(++incr, --decr);

// const isChecked = true,
//       isClose = true;

//         console.log(isChecked&&isClose);

//////////////////    ПЕРВАЯ ЗАДАЧА ........................

// const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?')
// const personalMovieDb = {
//   count: numberOfFilms,
//   movies:{},
//   actor: {},
//   genres:[],
//   privat: false
// }
// let film = prompt(`Один из последних фильмов?`)
// let ocenka = prompt(`На сколько оцените его?`)
// let c = prompt(`Один из последних фильмов?`)
// let d = prompt(`На сколько оцените его?`)

// console.log(personalMovieDb);
// personalMovieDb.movies[film] = ocenka
// personalMovieDb.movies[c] = d

/////////////////////////////////...........................



//////////////////    ЛОГИЧЕСКИЕ ОПЕРАТОРЫ ................
// if (num < 49) {
//   console.log("error");
// } else if (num > 100) {
//   console.log("Много");
// } else {
//   console.log("ok");
// }

// num === 50 ? console.log("ok1") : console.log("error");

// const num = 50;
// switch (num) {
//   case 49:
//     console.log("Неверно");
//     break;
//   case 100:
//     console.log("Неверно 2");
//     break;
//   case 50:
//     console.log("В точку");
//     break;
//   default:
//     console.log("НЕ в ЭТОТ РАЗ");
//     break;
// }

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//   console.log("Я сыт!");
// }

// console.log(hamburger && fries);

// const hamburger = 3;
// const fries = 1;
// const cola = 0;
// console.log(hamburger === 3 && cola && fries === 1);
// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "sdfsdfsdfsdf");

// if (hamburger === 3 && cola === 1 && fries === 1) {
//   console.log("Все сыты");
// } else {
//   console.log("Идем в другой ресторан!");
// }

// console.log(hamburger && fries);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 5;
// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//   console.log("Все довольны");
// } else {
//   console.log("Идем в другой ресторан!");
// }





// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 5;
// let jhonReport,
//   alexReport = 1,
//   samReport,
//   mariaReport = "done";
// console.log(jhonReport || alexReport || samReport || mariaReport);
// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// console.log(!0);
// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


////////////////             //////////////////////////////////////////////


