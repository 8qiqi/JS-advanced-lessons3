//基于构造函数实现的原型继承
//当一个函数与new结合，该函数将作为构造函数来使用，用来创建JS对象,一般大写
//JS（ES5）中没有其他语言（C++、Java）中的类，JS中通过构造函数来实现类的功能
//在JS中构造函数也是对象，有一个重要的属性（原型 prototype），该属性与继承相关


//构造函数有一个重要属性（原型 prototype），该属性就是实例化出来的对象的原型
//构造函数的这个属性（原型 prototype）是真实对象，实例化的对象通过它实现属性继承
//实例化的这个对象，有一个属性__proto__指向原型
//通过判断得知实例化出来的对象的__proto__就是构造函数的prototype属性
function Person(age,name) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person(20,"Jack");
console.log(p1.name);//Jack
console.log(p1.age);//20
p1.sayHi();//Hi,i'm Jack
console.log(p1.__proto__ === Person.prototype);//true


//constructor 属性返回对创建此对象的数组函数的引用。
var test=new Array();

if (test.constructor==Array)
{
document.write("This is an Array");
}
if (test.constructor==Boolean)
{
document.write("This is a Boolean");
}
if (test.constructor==Date)
{
document.write("This is a Date");
}
if (test.constructor==String)
{
document.write("This is a String");
}

//This is an Array


function employee(name,job,born)
{
this.name=name;
this.job=job;
this.born=born;
}

var bill=new employee("Bill Gates","Engineer",1985);

document.write(bill.constructor);
//function employee(name, job, born)
//{this.name = name; this.job = job; this.born = born;}