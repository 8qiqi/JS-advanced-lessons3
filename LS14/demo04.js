//属性特性描述符及属性特性补充部分

//属性特性描述符
//属性特性描述符是一个对象，用来查看对象属性的特性
//该对象包含4个属性，对应4个特性，通过getOwnPropertyDescriptor方法获得

var obj = {x:5};
Object.defineProperty(obj,"y",{
    configurable:false,
    writable:false,
    enumerable:true,
    value:6
});
Object.defineProperty(obj,"z",{
    configurable:false,
    value:7
});
Object.getOwnPropertyDescriptor(obj,"x");//{value: 5, writable: true, enumerable: true, configurable: true}
//Object.getOwnPropertyDescriptor(obj,"y");//{value: 6, writable: false, enumerable: true, configurable: false}
//Object.getOwnPropertyDescriptor(obj,"z");//{value: 7, writable: false, enumerable: false, configurable: false}

//对象属性特性
//给多个属性设置特性的方法（Object.defineProperties）
var obj = {_x:1};
Object.defineProperties(obj,{
    y:{value:2,writable:true,configurable:true,enumerable:true},
    z:{value:2,writable:true,configurable:true,enumerable:true},
    x:{
        get:function(){return this._x;},
        set:function (val) {
            this._x = val;
        }
    }
});


var o3 = {_x:21};
Object.defineProperty(o3,"x",{
    get:function(){return this._x}
});
o3.x = 34;//设置了一个键值对 x:34
console.log(o3.x);//输出21还是34?  21 调用get函数

var o4 = Object.create(o3);
Object.defineProperty(o4,"x",{
    set:function (val) {
        this._x = val;
    },
    get:function () {
        return ++this._x;
    }
});
o4.x = 56;//设置键值对
console.log(o4.x);//输出多少  57 调用get函数，不要忘记前++
console.log(o3.x);//21


//全局变量的属性特性是如何的呢？不可配置 configurable: false}
//{value: 23, writable: true, enumerable: true, configurable: false}
var a = 23;
console.log(Object.getOwnPropertyDescriptor(window,"a"));
delete a;//等效delete window.a;//不能删除


// 要求掌握下述方法的使用
// Object.keys() 返回所有自有（非继承）可枚举属性的键
// Object.getOwnPropertyNames()返回所有自有（非继承）键，包括不可枚举
// Object.prototype.hasOwnProperty() 判断自身是否有该属性，不包括可枚举的属性
// Object.prototype.propertyIsEnumerable() 判断自身是否有该属性并检测该属性是否可枚举
// in  检测一个对象是否有某个属性，包括继承的属性，包括不可枚举的属性
// for...in 遍历一个对象的属性，包括继承的属性，但不包括不可枚举的属性
// 思考Object静态方法和Object.prototype原型方法的区别（都共享了方法，使用上有什么区别）
var o3 = {};
o3.y = "yyy";
Object.defineProperty(o3,"x",
    {configurable:true,enumerable:false,writable:true,value:"xxx"}
);
console.log(Object.keys(o3));//["y"] 不包含不可枚举属性的键
console.log(Object.getOwnPropertyNames(o3));//["y", "x"] 包含不可枚举属性的键

console.log(o3.hasOwnProperty("x"));//true 包括不可枚举属性
console.log(o3.hasOwnProperty("y"));//true
console.log(o3.propertyIsEnumerable("a"));//false

for(var k in o3){ //遍历不到x属性
    console.log(k,o3[k]);
}
console.log("x" in o3,"y" in o3);// in 和 for...in 的区别 关于可枚举属性特性//true true
console.log(o3.hasOwnProperty("x"),o3.hasOwnProperty("y"));//是否关心可枚举//true true



//遍历属性的综合实例
var o4 = {};
o4.a = "aaa";
Object.defineProperty(o4,"b",
    {configurable:true,enumerable:false,writable:true,value:"bbb"}
);
var o5 = Object.create(o4);
o5.c = 234;
Object.defineProperty(o5,"d",{enumerable:false,value:567});
for(var k in o5){
    if(o5.hasOwnProperty(k)){
        console.log("o5 自有可遍历属性：",k,o5[k]);
    }else {
        console.log("o5 非自有可遍历属性：",k,o5[k]);
    }
}
//o5 自有可遍历属性： c 234
//o5 非自有可遍历属性： a aaa
console.log(o5.propertyIsEnumerable("a"),
    o5.propertyIsEnumerable("b"),
    o5.propertyIsEnumerable("c"),
    o5.propertyIsEnumerable("d")
);//false false true false
console.log("a" in o5,"b" in o5,"c" in o5,"d" in o5);//多少个true 多少个false
console.log(Object.keys(o5));//只显示自身可枚举的属性
console.log(Object.getOwnPropertyNames(o5));//返回一个数组，包含自身所有属性，包括不可枚举的属性
//true true true true
//console.log(o4.isPrototypeOf(o5));
