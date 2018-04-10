//iify立即执行表达式
//IIFE是表达式，要注意使用分号结尾

//写法
//1）使用小括号的写法（两个括号）
(function(x,y){return x>y?x:y}(2,4));
(function(x,y){return x>y?x:y})(2,4);
//2)与运算符结合的写法（一个括号）
var i = function(){
    return 10;
}(); //i为10

true && function(a,b){
    return a>b?a:b;
}(5,9);//9
 

!function(x,y){
    return x==y?true:false; // === 返回什么
}("5",5);//==返回false;===返回true

!function(){return 2; }( );//flase
(function(){return 2; }( ));//2
//注意function(){return 2; }( );这样写是错误的
!function(){return 0; }();//ture
(function(){return 0; })();//0
