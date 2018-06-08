var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        var temp = "Hi!";
    }
}
f();//undefined
//上述代码等价于
var temp = new Date();
function f() {
    var temp;
    console.log(temp);
    if(false){
        temp = "Hi!";
    }
}
f();//undefined


var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        let temp = "Hi!";
    }
}
f();//输出时间

var temp = new Date();
function f() {
    console.log(temp);
    //if(false){
        let temp = "Hi!";
    //}
}
f();//暂时性死区，temp所在的区域为整个函数范围内.因为temp不提升，所以输出结果报错，undefined