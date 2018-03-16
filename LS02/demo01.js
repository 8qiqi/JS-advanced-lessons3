//包装对象：

//基本数据类型原始值不可变
var str = "abcde";
console.log(str.length);//5 临时包装成了String对象
str.length = 1;
console.log(str.length,str);//5 "abcde" 临时包装对象并不影响原始值

//对象数据类型可以改变、添加、或删除
var arr = [1,2,3,4];
console.log(arr.length);//4
arr.length = 1;
console.log(arr.length,arr);//1 [1]

//临时对象在使用之后释放
var str="test";
str.p=4;//设置临时对象属性，使用之后就被释放
console.log(str.p)//undefined  