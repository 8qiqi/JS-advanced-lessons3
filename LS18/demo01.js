//数组的创建和基本操作
//创建数组的方式
//- 通过字面量的方式直接创建，直接量中的值可以是任意的表达式
//- 通过Array构造函数来创建数组对象，注意传递的参数
var arr1 = [1,2,3,"4"];

var arr2 = new Array(5);//思考var arr2 = new Array("5");[5]
console.log(arr2);[empty × 5]
for(var i=0;i<arr2.length;i++){arr2[i] = i;}
console.log(arr2);//[0, 1, 2, 3, 4]

//思考下述案例
var arr22 = [];
for(var i=0;i<5;i++){
	document.onclick = function(){
		arr22[i] = i;
	}
}
//点击
console.log(arr22);//[empty × 5, 5]
//思考：点击document之后，arr22数组有几个元素，每个元素的值分别是什么？
//有六个元素，[empty × 5, 5]
//执行代码之后i马上变成5，当时点击事件没有执行，点击事件执行后，arr22[5]赋值为5

var arr3 = new Array(1,2,3,4);//多个参数
console.log(arr3);//[1, 2, 3, 4]

//数组直接量中的值不一定要是常量，可以是任意的表达式
var base = 1024;
var table = [base,base+1,base+2,base+3];//[1024, 1025, 1026, 1027]
//也可包含对象直接量或其他数组直接量
var b = [[1,{y:2}],[2,{x:3}]];

//回顾数据类型思考：
var a1 = [1,2,3];
var a2 = a1;
a2.length = 0;
console.log(a1,a2);//[] []
//数组也是对象，a1,a2指向同一区域，共同变化

var a3 = [1,2,3];
var a4 = a3;
a4 = [];
console.log(a3,a4);//[1,2,3] []
//a3,a4指向不同区域

//Error
function idLog(x){
    try{
        var arr = new Array(-1);
    }
    catch(e){
        console.log(e);
    }
    finally{
        console.log("222");
    }
}
idLog(123);

// try { //执行的代码，其中可能有异常。一旦发现异常，则立即跳到catch执行。否则不会执行catch里面的内容 } 

// catch { //除非try里面执行代码发生了异常，否则这里的代码不会执行 } 

// finally { //不管什么情况都会执行，包括try catch 里面用了return ,可以理解为只要执行了try或者catch，就一定会执行 finally } 


// Part11111111
//增删改查
var a = ["hello"];
a[1] = 3.14;//增：直接添加数组元素，通过方法添加元素参见后续章节
a[2] = "world";
console.log("删除a[2]前的数组a",a);//删除a[2]前的数组a (3) ["hello", 3.14, "world"]
delete a[2];//删：思考此时数组长度是2还是3？如何彻底删除？直接修改length与pop方法
console.log("删除a[2]后的数组a",a);//删除a[2]后的数组a (3) ["hello", 3.14, empty]
a[0] = "XX";//改：修改数组元素a[0]
console.log(a[0]);//查:看数组中的元素，索引从0开始//XX

//思考
var i=2,b=[];
b[i]=3;
b[i+1]="YY";
b[b[i]] = b[0];
console.log(b);//[empty × 2, 3, undefined]
//没有操作过的数组为empty,
//操作过的数为undefined

// Part22222222
var a = [];
a[-1.23] = true; //创建一个名为“-1,23”的属性
a["100"] = 0;   // 数组的第101个元素
a[1.00] = "Hi"; //和a[1]相当
console.log(a.length);//101
console.log(a);//[empty, "Hi", empty × 98, 0, -1.23: true]
//给数组内添加键值对，不计算在数组的长度中
a[-90]='qiqi';
console.log(a.length)//101

数组相对于普通对象的特别之处
// 数组是对象的特殊形式，可以为数组添加对象属性，
// 对于0至2的32次方之外的数，将作为普通对象的键来对待
// 数组特别之处在于，当使用使用2的32次方以内的非负整数作为属性名时
// 数组会自动维护其length属性，作为数组的元素，而不是数组对象的属性
