const icon = document.getElementById("icon")
const solLua = document.getElementById("solLua")
const container = document.getElementsByClassName("container")[0]
icon.addEventListener("click",()=>{
  switch(solLua.style.backgroundColor){
    case "white":
      solLua.style.backgroundColor = "black"
      icon.style.backgroundColor = "white"
      container.style.backgroundColor = "blue"
      break
    default:
      solLua.style.backgroundColor = "white"
      icon.style.backgroundColor = "black"
      container.style.backgroundColor = "pink"
      break
  }
})
