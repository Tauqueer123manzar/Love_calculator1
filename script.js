function love(){
    var nameone=document.getElementById("name1").value;
    var nametwo=document.getElementById("name2").value;
    if(nameone.length<=2){
        alert("Enter atleast 3 character");
    }
    if(nametwo.length<=2){
        alert("Enter atleast 3 character")
    }
    else{
        var random=Math.floor(Math.random()*100)+1;
        document.getElementById("print").innerHTML= nameone +" AND "+ nametwo +"="+random+" % "+" OF LOVE"
    }
    if(random<=10 || random<50){
        document.getElementById("statement").innerHTML="You are not in a relationship only you are a friend";
    }
    else if(random<=50 || random<=100){
        document.getElementById("statement").innerHTML="Lovely relationship";
    }
}
