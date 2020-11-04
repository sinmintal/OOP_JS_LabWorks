/* var obj = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
	g: function() {
		for(key in this){
			L.cl(key+`=`+this[key]);
		}
	}
}
obj.g();

f1=obj.g.bind(console);
f1();
f1.call(obj);

L.pl();
L.pl.call(obj); */
/* 

var f=(n)=>n*n;
L.cl(f(5));
var ff= (a, b)=> a+b;
L.cl(ff(10,7));
var fff=(a,b,c)=>{
	var d = a+b-c;
	L.cl(d);
	return d;
}
fff(1,2,3);

 var f1=()=>L.cl(this);
 var obj1={
	 f:f1
 }
 f1();
 obj1.f();
 f1.call(obj1);
 
 var f2=f1.bind(obj1);
 f2(); */
 
 
/*  var f= function(a, b) {
	 var n;
	 n = a + Math.round((b-a)*Math.random());
	 return n;
 } 

 for (i=1; i<=10; i++){
	L.cl(f(0,1));
	
 } */
 
/* var f10=L.RFG(1, 10);
for (i=1; i<=10; i++){
	L.cl(f10());
 } */
 
/*  var obj=new Object({a:1, b:2});
 L.cl(Object.prototype);
 L.cl(obj.__proto__);
 L.cl(Object.prototype==obj.__proto__);
 
 L.cl(obj.__proto__.__proto__);
  
  
 var str = new String('hello');
 L.cl(str);
 
 L.cl(str.__proto__.__proto__==obj.__proto__);
 
 L.cl(obj.constructor);
 L.cl(obj.constructor.prototype.__proto__);
 L.cl(str.constructor.prototype.__proto__); */
 
 
 var arr= new Array(1,2,3,4,5);
 L.cl(arr.constructor);
 L.cl(arr.__proto__);
 L.cl(Object.__proto__);