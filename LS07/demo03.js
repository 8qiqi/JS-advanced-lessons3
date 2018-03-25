//参数类型与传递方式

//不同类型的数据，参数传递方式不同（值传递、引用传递）
//1）值传递：实参为基本数据类型时，形参改变不影响实参
var a = 1;
function foo(x) {
    console.trace("a:",a," x:",x);
    x = 2;//step 2222
    console.trace("a:",a," x:",x);//step 3333
}

console.trace("a:",a);
foo(a);// step 1111
console.trace("a:",a); // step 4444  a仍为1

//引用传递：
var obj = {x:1};
function fee(o){
    console.trace("obj.x :",obj.x," o.x :",o.x);//obj.x : 1  o.x : 1
    o.x = 3;// step 2222
    console.trace("obj.x :",obj.x," o.x :",o.x);// obj.x : 3  o.x : 3
}

console.trace("obj.x :",obj.x);//obj.x : 1
fee(obj);// 
console.trace("obj.x :",obj.x);//obj.x : 3
