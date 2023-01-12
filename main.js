let numRight;
let TotalNum;
let percent;
document.getElementById("Button").onclick = function(){
    TotalNum = document.getElementById("TextBox1").value;
    TotalNum=Number(TotalNum);

    numRight = document.getElementById("TextBox2").value;
    numRight=Number(numRight);
    percent = numRight/TotalNum;
    percent =percent.toLocaleString(undefined,{style: "percent"})
    console.log(percent);

    if(percent=="100%"){
        document.getElementById("BlankLabel").innerHTML = "PERFECT SCORE";
    }
    else if(percent<="99%"&&percent>="97%"){
        document.getElementById("BlankLabel").innerHTML = percent+" A+";
    }
    else if(percent<="96%"&&percent>="93%"){
        document.getElementById("BlankLabel").innerHTML = percent+" A";
    }
    else if(percent<="92%"&&percent>="90%"){
        document.getElementById("BlankLabel").innerHTML = percent+" A-";
    }
    else if(percent<="89%"&&percent>="87%"){
        document.getElementById("BlankLabel").innerHTML = percent+" B+";
    }
    else if(percent<="86%"&&percent>="83%"){
        document.getElementById("BlankLabel").innerHTML = percent+" B";
    }
    else if(percent<="82%"&&percent>="80%"){
        document.getElementById("BlankLabel").innerHTML = percent+" B-";
    }
    else if(percent<="79%"&&percent>="77%"){
        document.getElementById("BlankLabel").innerHTML = percent+" C+";
    }
    else if(percent<="76%"&&percent>="73%"){
        document.getElementById("BlankLabel").innerHTML = percent+" C";
    }
    else if(percent<="72%"&&percent>="70%"){
        document.getElementById("BlankLabel").innerHTML = percent+" C-";
    }
    else if(percent<="69%"&&percent>="67%"){
        document.getElementById("BlankLabel").innerHTML = percent+" D+";
    }
    else if(percent<="66%"&&percent>="65%"){
        document.getElementById("BlankLabel").innerHTML = percent+" D";
    }
    else 
        document.getElementById("BlankLabel").innerHTML = percent+" F";
    
    //comment

}