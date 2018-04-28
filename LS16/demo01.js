//JS this简介及特点
//this是动态绑定，或称为运行期绑定的。
//由于其运行期绑定的特性，JS中this含义要丰富得多，它可以是全局对象、当前对象或者任意对象，这完全取决于函数的调用方式


//this的四种应用场景
//---------一般函数中的this-------
//一般函数中的this(非严格松散模式下)指代全局对象
function thisTest(){
    console.log(this === window);
}
thisTest();//true

//可以通过this在函数内添加、删除、修改全局对象属性
var a = 10;b = "Hi";
function thisTest2(){
    this.a = 20;
    delete this.b;
    this.c = "新添加属性";
}
thisTest2();
console.log(a,c);//20 "新添加属性"
console.log(b);//报错
/*？？？？？？？？？？
var a = 10;b = "Hi";
function thisTest2(){
    this.a = 20;
    delete this.b;
    this.c = "新添加属性";
}
thisTest2();
console.log(a,c);//20 "新添加属性"
console.log(b);//Hi
*/

//一般函数中的this（严格模式）为undefined
function isStrictMode() {
    return this == undefined?true:false;
}
isStrictMode();//undefined
/*可以使用此特性来判断当前是否为严格模式
//'use strict'
function isStrictMode(){
	return this===undefined?true:false;
}
isStrictMode();
 */

//--------对象方法中的this（无函数嵌套的情况下）---------
//对象方法中的this指代调用此方法的对象（无嵌套的情况下）
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        this.x = x;
        this.y = y;
    }
};
point.moveTo(1,1);//this绑定到当前对象，即point对象上
console.log(point);//{x: 1, y: 1, moveTo: ƒ}


//--------构造函数中的this-------
//构造函数中的this指代通过new新创建的对象
//JS中的构造函数充当了类的角色，如果不使用 new 调用，则和普通函数一样。
function Point(x,y) {
    this.x = x;
    this.y = y;
}
var p = new Point(2,3);
console.log(p);

//思考：直接调用Point方法会是什么样的情况
Point(5,6);//结果是什么情况
console.log(window.x,window.y);
//{x: 2, y: 3}
//5 6


//-------间接调用中的this（call、apply）--------
//通过call/applay间接调用的函数中的this（指代第一个参数）
//JS中函数可以通过call和apply进行间接调用，动态的指定由谁来调用此函数
//call 实例1
objA = {name:"AA",x:1};
objB = {name:"BB",x:5};
objA.test = function () {
    console.log(this.name,this.x);
};

objA.test();//AA 1
objA.test.call(objB);//BB 5

//call 实例2
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"QL"
};
bird.fly(5,6);//i'm:polly i can fly ___ 5 6
bird.fly.call(me,7,8);//i'm:QL i can fly ___ 7 8