// с помощью параметра this ф-ия определяет, откуда её вызывают
// в случае глобального вызова f() --> window; obj.f() --> obj; new f() --> {};
// режим вызова

/* // "Использование STRING типа как констуктора и типа"
var a = new String("42");
L.CL(L.t(L.CL(a)));
var b = 42; // число 42
var c = String(b); // без new конвертируется в тип string "42"
L.CL(L.t(L.CL(c)));
*/

/* ЛЕКЦИЯ
	|--------> constructor ------v
object <--	prototype <------> STRING ----> obj(prototype, d)
d (дельта) -------^  		
Object(), String(), Array(), Function() } ФУНКЦИИ-КОНСТРУКТОРЫ
*/

/* // "Вариативность способов определения - явное и неявное задание "

var a1=[1,2];
var a2 = new Array(1,2);
	L.CL(a1);
	L.CL(a2);

var o1 = {a1:1, a2:2};
var o2 = new Object({a1:1,a2:2});
	L.CL(o1);
	L.CL(o2);
	
	x = 10; y = 5;
var f1 = function(x,y) {return x*y};
var f2 = new Function("x, y", "return x*y");
	L.CL(f1(x,y));
	L.CL(f2(x,y)); */
	
/* // "Создание классов. Создание скелета класса"
	// для создания класса требуется создать прототип и ф-ию
	// объекты прототипа через _name
	var _obj = {a:1, b:2, c:3};
	function F(x)
	{
		this.value = x;
	}
		F.prototype = _obj;
		_obj.construcror = F;
		
	var objF = new F(10);
	L.CL(objF);
	L.CL(objF.__proto__);
	
 */
 
// "Создание классов. Создание класса, определяющего массив строк внутри объектов"
/* Перенесен в библиотеку var _str = { 
			valueOf : function ()
				{
					var index = L.r(0, this.valueList.length-1);
					return this.valueList[index];
				}
			};
			
function Str(x) // конструктор
{
	this.valueList = x;
}

	Str.prototype = _str;
	_str.constructor = Str;
 */
	
/* 	//__ Работа со строками-фразами __
var str1 = new L.Str(["Привет", "Hello", "Bonsoir", "Kalimera", "Halo"]);
var str2 = new L.Str(["Мир", "World", "Monde"]);

L.CL(str1.valueOf()+", " + str2.valueOf());

/* Перенесен в библиотеку var _phrase = {
				valueOf : function()
				{
					var result = "";
					for (let j = 0; j < this.wordList.length; j++)
					{
						result +=  this.wordList[j].valueOf(); // эл-т списка слов
					}
					return result;
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
	 */
	
/* 	//__ Работа с фразами __
var phrase = new L.Phrase(["Привет", "Hello"], [", "],["Мир", "World"], ["!!!", "!!", "!"]);

L.CL(phrase.valueOf());


L.b("Какой-то текст"); // меняет текст на странице Html */ 

var string = new L.Str(["ахвха", "fds", "1213"]);
L.CL(string.probUniq())

var phrase = new L.Phrase(
	[ "Мой", "Наш", "Твой"],	[" "],
	["дядя", "батя", "папа"],	[" "],
	["самых", "очень", "крайне"],	[" "],
	["честных", "чистых", "грязных"],	[" "],
	["правил"],	[",<br>"],
	["Когда", "Пока", "Прикинь," ],	[" "],
	["не в шутку", "серьезно", "реально", "внезапно"],	[" "],
	["занемог", "взял носок", "съел горох"], 	["<br>"],
	["Он уважать", "Он целовать", "Везти в Тамбов"],	[" "],
	["себя", "тебя", "меня"],	[" "],
	["заставил", ],	[",<br>"],
	["И лучше","И точно", "И лучше б", "И"],	[" "],
	["выдумать", "описать", " ", " "],	[" "],
	["не смог", "оглох", "сдох"]
	);
	
L.b(phrase.valueOf());