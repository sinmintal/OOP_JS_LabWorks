function P(k)
{
	if(k < 1 || k >10) k = 10;
	var i = k;
	function numToStr(i)
		{
			var a = ["Ноль","Один","Двое","Трое","Четверо","Пять", "Шесть", "Семь", "Восемь","Девять","Десять"]
		return a[i]
		}
	return function()
	{
		L.CG(i);
		var t;
		
	if(i > 1) t = `${numToStr(i)} поросят пошли купаться в море,
${numToStr(i)} поросят резвились на просторе,
Один из них утоп, ему сковали гроб.
И вот вам результат ` + (--i) + ' поросят';
else { t = `Один поросенок пошел купаться в море 
Один поросенок резвился на просторе
Но он не утонул. Нашел себе свинью
И вот вам результат ${k} поросят`;
i = k;
	}
		L.CL(t);
		L.CGe();
	}	
}

f = P(10);
y = P(7);
for(let i = 1; i <=10; i++)
{
	f();
}

for(let i = 1; i <=7; i++)
{
	y();
}
