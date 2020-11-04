// ПРИМЕР И (и наследования)
var L = (function()
{
	var i=0 // становятся не свойствами объекта
	var isDebugMode = false;
	function log() 
	{
		i++;
		if(isDebugMode)
		{
			console.log ("Функция:" + this.name, "Счетчик: " +i);	
		}
	}; // функция счетчика
	
	var publicAPI = // 	ПАТТЕРН "МОДУЛЬ" ex.: не можем залезть внутрь панциря, но можем подергать ручки/ножки черепахи
	{
		// name: "Библиотека L.js ",
		CL: function CL(str) // ф-ия "обертка"
		{
			 log.call(CL);
			 console.log(str);
			 return str;
		},
		CG: function(str) // ф-ия создания группы 
		{
			log.call(CL);
			console.group(str);
		},
		CGe: function () // ф-ия завершения группы
		{
			log.call(CL);
			console.groupEnd();
		},
		n: function() 
		{
			return 'Библиотека L.js';
		},
		// version: "Версия 13.37",
		v: function()
		{
			return 'Версия 13.37';
		},
			// стрелочная ф-ия, можно записывать как t: x>>typeof x;
		t: function t(x)
		{
			return typeof x;
		},

	}
	
	{	// сеттеры геттеры
	publicAPI.__defineGetter__("name",publicAPI.n);
	publicAPI.__defineSetter__("name",
		function(newName)
		{
			publicAPI.CL("Доступ запрещен");
			var	elemBody = document.getElementsByTagName("body")[0];
			elemBody.innerHTML = "бан с повидлом по подсети";
			elemBody.style.color = "#F48033";
			elemBody.style.fontSize = "50px";
			elemBody.style.background = "#470952";
		});
	publicAPI.__defineGetter__("version", publicAPI.v);
	publicAPI.__defineSetter__("version",publicAPI.__lookupSetter__("name"));
}

	Object.defineProperty(publicAPI, 'name', // дескриптор с ключ. св-вами
	{
		// value: 'Библиотека L.js', // через запятую перечисл. св-в
		// writable: false,
		configurable: false, // запретили изменение св-в.
		// СЕТТЕРЫ И ГЕТТЕРЫ ЗАМЕНЯЮТ value и writable
		enumerable: false, 	// видимость св-ва: скрыть
		set: publicAPI.__lookupSetter__('name'),
		get: publicAPI.__lookupGetter__('name')
	});	
	
	Object.defineProperty(publicAPI, 'version', // дескриптор с ключ. св-вами
	{
		// value: 'Библиотека L.js', // через запятую перечисл. св-в
		// writable: false,
		configurable: false, // запретили изменение св-в.
		// СЕТТЕРЫ И ГЕТТЕРЫ ЗАМЕНЯЮТ value и writable
		enumerable: true,
		set: publicAPI.__lookupSetter__('version'),
		get: publicAPI.__lookupGetter__('version')
	});
		Object.defineProperty(publicAPI, 'isDebugMode', // дескриптор с ключ. св-вами
	{

		configurable: false, // запретили изменение св-в.
		// СЕТТЕРЫ И ГЕТТЕРЫ ЗАМЕНЯЮТ value и writable
		enumerable: true,
		set: function(val) { isDebugMode = val;} ,
		get: function() {return isDebugMode;}
	});
	
		var publicAPIChild = Object.create(publicAPI, 
		{
			date: {
				value: '17.10.2020',
				writable: false,
				enumerable: true,
				configurable: false
			},
			author: {
				value: 'Соколова, Шестихин М3О-235Б-19',
				writable: false,
				enumerable: true,
				configurable: false
			}
		});
	
	publicAPIChild.pl = (function() {
			for(key in this){
			L.cl(key+`=`+this[key]);
			}
		}).bind(publicAPIChild);
		
	publicAPIChild.RFG = function(x, y){
		return function  (a = x, b = y){
			if(a>b){
				console.error("Ошибка");
				return undefined;
			}
			var n;
			n = a + Math.round((b-a)*Math.random());
			return n;
		}
		
	}
	publicAPIChild.RFG.description='Функция, создающая функцию, генерирущую случайные числа';
	
	publicAPIChild.r = publicAPIChild.RFG();
	{
	var _str = { 
			valueOf : function ()
				{
					var index = publicAPIChild.r(0, this.valueList.length-1);
					return this.valueList[index];
				},
			
			probUniq: function() // высчитывание вероятности
				{
					var res = 1/this.valueList.length;
					return res;
				}
			};
	function Str(x) // конструктор
	{
		this.valueList = x;
	}
		Str.prototype = _str;
		_str.constructor = Str;
		
	publicAPIChild.Str = Str;
}
	{
	var _phrase = {
				valueOf : function()
				{
					var result = "";
					for (let j = 0; j < this.wordList.length; j++)
					{
						result +=  this.wordList[j].valueOf(); // эл-т списка слов
					}
				
				// высчитывание вероятности появление двух одинаковых фраз
					return result;
				}
				probUniq: function() {
					let result = new Array; // задаем массив, т.к. это фраза из строк
					for (let i = 0; i < this.wordList.length; i++) {
						result.push(this.wordList[i].probUniq());	// push() добавляет один или более элементов в конец массива 
					}
					return result
				}
			  };
			  
	function Phrase(...x) // spread -> устанавливает неогр. кол-во параметров
	{
		this.wordList = x.map 
							(
							 function (v) { var str = new Str(v);
							 return str;}
							); // map запускает обработку каждого эл-та
	}

		Phrase.prototype = _phrase;
		_phrase.constructor = Phrase;
		
	publicAPIChild.Phrase = Phrase;
	}
	publicAPIChild.b = function(txt){
		document.getElementsByTagName('body')[0].innerHTML = txt;// берем нулевой элемент
		document.getElementsByTagName('body')[0].style.fontSize = "50px";
	}
return publicAPIChild;
})(); //запись вида IIFE ( f() { }) ();
