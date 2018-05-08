//构造器Date

Wed Oct 18 2017 12:34:01 GMT+0800 (中国标准时间)
//UTC 协调世界时间 Coordinated Universal Time
//GMT 格林尼治时间 （北京时间是正8时区） Greenwich Mean Time
var date1 = new Date(2017,9,18,12,34,1);//注意：月0-11，日：1-31，时：0-23，分：0-59，秒：0-59，毫秒：0-999
console.log(date1);//Wed Oct 18 2017 12:34:01 GMT+0800 (中国标准时间)

var date2 = new Date(17,9,18,12,34,1);//若years为2位的话自动加1900
console.log(date2);//Thu Oct 18 1917 12:34:01 GMT+0800 (中国标准时间)

var date3 = new Date("2017-08-09");//注意日期的格式 此处的08代表8月还是9月，对比上一个创建形式
console.log(date3);//Wed Aug 09 2017 08:00:00 GMT+0800 (中国标准时间)

//var date4 = new Date(0);    //1970-01-01:00:00:00
var date4 = new Date(1000); //1970-01-01:00:00:01
console.log(date4);//Thu Jan 01 1970 08:00:01 GMT+0800 (中国标准时间)
//逆运算是date4.getTime();
//date4.getTime();//1000

var date5 = new Date();//new Date(Date.now());//一样的
console.log(date5);

//补充：无效日期
var date6 = new Date(NaN);
console.log(date6);//Invalid Date

//有无new的区别
var d1 = new Date();
var d2 = Date();
console.log(d1,typeof d1);//object
console.log(d2,typeof d2);//string

//补充思考
var n1 = new Number("123");
var n2 = Number("123");
console.log(n1,typeof n1);//{123} object
console.log(n2,typeof n2);//123 number



// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date
//Date静态方法（Date构造器函数对象的方法）GMT 格林尼治时间
console.log(Date.now());//以毫秒为单位返回当前时间（从1970年1月1日00:00:00开始计算）
console.log((new Date()).getTime());//getTime()得到的时间也是毫秒

console.log(Date.parse("1970-01-01"));//dateTimeString字符串转换成毫秒
console.log(Date.parse("1970-01-02"));

console.log(Date.UTC(2017,9,1));//将给定的日期转换成毫秒,解释为UTC 协调世界时间

//getDay() 方法根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天。
//setDate() 方法根据本地时间来指定一个日期对象的天数
//setFullYear() 方法根据本地时间为一个日期对象设置年份,dateObj.setFullYear(yearValue[, monthValue[, dayValue]]),如果你指定了 dayValue 参数，就必须同时指定 monthValue。
//Date原型方法 getter和setter相关
var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());//1978 10 6 25 8
console.log(d.getTimezoneOffset());//-480
d.setDate(11);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());//1978 10 6 11 8
d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());//1999 5 4 3 8

//Date原型方法 转成字符串相关
var d = new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),"___",d.toLocaleTimeString());//15:07:23 GMT+0800 (中国标准时间) ___ 下午3:07:23
console.log(d.toDateString(),"___",d.toLocaleDateString());//Sat Apr 21 2012 ___ 2012/4/21
console.log(d.toJSON());//2012-04-21T07:07:23.234Z

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date


//日期格式实例
// YYYY-MM-DDTHH:mm:ss.sssZ
console.log(Date.parse("2010-01-01 11:12:23.111"));//1262315543111
console.log(new Date("2010-01-01 11:12:23.111"));//Fri Jan 01 2010 11:12:23 GMT+0800 (中国标准时间)
console.log(new Date().toISOString());
//toISOString() 方法返回一个 ISO（ISO 8601 Extended Format）格式的字符串： YYYY-MM-DDTHH:mm:ss.sssZ。时区总是UTC（协调世界时），加一个后缀“Z”标识


console.log(Date.parse("2010-01-01T11:12:23.111Z"));
console.log(new Date("2010-01-01T11:12:23.111Z"));
console.log(new Date().toISOString());

//日期格式（无时间）
console.log(new Date("2001"));//Mon Jan 01 2001 08:00:00 GMT+0800 (中国标准时间)
console.log(new Date("2001-02"));//Thu Feb 01 2001 08:00:00 GMT+0800 (中国标准时间)
console.log(new Date("2001-02-22"));//Thu Feb 22 2001 08:00:00 GMT+0800 (中国标准时间)

//日期和时间格式
console.log(new Date("1999-11-22T13:17"));
console.log(new Date("1999-11-22T13:17:11"));
console.log(new Date("1999-11-22T13:17:11.111"));
console.log(new Date("1999-11-22T13:17:11.111Z"));

//时间的比较和运算，内部转换为数字进行比较和运算（从1970年1月1日00:00:00开始计算）
console.log(new Date("1970-01-01").getTime());
console.log(new Date("1970-01-02").getTime());
console.log(new Date("1960-01-02").getTime());//-315532800000
console.log(new Date("1970-01-02") > new Date("1970-01-01"));//true
console.log(new Date("1970-01-02") - new Date("1970-01-01"));//86400000
console.log(new Date((new Date("1970-01-01").getTime())+86400000));//Fri Jan 02 1970 08:00:00 GMT+0800 (中国标准时间)

//时间运算 和 时间综合练习 输出50天后是几月几号，星期几？
//看一下七月的今天是星期几
var today=new Date();
today.setMonth(6);
// console.log(today);
console.log(today.getDay())

//时间运算 和 时间综合练习 输出50天后是几月几号，星期几？
var today=new Date();
var newDate=new Date(today.getTime()+1000*3600*24*50);
console.log(newDate);