//对象属性特性简介
//对象属性有1)数据属性2)访问器属性3)内部属性
//数据属性也叫对象属性

var objProto = {
    z:3
};

var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log(obj.toString);//ƒ toString() { [native code] }   //原型链上有toString属性

for(var k in obj){//通过for...in遍历所有原型链上的属性
    console.log(k,obj[k]);//是否能遍历到toString？
}
//x 1
//y 2
//z 3
//访问不到toString,因为属性设置问题