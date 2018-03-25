<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=gb18030">
    <title>Untitled Document</title>
    
</head>
<body>
    <script type="text/javascript">   
        /*
         * param1 Array 
         * param2 Array
         * return true or false
         */
        function arraysSimilar(arr1, arr2){
            //判断边界
            if(!(arr1 instanceof Array)||!(arr2 instanceof Array))
                return false;
            //判断长度
            if(arr1.length!=arr2.length)
                return false;
            
            var i=0,
                n=arr1.length,
                countMap1={},
                countMap2={},
                t1,t2,
                TYPES=['string','boolean','number','undefined','null','function','date','window'];
            for(;i<n;i++){
                t1=typeof(arr1[i]);
                t2=typeof(arr2[i]);
                if(countMap1[t1]){
                    countMap1[t1]++;
                }else{
                    countMap1[t1]=1;
                }
                if(countMap2[t2]){
                    countMap2[t2]++;
                }else{
                    countMap2[t2]=1;
                }
            }
            
            function typeof(ele){
                var r;
                if(ele===null) r='null';
                else if(ele instanceof Array) r='array';
                else if(ele===window) r='window';
                else if(ele instanceof Date) r='date';
                else r=typeof ele;
                return r;
            }
            
            for(i=0,n=TYPES.length;i<n;i++){
                if(countMap1[TYPES[i]]!==countMap2[TYPES[i]]){
                    return false;
                }
            }
            return true;
        }
    </script>
    <script src="testData.js"></script>
</body>
</html>


var result=function(){
    //以下为多组测试数据
            var cases=[{
                    arr1:[1,true,null],
                    arr2:[null,false,100],
                    expect:true
                },{
                    arr1:[function(){},100],
                    arr2:[100,{}],
                    expect:false
                },{
                    arr1:[null,999],
                    arr2:[{},444],
                    expect:false
                },{
                    arr1:[window,1,true,new Date(),"hahaha",(function(){}),undefined],
                    arr2:[undefined,(function(){}),"okokok",new Date(),false,2,window],
                    expect:true
                },{
                    arr1:[new Date()],
                    arr2:[{}],
                    expect:false
                },{
                    arr1:[window],
                    arr2:[{}],
                    expect:false
                },{
                    arr1:[undefined,1],
                    arr2:[null,2],
                    expect:false
                },{
                    arr1:[new Object,new Object,new Object],
                    arr2:[{},{},null],
                    expect:false
                },{
                    arr1:null,
                    arr2:null,
                    expect:false
                },{
                    arr1:[],
                    arr2:undefined,
                    expect:false
                },{
                    arr1:"abc",
                    arr2:"cba",
                    expect:false
                }];
            
    //使用for循环, 通过arraysSimilar函数验证以上数据是否相似，如相似显示“通过”,否则"不通过",所以大家要完成arraysSimilar函数,具体要求，详见任务要求。    
            for(var i=0;i<cases.length;i++){
                if(arraysSimilar(cases[i].arr1,cases[i].arr2)!==cases[i].expect) {
                    document.write("不通过！case"+(i+1)+"不正确！arr1="+JSON.stringify(cases[i].arr1)+", arr2="+JSON.stringify(cases[i].arr2)+" 的判断结果不是"+cases[i].expect);
                    return false;
                }                
            }
            return true;
            
        }();
    document.write("判定结果:"+(result?"通过":"不通过"));