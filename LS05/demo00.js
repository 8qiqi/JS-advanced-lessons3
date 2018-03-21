+一般转换成字符串 -一般转换成number
var x="1"  +与+=转换成字符串类型;/与/=转换成number类型
var x="1";
x/=1;
console.log(x)//1
console.log(x/1)//1
==若等号两边都是引用类型，空间相同，则为true;类型不同，隐式类型转换（若只有一边为引用类型，进行类型转换）
===若等号两边都是引用类型，空间相同，则为true；类型不同，则为false
var obj1={x:2,y:[1],z:false};
var obj2={x:2,y:[1],z:new Boolean(true)};
console.log(obj1.x===obj2.x);//true
console.log(obj1.y===obj2.y);//false
console.log(obj1.z===obj2.z);//false
console.log(obj1.x==obj2.x);//true
console.log(obj1.y==obj2.y);//false
console.log(obj1.z==obj2.z);//false

console.log(false==Boolean(new Boolean(false)))//false
console.log(false==new Boolean(false))//true   思考？？二义性

var a=(new Boolean(false)||22);
console.log(a,typeof a)// Boolean {false} "object"