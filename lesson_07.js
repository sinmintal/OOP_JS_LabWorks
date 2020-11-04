/* var f = function(z=1)	{
	this.name = 'че угодно';
	L.CL(this);
	L.CL(z);
	}
f();

var a = {
		name: 'a',
		ff:f
		};
a.ff();

var b = {
		name: 'b',
		fff: f
		};
b.fff();

var c = { name: 'c'};
// новый способ вызова ф-ии!!
f.call(c,7);
b.fff.call(c,7);

var obj1 =
{
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
	fff:function() // свойство объекта, поэтому тоже выводится
	{
		for(var key in this) // перебор по всем объектам в this
		{
			L.CL(key + '=' + this[key]);
		}
	}
}
obj1.fff();

var obj2 =
{
	x: 10,
	y: 11,
	z: 12
}

obj1.fff.call(obj2);
obj1.fff.call(L);


 */

function f1()
{
	// L.isDebugMode = true;
	L.CL(f1.name);
}
f1();
L.isDebugMode = true;
f1();



