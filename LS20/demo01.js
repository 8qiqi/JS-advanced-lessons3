//创建方式
//字面量方式
var reg1=/a/g;

//构造函数
var reg2=new RegExp("a","g");
var reg3=new RegExp(/a/,"g");

console.log("aabaa".replace(reg1,'X'))//XXbXX
console.log("aabaa".replace(reg2,'X'))//XXbXX
console.log("aabaa".replace(reg3,'X'))//XXbXX



