//函数对象
//JS中的函数也是对象
//JS中每个函数都是作为对象来维护和运行的，即函数对象
//可以将函数（函数对象）赋值给一个变量，或将函数作为参数进行传递
//函数对象的类型是Function
//如果变量时函数（函数对象）时，typeof此对象，返回function,而非object
//内置的函数对象有Function、Array、Date、Error
//内置的非函数对象有Math、JSON

function foo(){}
console.log(foo); //function foo(){}
console.log(typeof foo); //function
console.log(foo instanceof Object); //true
console.log(foo instanceof Function); //true
console.log(foo === window.foo); //true
//判断类型时的类型大写，编辑器输出的类型小写

console.log(typeof Function);//function
console.log(typeof Array);	 //function
console.log(typeof Date);	 //function
console.log(typeof Error); 	 //function
console.log(typeof Math);	 //object
console.log(typeof JSON);	 //object


//思考：
console.log(typeof new Function());// function 创建函数的第三种方式
console.log(typeof new new Function());//object 函数对象本身是函数类型
console.log(typeof new Array());   //  object
console.log(typeof new Date());	  // object

//补充思考：
console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true

console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true

console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true

console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true

console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true