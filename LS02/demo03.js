//Number方法
//ceil()向上取整  floor()向下取整   round()四舍五入
var a2 = 23.4;
console.log(Math.ceil(a2));//24
console.log(Math.floor(a2));//23
console.log(Math.round(a2));//23
a3 = 5e2;//指数形式  等同于5e+2
console.log(a3);//500
console.log(typeof Math);//object 
//toFixed(x)四舍五入小数点后取x位  toPrecision(x)转换成指数形式小数点后取x-1位
//toString()转换成字符串格式       toExponential(2)转换成指数形式小数点后取x位
var n1 = 12345.6789;
console.log(n1.toFixed(2));//12345.68
console.log(n1.toPrecision(2));//1.2e+4
console.log(n1.toString());//12345.6789
console.log(n1.toExponential(2));//1.23e+4

//NaN 
var x = Number("xis021");//试着转成Number类型
console.log(x);//NaN
isNaN(x);//true
typeof NaN;//"number"

//acos()返回了一些弧度的反余弦值  log() 方法可返回一个数的自然对数
console.log(Math.log(-1));//NaN
console.log(Math.acos(2));//NaN 
console.log(NaN === NaN);//false


//Infinity与-Infinity
var y1 = 2/0;
console.log(y1);//Infinity
var y2 = -2/0;
console.log(y2);//-Infinity
isFinite(y2);//false，非有限数
isFinite(23);//true，有限数

//0与-0
var z1 = 1/Infinity;
console.log(z1);//0
var z2 = -1/Infinity;
console.log(z2);//-0
