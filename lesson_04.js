/*
function f(n){

let b = new Date();
// СОЗДАНИЕ КЭШИРУЮЩЕЙ ФУНКЦИИ
f.cache = f.cache || {}; // ловим "undefined" и заменяем пустым объектом
let factorial = 1;
console.group("Вызов функции f(" + n + ") ");
if (f.cache[n])
{ 
factorial = f.cache[n]; 
console.log("Из кэша.");
}
else {
	if (n == 0) return 1;
	if (n < 0) return 0;
	for(let i = 1; i<=n;i++)
	{
		factorial*=i;
	}
f.result = factorial; // важно писать через f. , а не this.
f.cache[n] = factorial;
console.log("Расчёт.");
}
	let e = new Date();
	f.time = e.valueOf() - b.valueOf();
	console.log (`Время: ${f.time}`);
console.groupEnd();
return factorial;
}
/* console.log(f(0));	// тест 0

console.log(f(-1)); // тест -1
console.log(f.time); // время вычисления
console.log(typeof(f)); 
	console.log(f.cache); // потому что при 0, -1 выкидывает из проги
	console.log(f(7));
	console.log(f.cache);
	console.log(f(10));
	console.log(f.cache);
	console.log(f(15));
	console.log(f.cache); // постепенное накопление кэша 
	console.log(f(1000));
	console.log(f.cache); // постепенное накопление кэша
	console.log(f(1000));  // берет значение уже вычисленное из кэша
	console.log(f.cache); 		
*/

L.CG("тест одного из методов библиотеки: вывод группы");
L.CL("тестируем библиотеку, выводим строку");
L.CGe();

L.CG(" прощай, жестокий мир ");
L.CL(" !!!!!! ");
L.CL(" *выстрел* ");
L.CL(" ... ");
L.CGe();

L.CL(L.name);
L.name = 'УАаАаА БибЛиот3К@ jS';
L.CL(L.name);