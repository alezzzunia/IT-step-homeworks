let side_a = 4
let side_b = 5

let p = (side_a + side_b) * 2
let s = side_a * side_b
alert('Периметр: '+p)
alert('Площа: '+s)

let a = 10
let b = 15
let c = 20

let equal = (10+15+20)/3
alert("Середнє арифметичне :" +equal)

let num1 = +prompt('Перше число:')
let num2 = +prompt('Друге число:')
let num3 = +prompt('Третє число:')

let summa = num1 + num2 + num3
let multiplication = num1 * num2 * num3
alert('Сума трьох чисел: '+summa)
alert('Добуток трьох чисел: '+multiplication)

let knum1 = +prompt('Введіть число, яке хочете знайти в квадраті:')
let kvadrat = knum1 * knum1
alert('Ваше число в квадраті: ' +kvadrat)

let megabite = +prompt('Скільки ваш фільм займає Мегабайт?')
let diskete = (megabite * 3) / 1.44

alert('Вам знадобиться стільки дискет: '+ Math.ceil(diskete))