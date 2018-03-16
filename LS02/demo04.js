//String方法
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
//slice(start,end)和substring(start,end)

//他们两个的end都是原字符串的索引，意思为截取到end（不包括end）位置的字符
//二者的区别是：

//slice中的start如果为负数，会从尾部算起，-1表示倒数第一个，-2表示倒数第2个，此时end必须为负数，并且是大于start的负数，否则返回空字符串
var s="afghtee";
s.slice(-1,3)//"" 
//slice的end如果为负数，同样从尾部算起，如果其绝对值超过原字符串长度或者为0，返回空字符串
var s="abcd";
s.slice(2,-5);//""
s.slice(2,0);//""
//substring会取start和end中较小的值为start,二者相等返回空字符串，任何一个参数为负数被替换为0(即该值会成为start参数)
var s="afghtee";
s.substring(3,1)//"fg"
s.substring(1,1)//""
s.substring(3,-2)//"afg"
//而substr比较特殊

//substr的end参数表示，要截取的长度,若该参数为负数或0，都将返回空字符串
var s="afghj";
s.substr(2,0)//""
m.substr(2,-3)//""