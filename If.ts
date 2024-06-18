//Дано целое число a. Проверить истинность высказывания: Число а является положительным
{
    let a = 345;
    console.log(a>=0);
}

//Дано целое число А. Проверить истинность высказывания: Число А является нечетным
{
    let a = 11;
    console.log(a % 2 !=0);
}

//Дано целое число А. Проверить истинность высказывания: Число А является четным
{
    let a:number=22;
    console.log(a % 2 ==0);
}

//Даны два целых числа А, B. Проверить истинность высказывания: Справедливы неравенства A>2, B<=3
{
    let a:number=23;
    let b:number=1;
    console.log(a>2, b<=3);
}

//Даны два целых числа А, B. Проверить истинность высказывания: Справедливы неравенства A>=0, B<-2
let a:number=(Math.random()*10);
let b:number=(Math.random()*2)-10;
console.log(a>=0,b<-2);


//Дано целое число. Если оно является положительным, то прибавить к нему 1; в противном случае вычесть из него 2. Вывести полученное число.
let c:number=Math.round ((Math.random()*10)-5);
if (c>0){
    c=c+1
}else if(c<0){
    c=c-2
}
console.log('c',c);

//Дано целое число. Если оно является положительным, то прибавить к нему 1;если отрицательным, то вычесть из него 2. Если нулевым, то заменить его на 10. Вывести полученное число.
let d:number=Math.round((Math.random()*10)-10);
if(d>0){
    d=d+1
}if(d<0){
    d=d-2
}if(d===0){
    d=10-d
}
console.log('d',d);

//Даны три целых числа. Найти количество положительных чисел в исходном наборе
const e:number=Math.round((Math.random()*5)-1);
const f:number=Math.round((Math.random()*5)-1);
const g:number=Math.round((Math.random()*5)-1);
if (e>f && e>g){
    console.log('Положительное число e', e)
}
if (f>e && f>g){
    console.log('Положительное число f', f)
}
if (g>e && g>f){
    console.log('Положительное число g', g)
}

//Даны три целых числа. Найти количество положительных и количество отрицательных чисел в исходном наборе
const h:number=Math.round((Math.random()*5)-1);
const j:number=Math.round((Math.random()*5)-1);
const k:number=Math.round((Math.random()*5)-1);
if (h>j && h>k){
    console.log('Положительное число h', h)
}
else if (h<j && h<k){
    console.log('Отрицательное число h', h)
}
if (j>h && j>k){
    console.log('Положительное число j', j)
}
else if (j<h && j<k){
    console.log('Отрицательное число j', j)
}
if (k>h && k>j){
    console.log('Положительное число k', k)
}
else if (k<h && k<j){
    console.log('Отрицательное число k', k)
}

//Даны два числа. Вывести большее из них
let q:number=Math.round(Math.random()*100)-10;
let w:number=Math.round(Math.random()*100)-10;
if (q>w){
    console.log('Большее число q',q)
}
else if (w>q){
    console.log('Большее число w',w)
}

//Даны два числа. Вывести порядковый номер меньшего из них
let r:number=Math.round(Math.random()*100)-10;
let t:number=Math.round(Math.random()*100)-10;
if (r<t){
    console.log('Порядковый номер r',r)
}
else if (t<r){
    console.log('Порядковый номер t',t)
}

//Даны два числа. Вывести вначале большее, а затем меньшее из них
let y:number=Math.round(Math.random()*100)-10;
let u:number=Math.round(Math.random()*100)-10;
if (y>u){
    console.log('Большее число y',y)
}
if (u>y){
    console.log('Большее число u',u)
}
else if (y<u){
    console.log('Меньшее число y',y)
}
else if (u<y){
    console.log('Меньшее число u',u)
}

//Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить каждой переменной сумму этих значений, а если равны, то присвоить переменным нулевые значения. Вывести новые значения переменных A и B.

{
    let a:number=Math.round(Math.random()*10)-5;
    let b:number=Math.round(Math.random()*10)-5;
    if (a !== b){
        a = a + b;
        b = b + a;
    } else {
      a = 0;
      b = 0;
    }

    console.log('a', a);
    console.log('b', b);
}

//Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить каждой переменной большее из этих значений, а если равны, то присвоить переменным нулевые значения. Вывести новые значения переменных A и B.

{
    let a:number=Math.round(Math.random()*10)-5;
    let b:number=Math.round(Math.random()*10)-5;
    if (a !== b){
        a > b;
        b > a;
        b = a;
        a = b;
        }
    else {
        a = 0;
        b = 0;
    }
    console.log('a', a);
    console.log('b', b);
}

// Даны три числа. Найти среднее из них (то есть число, расположенное между наименьшим и наибольшим).

{
    const a:number=Math.round(Math.random()*100)-10;
    const b:number=Math.round(Math.random()*100)-10;
    const c:number=Math.round(Math.random()*100)-10;
    let minNum:number;
    let maxNum:number;
    let middleNum:number;

}

//Даны три числа. Вывести вначале наименьшее, а затем наибольшее из данных чисел.

{   const a:number=Math.round(Math.random()*100)-10;
    const b:number=Math.round(Math.random()*100)-10;
    const c:number=Math.round(Math.random()*100)-10;

    if (a < b && a < c){
        console.log('Наименьшее число a',a);
    }
    if (b < a && b < c){
        console.log('Наименьшее число b',b);
    }
    if (c < a && c < b){
        console.log('Наименьшее число c',c)
    }

    if (a > b && a > c){
        console.log('Наибольшее число a',a);
    }
    if (b > a && b > c){
        console.log('Наибольшее число b',b);
    }
    if (c > a && c > b){
        console.log('Наибольшее число c',c)
    }
}

//Даны три числа. Найти сумму двух наибольших из них.
{
        const a:number=Math.round(Math.random()*100)-10;
        const b:number=Math.round(Math.random()*100)-10;
        const c:number=Math.round(Math.random()*100)-10;
}