let display = document.getElementById("display")
let buttons = Array.from(document.getElementsByClassName("buttons"))

buttons.map(button => {
  button.addEventListener('click', (e)=> {
    switch(e.target.innerText){
      case 'AC': 
        display.innerText = ""
        break;
      case 'Del':
        display.innerText = display.innerText.slice(0, -1)
        break;  
         case '=': 
         try {
           display.innerText = eval(display.innerText)
         } catch {
           display.innerText = "Invalid Input!"
         }
         break;

      default:  
      if(e.target.matches('.button')) {
        display.innerText += e.target.innerText
      }
      break;
    }
  })
})