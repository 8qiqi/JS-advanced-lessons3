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

//当尾数为5，而尾数后面的数字均为0时，应看尾数“5”的前一位：
//若前一位数字此时为奇数，就应向前进一位；
//若前一位数字此时为偶数，则应将尾数舍去。数字“0”在此时应被视为偶数。
//0.153050——0.1530
//12.6450——12.64
//18.2750——18.28
//0.153750——0.1538
//12.7350——12.74
//21.845000——21.84
console.log(Math.round(-3.5));
console.log(Math.round(-4.5));
VM1226:1 -3
VM1226:2 -4


console.log(Number(undefined));
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
console.log(Number(""));
console.log(Number("abc"));
console.log(Number("123.345xx"));//
console.log(Number("32343,345xx"));
console.log(Number({x:1,y:2}));
VM1219:1 NaN
VM1219:2 0
VM1219:3 1
VM1219:4 0
VM1219:5 0
VM1219:6 NaN
VM1219:7 NaN
VM1219:8 NaN
VM1219:9 NaN

console.log(String(undefined));
console.log(String(null));
console.log(String(true));
console.log(String(false));
console.log(String(0));
console.log(String(234));
console.log(String({x:1,y:2}));
VM1230:1 undefined
VM1230:2 null
VM1230:3 true
VM1230:4 false
VM1230:5 0
VM1230:6 234
VM1230:7 [object Object]