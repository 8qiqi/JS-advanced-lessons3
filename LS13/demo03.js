//JS对象相关操作
//创建JS对象的方式
//通过对象字面量的方式直接创创建对象
//通过构造函数的方式创建对象


//通过字面量的方式创建 JS对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);//10
console.log(obj.str);//Hi
console.log(obj.show());//Hi
console.log(obj.__proto__);//Object.prototype
console.log(obj.__proto__ === Object.prototype);//true


//通过Object工场方法创建JS对象,注：JS对象是通过原型链的方式实现的对象继承
var newObj = Object.create(obj);//newObj的原型是obj
newObj.age = 23;
console.log(newObj.num);//10
console.log(newObj.str);//Hi
console.log(newObj.show());//Hi
console.log(newObj.age);//23     自有属性
console.log(newObj.__proto__);//{num: 10, str: "Hi", show: ƒ} 即obj
console.log(newObj.__proto__ === obj);//true


//构造函数的方式创建JS对象  此处略讲，详情参照后续面向对象编程 注：JS对象是通过原型链的方式实现的对象继承
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name,this.age,"years old");
};
var person1 = new Person("Mike",21);
person1.sayName();//hello,i'm Mike 21 years old


var objStr = new Object("xxx");
console.log(typeof objStr);//object
console.log(objStr instanceof String);//true

var objNum = new Object(23);
console.log(typeof objNum);//object
console.log(objNum instanceof Number);//true

var objBoolean = new Object(true);
console.log(typeof objBoolean);//object
console.log(objBoolean instanceof Boolean);//true


var obj = {};
obj.x = 2;//直接添加属性
console.log(obj.x);//通过.访问属性
obj.x = 5;//设置属性
console.log(obj["x"]);//通过[]访问属性
delete obj.x;//删除属性
console.log(obj.x);

//访问属性的for循环练习
var obj2 = {
    id_1:2,
    id_2:4,
    id_3:6,
    id_4:8,
    id_5:10
};

//思考obj3 和 obj4 内容是什么？为什么？
var obj3 = {};
for(var i=0;i<10;i++){
    obj3.i = i;
}
console.log(obj);//{i: 9}    变量共享

var obj4 = {};
for(var i=0;i<10;i++){
    obj4[i] = i;
}//{0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}


var person=function(name){
	this.name=name;
}
var p=new person('abc');
p.__proto__===person.prototype;//true
person.__proto__===Function.prototype;//true
person.__proto__.__proto__===Object.prototype;//true
person.__proto__.__proto__.__proto__===null;//true

//通过.和[]访问对象属性值的不同
var obj={
	x1:1,
	x2:6,
	x3:4
};
for(var i=1;i<=3;i++){
	console.log(obj['x'+i]);
}
//1
//6
//4