let num, button,text

num=0


button = document.querySelector(".button")
text =  document.querySelector(".text")

if(button){
  button.addEventListener("click",()=>{
    num++;
     text.innerText = num;
  
  })
 
}
