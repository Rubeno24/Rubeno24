
let num1;
let num2;
let num3;
let num4;
let num5;
let mega;


document.getElementById("ButtonLotto").onclick = function(){

    num1=Math.floor(Math.random() * 47) + 1
    num2=Math.floor(Math.random() * 47) + 1
    num3=Math.floor(Math.random() * 47) + 1
    num4=Math.floor(Math.random() * 47) + 1
    num5=Math.floor(Math.random() * 47) + 1
    mega=Math.floor(Math.random() * 27) + 1

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
    document.getElementById("num3").innerHTML = num3;
    document.getElementById("num4").innerHTML = num4;
    document.getElementById("num5").innerHTML = num5;
    document.getElementById("Mega").innerHTML = mega;
    //part i edited
    // i editiewd this
    //i edited this in mac 
    //second branch 
    //second branch
    
}

