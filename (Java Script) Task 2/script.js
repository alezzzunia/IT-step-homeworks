let name = prompt('Як тебе звати?')
alert('Привіт ' +name)


let year = +prompt("Який у тебе рік народження?")
alert("Тобі " +(2023 - year)+" років")


let side = +prompt("Вкажи довжину сторони квадрата:")
alert("Периметр квадрата :" + side * 4)


let radius = +prompt("Вкажи радіус кола:")
alert("Площа кола: " + 3.14 * radius * radius)


let length = +prompt("Вкажи відстань у кілометрах між двома містами:")
let speed = +prompt("Вкажи за скільки годин ти хочеш дістатися пункту призначення:")
alert("Тобі потрібно рухатись зі швидкістю: " + length / speed)


let usd = +prompt("Скільки доларів ти хочеш перевести у Євро?")
alert("Ти отримаєш стільки євро: " + usd * 0.92)


let fleshka = +prompt("Вкажи обсяг флешки у ГБ")
const file = 0.82
alert("Стільки файлів ти зможеш помістити на флешку: " + Math.trunc(fleshka / file))


let dengi = +prompt("Скільки лаве(гривнів) у тебе в кармані?")
let chocolate = +prompt("Скільки коштує одна шоколадка у гривнях?")
reshta = dengi % chocolate
alert("Ти зможеш купити " + Math.trunc(dengi / chocolate) + " шоколадок і у тебе лишиться " + reshta + " здачі")


let num1 = +prompt("Введи трьох-значне число")
let num2 = num1 % 10
let num3 = (num1 % 100 - num2) / 10
let num4 = Math.trunc(num1 / 100)
alert(`Твоє число-перевертень: ${num2}${num3}${num4}`)


let num = +prompt("Введіть ціле число:");
const isEven = num % 2 === 0;
const result = isEven ? "парне" : "непарне";
alert(`Ви ввели ${result} число.`);