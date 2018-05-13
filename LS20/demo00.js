var str="xx-yy-zz";
var a=str.split("-");
console.log(a);//["xx", "yy", "zz"]

var str="xx-y*y-zz";
var a=str.split(/[-*]/gi);
console.log(a);//["xx", "y", "y", "zz"]

//正则案例 练习 查看编辑器如何使用正则
console.log("moon2xyz".replace(/o/,"ab"));//mabon2xyz
console.log("moon2xyz".replace(/o/g,"ab"));//mababn2xyz
console.log("moon2 ooxyz".replace(/\bo/g,"ab"));//moon2 aboxyz
console.log("moon2xyz".replace(/\dx/,"_"));//moon_yz
console.log("moon2xyz".replace(/[xyz]/g,"ab"));//moon2ababab
console.log("m2on2x2z".replace(/\d[zo]/g,"ab"));//mabn2xab
console.log("m2on2x2z".replace(/2[x-z]/g,""));//m2on

//将下列文章中 单独的大写C统一改为大写D，要求其他的c不受影响
/*
Chaude and Cold
　　A patron in Montreal cafe turned on a tap in the washroom and got scalded. "This is an outrage," he complained. "The faucet marked C gave me boiling water."
　　"But, Monsieur, C stands for chaude - French for hot. You should know that if you live in Montreal."
　　"Wait a minute," roared the patron. "The other tap is also marked C."
　　"Of course," said the manager, "It stands for cold. After all, Montreal is a bilingual city."
 */

//正则对象的创建方式一 通过字面量直接创建
var reg1 = /[bcf]at/gi;

//正则对象的创建方式二 通过RegExp构造函数来实例化正则对象
var reg2 = new RegExp(/[bcf]at/,"gi");//常见形式
var reg3 = new RegExp("[bcf]at","gi");

console.log("a fAt bat ,a faT cat".match(reg1));//["fAt", "bat", "faT", "cat"]
console.log("a fAt bat ,a faT cat".match(reg2));//["fAt", "bat", "faT", "cat"]
console.log("a fAt bat ,a faT cat".match(reg3));//["fAt", "bat", "faT", "cat"]

// 一、g全局、i大小写、m换行 修饰符的作用
// 二、正则对象的两种基本使用方式 1.字符串.字符串方法（正则对象） 2.正则对象.正则方法（字符串）
var regExp = /ab/i;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["Ab", index: 2, input: "xxAbcaaBbxyz"]

var regExp = /ab/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["Ab", "aB"]

var regExp = /a*b/gi; //注意*和.的区别 ，参见在线分析工具 https://regexper.com或https://jex.im/regulex
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["Ab", "aaB", "b"]

var regExp = /a.b/gi;//注意*和.的区别 ，参见在线分析工具 https://regexper.com或https://jex.im/regulex
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["aaB"]

//test初步了解
var regExp = /a/i;
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true

var regExp = /a/gi;//思考如果加了g，循环了若干次后是true还是false，这是为什么？test中的lastIndex
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 为什么？
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 为什么？

// 正则表达式之 \
// 匹配一个词的边界 \b 一个词的边界就是一个词不被另外一个词跟随的位置或者不是另一个词汇字符前边的位置。
// 注意:一个匹配的词的边界并不包含在匹配的内容中。
console.log(/oo/.test("moon"));//true
console.log(/oo\b/.test("moon"));//false
console.log(/oon\b/.test("moon"));//true
console.log(/\boo/.test("moon"));//false

console.log("moon".search(/oo/));//1
console.log("moon".search(/oo\b/));//-1
console.log("moon".search(/oon\b/));//1
console.log("moon".search(/\boo\b/));//-1

//匹配一个非单词边界 \B 他匹配一个前后字符都是相同类型的位置：都是单词或者都不是单词。
//一个字符串的开始和结尾都被认为是非单词。
console.log(/oo\B/.test("moon"));//true
console.log(/oon\B/.test("moon"));//false
console.log(/oo\B/.test("moon"));//true
console.log(/\Boo\B/.test("moon"));//true

console.log("moon".match(/oo\B/));//["oo", index: 1, input: "moon"]
console.log("moonoonxoo".match(/oo\B/));//["oo", index: 1, input: "moonoonxoo"]
console.log("moon".match(/oon\B/));//null
console.log("moo".match(/\Boo\B/));//null

"noonday".replace(/\Boo/,"xx");//"nxxnday"
"noonday".search(/\Boo/);//1

//练习将"aaa"替换为"axa"

//
"possibly yesterday".replace(/y\B./,"aaa");//"possibly aaasterday"
"possibly yesterday".replace(/y\B/,"aaa");//"possibly aaaesterday"

//  \d匹配一个数字等价于[0-9]  例如， /\d/ 或者 /[0-9]/ 匹配"B2 is the suite number."中的'2'
//  \D匹配一个非数字等价于[^0-9]  例如， /\D/ 或者 /[^0-9]/ 匹配"B2 is the suite number."中的'B'


/*
\w
匹配一个单字字符（字母、数字或者下划线）。
等价于[A-Za-z0-9_]。
例如, /\w/ 匹配 "apple," 中的 'a'，"$5.28,"中的 '5' 和 "3D." 中的 '3'。
*/

/*
\W
匹配一个非单字字符。
等价于[^A-Za-z0-9_]。
例如, /\W/ 或者 /[^A-Za-z0-9_]/ 匹配 "50%." 中的 '%'。
 */

//  \s匹配一个空白字符 例如, /\s\w*/ 匹配"foo bar."中的' bar'
//  \S匹配一个非空白字符 例如, /\S\w*/ 匹配"foo bar."中的'foo'

//\d \D \w \W \s \S 案例
"sdafsa sdfea2s".replace(/a\ds/g,"*");//sdafsa sdfe*
"sdafsa sdfea2s".replace(/a\Ds/g,"*");//sd**dfea2s
"sdafsa sdfea2s".replace(/a\ws/g,"*");//sd*a sdfe*
"sdafsa sdfea2s".replace(/a\Ws/g,"*");//sdafs*dfea2s

//
var str = "test22314234244dgfqeqe232qe13ed";
var newStr = str.search(/\dqe/);
console.log(newStr);//24
str.replace(/\dqe/,11223344);
console.log(str);//test22314234244dgfqeqe232qe13ed

//匹配一个非单词边界  /\B../匹配"noonday"中得'oo', 而/y\B./匹配"possibly yesterday"中得’ye‘
console.log("noonday".match(/\B../));//["oo", index: 1, input: "noonday"]
console.log(/\B../.test("noonday"));//true


// Part 11111111111111111
//字符类 []
console.log("absxsdfe123Ab".replace(/[abd]/,"X"));//Xbsxsdfe123Ab
console.log("absxsdfe123Ab".replace(/[abd]/g,"X"));//XXsxsXfe123AX
console.log("absxsdfe123Ab".replace(/[abd]/gi,"X"));//XXsxsXfe123XX

// 字符类 的取反 [^]
console.log("absxsdfe123Ab".replace(/[^abd]/,"X"));//abXxsdfe123Ab
console.log("absxsdfe123Ab".replace(/[^abd]/g,"X"));//abXXXdXXXXXXb
console.log("absxsdfe123Ab".replace(/[^abd]/gi,"X"));//abXXXdXXXXXAb

//范围类
console.log("12345667".replace(/[3-9]/gi,"X"));//12XXXXXX
console.log("absxsdfe123Ab".replace(/[a-f1-9]/gi,"X"));//XXsxsXXXXXXXX
console.log("absxsdfe123Ab".replace(/[a-f][1-9]/gi,"X"));//absxsdfX23Ab  如果单独替换，则需要分组，见后续
console.log("absxsdfe1Q2e3Ab".replace(/[a-f][1-9][A-Z]/gi,"X"));//absxsdfX2Xb

//思考：如何匹配 -
console.log("2017-10-23".replace(/[0-9]/g,"X"));//XXXX-XX-XX
console.log("2017-10-23".replace(/[0-9-]/g,"X"));//XXXXXXXXXX

// \d、\D、\w、\W、\s、\S 用[]如何表示
// [0-9]
// [^0-9]
// [a-zA-Z_0-9]
// [^a-zA-Z_0-9]
// [\t\n\x0B\f\r]
// [^\t\n\x0B\f\r]

//关于 . 除了回车和换行符之外的所有字符
/ab[0-9][^\r\n]/ //等效于/[ab\d.]/
console.log("@abc@123@".replace(/@./g,"Q"));//QbcQ23@
console.log("@abc@123@".replace(/.@/g,"Q"));//@abQ12Q

// Part 2222222222222222
//关于边界 ^ $ \b \B
console.log("This is a Boy is".replace(/is/g,0));//Th0 0 a Boy 0
console.log("This is a Boy is".replace(/^is/g,0));//This is a Boy is
console.log("This is a Boy is".replace(/is$/g,0));//This is a Boy 0
console.log("This is a Boy is".replace(/is\b/g,0));//Th0 0 a Boy 0
console.log("This is a Boy is".replace(/is\B/g,0));//This is a Boy is
console.log("This is a Boy is".replace(/\bis/g,0));//This 0 a Boy 0
console.log("This is a Boy is".replace(/\Bis/g,0));//Th0 is a Boy is

// Part 33333333333333333333
//思考如何匹配 12345789abcdef34534789ede
//"12345789abcdef34534789ede".replace(/\d\d\d\d\d\d\d\d/g,"X");//不用量词的写法，非常不好
//"12345789abcdef34534789ede".replace(/\d{8}/g,"X");

//量词 注意*在这里是量词，不是充当通配符，充当通配符的是 .
//? 出现0次或1次（最多出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa?/g,0));//0Bb0b_0aBbb0ba

//+ 出现1次或多次（至少出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa+/g,0));//0BbAb_0BbbAba

//* 出现0次或多次（任意次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa*/g,0));//0Bb0b_0Bbb0ba

//{n} 出现n次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1}/g,0));//0BbAb_0aBbbAba
console.log("AaBbAb_AaaBbbAba".replace(/Aa{2}/g,0));//AaBbAb_0BbbAba

//{n,m} 出现n到m次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1,2}/g,0));//0BbAb_0BbbAba

//{n,} 出现至少n次
console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,}/g,0));//AaBbAb_0BbbAba000
//console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,4}/g,0));

//注意：0到n次的写法{0,n}而不是{,n}

//思考：
var reg = /d{20}\w\d?\w+\d*\w{3,5}\d{3,}/;


//贪婪模式和非贪婪模式
"12345678".replace(/\d{3,6}/,'X');//X78  默认为贪婪模式  X78

"12345678".replace(/\d{3,6}?/,'X');//X45678 设置为非贪婪模式 在量词后加？X45678

"12345678".replace(/\d{3,6}?/g,'X');//XX78 返回什么？

//正则表达式的分组
console.log("NameNameName_11111".replace(/Name{3}/,"X"));//NameNameName_11111
console.log("NameNameName_11111".replace(/(Name){3}/,"X"));//X_11111

console.log("a1b2c3d4e5".replace(/[a-z]\d{3}/,"X"));//a1b2c3d4e5
console.log("a1b2c3d4e5".replace(/([a-z]\d){3}/,"X"));//Xd4e5
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}/,"X"));//Xe5
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}?/,"X"));//Xd4e5

// 与分组相关的 或
"abcdefghijk".replace(/abcde|fghijk/g,"X");//XX
"abcdefghijk_abcdehijk_abcfghijk".replace(/abc(de|fg)hijk/g,"X");//abcdefghijk_X_X

//练习：
//将"xxabccxxdexx"替换为"yyabccxxdeyy"

//"xx11xx".replace(/(\bxx)|(xx\b)/g,"mm");


//分组的 反向引用
//如何将2017-10-23转成10/23/2017
"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");//10/23/2017

//分组的 忽略分组 （？：）
"2017-10-23".replace(/(?:\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");//23/$3/10

//注意括号的转义字符，第一个相当于做了分组
console.log(/^(ab)$/.test("(ab)"));//false
console.log(/^\(ab\)$/.test("(ab)"));//true

//正则前瞻，了解即可 判断后边是否满足断言
console.log("a23*4vv".replace(/\w(?=\d)/g,"X"));//XX3*4vv 正项前瞻
console.log("a23*4v8".replace(/\w(?=\d)/g,"X"));//XX3*4X8
console.log("a23*4v8".replace(/\w(?!\d)/g,"X"));//a2X*XvX 负项前瞻


var reg1 = /\w/;
var reg2 = /\w/gi;
console.log(reg1.global,reg1.ignoreCase,reg1.multiline,reg1.lastIndex,reg1.source);//false false false 0 "\w"
console.log(reg2.global,reg2.ignoreCase,reg2.multiline,reg2.lastIndex,reg2.source);//true true false 0 "\w"

//思考reg1的global属性是定义在谁身上，是否可修改，它的属性特性描述符是什么？

console.log(reg2.lastIndex);//0
reg2.test("abc23def");
console.log(reg2.lastIndex);//1
reg2.test("abc23def");
console.log(reg2.lastIndex);//2

while (reg2.test("abc23def")){
    console.log(reg2.lastIndex);
}//3 4 5 6 7 8

var reg3 = /\w/gi;
var str = "slfls3r3sfsf";
var returnArray1 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray1);//1 ["s", index: 0, input: "slfls3r3sfsf"]

var returnArray2 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray2);//2 ["l", index: 1, input: "slfls3r3sfsf"]
/*
var returnArray3;
while (returnArray3 = reg3.exec(str)){
    console.log(reg3.lastIndex,returnArray3);
}
*/

//RegExp静态属性
console.log(RegExp.$_);//slfls3r3sfsf
console.log(RegExp.lastMatch);//1


//Part111 RegExp.prototype.test 方法
var regExp = /a/i;
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true

var regExp = /a/gi;//思考如果加了g，循环了若干次后是true还是false，这是为什么？test中的lastIndex
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 为什么？
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 为什么？
/*
while (regExp.test("aaa")){
    console.log(regExp.lastIndex);//每次执行后从哪开始重新匹配？
}
*/


//Part222 RegExp.prototype.exec 方法 可以获得更为详细的信息，返回一个有属性的数组，
//属性index表示匹配到的位置
//对于非全局模式下返回第一个匹配的和所有的分组项，正则对象的lastIndex不起作用
var execExp = /\d{1,2}(\d)(\d)/;//true
var retExp = execExp.exec("12s342dsfsf233s");//["342", "4", "2", index: 3, input: "12s342dsfsf233s"] 0
console.log(retExp instanceof Array,retExp,execExp.lastIndex);//true
console.log(retExp instanceof Array,retExp,execExp.lastIndex);//["342", "4", "2", index: 3, input: "12s342dsfsf233s"] 0

//对于全局模式下 每检测一次lastIndex增加一次，再次用此正则对象匹配时，匹配的起始点为上一次的lastIndex
var execExp2 = /\d{1,2}(\d)(\d)/g;
var ts = "12s342dsfsf233s";
console.log(execExp2.exec(ts),execExp2.lastIndex);//lastIndex为 6
console.log(execExp2.exec(ts),execExp2.lastIndex);//lastIndex为 14
/*
var ret2;
while (ret2 = execExp2.exec(ts)){
    console.log(execExp2.lastIndex);//每次执行后从哪开始重新匹配？
}
*/


//String.prototype.search 注意search忽略 全局g
console.log("a1b2c3d4".search(/1/));//返回index 1
console.log("a1b2c3d4".search(/f/));//返回index -1 没找到
console.log("a1b2c3d4".search(/\d/g));//返回index 1 忽略全局
console.log("a1b2c3d4".search(/\d\w/g));//返回index 1 忽略全局

//String.prototype.match 如果匹配不到返回null 匹配到了返回数组
// 包含的信息有index 原始字符串 有没有g影响很大
console.log("a1b2c3d4".match(/1/));//[ '1', index: 1, input: 'a1b2c3d4' ]
console.log("a1b2c3d4".match(/f/));//null
console.log("a1b2c3d4".match(/\d/));//[ '1', index: 1, input: 'a1b2c3d4' ]
console.log("a1b2c3d4".match(/\d/g));//[ '1', '2', '3', '4' ]

// String.prototype.replace
console.log("a,b,c,d".replace(",","X"));//aXb,c,d
console.log("a2b3c4d".replace(/[2-3]/,"X"));//aXb3c4d
console.log("a2b3c4d".replace(/[2-3]/g,"X"));//aXbXc4d


//String.prototype.split
console.log("a,b,c,d".split(","));//["a", "b", "c", "d"]
console.log("a2b3c4d".split(/\d/));//["a", "b", "c", "d"]

"abcdef21313sfsflsf1223jlnsa".match(/[a-h]/);//["a", index: 0, input: "abcdef21313sfsflsf1223jlnsa"]
"abcdef21313sfsflsf1223jlnsa".match(/[a-h]/g);// ["a", "b", "c", "d", "e", "f", "f", "f", "f", "a"]
"abcdef21313sfsflsf1223jlnsa".match(/[123efsa]/g);//["a", "e", "f", "2", "1", "3", "1", "3", "s", "f", "s", "f", "s", "f", "1", "2", "2", "3", "s", "a"]
"abcdef21313sfsflsf1223jlnsa".match(/[^123efsa]/g);//["b", "c", "d", "l", "j", "l", "n"]
"abcdef21313sfsflsf1223jlnsa".match(/[1-2a-d]/g);//["a", "b", "c", "d", "2", "1", "1", "1", "2", "2", "a"]
"hello world Hi you".match(/hello|world/);//["hello", index: 0, input: "hello world Hi you"]
"hello world Hi you".match(/hello|world/g);//["hello", "world"]
"world Hi you".match(/hello|world/);//["world", index: 0, input: "world Hi you"]
"THat hot hat".match(/h.t/);//["hot", index: 5, input: "THat hot hat"]
"THat hot hat".match(/h.t/g);//["hot", "hat"]
"THat hot hat".match(/h.t/gi);//["Hat", "hot", "hat"]


//1、移动号段有134,135,136,137,138,139,147,150,151,152,157,158,159,178,182,183,184,187,188
//2、联通号段有130，131，132，145，155，156，176，185，186
//3、电信号段有133，153，177，180，181，189
//将电话号码进行分类
var numbers = [
    13335361211, 13897516385, 15022457757, 15191936306, 18693949497,
    13933314962, 13138569753, 13125634288, 18168751105, 13240288945,
    13098645914, 15603692153, 13455257780, 15916685067, 14701124042,
    13089741902, 15560351609, 1211131444, 13017332800, 18937330815,
    15699699730, 13895038245, 18653855868, 15324150371, 13202536075,
    15873730173, 18828673819, 17658565118, 13069428953, 13814537603
];
var CMCC = [];//移动
var CUCC = [];//联通
var CTCC = [];//电信
var Others = [];//其他号码
//写一段代码，将对应的号码段存储到对应的数组中
for(var i=0;i<numbers.length;i++){
    if(/1(3[4-9]|47|5[0127-9]|78|8[2-47-8])\d{8}/.test(numbers[i])){
        CMCC.push(numbers[i]);//console.log("移动");
    }else if(/2/.test(numbers[i])){
        CUCC.push(numbers[i]);//console.log("联通");
    }else if(/3/.test(numbers[i])){
        CTCC.push(numbers[i]);//console.log("电信");
    }else{
        Others.push(numbers[i]);//console.log("其他");
    }
}
console.log("移动号码：",CMCC);
console.log("联通号码：",CUCC);
console.log("电信号码：",CTCC);
console.log("其他号码：",Others);



//参考部分：
// RegExp.prototyp.exec方法
//如果只判断有没有，可以使用非全局模式
var reg1 = /\d(\w)\d/;
var ts1 = "1a2b3c4d5e";
// var reg1 = /\d(\w)(\w)\d/;
// var ts1 = "1az2by3cx4d5e";

var ret1 = reg1.exec(ts1);
//非全局模式下lastIndex不起作用
//非全局调用返回的数组，第一个元素，匹配的内容，第二个元素分组一中匹配的元素，依次类推
console.log(reg1.lastIndex, "__", ret1);
ret1 = reg1.exec(ts1);
console.log(reg1.lastIndex, "__", ret1);//非全局返回结果相同

//如果想找到所有匹配项，则需要使用全局模式
var reg2 = /\d(\w)\d/g;
var ts2 = "1a2b3c4d5e";

var ret2 = reg2.exec(ts2);
console.log(reg2.lastIndex, "__", ret2);
ret2 = reg2.exec(ts2);//全局模式下lastIndex起作用
console.log(reg2.lastIndex, "__", ret2);

/*
var  ret3;
while (ret3 = reg2.exec(ts2)){
    console.log(reg2.lastIndex,"__",ret3);
}
*/

//1、移动号段有134,135,136,137,138,139,147,150,151,152,157,158,159,178,182,183,184,187,188
//2、联通号段有130，131，132，145，155，156，176，185，186
//3、电信号段有133，153，177，180，181，189
//将电话号码进行分类
var numbers = [
    13335361211, 13897516385, 15022457757, 15191936306, 18693949497,
    13933314962, 13138569753, 13125634288, 18168751105, 13240288945,
    13098645914, 15603692153, 13455257780, 15916685067, 14701124042,
    13089741902, 15560351609, 1211131444, 13017332800, 18937330815,
    15699699730, 13895038245, 18653855868, 15324150371, 13202536075,
    15873730173, 18828673819, 17658565118, 13069428953, 13814537603
];
var CMCC = [];//移动
var CUCC = [];//联通
var CTCC = [];//电信
var Others = [];//其他号码
//写法一
for(var i=0;i<numbers.length;i++){
    //使用正则表达式，筛分不同号码段
    //console.log(numbers[i]);
    if(/1(3[4-9]|47|5[012789]|78|8[23478])\d{8}/.test(numbers[i])){
        CMCC.push(numbers[i]);
    }else if(/1(3[0-2]|45|5[56]|76|8[56])\d{8}/.test(numbers[i])){
        CUCC.push(numbers[i]);
    }else if(/1(33|53|77|8[019])\d{8}/.test(numbers[i])){
        CTCC.push(numbers[i]);
    }else {
        Others.push(numbers[i]);
    }
}
console.log("移动号码：",CMCC);//[13897516385, 15022457757, 15191936306, 13933314962, 13455257780, 15916685067, 14701124042, 13895038245, 15873730173, 18828673819, 13814537603]
console.log("联通号码：",CUCC);//[18693949497, 13138569753, 13125634288, 13240288945, 13098645914, 15603692153, 13089741902, 15560351609, 13017332800, 15699699730, 18653855868, 13202536075, 17658565118, 13069428953]
console.log("电信号码：",CTCC);//[13335361211, 18168751105, 18937330815, 15324150371]
console.log("其他号码：",Others);//[1211131444]

//写法二
CMCC = numbers.toString().match(/1(3[4-9]|47|5[012789]|78|8[23478])\d{8}/g);
CUCC = numbers.toString().match(/1(3[0-2]|45|5[56]|76|8[56])\d{8}/g);
CTCC = numbers.toString().match(/1(33|53|77|8[019])\d{8}/g);
console.log("移动号码：",CMCC);
console.log("联通号码：",CUCC);
console.log("电信号码：",CTCC);


//////
//1、搜狐邮箱后缀：包括sohu.com.cn、sohu.com
//2、新浪邮箱后缀：包括sina.com.cn、sina.com、sina.cn
//3、qq邮箱后缀：包括qq.com.cn、qq.com
//4、其他邮箱后缀：包括满足格式的其他邮箱

//使用正则表达式和数组相关的方法，将邮箱进行分类,要求分为4类，并存在4个对应的数组中
var emails = [
    "Ky-D1zU@sina.cn", "jzX4xq@gmail.cn", "J8XNzf7SQV@sohu.com.cn",
    "TSmA4xX@sohu.com.cn", "yDzwr@msn.cn", "l7bSnfYDz-3OO@sina.cn",
    "uavXW@sina.com", "w65FgY5@gmail.cn", "wY6iRUCr@126.com.cn",
    "Gy0GKnygcG@sina.com.cn", "SoMUWIfO@qq.com", "DGOoczUOLl36Oh@163.cn",
    "QP8ENE@gmail.com.cn", "la4-Qu7xxn@qq.com.cn", "_IKhiFMI-rL@sohu.com"
];

var sohuArray = [];
var sinaArray = [];
var qqArray = [];
var otherArray = [];

//其他案例参见链接
https://segmentfault.com/p/1210000011083522