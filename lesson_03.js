/*let i = 5;
let j = new Number(5);
i = new Number(i);
i = i.valueOf();


let a = [];	// объект
console.log(typeof(a));

let b = [1,2,3]; // объект массив
console.log(b);
console.log(typeof(b));
console.log(b[1]);
console.log("Длина массива равна " + b.length + ".");
b.length = 10;
console.log(b); // если менять длину, то к концу добавятся к концу пустые эл-ты
console.log(b[7]); 
b[20] = 7; // логически не особо верное, но работающее в JS
console.log(b);
console.log("Длина массива равна " + b.length + "."); // длина масства идет с нуля
b.length=3;
console.log(b);
console.log("Длина массива равна " + b.length + ".");


b.push(7);
console.log(b);
b.pop();
console.log(b);
i = b.pop();
console.log(i);
console.log(b);


console.log("___________________");
k = b.push(9);	// 
console.log("Работа с методами pop, push и др.\n");
console.log(k);
k = b.pop();	// число, которое мы выкидываем из массива
console.log(k);
b.push(8, 4, 2, 5); // добавляет куском, в отличие от стека(там послед.)
console.log(b);
b.unshift(11); // добавляет к началу списка
console.log(b);
b.shift();
console.log(b);
b.unshift(10, 12, 13, 14, 15);
console.log(b);
b.shift();  // только по одному как и поп
console.log(b);

b.splice(1,1);
console.log(b);

b.length = 10;
console.log(b);
b.splice(6,5,-1); // вставить после 6, удалив 5 эдементов после, -1
console.log(b);
b.splice(4,0,3,1,2,7,8,9); // вставить(после 4, 0 удалить, вставить 1,2....)
console.log(b);

// метод сорт
console.log(" Метод sort. Ф-ии обратного вызова");
o = [9,8,3,22,220,4,2,0];
o.sort();
console.log(o);
o.sort(function(a,b){return a-b;}); // сортировка от -инф до +инф
console.log(o);

o.reverse(); // перевернутый массив 
console.log(o);
*/
/*
// ________ Д А Т А _________
let d= new Date(); // полная дата и точное время
console.log(d);
console.log(d.valueOf()); // кол-во миллисекунд со дня "начала" Юникса
console.log(d.getFullYear()); // конкертно год 
console.log(d.getYear()); // год минус 1900
console.log(d.getMonth()); // месяцы идут в js  с нуля
console.log(d.getDay()); // день недели
dd = new Date(2020, 8, 27);
console.log(dd);
console.log("Часы: " + d.getHours()); // первый день недели - ноль
console.log("Минуты: " + d.getMinutes()); 
console.log("Секунды: " + d.getSeconds()); 
console.log("Миллисекунды: " + d.getMilliseconds());
console.log("Текущая дата месяца: " + d.getDate());
// d.setFullYear(2021);
// console.log(d);

dd = new Date(2020, 8, 27, 18, 43, 12, 11);
console.log(dd);

*/

function f(n){

let b = new Date();
	if (n == 0) return 1;
	if (n < 0) return 0;
	let factorial = 1;
	for(let i = 1; i<=n;i++)
	{
		factorial*=i;
	}
f.result = factorial; // важно писать через f. , а не this.
let e = new Date();
	f.time = e.valueOf() - b.valueOf();
return factorial;
}

console.log(f(10));
console.log(f(0));
console.log(f(-1));
console.log(typeof(f));

let ff = f;
console.log(ff(10));

let a = [f, ff];
console.log(a[0](10));

let o = {fff:f};
console.log(o.fff(10));

f.description = "f - Функция вычисления факториала";
console.log(f.description);

f(10);
console.log(f.result);
let g = f(100000);
console.log(g);
console.log(f.time);
