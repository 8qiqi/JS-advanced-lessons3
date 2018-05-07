//稀疏数组与多维数组

//稀疏数组是包含从0开始的不连续索引的数组，length值大于实际定义的元素的个数
//遍历稀疏数组时，注意的跳过无元素项的问题

var a1 = [,"abc"];
console.log(a1.length);//2

for(var i in a1){
    console.log(i,a1[i]);//1 abc
}
console.log(0 in a1,1 in a1);//false true
//0在a1里面有数吗，1在a1里面有数吗

var a2 = new Array(3);
console.log(a2.length);//3
console.log(a2);//[empty × 3]

//注意：
var a3 = [,,];
console.log(a3.length);//2

console.log(["a","b"].length);//2
console.log(["a","b",].length);//2
console.log(["a","b",,].length);//3
console.log([1,2,3,,,].length)//5
//省略最后一个逗号之后的


//多维数组
//JS中可以通过包含数组的数组来模拟多维数组
// 多维数组 实例一 矩形数组和交错数组
var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(5);//若是table[i] = new Array(i);
}

for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
var product = table[2][4];
console.log(table);




// 合并一起的写法
var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(5);//若是table[i] = new Array(i);
    for(var col=0;col<table[i].length;col++){
        table[i][col]=i*col;
    }
}
var product = table[2][4];
console.log(table);