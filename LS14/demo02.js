//JS对象属性特性（数据属性）及其设置
//属性的值value,对应属性的值
//可写配置writable,确定属性是否可写性
//可配置特性configurable,确定属性是否能删除和其他特性是否可配置
//可枚举特性enumerable，属性是否可枚举

var obj = {
    x:1,
    y:2
};
//Object.defineProperty(obj,"x",{writable:false,value:11,enumerable:false,configurable:true});
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}
//y 2


var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//改成true会如何
    configurable:false,//改成true会如何
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//Mike
person.name = "Lucy";
console.log(person.name);//Mike
delete person.name;
console.log(person.name);//Mike

//添加属性的两种方式
//方式一：直接添加（直接添加的属性，其所有特性默认都是true）
var obj = {
    x:1,
    y:2
};
obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
}
//x 1
//y 2
//z 3

//方式二：通过Object.defineProperty添加（通过defineProperty方法添加（属性特性默认为false））
var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;

//通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false
Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerable没有指定，所以默认为false
for(var k in obj){
    console.log(k,obj[k]);
}
//console.log(obj.w);//有w，但上边for...in遍历不到//456
//x 1
//y 2
//z 3
