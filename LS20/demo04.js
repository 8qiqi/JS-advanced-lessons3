//方法
part1111//实例方法

//test 在字符串中测试模式匹配，返回true或false   有无模式修饰符g差别巨大
var regExp = /a/i;
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true

var regExp = /a/gi;//思考如果加了g，循环了若干次后是true还是false，这是为什么？test中的lastIndex
console.log(regExp.test("ab"));//true lastIndex为1，下一次从b开始匹配
console.log(regExp.test("ab"));//false 从b开始匹配 lastIndex为2，下一次匹配为空，从
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false 为什么？

// var regExp = /a/gi;
// for(var i=0;i<6;i++){
// 	console.log(regExp.test("ab"));
// 	console.log(regExp.lastIndex);
// }
?????????????????????????????????????????????

/*
var regExp = /a/gi;
for(var i=0;i<6;i++){
	console.log(regExp.test("aaa"));
	console.log(regExp.lastIndex);
}
// true 1
// true 2
// true 3
// false 0
// true 1
// true 2
*/
part2222//字符串方法  match 和search用法相同，返回结果形式不同；test用法特别
//match找到一个或多个正则表达式的匹配,没有返回null //有无模式修饰符g差别巨大,没有g就找一个匹配的，且需要输出index,input
var regExp = /ab/i;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["Ab", index: 2, input: "xxAbcaaBbxyz"]

var regExp = /ab/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);//["Ab", "aB"]

//replace 替换与正则表达式匹配的子串
console.log("moon2xyz".replace(/o/,"ab"));//mabon2xyz
console.log("moon2xyz".replace(/o/g,"ab"));//mababn2xyz
console.log("moon2 ooxyz".replace(/\bo/g,"ab"));//moon2 aboxyz  //空格也相当于边界
console.log("moon2xyz".replace(/\dx/,"_"));//moon_yz
console.log("moon2xyz".replace(/[xyz]/g,"ab"));//moon2ababab  //[xyz]和x y z其中一个匹配
console.log("m2on2x2z".replace(/\d[zo]/g,"ab"));//mabn2xab
console.log("m2on2x2z".replace(/2[x-z]/g,""));//m2on

console.log("@abc@123@".replace(/@./g,"Q"));//QbcQ23@
console.log("@abc@123@".replace(/.@/g,"Q"));//@abQ12Q

// var str = "test22314234244dgfqeqe232qe13ed";
// var newStr = str.search(/\dqe/);
// console.log(newStr);
// str.replace(/\dqe/,11223344);
// console.log(str);
???????????????????????????????????????????
