//数组的方法和相关高阶函数
//数组方法参考链接：
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from
//Array.from() 方法从一个类似数组或可迭代对象中创建一个新的数组实例。
const bar = ["a", "b", "c"];
Array.from(bar);
// ["a", "b", "c"]
Array.from('foo');
// ["f", "o", "o"]


//Array.isArray() 用于确定传递的值是否是一个 Array。
Array.isArray([1, 2, 3]);  
// true
Array.isArray({foo: 123}); 
// false
Array.isArray("foobar");   
// false
Array.isArray(undefined);  
// false


//Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

// Array.of() 和 Array 构造函数之间的区别在于处理整数参数：
// Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个长度为7的空数组
//（注意：这是指一个有7个空位的数组，而不是由7个undefined组成的数组）。
Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]


 //concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
 var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]



//数组方法参考链接：
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from
//Part1  数组的静态方法

Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]
Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]

var arr1 = [1,3,4];
console.log(Array.isArray(arr1));//true

function foo(){
    console.log(Array.isArray(arguments));
    //console.log(arguments.pop());//这样是否能调用？数组与类数组对象
    console.log(Array.prototype.pop.call(arguments));
}
foo(3,2,5);

//Part2  数组添加删除元素的原型方法 破坏性
//Array.prototype.shift
//shift()从头开始去除，返回去除的元素
var arr2 = [1,3,5,7];
var shiftElement = arr2.shift();//返回去除的元素
console.log(shiftElement,arr2);//1 [3, 5, 7]

//unshift()从指定位置开始添加元素，返回新长度.没有指定位置，从头开始加
var newLength = arr2.unshift(1,2);//返回新的数组长度
console.log(newLength,arr2);//5 [1, 2, 3, 5, 7]
var newLength = arr2.unshift(2);
console.log(newLength,arr2);//6 [2, 1, 2, 3, 5, 7]

//pop()删除最后一个元素，返回删除的元素
var popElement = arr2.pop();//返回pop出去的元素
console.log(popElement,arr2);//7  [2, 1, 2, 3, 5]

//push()在数组最后添加元素，返回新长度
var newLength = arr2.push(77,88);//返回新的数组长度
console.log(newLength,arr2);//7 [2, 1, 2, 3, 5, 77, 88]

//思考：如何通过push将两个数组组合成一个数组
var arr3 = ["a","b"];
var arr4 = ["c","d"];
Array.prototype.push.apply(arr3,arr4);
console.log(arr3);

//splice 从start开始，移除deleteCount个元素，并插入给定的元素
var arr5 = ["a","b","c","d"];
var spliceElements = arr5.splice(1,2,"x");//返回切掉的数组
console.log(spliceElements,arr5);//["b", "c"] ["a", "x", "d"]
// var spliceElements2=arr5.splice(-2,2,"x");
// console.log(spliceElements2,arr5);//["c", "d"] ["a", "b", "x"]


//Part11111111 排序和颠倒元素顺序 破坏性
//Array.prototype.reverse()
var arr1 = [1,2,3];
arr1.reverse();
console.log(arr1);//[3, 2, 1]

//Array.prototype.sort(compareFunction？)
var arr2 = ["banana","apple","pear","orange"];
arr2.sort();
console.log(arr2);//["apple", "banana", "orange", "pear"]

//思考sort中的参数
var arr3 = [-1,-20,7,50];
arr3.sort();
console.log(arr3);//结果是否是预计结果,如何解决.比较的是1、2、5/7
//[-1, -20, 50, 7]

//sort传递的函数对象
arr3.sort(function (a,b) {return a-b;});//对于数字类型，大于0则交换，冒泡排序
//arr3.sort(function (a,b) {return a>b;});//对于布尔类型，true则交换，冒泡排序

//如果想让arr2按第二个字母排序，怎么写？
var arr2 = ["banana","apple","pear","orange"];
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);// ["banana", "pear", "apple", "orange"] 


//Part222222 合并、切分和连接 非破坏性
//Array.prototype.concat(arr1?,arr2?,...)
var arr4 = ["banana","apple"];
var arr5 = ["pear","orange"];
var newArray = arr4.concat(arr5);
console.log(newArray,arr4,arr5);//["banana", "apple", "pear", "orange"] ["banana", "apple"] ["pear", "orange"]

//Array.prototype.slice(begin?,end?)
//sclice()返回指定位置截取的指定长度的数组
//sclice()不会破坏数组，splice()会破坏数组
var arr6 = [1,2,3,4,5];
var newArray = arr6.slice(2,4);
console.log(newArray,arr6);//[3, 4] [1, 2, 3, 4, 5]
var newArray2 = arr6.slice(2);
console.log(newArray2,arr6);//[3, 4, 5] (5) [1, 2, 3, 4, 5]

//Array.prototype.join(separator?)
var arr7 = [3,4,5];
var joinReturn = arr7.join("--");//返回了个什么类型？
console.log(joinReturn,arr7);//3--4--5  [3, 4, 5]
console.log(typeof joinReturn);//string
//注意：稀疏数组调用join
console.log([3,,,,,,5].join("*"));//3******5

//Part333333333 值的查找 非破坏性
//Array.prototype.indexOf(searchValue,startIndex?)
//indexof返回从开始位置第一次找到指定字符的下标
//startIndex?代表开始检索的下标位置
var arr8 = [1,3,5,5,7,9,5];
console.log(arr8.indexOf(5));//2
console.log(arr8.indexOf(5,3));//3
console.log(arr8.indexOf(5,5));//6

//Array.prototype.lastIndexOf(searchElement,startIndex?)
//lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
console.log(arr8.lastIndexOf(5));//6
console.log(arr8.lastIndexOf(5,3));//3
console.log(arr8.lastIndexOf(5,5));//3


//Part1111111 数组原型方法（迭代-非破坏性-检测方法）thisValue可以指定callback中的this
// Array.prototype.forEach(callback,thisValue?) //注意并不返回新的数组
var arr1= [2,5,8];
arr1.forEach(function (a) {//a代表的是arr1中的每个元素
    if(a>3){
        console.log(a,"大于3");
    }else {
        console.log(a,"不大于3");
    }
});
console.log(arr1);
//2 "不大于3"
//5 "大于3"
//8 "大于3"

//返回两个数组中的最大数组成的数组
var arr1=[2,5,8];
var arr2=[1,6,7];
var arr3=[];
arr1.forEach(function(a,i){
	arr3[i]=a>arr2[i]?a:arr2[i];
},arr2);
console.log(arr3);

// Array.prototype.every(callback,thisValue?) //返回一个布尔类型 若有不满足的将不再进行后续判断直接返回false
var arr2= [2,5,8];//[2,4,6]
var returnValue = arr2.every(function (a) {//判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    //console.log(a);//打开此行，查看是否会输出8，为什么？
    return a%2===0;
});
console.log(returnValue);//false
//练习：验证一个百位数，个、十、百 每一位上的数相加可以除尽3的话，则这个百位数就能整除3


function mod3(a){
	var aa=a+'';
	var arr1=aa.split('');
	var sum=0;
	var ww=arr1.forEach(function(a){sum+=a;})
	console.log(sum);
	
	if(sum%3==0){console.log('可以整除三');}
	if(sum%3!==0){console.log('不可以整除三');}
}

// Array.prototype.some(callback,thisValue?)//返回一个布尔类型 若有一部分满足的将不再进行后续判断，直接返回true
var arr2= [2,5,8];//[2,4,6]
var returnValue = arr2.some(function (a) {//判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    //console.log(a);//打开此行，查看输出了哪些数，为什么？不会输出8
    return a%2===0;
});
console.log(returnValue);


//Part2222222 数组原型方法（迭代-非破坏性-转换方法）
// Array.prototype.map(callback,thisValue?) //Map映射 返回新的数组
var arr2= [1,3,5,7,9];
var newArray = arr2.map(function (a) {
    return a*a;
});
console.log(newArray,arr2);//[1, 9, 25, 49, 81] [1, 3, 5, 7, 9]

// //可以用forEach代替map
// var arr1=[2,5,8];
// var arr2=[1,6,7];
// var arr3=[];
// arr1.forEach(function(a,i){
// 	arr3[i]=a*a;
// });
// console.log(arr3);


// Array.prototype.filter(callback,thisValue?) //Filter过滤 返回新的数组
var arr2= [1,3,5,7,9];
var newArray = arr2.filter(function (a) {//产生新数组，新数组的元素是返回为true的那些元素
    return (a>2&&a<8)?true:false;
});
console.log(newArray,arr2);//[3, 5, 7] [1, 3, 5, 7, 9]


//Part3333333 数组原型方法（迭代-非破坏性-归约方法）
// Array.prototype.reduce(element,initialValue?) //从左向右迭代
// 对reduce的解读 ((((x1 op x2) op x3) op x4)...xn)
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduce(add));//14  10+3=13 13+1=14

// Array.prototype.reduceRight(callback,initialValue?) //从右向左迭代
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduceRight(add));//14  1+3=4 4+10=14

//综合实例
function printArgs(prev,cur,i) {
    console.log("prev",prev,",cur:",cur,",i:",i);
    return prev+cur;
}
var arr4 = ["a","b","c","d"];
console.log(arr4.reduce(printArgs));
console.log(arr4.reduce(printArgs,"x"));
console.log(arr4.reduceRight(printArgs));
console.log(arr4.reduceRight(printArgs,"x"));

//思考案例：
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});
console.log(flattened);


//思考案例：计算数组中每个元素出现的次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }