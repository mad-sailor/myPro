//type url data datatype
function ajax({type,url,data,dataType}){
    return new Promise(function(open){ 
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                var result=xhr.responseText;
                if(dataType!==undefined&&dataType.toUpperCase==="JSON")
                    resule=JSON.parse(result);
                open(result);
            }
        }
        if(data!==undefined&&typeof data=="object"){
            var arr=[];
            for(var key of data){
                arr.push(key+"="+data[key]);
            }
            data=arr.join("&");
        }
        if(data!==undefined&&type==="get"){
            url+="?"+data;
        }
        xhr.open(type,url,true);
        if(type==="post"){
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhr.send(data);
        }else{
            xhr.send(null);
        }
    });
}
