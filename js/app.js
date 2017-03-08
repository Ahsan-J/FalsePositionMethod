var x1=0;
var x2=0;
var index=0;
var Es = false;
var res = [];
function f(value){
    return (value*value)-3;
}
function xThird(one,two){
    return (one*f(two)-two*f(one))/(f(two)-f(one));
}
function absError(){
    if(Math.abs(res[index-1]-res[index-2])<0.01){
        Es = true;
        return true;
    }
    else{
        Es=false;
        return false;
    }
}
function calculation(){
    x1 = Number(document.getElementById("lowerBound").value);
    x2 = Number(document.getElementById("upperBound").value);
    while(index<15){
        if(index>2){
            if(absError()==true){
                addData();
                document.getElementById("ans").style.visibility="visible";
                var node = document.createTextNode(xThird(x1,x2));
                document.getElementById("ans").appendChild(node);
                break;
            }
        }
        addData();
    }
}
function addData(){
    var table = document.getElementById("data_table");
    var td=[];
    for(var i=0;i<9;i++){
        td[i]=document.createElement("td");
    }        
        tr = document.createElement("tr");
        td[0].innerText = Number(index+1);
        td[1].innerText = x1;
        td[2].innerText = x2;
        td[3].innerText = Number(f(x1));
        td[4].innerText = Number(f(x2));
        td[5].innerText = Number(xThird(x1,x2));
        td[6].innerText = Number(f(xThird(x1,x2)));
        td[7].innerText = Number(f(x1)*f(xThird(x1,x2)));
        td[8].innerText = Es;
    for(var i=0;i<9;i++){
        tr.appendChild(td[i]);
    }    
        var x3 = xThird(x1,x2);
        res[index]=Number(f(x1)*f(xThird(x1,x2)));
        if(f(x3)==0){
            alert(xThird(x1,x2)+" is the root");
        }
        if((f(x1)<0 && f(x3)<0)||(f(x1)>0 && f(x3)>0)){
            x1=x3;
        }
        
        if((f(x1)<0 && f(x3)>0)||(f(x1)>0 && f(x3)<0)){
            x2=x3;            
        }
        table.appendChild(tr);
        index++;
}

function show(){
    document.getElementById("data_table").style.visibility = "visible";
}