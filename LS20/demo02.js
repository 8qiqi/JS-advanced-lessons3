//表达式

part111111//表达式之单个字符与数字
// . 匹配除换行符之外的任意字符
var regExp = /a*b/gi; //注意*和.的区别  //.有一个  *有0个或者任意个
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["Ab", "aaB", "b"]

var regExp = /a.b/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["aaB"]

//\d 匹配数字 等价于[0-9]   \D匹配非数字  等价于[^0-9]
"B2 is the suite number.".replace(/\d/g,"X");//"BX is the suite number."
"B2 is the suite number.".replace(/\D/g,"X");//"X2XXXXXXXXXXXXXXXXXXXXX"

//\w 匹配一个单字字符（字母、数字或者下划线）等价于[A-Za-z0-9_]。
//\W 匹配一个非单字字符。 等价于[^A-Za-z0-9_]。
part2222//表达式之空白字符
//  \s匹配一个空白字符 例如, /\s\w*/ 匹配"foo bar."中的' bar'  相当于[\t\n\x0B\f\r]
//  \S匹配一个非空白字符 例如, /\S\w*/ 匹配"foo bar."中的'foo' 相当于[^\t\n\x0B\f\r]

//字符类 []
console.log("absxsdfe123Ab".replace(/[abd]/,"X"));//Xbsxsdfe123Ab
console.log("absxsdfe123Ab".replace(/[abd]/g,"X"));//XXsxsXfe123AX
console.log("absxsdfe123Ab".replace(/[abd]/gi,"X"));//XXsxsXfe123XX

// 字符类 的取反 [^]
console.log("absxsdfe123Ab".replace(/[^abd]/,"X"));//abXxsdfe123Ab
console.log("absxsdfe123Ab".replace(/[^abd]/g,"X"));//abXXXdXXXXXXb
console.log("absxsdfe123Ab".replace(/[^abd]/gi,"X"));//abXXXdXXXXXAb

console.log("12345667".replace(/[3-9]/gi,"X"));//12XXXXXX
console.log("absxsdfe123Ab".replace(/[a-f1-9]/gi,"X"));//XXsxsXXXXXXXX
console.log("absxsdfe123Ab".replace(/[a-f][1-9]/gi,"X"));//absxsdfX23Ab 如果单独替换，则需要分组，见后续
console.log("absxsdfe1Q2e3Ab".replace(/[a-f][1-9][A-Z]/gi,"X"));//absxsdfX2Xb

console.log("2017-10-23".replace(/[0-9]/g,"X"));//XXXX-XX-XX
console.log("2017-10-23".replace(/[0-9-]/g,"X"));//XXXXXXXXXX

//\d \D \w \W \s \S 案例
"sdafsa sdfea2s".replace(/a\ds/g,"*");
"sdafsa sdfea2s".replace(/a\Ds/g,"*");
"sdafsa sdfea2s".replace(/a\ws/g,"*");
"sdafsa sdfea2s".replace(/a\Ws/g,"*");

part3333//表达式之定位符
// \b 匹配单词边界 
console.log(/oo/.test("moon"));//true
console.log(/oo\b/.test("moon"));//false
console.log(/oon\b/.test("moon"));//true
console.log(/\boo/.test("moon"));//false

console.log("moon".search(/oo/));//1
console.log("moon".search(/oo\b/));//-1
console.log("moon".search(/oon\b/));//1
console.log("moon".search(/\boo\b/));//-1

//\B匹配非单词边界
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

"possibly yesterday".replace(/y\B./,"aaa");//"possibly aaasterday"
"possibly yesterday".replace(/y\B/,"aaa");//"possibly aaaesterday"

//关于边界 ^ $ \b \B     ^ $是针对整个范围来说的 \b \B是针对单词来说的  ^只有在[]中才是“取反”的意思，不然是行首匹配
console.log("This is a Boy is".replace(/is/g,0));//Th0 0 a Boy 0
console.log("This is a Boy is".replace(/^is/g,0));//This is a Boy is
console.log("This is a Boy is".replace(/is$/g,0));//This is a Boy 0
console.log("This is a Boy is".replace(/is\b/g,0));//Th0 0 a Boy 0
console.log("This is a Boy is".replace(/is\B/g,0));//This is a Boy is
console.log("This is a Boy is".replace(/\bis/g,0));//This 0 a Boy 0
console.log("This is a Boy is".replace(/\Bis/g,0));//Th0 is a Boy is

part4444//表达式之限定符
part5555//表达式之分组
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
part6666//表达式之引用
part7777//表达式之或模式

//模式修饰符
