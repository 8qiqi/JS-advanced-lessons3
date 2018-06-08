[x4, y4 = 'b'] = ['a',undefined]; // x4='a'y4='b'

[x4, y4 = 'b'] = ['a',null]; // x4='a'y4=null
严格等于，使用右侧值

var [a=b,b=1]=[];
console.log(a,b)//undefined 1

let [a=b,b=1]=[];
console.log(a,b)//报错

a=[];
b=[1,2,3,4,5];
[a[0],,a[1],,a[2]]=b;
console.log(a);

var { foo4: baz4 } = { foo4: 'aaa', bar4: 'bbb' };
console.log(baz4);// "aaa"   将'aaa'赋值给baz4
//键是负责匹配的
console.log(foo4);//报错


let obj1 = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj1;
console.log(f,l);//注意和下边写法的区别

let { first, last } = obj1;
//实际let { first:first, last:last } = obj1;
console.log(first,last);


var obj={
	p:'abc'
};
var {p}=obj;//默认为var {p:p}=obj;
console.log(p);

var obj={
	p:'abc'
};
var {p:s}=obj;
console.log(p);//爆错  p不是一个变量，只是用来匹配的，，匹配完了就结束了


var {toString:s1}=123;
console.log(s1);
console.log(s1===Number.prototype.toString)


