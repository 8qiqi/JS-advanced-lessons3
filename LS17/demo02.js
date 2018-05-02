//通过构造函数模拟类-类的继承
//JS实现继承的形式 一
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){console.log(this.name);};//Person.prototype是实例化的Person对象
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}//name属性添加到实例化的对象上了
Student.prototype.__proto__ = Person.prototype;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);


//JS实现继承的形式 二
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);//Student.prototype是实例化的Student对象；Person.prototype是Person的一个属性
// console.log(Person.prototype.constructor); //Person函数
// console.log(Student.prototype.constructor); //Person函数
Student.prototype.constructor = Student;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);