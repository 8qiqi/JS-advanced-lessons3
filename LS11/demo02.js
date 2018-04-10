//通过iife来解决JS缺陷

//1）通过IIFE对作用域的改变：
//JS中没有块作用域，容易造成js文件内或文件间的同名变量相互污染

//2）通过IIFE对变量存储的改变
//当程序运行到变量所在作用域时，变量被创建，JS没有块作用域，变量可能会共享
function f(){
    var getNumFuncs = [];//函数数组
    for(var i=0;i<10;i++){              //相当于var i=0;for(;i<10;i++){
        getNumFuncs[i] = function(){   
            return i;
        };
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();//10
tmp[4]();//10
//变量i只创建了一个


//解决
function f(){
    var getNumFuncs = [];//函数数组
    for(var i=0;i<10;i++){
        (function (j) {
            getNumFuncs[j] = function(){return j;};
        })(i);
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();//3
//创建了10个变量i，值分别是0~9


//局部变量的案例
function f(){
    var getNumFuncs = [];//函数数组
    var j;
    for(var i=0;i<10;i++){
        j = i;
        getNumFuncs[i] = function(){
            return j;//如果return i;的话输出几？
        };
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();
//renturn j,则返回的都是9
//renturn i,则返回的都是10


//变量共享问题
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
//console.log("i：",i);



//通过IIFE解决变量共享问题
for (var i = 0; i < 5; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}