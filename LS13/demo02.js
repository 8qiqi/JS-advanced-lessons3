//JS对象属性的分类
//数据属性：键值对
//访问器属性：访问属性的方法，****访问和设置时不加括号**
//内置属性：存在于ECMAScript规范中，不能直接访问
//***访问器属性优先级高于数据属性***
//访问器属性不包含shujv数据值，它包含一对geter和setter函数

var o = {
    _x:1.0,//如果都写成x会怎样
    get x(){
        return this._x;//如果都写成x会怎样
    },
    set x(val){
        this._x = val;//如果都写成x会怎样
    }
};
console.log(o.x);//访问get方法
o.x = 2;//访问set方法
console.log(o.x,o._x);//访问get方法,访问_x属性
//1
//2 2


var o={
	x:1,
	get x(){return this._x;},//这一行的x和_x名字不要一样，会递归  get _x(){return this._x;}会递归，
	set x(val){this._x=val;}
};
console.log(o.x);//访问和设置时不加括号,在x键和x函数中，访问get方法
o.x=2;//调用set方法，为obj增加一个_x:2的键值对
console.log(o.x,o._x);//调用get方法，访问_x属性
//undefined
//2 2


//实现数据属性的间接访问，可实现数据的验证、过滤、运算等功能
var p1 = {
    _name:"Jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;
console.log(p1.age);