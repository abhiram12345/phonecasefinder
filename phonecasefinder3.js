function create(){var body = document.getElementsByTagName("body")[0];
//Linebreak
var linebreak = document.createElement("BR");
//popupparent
var popupp=document.createElement("DIV");
popupp.setAttribute("id","popupp");
popupp.style.display="none";
//popup
var popup = document.createElement("DIV");
popup.style.backgroundColor = "#303030";
popup.style.padding = "30px";
popup.className = "popupclass";
//close
var closer = document.createElement("IMG");
closer.setAttribute("src","https://blogger.googleusercontent.com/img/a/AVvXsEhf7FTYLqvOtavwG2c62v1IcZyg1azazOOKk1E-BXVNCmygu71TyDKu69xa_1T2XVVN4n4WEGD0yGASxtRbTJ8jp0hWoGdBpqJPOAvL4j-5p_LOlHoPA71BDCAuGReBSTTCyPDK7m8gL3DNN5f6QiO-XpE0AjTTf_uGeIIK7aslQUSizNd6XumDDtLQ=s240");
closer.setAttribute("id","closer")
closer.style.height="15px";
closer.style.width="15px";
closer.style.display="block";
closer.style.margin = "20px auto 20px auto";
//line1
var line1 = document.createElement("DIV");
line1.setAttribute("id","line1");
line1.style.fontWeight="bold";
//line2
var line2 = document.createElement("SPAN");
line2.setAttribute("id","line2");
line2.style.marginRight = "20px";
//line3
var line3 = document.createElement("SPAN");
line3.setAttribute("id","line3");
line3.style.marginRight = "20px";
//line4
var line4 = document.createElement("SPAN");
line4.setAttribute("id","line4");
line4.style.marginRight = "20px";
//iconscontainer
var iconcontainer = document.createElement("DIV");
iconcontainer.style.left="20px";
iconcontainer.style.right="20px";
iconcontainer.style.display="flex";
iconcontainer.style.alignItems="center";
iconcontainer.justifyContent="center";
//editicon
var editicon = document.createElement("IMG");
editicon.setAttribute("src","https://blogger.googleusercontent.com/img/a/AVvXsEhzQb9lxDziCqUFDqWfMfbfofpqvYDQ51Xz8aybmtfd2HW8WNaRmS7VK4Q63WqMDdvZtGHSqtWz8NflkDXUQ-p5nLhHhRME-CvpAYHt1dJOpBpx0pkKvUtLzHAP-ysQWhhRtKg6V_m51uzIKh5HAk8gxTFfNlZxXBiceSsniIVV79rpQp-FvLDmg9DU=s240");
editicon.setAttribute("id","editicon");
editicon.setAttribute("height","50");
editicon.setAttribute("width","50");
editicon.style.marginRight ="15%"
editicon.style.display ="inline-flex";
editicon.style.position ="relative";
//inicon
var inicon = document.createElement("IMG");
inicon.setAttribute("src","https://blogger.googleusercontent.com/img/a/AVvXsEjmQfqNVj6FwJ4Yox8ChrcTb36m_eZAHBE-otbcCmismlmS2PW5btcOJ8NQztNHdkZqhnU_H6xkL5U8CtKk9amrFzjIefOku5nnixQyjWmCB_H5gwVlI1yh2d97Vks5tXM10-duHgP_28OWBkfanRjbdQTr1w4TZPM-tkkY5xi-HHV9vtLYpkwtE29v=s240");
inicon.setAttribute("width","50");
inicon.setAttribute("height","50");
inicon.setAttribute("id","inicon")
inicon.style.transform = "rotate(90deg)";
inicon.style.marginRight ="15%";
inicon.style.display ="inline-flex";
inicon.style.position ="relative";
//outicon
var outicon = document.createElement("IMG");
outicon.setAttribute("src","https://blogger.googleusercontent.com/img/a/AVvXsEjmQfqNVj6FwJ4Yox8ChrcTb36m_eZAHBE-otbcCmismlmS2PW5btcOJ8NQztNHdkZqhnU_H6xkL5U8CtKk9amrFzjIefOku5nnixQyjWmCB_H5gwVlI1yh2d97Vks5tXM10-duHgP_28OWBkfanRjbdQTr1w4TZPM-tkkY5xi-HHV9vtLYpkwtE29v=s240");
outicon.setAttribute("width","50");
outicon.setAttribute("id","outicon");
outicon.setAttribute("height","50");
outicon.style.display ="inline-flex";
outicon.style.position ="relative";
//inputcontainer
var inputc = document.createElement("DIV");
inputc.style.display="none";
inputc.setAttribute("id","inputc");
//inputalert
var inputalert = document.createElement("DIV");
inputalert.setAttribute("id","inputalert");
inputalert.style.marginLeft="5px";
//inputarea
var input = document.createElement("TEXTAREA");
input.setAttribute("id","input");
input.setAttribute("rows","1");
input.setAttribute("cols","15");
input.style.marginLeft="2px";
input.style.borderRadius="7px";
input.style.border="none";
input.style.padding = "10px";
input.style.fontSize = "16px";
//gobutton
var submit = document.createElement("BUTTON");
submit.setAttribute("id","submit")
submit.innerText="Go";
submit.style.fontSize="16px";
submit.style.borderRadius = "50%";
submit.style.border="none";
submit.style.backgroundColor="orange";
submit.style.width="40px";
submit.style.height="40px";
submit.style.verticalAlign="14px";
submit.style.marginLeft="35px";
inputc.appendChild(inputalert);
inputc.appendChild(linebreak);
inputc.appendChild(input);
inputc.appendChild(submit);
iconcontainer.appendChild(editicon);
iconcontainer.appendChild(inicon);
iconcontainer.appendChild(outicon);
popup.appendChild(line1);
popup.appendChild(linebreak.cloneNode(true));
popup.appendChild(line2);
popup.appendChild(line3);
popup.appendChild(line4);
popup.appendChild(linebreak.cloneNode(true));
popup.appendChild(linebreak.cloneNode(true));
popup.appendChild(iconcontainer);
popup.appendChild(linebreak.cloneNode(true));
popup.appendChild(inputc);
popupp.appendChild(popup);
popupp.appendChild(closer);
body.appendChild(popupp);}
//2
function edit(){
var inputalert = document.getElementById("inputalert");
var inputc = document.getElementById("inputc");
var input = document.getElementById("input");
var gobutton = document.getElementById("submit");
var cell = this;
var row = this.parentElement;
var cells = row.querySelectorAll("td");
document.getElementById("line1").innerHTML = cells[0].innerText;
document.getElementById("line2").innerHTML = "Shelf" + "&nbsp;" + "&nbsp;" + cells[1].innerText;
document.getElementById("line3").innerHTML = "Hanger" +
"&nbsp;" + "&nbsp;" + cells[2].innerText;
document.getElementById("line4").innerHTML = "Stocks Left" +
"&nbsp;" + "&nbsp;" + cells[3].innerText;
var popup = document.getElementsByClassName("popupclass")[0];
popupp.style.display="block";
popupp.style.position = "fixed";
popupp.style.top="20%";
popupp.style.right="7px";
popupp.style.left="7px";
//edit function
document.getElementById("editicon").onclick = function(){
if(cell===cells[0]){inputalert.innerHTML = "Not editable";}
if(cell===cells[1]){inputalert.innerHTML = "Edit Shelf number";}
if(cell===cells[2]){inputalert.innerHTML = "Edit Hanger position";}
if(cell===cells[3]){inputalert.innerHTML = "Edit stock balance";}
inputc.style.display = "block";document.getElementById("input").value = cell.innerText;gobutton.onclick=function(){cell.innerText=input.value;popupp.style.display = "none";inputc.style.display="none";backup();}};
//bought
document.getElementById("inicon").onclick=function(){inputalert.innerHTML = "No of items showcased:";inputc.style.display = "block";input.value="0";gobutton.onclick=function(){if(isNaN(input.value)===false && input.value>=0){cells[3].innerText=parseInt(cells[3].innerText)+parseInt(input.value);popupp.style.display = "none";inputc.style.display="none";backup();}}}
//sold
document.getElementById("outicon").onclick=function(){inputalert.innerHTML = "No of items sold:";inputc.style.display = "block";input.value="0";gobutton.onclick=function(){if(isNaN(input.value)===false && input.value<=parseInt(cells[3].innerText) && input.value>=0){cells[3].innerText=parseInt(cells[3].innerText)-parseInt(input.value);popupp.style.display = "none";inputc.style.display="none";backup();}}}
}
function close(){document.getElementById("closer").onclick = function(){document.getElementById("popupp").style.display="none";document.getElementById("inputc").style.display = "none";}}
function passTestfunc(x){if(x.className==="brand"){return true}};
function backup(){
   var table = document.getElementsByTagName("table")[0];
    var allcells = table.querySelectorAll("td");
    for (i=0;i<allcells.length;i++)
    {if(passTestfunc(allcells[i])){continue;}const cellvalues = [];cellvalues.push(allcells[i].innerText);}   localStorage.setItem("tdvalues",JSON.stringify(cellvalues));
}
function restore(){
   var table = document.getElementsByTagName("table")[0];
    var allcells = table.querySelectorAll("td");
if (localStorage.getItem("tdvalues")!==null){for (i=0;i<allcells.length;i++)
    {if(passTestfunc(allcells[i])){continue;}allcells[i].innerHTML = JSON.parse(localStorage.getItem("tdvalues")[i]);}};
}
window.onload = function (){create();var items = document.getElementsByTagName("td");
for(i=0;i<items.length;i++){items[i].addEventListener("click",edit);};close();restore();}
