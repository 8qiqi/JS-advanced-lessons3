//翻转字符串
function reverseString(str) {
  // 请把你的代码写在这里
  var arr = str.split("");//第一步，使用split()方法，返回一个新数组
  arr.reverse();//第二步，使用reverse()方法创建一个新数组
  str = arr.join("");//第三步，使用join()方法将数组的每个元素连接在一起，组合成一个新字符串
  return str;
}
reverseString("hello");

//判断字符串是否是回文
function palindrome(str) {

  var movestr = str.replace( /\W+/g ,'');
  //正则表达式筛选所有非单词字符，替换为空的字符串
      movestr = movestr.replace(/\_+/g,'');
  //正则表达式筛选所有下划线字符，替换为空的字符串  
      movestr = movestr.toLowerCase();

  var spstr = movestr.split('');
  var restr = spstr.reverse(); 
  var newstr = restr.join('');

  if(newstr===movestr){
  return true;
  }
  else{
    return false;
  }
}
palindrome("eye");
