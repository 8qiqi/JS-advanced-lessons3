//函数参数数量问题
//1)实参数量大于形参的情况（通过arguments获得所有实参、类数组对象）
function test() {
    console.log(arguments);//类数组对象
    console.log(test.arguments==arguments,arguments);//false,类数组对象  思考：为什么为false
    // console.log(arguments.length);//2
	// console.log(typeof arguments);//object
	// console.log(arguments instanceof Array);//false
	// console.log(arguments instanceof Object);//true
    console.log(Array.prototype.slice.call(arguments));//["hello,", "world!"]
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
test("hello,", "world!");//"hello,world!"


//2实参数量小于形参的情况（少的参数为undefined，可使用||来给出默认值）
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));