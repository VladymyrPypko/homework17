// ------------- 1, 2 -------------
const arr1 = [];
const arr2 = [];

for(let i = 10; i <= 20; i++){
    arr1.push(i);
    arr2.push(i * i);
};

document.write(`1. ${arr1} <br><hr>`);
document.write(`2. ${arr2} <br><hr>`);

// ------------- 3 -------------
const arr3 = [];
let multiNum = 7;

for(let i = 1; i < 10; i++){
    arr3.push(`${multiNum} * ${i} = ${multiNum * i}`);
};

document.write(`3. ${arr3} <br><hr>`);

// ------------- 4 -------------
let sum4 = 0;
for(let i = 0; i <= 15; i++){
    sum4 += i;
};

document.write(`4. 1 + 2 + ... + 15 = ${sum4} <br><hr>`);

// ------------- 5 -------------
let product = 1;
for(let i = 15; i <= 35; i++){
    product *= i;
};

document.write(`5. 15 * 16 * ... * 35 = ${product} <br><hr>`);

// ------------- 6 -------------
const arr6 = [];

for(let i = 1; i <= 500; i++){
    arr6.push(i);
};

const getAverageNum = (numbers) => {
    let sum6 = numbers.reduce((acc, number) => acc + number, 0);
    return sum6 / arr6.length; 
}

document.write(`6. ${getAverageNum(arr6)} <br><hr>`);

// ------------- 7 -------------
let sum7 = 0;

for(let i = 30; i <= 80; i++){
    if(i % 2 === 0){
        sum7 += i;
    };
};

document.write(`7. ${sum7} <br><hr>`);

// ------------- 8 -------------
const arr8 = [];

for(let i = 100; i <= 200; i++){
    if(i % 3 === 0){
        arr8.push(i);
    };
};

document.write(`8. ${arr8} <br><hr>`);

// ------------- 9, 10, 11 -------------
const userNum = +prompt('Введите любое целое число:', 27);
const divisors = [];

for(let i = 1; i <= userNum; i++){
    if(userNum % i === 0){
        divisors.push(i);
    }
}

document.write(`9. Делители числа ${userNum}: ${divisors} <br><hr>`);

const evenDivisors = divisors.filter((number) => number % 2 === 0);
console.log(evenDivisors);
document.write(`10. Кол-во парных делителей числа ${userNum}: ${evenDivisors.length} <br><hr>`);

const evenDivisorsSum = evenDivisors.reduce((acc, number) => acc + number, 0);
console.log(evenDivisorsSum);
document.write(`11. Сумма парных делителей числа ${userNum}: ${evenDivisorsSum} <br><hr>`);

// ------------- 12 -------------
document.write('12. Таблица умножения от 1 до 10:<br>');

for (let i = 1; i <= 10; i++) {
    let row = '';

    for (let j = 1; j <= 10; j++) {
        row += (i * j) + ' ';
    };

    document.write(`${row} <br>`);
};

// ------------- 13 -------------
document.write('<hr>13. ')
for(let i = 20; i <= 30; i += 0.5){
    document.write(i + ' ');
};

// ------------- 14 -------------
document.write('<hr> 14. Курс доллара к грн.: <br>')
const rate = 27;

for(let dollar = 10; dollar <= 100; dollar += 10){
    let hryvnya = dollar * rate;
    document.write(`${dollar}\u0024 = ${hryvnya}\u20B4 <br>`);
};

// ------------- 15 -------------
const userNumb = +prompt('Введите любое целое число:', 50);
const numbers = [];

for(let i = 1; i <= 100; i++){
    if(i * i <= userNumb){
        numbers.push(i);
    }
}
document.write(`<hr>15. Числа, квадрат которых не превышает числа ${userNumb}: ${numbers}<br><hr>`);

// ------------- 16 -------------
const userNumber = +prompt('Введите любое целое число:', 13);

function isSimpleNum(num){
    if(num > 1){
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                return document.write(`16. Число ${userNumber} не является простым.`);
            }
        }
        return document.write(`16. Число ${userNumber} является простым.`);
    } else {
        return document.write(`16. Число ${userNumber} должно быть больше 1`);
    }
}

isSimpleNum(userNumber);

// ------------- 17 -------------
const powNum = +prompt('Введите любое целое число:', 81);

for(let i = 1; i <= powNum; i++){
    if(3 ** i === powNum){
        document.write(`<hr>17. Число ${powNum} можно получить путем возведения 3 в степень ${i}`);
    }
};
