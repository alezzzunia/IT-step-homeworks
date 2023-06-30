// Оператори:
// Арифметичні: +, -, *, /, %, ++, --
// Скорочені форми: 
// a = a = 2 -> a+=2
// a = a * 5 -> a*=5
// Логічні:
// < - менше
// > - більше
// <= - менше рівне (менше або дорівнює)
// >= - більше рівне (більше або дорівнює)
// == - рівне
// === - ідентичність
// != - не рівне
// !== - не ідентичне
// Логічні операції об'єднання або логічне заперечення:
// && - i (логічне і, всі умови повертають true, тоді поверне в результаті true)
// || - або (логічне або, хоча би одна умова поверне true, тоді в результаті буде true)
// ! - не (логічне заперечення,)

// let a = 5
// let b = 10
// console.log(a > b) // False
// console.log(a < b) // True
// console.log(a <= b) // True
// console.log(a >= b) // False
// console.log(a == b) // False
// console.log(a != b) // True
// console.log(a === b) // False
// console.log(a !== b) // True

// console.log(a != b && a == a) // True
// console.log(a != b && a == b) // False
// console.log(a > b && a < b) // False
// console.log(a < b || a == a) // True
// console.log(a > b || a != b) // True
// console.log(a == b || a < b) // True
// console.log((a > b && a == b) || (a == a && a != b))

// Тернарний оператор:
// (умова)? дія1 (true) : дія2 (false)
// let age = +prompt('Скільки тобі років:')
// age >= 18 ? alert('Йди в сраку') : alert("Йди уроки вчи піздюк")

// let condition = false
// !condition ? alert("This is true") : alert('False is false')

// let age = +prompt('Скільки тобі років:')
// !(age >= 18) ? alert('Йди в сраку') : alert('Йди уроки вчи піздюк')

// Умовного конструкції
// if
// syntax:
// if (умова) {
// ... code
// }

// let age = 17
// if (age >= 18) {
//     alert("Старенький, не надірвись")
// }

// if (age < 18) {
//     alert("Молочка попий!")
// }

// if-else
// syntax:
// if (умова) {
// ... code
// }
// else {
// ...code
// }
// let babki = +prompt("Скільки лаве в кармані маєш?")
// if (babki >= 100) {
//     alert('На пиво хватить')
// }
// else {
//     alert('Купи собі хлібчика і не вимахуйся')
// }

// let week = 1
// if (week == 1 ) {
//     alert("Понеділок, на роботу піздуй")
// }
// else {
//     alert("Час пити пиво")
// }

// if (week == 2 ) {
//     alert("Вівторок")
// }
// else {
//     alert('ПИВО СТИГНЕ БЛЯТЬ')
// }

// let week = 1
// if (week >= 1 && week <=7) {
//     if(week == 1) {
//         alert("Понеділок")
//     }
//     if (week == 2) {
//         alert('Вівторок')
//     }
// }
// else {
//     alert("Введи коректно день тижня!")
// }

// if / else if / else

// let week = 2

// if (week == 1) {
//     alert("Понеділок")
// }
// else if (week == 2) {
//     alert("Вівторок")
// }
// else if (week == 3) {
//     alert("Середа")
// }
// else {
//     alert("Введи коректний день тижня!")
// }

// let a = 5
// alert(`Hello ${a} asdasd ${a+a}`)

// Завдання (тернарний оператор)
// 1. Вводимо два числа, вивести більше з них.
// 2. Користувач вводить трьохзначні числа.
// Вивести чи щасливе число, чи ні.
// Щасливим вважається число, якщо в нього всі цифри рівні

// 1.
// let num1 = +prompt("Перше число:")
// let num2 = +prompt('Друге число:')

// num1 < num2 ? alert("Друге число більше") : alert('Перше число більше')

// 2.
// let num = +prompt("Enter number: ")

// let num1 = Math.trunc(num / 100)
// let num2 = Math.trunc(num / 10) % 10
// let num3 = num % 10

// num1 == num2 && num3 == num2 ? alert("Щасливе") : alert("Не повезло")