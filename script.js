let buttons=document.querySelectorAll(".grid-items")
let screen=document.getElementById("screen")
let str=""
console.log(item3.classList)
console.log(item3.innerHTML)
  Array.from(buttons).forEach((button)=>{
 button.addEventListener('click', (e)=>{
  if(e.target.innerHTML=='='){
    try{
      str=eval(str)
 screen.innerHTML=str
    }
 catch(e){
  screen.innerHTML="Invalid Number"
 }
  }
  else if(e.target.innerHTML=='C'){
    str=""
    screen.innerHTML=str
  }
  else if(e.target.classList.contains("material-symbols-outlined")){
    console.log(e.classList)
    str=str.substring(0,str.length-1)
    screen.innerHTML=str
  }
  else{
    str=str +e.target.innerHTML
    screen.innerHTML=str
  }
 })
 })