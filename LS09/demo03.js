//预解析与作用域

//变量的作用域是指变量在何处都可以被访问到
//JS采用的是静态词法作用域，代码完成后作用域链就已形成，与代码的执行顺序无关


//全局变量与局部变量
//全局变量（在函数体内和函数外直接访问）
//局部变量（在函数外不能访问函数的局部变量，但可以通过闭包访问；
//          函数内访问同名变量时，局部变量会覆盖全局变量）


//ES5中无块作用域


if(true){
    var i = 0;
}

function foo(){
    console.log("j:",j);//undefined
    var j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错

//上边代码等价于
var i;
if(true){
    i = 0;
}

function foo(){
    var j;
    console.log("j:",j);//undefined
    j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错