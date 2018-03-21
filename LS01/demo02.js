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


var c=!!0;  
typeof c;
"boolean"
