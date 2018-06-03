console.log("moon2 ooxyz".replace(/\bo/g,"ab"));//moon2 aboxyz

/test方法/
var regExp = /a/gi;
for(var i=0;i<10;i++){
	console.log(regExp.test("aaa"));
    console.log(regExp.lastIndex);//每次执行后从哪开始重新匹配？
}

var str = "test22314234244dgfqeqe232qe13ed";
var newStr = str.search(/\dqe/);
console.log(newStr);
str.replace(/\dqe/,11223344);
console.log(str);

console.log("@abc".replace(/@*/g,"Q"));//QQaQbQcQ

//关于边界 ^ $ \b \B     ^ $是针对整个范围来说的 \b \B是针对单词来说的
console.log("This is a Boy is".replace(/is/g,0));
console.log("This is a Boy is".replace(/^is/g,0));
console.log("This is a Boy is".replace(/is$/g,0));
console.log("This is a Boy is".replace(/is\b/g,0));
console.log("This is a Boy is".replace(/is\B/g,0));
console.log("This is a Boy is".replace(/\bis/g,0));
console.log("This is a Boy is".replace(/\Bis/g,0));


//如何将2017-10-23转成10/23/2017
"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");

//分组的 忽略分组 （？：）
"2017-10-23".replace(/(?:\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");

//注意括号的转义字符，第一个相当于做了分组
console.log(/^(ab)$/.test("(ab)"));
console.log(/^\(ab\)$/.test("(ab)"));

console.log("a23*4vv".replace(/\w(?=\d)/g,"X"));//XX3*4vv 正项前瞻
console.log("a23*4v8".replace(/\w(?=\d)/g,"X"));//XX3*4X8
console.log("a23*4v8".replace(/\w(?!\d)/g,"X"));//a2X*XvX 负项前瞻
