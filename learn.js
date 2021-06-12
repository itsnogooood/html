// // 1 variables
//
// const courseStatus = 'pending'
//
// if (courseStatus === 'ready') {
//     console.log('Course ready')
// } else if (courseStatus === 'pending') {
//     console.log('Course not ready')
// } else {
//     console.log('Error')
// }
//
// const isReady = true
// isReady ? console.log(true): console.log(false)
//
// function calculateAge (year) {
//     return 2020 - year
// }
// console.log(calculateAge(100))
//
// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//
//     console.log('Your name is ' + name + ' and you are ' + age)
// }
// logInfoAbout('Alex', 25)
//
//
// const cars = ['mazda', 'ford', 'opel']
//
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }
//
// for (let car of cars) {
//     console.log(car)
// }
//
//
// function logPerson(s, name, age) {
//     if (age < 0) {
//         age = 'Not born'
//     }
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`
// }
//
// const personName = 'Alex'
// const personAge = 26
//
// const output = logPerson`Имя: ${personName}, Возраст: ${personAge} !`
//
// console.log(output)

//
// function greet(name) {
//     console.log('Hello - ', name)
//
// }
//
// const greet2 = function greet2(name2) {
//     console.log('Hello - ', name2)
// }
//
// greet('alex')
// greet2('alex')
//
// console.log(typeof greet)
//
// let counter = 0
// const interval = setInterval(function () {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// const arrow = (name) => {
//     console.log('Name ' + name)
// }
// arrow('Alex')
//
// const  pow2 = num => num**2
//
// console.log(pow2(5))
//


// const sum = (a, b) => a + b
//
// console.log(sum(1, 41))
//

// function sum2(...all) {
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }
// sum2()
//
// console.log(sum2(1, 2, 3, 4, 5))

// function createMember(name) {
//     return function(lastName) {
//         console.log(name + lastName)
//     }
// }
//
// const logLastName = createMember('Alex')
// console.log(logLastName(' Shulepov'))
// console.log(logLastName(' Minin'))

// const cars = ['Mazda', 'Ford', 'bmw', 'mercedes']
// const fib = [1, 1, 2, 3, 5, 8, 13]
//
// const text = 'Hey, we are learning js'
// const massive = []
// for (name of text) {
//     massive.push(name)
// }
// const reverse = massive.reverse()
// console.log(reverse)
// console.log(reverse.join(''))

// const cars = ['Mazda', 'Ford', 'bmw', 'mercedes']
// const index = cars.indexOf('bmw')
// cars[index] = 'Porsche'
// console.log(cars)



//
// const index = people.find(function (person) {
//     return person.budget === 3500
// })
//
// console.log(index)
//
// let findedPerson
// for (const person of people) {
//     // console.log(person)
//     if (person.budget === 3500) {
//         findedPerson = person
//     }
// }
//
// const person = people.find(person => person.budget === 3500)
// console.log(person)

// const cars = ['Mazda', 'Ford', 'bmw', 'mercedes']
// const fib = [1, 1, 2, 3, 5, 8, 13]

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
// const sqrt = num => Math.sqrt(num)
// console.log(upperCaseCars);

// const pow2 = num => num**2
// const pow = fib.map(pow2)
//
// const filteredNumbers = pow.filter(num => num > 20)
//
// console.log(pow)
// console.log(filteredNumbers)


// const people = [
//     {name: 'Alex', budget: 4200},
//     {name: 'Elena', budget: 3500},
//     {name: 'Vika', budget: 1700}
// ]
//
// const allBudget = people
//     .filter(person => person.budget > 2000)
//     .reduce((acc, person) => {
//     acc += person.budget
//     return acc
// }, 0)
//
// console.log(allBudget)




// console.log(person.name)
// console.log(person['age'])
// console.log(person["complex key"])
//
//
// person.age++
// person.lang.push('de')
// console.log(person.age)
// console.log(person.lang);
//
//
// delete person['key_4']
// console.log(person['key_4'])
// console.log(person)

// const {name, age: personAge, lang} = person
//
// console.log(name, personAge, lang)
//
// const person = {
//     name: 'Alex',
//     age: 25,
//     isProg: true,
//     // 'complex key': 'Complex Value',
//     // ['key_' + (1+3)]: 'Computed Key',
//     lang: ['ru', 'eng'],
//     greet() {
//         console.log('greet from person')
//     },
//     info() {
//         console.log('Info about person by name: ', this.name)
//     }
// }
// console.log(person)

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log('key: ', key)
//         console.log('value: ', person[key])
//     }
// }

// Object.keys(person).forEach((key) => {
//     console.log('key: ', key)
//     console.log('value: ', person[key])
// } )
//

// console.log(person.info());

// const logger = {
//     keys() {
//         console.log('Object keys', Object.keys(this))
//     }
// }
//
// const logger2 = {
//     values() {
//         console.log('Object values', Object.values(this))
//     }
// }
//
// const logger3 = {
//     keysValues() {
//         console.log(Object.keys(this).forEach((key) => {
//             console.log(`'${key}': ${this[key]}`)
//         }))
//     },
//     withParams(top = false, between = false, bottom = false) {
//         if (top) {
//             console.log('------- Start --------')
//         }
//         console.log(Object.keys(this).forEach(key => {
//             console.log(`'${key}': ${this[key]}`)
//         }))
//         if (between) {
//             console.log('---------------------')
//         }
//
//         if (bottom) {
//             console.log('--------- End -----------')
//         }
//     }
// }

// const bound = logger.keys.bind(person)
// const bound2 = logger2.values.bind(person)
// logger3.withParams.call(person, true, true, true
// )
// bound()
// bound2()


// const massiv = [1, 2, 3, 4, 5]
//
// for (let key in massiv)
//     console.log((parseInt(key) + 1).toString())
//
// const cars = ['mazda', 'ford', 'opel']
//
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }
//
// for (let key in cars) {
//     const ca = cars[key]
//     console.log(ca)
// }
//
// const massiv = {
//     name: 'Alex',
//     age: 25,
//     prof: 'programmer'
// }
//
// for (let key in massiv) {
//     console.log(key)
// }
//
// for (let key in massiv) {
//     console.log(massiv[key])
// }
//



// massiv = [1, 2, 3, 4, 5, 6]
// var sum = 0
// for (let key in massiv) {
//     if (massiv[key] % 2 === 0) {
//         sum += massiv[key]*massiv[key]
//     }
// }
// console.log(sum)


// const a = 'racecar'
// const b = 'table'
//
// console.log(b.split('').reverse().join(''));
//
// function check(word) {
//     if (word.toLowerCase().split('').reverse().join('') === word) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(check(a))
// function func(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz')
//         }
//         else if (i % 3 === 0) {
//             console.log('fizz')
//         }
//         else if (i % 5 === 0) {
//             console.log('buzz')
//         }
//         else {
//             console.log(i)
//         }
//     }
// }
//
// func(1000)


// function func(a) {
//     a.split('').sort()
//     return a
// }
// a = 'word'
// var b = a.split('').sort()
// var c = b.shift()
// console.log(b);

// function sort(word1, word2) {
//     var newword1 = word1.toLowerCase().split('').sort().join('')
//     var newword2 = word2.toLowerCase().split('').sort().join('')
//     if (newword1 === newword2) {
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(sort('колба', 'бокал'));

// let arr_en = ['a', 'e', 'i', 'o', 'u'];
// const word = 'word'
// count = 0
// for (let key in arr_en) {
//     if (arr_en.hasOwnProperty(key)) {
//         if (word.includes(arr_en[key])) {
//             count++
//         }
//     }
// }
// console.log(count);

// function check(word) {
//     let count = 0
//     for (let key in arr_en) {
//         if (arr_en.hasOwnProperty(key)) {
//             if (word.toLowerCase().includes(arr_en[key]))
//                 count++
//         }
//     }
//     return count
// }
//
// console.log(check('table'));

// const newMassive = [0, 1]
//
// function func(num) {
//     for (let i = 2; i <= num; i++) {
//         newMassive[i] = newMassive[i - 1] + newMassive[i - 2]
//     }
//     console.log(newMassive[num]);
// }
//
// console.log(func(3));


// button.onclick = function () {
//     let b = +inputIn.value
//     alert('Award 15%. On hands ' + Math.round(b * 1.15))
//     let a = Math.floor(b * 1.15)
//     alert('Taxes - 10%. On hands ' + Math.round(a * 0.9))
//     let c = Math.round(a * 0.9)
//     alert('Shop. On hands ' + Math.round(c - 190))
//     let d = Math.round(c - 190)
//     alert('Half wife. On hands ' + Math.round(d / 2))
// }

// button.onclick = function () {
//     alert('Think a number')
//     alert('x2 your number')
//     alert('+7 to num')
//     let a = prompt('Type your result ')
//     let b = (a - 7) / 2
//     alert('Your num is ' + b)
// }

// button.onclick = function () {
//     const click = 'Type students name and last name'
//     let first = prompt(click)
//     let second = prompt(click)
//     let third = prompt(click)
//     let array = []
//     let array2 = [1, 2 , 3]
//     array.push(first, second, third)
//     for (let i in array) {
//         document.write(array[i] + '<br>')
//     }
// }

// button.onclick = function () {
//     let a = prompt('Name')
//     let b = prompt('Year')
//     let today = new Date().getFullYear()
//     let fullAge = today - b - 1
//     let fullAgeost = (fullAge % 10)
//     let state;
//     // if (fullAgeost === 1) {
//     //     state = ' год'
//     // } else if ([1, 2, 3].includes(fullAgeost)) {
//     //     state = ' года'
//     // } else {
//     //     state = ' лет'
//     // }
//     // console.log(a + ': ' + fullAge + state)
//     // let result = (fullAgeost === 1) ? state = ' год':
//     //     ([1, 2, 3].includes(fullAgeost)) ? state = ' года' :
//     //         (state = ' лет')
//     // console.log(a + ': ' + fullAge + result)
// }


// button.onclick = function () {
//     let a = parseInt(prompt('What floor?'))
//     let price;
    // if (a === 1) {
    //     price = 0
    // } else if (a >= 2 && a <= 4) {
    //     price = 20 * (a - 1)
    // } else if (a >= 5 && a <= 7) {
    //     price = 30 * (a - 2)
    // } else {
    //     price = 40 * (a - 3)
    // }
    // console.log(price);
//     let result = (a === 1) ? price = 0:
//         (a >= 2 && a <= 4) ? price = 20 * (a - 1):
//             (a >= 5 && a <= 7) ? price = 60 + 30 * (a - 4):
//                 (price = 150 + 40*(a - 7));
//     console.log(result);
// }

// button.onclick = function () {
//     function func() {
//         let random = Math.round(Math.random() * (10 - 1) + 1)
//         let user = parseInt(prompt('1 to 10'))
//         console.log(random, user);
//         while (random !== user) {
//             func()
//         }
//     }
// }

// button.onclick = function () {
//     let a = prompt('4 sign number')
//     if (a % 2 === 0) {
//         a = a.toString().split('')
//         console.log(a);
//         let sum = 1;
//         for (let i = 0; i < a.length; i++) {
//             sum *= a[i]
//         }
//         console.log(sum);
//     } else {
//         a = a.toString().split('')
//         let sum = 0;
//         for (let i = 0; i < a.length; i++) {
//             sum += parseInt(a[i])
//         }
//         console.log(sum);
//     }
// }

// button.onclick = function () {
//     let a = prompt('type number')
//     let arr = [];
//     let newArr = [];
//     if (isNaN(a) === true) {
//         alert('NOT OK')
//     } else {
//         for (let i = 2; i <= 10; i++) {
//             if (a % i === 0) {
//                 arr.push(i)
//             } else {}
//         }
//     }
//     for (let i in arr) {
//         newArr.push(('Число делится на ' + arr[i]))
//     }
//     alert(newArr.join('\n'))
// }

// button.onclick = function () {
//     let a = prompt('type salary')
//     let arr = [];
//     let sal;
//     let taxes;
//     if (a <= 6000) {
//         sal = a * 0.9;
//         taxes = a * 0.1
//         arr.push(sal, taxes)
//     } else if (a >= 6000 && a <= 10000) {
//         sal = a * 0.85;
//         taxes = a * 0.15
//         arr.push(sal, taxes)
//     } else if (a >= 10000 && a <= 15000) {
//         sal = a * 0.175;
//         taxes = a * 0.825
//         arr.push(sal, taxes)
//     } else {
//         sal = a * 0.8;
//         taxes = a * 0.2
//         arr.push(sal, taxes)
//     }
//     alert('Your salary is ' + Math.floor(arr[0]) + '\n' + 'Your taxes are ' + Math.floor(arr[1]))
// }

//
// button.onclick = function () {
//     let result = [];
//     let books = [
//         'Л.Н. Толстой. Война и мир', 'Джоан Роулинг.Гарри Поттер', 'Братья Стругацкие.', 'Понедельник начинается в субботу.',
//         'Агата Кристи. Вечеринка в Хэллоуин.', 'Джонатан Страуд. Кричащая лестница.',
//         'Диана Маш. Заноза для драконьего военачальника', 'Кирилл Круганский. Смешно или страшно.',
//         'Стивен Кинг. Мизери.', 'Эдгар По. Очень страшные истории.', 'А. Маринина. Безупречная репутация'
//     ]
//     let questions = [
//         'Про волшебство должно быть?', "Надо, чтобы было смешно?",
//         "Детективная история нужна?", "Бояться будете?"
//     ];
//     for (let i in questions) {
//         result.push(
//             confirm(questions[i])
//         )
//     }
//     result = result.join(' , ')
//     let varOne = {}
//     varOne[[false, false, false, false].join(' , ')] = [0]
//     varOne[[true, false, false, false].join(' , ')] = [1]
//     varOne[[true, true, false, false].join(' , ')] = [2]
//     varOne[[true, true, true, false].join(' , ')] = [3]
//     varOne[[true, true, true, true].join(' , ')] = [4]
//     varOne[[true, false, true, false].join(' , ')] = [5]
//     varOne[[false, true, false, true].join(' , ')] = [6]
//     varOne[[false, false, false, true].join(' , ')] = [7]
//     varOne[[false, false, true, true].join(' , ')] = [8]
//     varOne[[false, true, true, false].join(' , ')] = [9]
//     let newArray = []
//     if (typeof varOne[result] === "undefined") {
//         alert('We have no such book')
//     } else {
//         newArray.push(books[varOne[result]])
//     }
//     newArray = newArray.join(' , ')
//     alert(newArray)
// }

// button.onclick = function () {
//     function func(number) {
//         let sum = 0
//         for (let i = 1; i <= number; i++) {
//             sum += i
//         }
//         return sum
//     }
//
//     console.log(func(10));
// }

// function func(number) {
//     let newArray = [200]
//     for (let i = 1; i <= number; i++) {
//     newArray.push(newArray[i - 1] + 100)
//     }
//     return newArray
// }
// let funcResult = func(4)
// for (let i in funcResult) {
//     console.log(funcResult[i]);
// }



// button.onclick = function () {
//     let poem = ["Мороз","и", "солнце", "день","чудесный"];
//     let text = poem.join(' ')
//     alert(text)
//     let result = prompt('Введите номер слова, которое хотите заменить от 1 до ' + `${poem.length}`)
//
//     if (result.replace(/\d/g, '').length) {
//         alert('Введите значение в указанных пределах')
//     }
//     else if (parseInt(result) > poem.length || parseInt(result) < 1) {
//         alert('Введите значение в указанных пределах')
//     }
//     else {
//         let result2 = prompt('Введите слово, на которое хотиет заменить')
//         console.log(result2);
//         if (typeof result2 !== 'string') {
//             alert('Введите слово, а не цифры')
//         } else {
//             poem.splice(`${parseInt(result) - 1}`, 1, result2)
//             let newPoem = poem.slice()
//             alert(newPoem.join(' '))
//         }
//     }
// }


// button.onclick = function () {
//     let arr = []
//     let newArr = []
//     for (let i = 1; i <= 20; i++) {
//         arr.push(Math.floor(Math.random() * (100 - 1)) + 1)
//     }
//     console.log(arr);
//     for (let i in arr) {
//         if (arr[i] % 2 === 0) {
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr);
// }
// let inputIn = document.querySelector('.input-in')
// let button = document.querySelector('button')


