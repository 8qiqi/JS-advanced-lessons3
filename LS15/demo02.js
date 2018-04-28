//JS对象的属性访问链(自有属性和继承属性)
/////////////Part1 原型链综述////////////
var proObj = {
    z:3
};
var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true //in 可以访问当前对象的属性和原型链上的属性，包括不可枚举类型
console.log(obj.hasOwnProperty("z"));//false //// Object.prototype.hasOwnProperty() 判断自身是否有该属性，包括不可枚举的属性


///////////Part2 原型链属性操作////////////
var proObj = {
    z:3
};
var obj = Object.create(proObj);
obj.z = 5;
console.log(obj.hasOwnProperty("z"));//true
console.log(obj.z);//5
console.log(proObj.z);//3

obj.z = 8;
console.log(obj.z);//8

delete obj.z;//true
console.log(obj.z);//3

delete obj.z;//true
console.log(obj.z);//3 //删除的不是原型链上的z属性

//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete proObj.z;
console.log(obj.z);//此时彻底没有z了
