//&&与||理解
//1）首先将左操作数转换成布尔类型
//2）对转换后的左操作数进行逻辑判断（true或false）
//3）根据短路原则返回原始左操作数或者原始右操作数

//实际应用
//1）实现条件语句
console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||"不及格");
//2）设置函数参数的默认值
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
// console.log(sum(1,0,0));

//优化改造版本
var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
console.log(sum(1,0,0));