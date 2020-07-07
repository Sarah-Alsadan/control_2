function func(){   
if(document.getElementById("point").value==""){
    alert("enter lenght");
}else{
if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
} else {
    
  localStorage.clickcount = 1;
    var line={x:100,
              y:100};
    localStorage.setItem("line", JSON.stringify(line));
}
    
 ///////////////////////////
var canvas = document.getElementById("myCanvas");
if (canvas.getContext) 
{
 var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = "aquamarine";
    ctx.moveTo(JSON.parse(localStorage.getItem("line")).x, JSON.parse(localStorage.getItem("line")).y);
    var n1,n2;
    if(document.getElementById("d").value=="Left"){
        n1= (JSON.parse(localStorage.getItem("line")).x) - (document.getElementById("point").value);
        n2= JSON.parse(localStorage.getItem("line")).y;
    }
    if(document.getElementById("d").value=="Right"){
        n1= Number(JSON.parse(localStorage.getItem("line")).x) + Number(document.getElementById("point").value);
        n2= JSON.parse(localStorage.getItem("line")).y;    
    }
    if(document.getElementById("d").value=="Forward"){
        n1= JSON.parse(localStorage.getItem("line")).x ;
        n2= (JSON.parse(localStorage.getItem("line")).y) - (document.getElementById("point").value);
    }
    if(document.getElementById("d").value=="Backwards"){
        n1= JSON.parse(localStorage.getItem("line")).x ;
        n2= Number(JSON.parse(localStorage.getItem("line")).y) + Number(document.getElementById("point").value);
    }
    var line={x:n1,
              y:n2,}
    localStorage.setItem("line", JSON.stringify(line));
    ctx.lineTo(n1, n2);
    ctx.stroke();    
      var table = document.getElementById("myTable");
  var row = table.insertRow(Number(localStorage.clickcount));
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = document.getElementById("d").value;
  cell2.innerHTML = document.getElementById("point").value;
}}} // end method



function func2(){ 
    localStorage.clear();
    location.reload();
}