L.CL(L.name);
	delete L.name; // удаление свойства
	L.name = "Изменение имени";
// L.__defineGetter__('name', function(){	return 'bababoi';});
// способен поменять значение переменной. защищ. доступ.
	L.CL(L.name);
L.CL(L.version);
	delete L.version; // удаление свойства
	L.version = "Изменение версии";
// L.__defineGetter__('version', function(){	return 'bababoi';});
// способен поменять значение переменной. защищ. доступ.
	L.CL(L.version);
L.CL(L.date);
	delete L.date; // удаление свойства
	L.date = "Изменение даты";
	L.CL(L.date);	
L.CL(L.author);
	delete L.author; // удаление свойства
	L.author = "Изменение имен авторов";
	L.CL(L.author);	
