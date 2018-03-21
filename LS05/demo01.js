//一、算术运算符
//+一般转换成字符串 -一般转换成number
//+与+=转换成字符串类型;/与/=转换成number类型
console.log("1"+"2"); //"12"
console.log("1"+2); //"12"
console.log(1+{}); //"1[object Object]"
console.log(true+true); //2
console.log("5"-2); //3

var x = "1";
console.log(++x); //2 注意++和--的隐式类型转换
var x = "1";
console.log(x+1);//11

var i=1;
var y = ++i + ++i + ++i;
console.log(y);//2+3+4=9

//二、关系运算符
//==若等号两边都是引用类型，空间相同，则为true;类型不同，隐式类型转换（若只有一边为引用类型，进行类型转换）
//===若等号两边都是引用类型，空间相同，则为true；类型不同，则为false

var obj1={x:2,y:[1],z:false};
var obj2={x:2,y:[1],z:new Boolean(true)};
console.log(obj1.x===obj2.x);//true
console.log(obj1.y===obj2.y);//false
console.log(obj1.z===obj2.z);//false
console.log(obj1.x==obj2.x);//true
console.log(obj1.y==obj2.y);//false
console.log(obj1.z==obj2.z);//false

var a=(new Boolean(false)||22);
console.log(a,typeof a)// Boolean {false} "object"

//存在二义性的代码，与预期的结果不一致
var obj1 = {x:2,y:[1],z:false};
var obj2 = {x:2,y:[1],z:new Boolean(false)};       //true
//var obj2 = {x:2,y:[1],z:Boolean(new Boolean(false))};   //false
console.log(obj1.z == obj2.z);