//JS预解析（声明提升）

//预解析主要工作（变量声明和函数声明提升）
//解析器在执行代码前进行代码扫描，找出var和function
//将变量和函数声明在当前作用域内进行提升


//声明提升案例
//1）只有var
//part 1111
console.log(a);//undefined
var a = 1;
console.log(a);//1
//上边代码等价如下 解析器眼中的代码
var a;
console.log(a);
a = 1;
console.log(a);

//part 2222
console.log(a,b);//undefined undefined
var b = 23;
console.log(a,b);//undefined 23
var a = b;
console.log(a,b);//23 23
//上边代码等价如下
var b,a;
console.log(a,b);
b = 23;
console.log(a,b);
a = b;
console.log(a,b);

//part 3333
console.log(obj1,obj2);//undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2);//{x: 23} undefined
var obj2 = obj1;
console.log(obj1,obj2);//{x: 23} {x: 23}
obj2.x =25;
console.log(obj1,obj2);//{x: 25} {x: 25}  对象类型指向同一空间
//上边代码等价如下
var obj1,obj2;
console.log(obj1,obj2);
obj1 = {x:23};
console.log(obj1,obj2);
obj2 = obj1;
console.log(obj1,obj2);
obj2.x =25;
console.log(obj1,obj2);

//2)只有function
foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}

//上边代码等价如下 解析器眼中的代码
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();//f_2

//3)有var和function
//part 1111（函数表达式:function前有运算符的话，认定为表达式，不提升 ）
foo();
var foo = function(){
    console.log("foo");
};
//上边代码等价如下
var foo;
foo();
foo = function(){
    console.log("foo");
};//报错foo is not a function


console.log(foo);//undefined
var foo = function(){
    console.log("foo");
};
foo();//foo
//上边代码等价如下
var foo;
console.log(foo);
foo = function(){
    console.log("foo");
};
foo();

//part2222 变量名同函数名，分别类型提升
function AA(){
    console.log("AA_1");
}
//console.log(typeof AA);
var AA=34;
//console.log(typeof AA);//将AA从function类型转换成number类型
AA();
AA = function AA(){
    console.log("AA_2");
};//AA is not a function

//编译器眼中
function AA(){
    console.log("AA_1");
}
var AA;
AA=34;
AA();
AA = function AA(){
    console.log("AA_2");
};