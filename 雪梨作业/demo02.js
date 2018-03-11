//方法一
var arr=[1,2,3,2,3,4,7,1,5,8];
function fun(arr){
for(var i=0;i<arr.length-1;i++){
   for(var j=i+1;j<arr.length;j++){
      if(arr[i]==arr[j]){
         arr.splice(j,1)
         j--;
}
}
}
return arr;
}
arr2=fun(arr);
console.log(arr2)
//方法二
var arr=[1,2,3,2,3,4,7,1,5,8];
function fun(arr){
  var ret=[];
  for (var i = 0; i < arr.length; i++) {
     if (arr.indexOf(arr[i]) == i) {
          ret.push(arr[i]);
     }
  }
  return ret;
}
arr2=fun(arr);
console.log(arr2)