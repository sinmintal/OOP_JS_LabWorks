/* function f()
{
	{
		a = 1;
		var b = 2; 
		let c = 3;	 // действуют только в границе блока
		const d = 4; 
	}
		console.log(a);
		console.log(b);
	//	console.log(c);
	//	console.log(d);
}
f();	
		console.log(a); 
		
// +___ видимости переменных ___+

		// console.log(b); не отображается, так как б - var 
		//	console.log(c);
		//	console.log(d);
		
// +______ типы переменных _____+   

// ---> есть также спец. значения: symbol, bigint, null 
		let i = 5;
		console.log(typeof(i));
		i = "5";
		console.log(typeof(i));		
		i = false;
		console.log(typeof(i));		// primitive
		let j;	// неопределенный тип 
		console.log(typeof(j));		
		j = Symbol("хранилище непонятно чего");
		console.log(j);
		
// +_____ особые случаи _____+

		j = null; // объект НУЛЬ
		console.log(typeof(j));
		console.log(j);
		j = 1/0; // число БЕСКОНЕЧНОСТЬ
		console.log(typeof(j));
		console.log(j);
		j = -1/0; // число МИНУС БЕСКОНЕЧНОСТЬ
		console.log(typeof(j));
		console.log(j);
		j = Infinity - Infinity; // число NaN - число НЕ ЧИСЛО
		console.log(typeof(j));
		console.log(j);
		j = console.log() + "5";
		console.log(typeof(j));
		console.log(j);
*/		
		
	let s = new String ("ПАCCВОРД");
console.log(typeof(s));
console.log(s);
console.log(s.length);
console.log(s[2]);
console.log(s.toLowerCase());
let p = "че угодно";
console.log(p.toUpperCase());
console.log(p.toString());
	p = "л у н а";
//	p = new String (p);	 // JS имеет подмену этой строки (замена на объект)
//	p = p.toUpperCase(); // разницы по факту в использовании только 1 или 2 строк нет
	p = p.toUpperCase();
	console.log(p);


// глянуть все методы объекта STRING (мона с помощью консоли)
// функиця это тоже объект	
		// funct = function() { console.log("аЯ-Я-ЯЯ-Я"); }
		// funct();
		// console.log(funct);
		// console.log(funct.toString());		
		
	let i = new Number(5);
		
		let l = new Boolean(true);
		console.log(l);
		
		let person =
		{
			name: "никита",
			lastname:  "шестихина",
			age: 3,
			
		fullname: function()
		{
			return this.name + " " + this.lastname;
		}
		};
		console.log(person);
	
		
		console.log (person.name);
		console.log (person.lastname);
		console.log (person.age);
		console.log (person.fullname());
		