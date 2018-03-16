//数据类型转换

//->Boolean
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean(0));//false  0、NaN转换成false，其他为true
console.log(Boolean(NaN));//false
console.log(Boolean(1));//true
console.log(Boolean(""));//false  ""转化成false,其他转化为true
console.log(Boolean("abc"));//true
console.log(Boolean({}));//true  对象转换为Boolean总是为true
if(new Boolean(false)){
    console.log("执行");
}//执行


//->Number
console.log(Number(undefined));//NaN
console.log(Number(null));//0
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(""));//0  空字符串转换为0
console.log(Number("   123.34"));//123.34 忽略开头和结尾的空格
console.log(Number('\r\n\t \v\f')); // 结果0
console.log(Number('\r\n\t \v\f')); // 结果0
//Number()：强制转化，如果转换的是字符串，字符串内必须都是有效的数字字符才可以转换，
//如过有一个不是有效数字，则无法转换，会返回NaN。
console.log(Number("abc"));//NaN
console.log(Number("123.345xx"));//NaN
console.log(Number("32343,345xx"));//NaN
//parseInt():非强制转换，从左到右，把找到的有效的数字返回,并且转换为整数.全局方法
//parseFloat():非强制转换，从左到右，把找到的有效的数字返回,转换为小数。全局方法
//字符串中有多个数字的时候，parseFloat与parseInt只能转换第一个。
console.log(parseFloat("123.345xx"));//123.345
console.log(parseFloat("32343,345xx"));//32343
console.log(parseInt("123.345xx"));//123
console.log(parseInt("32343,345xx"));//32343
console.log(parseFloat("1.5,2.4"));//1.5
console.log(Number({x:1,y:2}));//NaN

 
//->String
console.log(String(undefined));//undefined
console.log(String(null));//null
console.log(String(true));//true
console.log(String(false));//false
console.log(String(0));//0
console.log(String(234));//234
console.log(String({x:1,y:2}));//[object,Object]

var c=!!0;  
typeof c;
"boolean"