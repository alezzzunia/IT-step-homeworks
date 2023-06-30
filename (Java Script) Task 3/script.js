// let manager1 = +prompt("Введіть рівень продажів для першого менеджера")
// let manager2 = +prompt("Введіть рівень продажів для другого менеджера")
// let manager3 = +prompt("Введіть рівень продажів для третього менеджера")
// let a, b, c

// if (manager1 < 500) {
//     a = manager1 / 100 * 3
// }
// else if (manager1 > 500 && manager1 < 1000) {
//     a = manager1 / 100 * 5
// }
// else if (manager1 > 1000) {
//     a = manager1 / 100 * 8
// }
// manager1 += a

// if (manager2 < 500) {
//     b = manager2 / 100 * 3
// }
// else if (manager2 > 500 && manager2 < 1000) {
//     b = manager2 / 100 * 5
// }
// else if (manager2 > 1000) {
//     b = manager2 / 100 * 8
// }
// manager2 += b

// if (manager3 < 500) {
//     c = manager3 / 100 * 3
// }
// else if (manager3 > 500 && manager3 < 1000) {
//     c = manager3 / 100 * 5
// }
// else if (manager3 > 1000) {
//     c = manager3 / 100 * 8
// }
// manager3 += c

// document.write(`Зарплата першого менеджера: ${manager1 += 200} <br>`)
// document.write(`Зарплата другого менеджера: ${manager2 += 200} <br>`)
// document.write(`Зарплата третього менеджера: ${manager3 += 200} <br>`)

// if (manager1 > manager2 && manager1 > manager3) {
//     manager1 += 200
//     document.write(`Найпродуктивнішим виявився перший менеджер, він отримує премію в 200$, його баланс: ${manager1}`)
// }
// else if (manager2 > manager1 && manager2 > manager3) {
//     manager2 += 200
//     document.write(`Найпродуктивнішим виявився другий менеджер, він отримує премію в 200$, його баланс: ${manager2}`)
// }
// else if (manager3 > manager1 && manager3 > manager2) {
//     manager3 += 200
//     document.write(`Найпродуктивнішим виявився третій менеджер, він отримує премію в 200$, його баланс: ${manager3}`)
// }


// Перший мільйон!

// alert("Вітаю! Гра починається")
// let answer
// answer = prompt("1. Яка модель БМВ під кличкою тройка випускалась з 2012 року по 2018?")
// if (answer == "F30") {
//     alert("Вітаю! Ти виграв 100 гривень!")
//     answer = prompt("Хочеш забрати свій виграш?")
//     if (answer == "так") {
//         alert("Твій виграш 100 гривень!")
//     } else {
//         answer = prompt("2. Які номера у мене на машині?")
//         if (answer == "bc2702op"){
//             alert("Вітаю! Ти виграв 250 гривень!")
//             answer = prompt("Хочеш забрати свій виграш?")
//             if (answer == "так") {
//                 alert("Твій виграш 250 гривень!")
//             } else {
//                 answer = +prompt("3. Скільки буде 2 + 2")
//                 if (answer == 4) {
//                     alert("Вітаю! Ти виграв 500 гривень!")
//                 } else {
//                     do {
//                         answer = +prompt("Подумай краще, скільки буде 2 + 2")
//                     } while (answer != 4)
//                 alert("Вітаю! Ти виграв 500 гривень!")
//                 }
//                 answer = +prompt("4. Скільки у людини хромосом?")
//                 if (answer == 46) {
//                     alert("Вітаю! Ти виграв 1000 гривень!")
//                     answer = prompt("Хочеш забрати свій виграш?")
//                     if (answer == "так") {
//                         alert("Твій виграш 1000 гривень!")
//                     } else {
//                         answer = +prompt("5. Скільки областей в Україні?")
//                         if (answer == 27) {
//                             alert("Вітаю! Ти виграв 2000 гривень!")
//                             answer = prompt("Хочеш забрати свій виграш?")
//                             if (answer == "так") {
//                                 alert("Вітаю! Ти виграв 2000 гривень!")
//                             } else{
//                                 answer = prompt("6. Батько наш ...")
//                                 if (answer == "Бандера") {
//                                     alert("Молодець! Ти виграв 5000 гривень!")
//                                 }
//                                 else if (answer = "бандера") {
//                                     do {
//                                     answer = prompt('З великої букви пиши чуваче!')
//                                     } while (answer != "Бандера")
//                                 }
//                                 else {
//                                     do {
//                                         answer = prompt("Думай дідько, думай")
//                                     } while (answer != "Бандера")
//                                 }
//                                 answer = prompt("7. Як звати найкращого викладача в IT Step Academy?")
//                                 if (answer == "Ігор") {
//                                     alert("Вітаю! Ти Виграв головний приз в 10 000 гривень!!!")
//                                 }
//                                 else {
//                                     alert("Ти програв на останньому питанні і втратив все 3_3")
//                                 }
//                             }
//                         } else {
//                             alert("Ти програв!")
//                         }
//                     }
//                 } else {
//                     alert("Ти програв(")
//                 }
//             }
//         } else {
//             alert("Нажаль ти програв((")
//         }
//     }
// } else {
//     alert("Не трушний БМВіст")
//     alert("Ти програв на першому ж питанні -__0")
// }