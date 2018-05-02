//JS对象-对象原型继承
//每个对象都有一个原型对象（可动态的指定原型，来改变继承关系，最原始的原型是null）
//多个对象继承于一个原型时，存在原型共享（节省内存如共享方法，但也带来了共享问题)
//思考并回答三种方式创建的对象的原型都是什么？
//字面量直接创建原型是Object.prototype
//Object.create方法创建的原型是括号内的
//new 方法创建的对象原型是new之后的东西

//通过Object.create静态方法创建的对象的原型共享问题
var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5;//若此行写为subObj_First.x = 5;结果又是如何？
console.log(subObj_Second.x);


//构造函数实现的对象-对象的原型继承的原型共享问题
function Person(name){
    this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function(){console.log(this.name);};
function Student(id){
    this.id = id;
}
//var p1 = new Person("Mike");Student.prototype = p1;
Student.prototype = new Person("Mike");//Student.prototype是实例化的Student对象，其原型是Person
var s1 = new Student(2017001);
var s2 = new Student(2017002);

//测试如下代码，思考为什么，这样的继承有什么弊端
console.log(s1.name,s1.age,s1.id);//Mike 22 2017001
console.log(s2.name,s2.age,s2.id);//Mike 22 2017002
s1.__proto__.name = "Jack";
console.log(s2.name);//Jack
s2.__proto__.__proto__.age = 99;
console.log(s2.age);//99

console.log(s1);//Student {id: 2017001}
console.log(s1.__proto__);//Person {name: "Jack"}
console.log(s1.__proto__.__proto__);//{age: 99, showName: ƒ, constructor: ƒ}