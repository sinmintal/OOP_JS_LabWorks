var L = 
{
	
	name: "Библиотека L.js",
	i: 0,
	log: function() {console.log ("Счетчик: " +(++L.i));},
CL: function(str) // ф-ия "обертка"
	{
	 L.log();
	 console.log(str);
	 return str;
	},
CG: function(str) // ф-ия создания группы 
	{
	L.log();
	 console.group(str);
	},
CGe: function () // ф-ия завершения группы
{
	L.log();
	console.groupEnd();
},
n: function() 
{
	return 'Библиотека L.js';
	},
	version: "Версия 13.37",
v: function()
{
	return 'Версия 13.37';
}
}
L.__defineGetter__("name",L.n);
L.__defineSetter__("name",
	function(newName)
	{
	 L.CL("Доступ запрещен");
	var	elemBody = document.getElementsByTagName("body")[0];
	 	elemBody.innerHTML = "бан с повидлом по подсети";
		elemBody.style.color = "#F48033";
		elemBody.style.fontSize = "50px";
		elemBody.style.background = "#470952";
		}
	);
L.__defineGetter__("version", L.v);
L.__defineSetter__("version",L.__lookupSetter__("name"));


