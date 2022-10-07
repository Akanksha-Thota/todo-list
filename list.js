document.body.style.backgroundColor="black";
//creating "close" button and append to list
var myNodelist=document.getElementsByTagName("li");
var i;    

for(i=0;i< myNodelist.length;i++){
  var span=document.createElement("SPAN");
  var txt=document.createTextNode(Del); 
  span.className="close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
//click on Del button to hide list
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
 close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
//creating a newlist item when clicking add button
function newElement(){
  var li=document.createElement("li");
  var inputValue=document.getElementById("myInput").value;
  var t=document.createTextNode(inputValue);
  li.appendChild(t);
  if(inputValue===''){
    alert("Write Something!");
  }
  else{
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Del");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }


}

