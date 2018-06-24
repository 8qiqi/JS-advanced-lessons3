//Part111111111111111111111111
//遍历实例一
var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
var objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);// [Symbol(a), Symbol(b)]

//遍历实例二
var obj = {};
var foo = Symbol("foo");
Object.defineProperty(obj, foo, {
    value: "foo bar",
});
for (var i in obj) {
    console.log(i); // 无输出
}
Object.getOwnPropertyNames(obj);// []
Object.getOwnPropertySymbols(obj);// [Symbol(foo)]

//Part2222222222222222222222
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
console.log(s1 === s2); // true

//Symbol.for()与Symbol()这两种写法，都会生成新的Symbol。
// 它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
// Symbol.for()不会每次调用就返回一个新的Symbol类型的值，而是会先检查给定的key是否已经存在，
// 如果不存在才会新建一个值。比如，如果你调用Symbol.for("cat")30次，每次都会返回同一个Symbol值，
// 但是调用Symbol("cat")30次，会返回30个不同的Symbol值。

console.log(Symbol.for("bar") === Symbol.for("bar"));// true
console.log(Symbol("bar") === Symbol("bar"));// false
console.log(Symbol.for("bar") === Symbol("bar"));// false

//Symbol.keyFor方法返回一个已登记的Symbol类型值的key。
var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1)); // "foo"
var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2)); // undefined


var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1)); // "foo"
var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2)); // undefined

//思考：
var s3 = Symbol(Symbol.keyFor(s1));//var s3=Symbol("foo")
console.log(s1 === s3);//false
console.log(s2 === s3);//false
var s4 = Symbol.for(Symbol.keyFor(s1));//var s4= Symbol.for("foo")
console.log(s1 === s4);//true
console.log(s2 === s4);//false

var sym1=Symbol('xx');
var sym2=Symbol('xx');
var str1='xx';
var str1='xx';
var obj={};
obj[sym1]='12';
obj[sym2]='34';
obj[str1]='56';
obj[str2]='78';
obj;//{xx: "78", Symbol(xx): "12", Symbol(xx): "34"}

var obj={};
var s1=Symbol();
var s2=Symbol();
obj[s1]=123;
obj[s2]=456;
obj["s1"]=678;
obj.s2=910;
for(var k in obj){
	console.log(k,typeof k);
} 5
//s1 string
//s2 string
Object.getOwnPropertySymbols(obj);
//[Symbol(), Symbol()]

Object.getOwnPropertySymbols(obj).forEach((v)=>console.log(obj[v]))
//123
//456
//有错误
// Object.getOwnPropertySymbols(obj).forEach(fucntion(v){
// 	console.log(obj[v]);
// })
