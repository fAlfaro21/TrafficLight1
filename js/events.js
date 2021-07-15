// Level 1)
// Representar un semáforo con 1 luz (círculo negro) y un botón que al hacer click sobre el la luz cambie de color:
// De negro pasará a verde
// De verde pasará a Ambar/Naranja
// De Naranja pasará a rojo
// De rojo a verde

// Negro --> Verde --> Ambar --> Rojo --> Verde

let i = 0;
let color = ["blackColor", "greenColor", "orangeColor", "redColor"];

const button1 = document.getElementById("button1");
const redLightColor = document.getElementById("redLight");
redLightColor.className += " blackColor";

function changeColour(){
        let colorClass;
        colorClass = color[i];
        redLightColor.classList.remove(colorClass);
        colorClass = color[++i];

        if (i < color.length){            
            redLightColor.classList.add(colorClass);
        }
        
        if (i == color.length){          
          colorClass = color[i-1];
          redLightColor.classList.remove(colorClass);
          i = 1;
          colorClass = color[i];
          redLightColor.classList.add(colorClass);
        } 
}

button1.addEventListener ("click", changeColour); 





// let enabledButton;
// const button1 = document.getElementById("btn1");
// const img1 = document.getElementById("img1");

// function init(initialState, initialClass, initialText, initialImage){
//   enabledButton = initialState;
//   button1.className += initialClass;
//   button1.innerText = initialText;

//   //Cambiar la imagen
//   img1.src = initialImage;
// }

// init(false, " off", "OFF", "img/balrog.jfif");

// //-------------------------------- CAMBIOS -------------------------------

// function changeState(){
  
//   if (enabledButton){
//     enabledButton = false;
//     //button1.className += " on"; //con el +=, concatena el texto; con el = machacaría el texto. Para efectos de este ejemplo, quiero aniadir la clase on.
//     button1.classList.remove("on");
//     button1.classList.add("off");
//     button1.innerText = "OFF"; //innerText te pega el texto tal cual, mientras que innerHTML te lo interpreta. Se trata de un CONTENEDOR (Texto)
//     img1.src = "img/balrog.jfif";
//   }
//   else{
//     enabledButton = true;
//     //button1.className += " off"; 
//     button1.classList.remove("off");
//     button1.classList.add("on");
//     button1.innerText = "ON";
//     img1.src = "img/newgandalf.jfif";
//   }
// }

// button1.addEventListener ("click", changeState); 

//cuando haga click en "button1", debe ocurrir function changeState. OJO: la function NO LLEVA parentesis: esto es para que no se ejecute nada hasta que no ocurra el click. Una vez que hace el click, se ejecuta la función.