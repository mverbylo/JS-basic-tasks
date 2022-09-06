// 1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие (Пусть совершеннолетним считается пользователь, которому исполнилось 18 лет):
const age = prompt('Enter your age')
const isAdult = function (age) {
  if (typeof +age !== 'number' || isNaN(age)) {
    return null
  }
  return age >= 18
}
// 2.  Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:
const checkMultiplicity = function (num1, num2) {
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    isNaN(num1 - num2)
  ) {
    return null
  }
  return num1 % num2 === 0
}
// 3. Проверка возможности треугольника. Создать функцию которая принимает длины сторон треугольника; функция возвращает true если треугольник возможен и false если нет
const isTriangle = function (a, b, c) {
  if (
    typeof +a !== 'number' ||
    typeof +b !== 'number' ||
    typeof +c !== 'number' ||
    isNaN(a - b - c) ||
    a <= 0 ||
    b <= 0 ||
    c <= 0
  ) {
    return null
  }
  return a<= b + c && b <= a + c && c <= b + a
}
// 4. написть функцию, которая принимает число и возвращает сумму нечетных чисел от 1 до указанного числа
const sumOfOddNumbers = function (num) {
  if (typeof +num !== 'number' || isNaN(num)) {
    return null
  }
  let sum = 0
  for (let i = 1; i <= num; i += 2) {
    sum += i
  }
  return sum
}
// 5. Создать функцию, которая будет проверять, является ли число простым. Простым является неотрицательное число, которое делится нацело только на самого себя или на 1.
const primeNumber = function (num) {
  if (typeof +num !== 'number' || isNaN(num)) {
    return null
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0 || +num <= 0 || +num % 1 !== 0) {
      return false
    }
  }
  return true
}
