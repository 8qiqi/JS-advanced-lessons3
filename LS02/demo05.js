//Boolean
//Undefined 的几种情况
var a;
console.log(a);//undefined
//注意：分清未定义与未声明的区别 undefined与 undeclare
//没有加var 直接使用a是否会报错？会

function foo(x,y) {
    console.log(x,y);//1 undefined
}
foo(1);//1 undefined

function fee() {
    //没有返回值的情况
}
var feeReturnValue = fee();
console.log(feeReturnValue);//undefined


//null 需要注意的一点 
console.log(typeof null);//object