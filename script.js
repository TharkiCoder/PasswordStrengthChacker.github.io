function main(){
  var len=0;
  var schar=0;
  var num=0;
  var alph=0;
  var paswrd=document.getElementById('textinput').value;
  var pbar=document.getElementById('progressBar');
  var warn=document.getElementById('warning');
  for(var i in paswrd){
    if (paswrd[i].charCodeAt(0)>=97 && paswrd[i].charCodeAt(0)<=122 || paswrd[i].charCodeAt(0)>=65 && paswrd[i].charCodeAt(0)<=90){
      alph=1;
    }
    else if (paswrd[i].charCodeAt(0)>=48 && paswrd[i].charCodeAt(0)<=57) {
      num=1;
    }
    else{
      schar=1;
    }
  }
  if(paswrd.length>=8){
    len=1;
  }
  else{
    len=0;
  }
  var sum=len+schar+num+alph;
  if(sum==1){
    pbar.style.backgroundColor="#ff3e36";
    pbar.style.width="66px";
    warn.innerHTML="Your password is very weak";
  }
  else if (sum==2) {
    pbar.style.backgroundColor="#ff691f";
    pbar.style.width="132px";
    warn.innerHTML="Your password is weak";
  }
  else if (sum==3) {
    pbar.style.backgroundColor="#ffda36";
    pbar.style.width="189px";
    warn.innerHTML="Your password is good";
  }
  else if (sum==4) {
    pbar.style.backgroundColor="#0be881";
    pbar.style.width="265px";
    warn.innerHTML="Your password is strong";
  }
  else{
    pbar.style.backgroundColor="#cccccc";
    pbar.style.width="0px";
    warn.innerHTML="";
  }
}

function show(){
  var showbtn=document.getElementById('showbtn');
  var textinput=document.getElementById('textinput');
  if(textinput.getAttribute("type")=="password"){
    textinput.setAttribute("type","text");
    showbtn.style.color="#0be881";
  }
  else{
    textinput.setAttribute("type","password");
    showbtn.style.color="#808080";
  }
}
