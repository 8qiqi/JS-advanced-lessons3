//数组函数
var str="abc_def_ghi_jkl_mn";
str.split("_");//["abc", "def", "ghi", "jkl", "mn"]
str.split("_",2);// ["abc", "def"]
str.concat("_qqq");//"abc_def_ghi_jkl_mn_qqq"
str.substr(4,7);//"def_ghi"
str.substring(4,7);//"def"
str.slice(2,5);//"c_d"
str.slice(2);//"c_def_ghi_jkl_mn"
str.slice(2,-2);//"c_def_ghi_jkl_"
str.slice(-2);//"mn"
//split()分割  
//substr()第几位开始截取几位
//substring()第几位开始截取到第几位之前
//slice()第几位开始截取到第几位之前


//包装对象：
//基本数据类型原始值不可变
//对象数据类型可以改变、添加、或删除
var str="abc";
str.length;
str.lenght=1;
console.log(str,str.length);
VM650:4 abc 3

var a=[1,2,3,4];
a.length=1;
console.log(a,a.length);
VM714:3 [1] 1

//对象转换成布尔类型全为true
if(new Boolean(false)){
console.log("执行")
}
VM779:2 执行

var c=!!0;  
typeof c;
"boolean"
//Number原型方法
var n1 = 12345.6789;
console.log(n1.toFixed(2));//四舍五入小数点后取两位
console.log(n1.toPrecision(2));//十进制，总共两位数
console.log(n1.toString());
console.log(n1.toExponential(2));//十进制，三位数
124345.68
VM858:3 1.2e+5
VM858:4 124345.6789
VM858:5 1.24e+5