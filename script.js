//Selectores
let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS"];
let canvas = document.getElementById("forca");
let tablero = canvas.getContext("2d");
let palabraSecreta = "";
let letras = [];
let continuar = true;
let errores = 0;
let aciertos = 0;


//PalabraSecreta
function escojerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}

function comprobarLetra(key){
    let estado = true;

    for(let i = 0; i < letras.length; i++){
        if(key == letras[i]){
            estado = false;
        }
    }
    
    if((key.charCodeAt(0) >= 65 || key.charCodeAt(0) <= 90) && letras.indexOf(key) && estado == true){
        letras.push(key);
        console.log(key);        
    }

    return estado;
}

function anadirLetraIncorrecta(){
    errores +=1;
    //console.log(errores);
}

//Iniciar
function iniciarJuego(){
    palabraSecreta = "";
    letras = [];
    continuar = true;
    errores = 0;
    aciertos = 0;
    document.getElementById("div-desaparece").style.display = "none";
    document.getElementById("div-aparece-ahorcado").style.display = "flex";
    document.getElementById("div-aparece-palabra").style.display = "none";
    
    resizeCanvasToDisplaySize(canvas);
    escojerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();

        if(errores < 8 && aciertos < palabraSecreta.length){
            if(comprobarLetra(letra)){
                if(palabraSecreta.includes(letra)){
                    for(let i = 0; i < palabraSecreta.length; i++){
                        if(palabraSecreta[i] == letra){
                            escribirLetraCorrecta(i);
                            aciertos++;
                            if(aciertos == palabraSecreta.length){
                                escribirGanador();
                            }                  
                        }
                    }
                }else{                        
                    escribirLetraIncorrecta(letra, errores);
                    anadirLetraIncorrecta();
                }
            }            
        }
    }
}

function resizeCanvasToDisplaySize(canvas) {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      return true;
    }
 
    return false;
 }

 function salirJuego(){
    document.getElementById("div-desaparece").style.display = "flex";
    document.getElementById("div-aparece-ahorcado").style.display = "none";
    document.getElementById("div-aparece-palabra").style.display = "none";
    document.getElementById("texto").value = "";
 }

 function agregarJuego(){
    document.getElementById("div-desaparece").style.display = "none";
    document.getElementById("div-aparece-ahorcado").style.display = "none";
    document.getElementById("div-aparece-palabra").style.display = "flex";
 }

 function guardarPalabra(){
    cajaTexto = document.getElementById("texto");
    if(cajaTexto.value != ""){
        let nuevaP = cajaTexto.value.toUpperCase();
        palabras.push(nuevaP);
        alert("Palabra Agregada!");
        cajaTexto.value = "";
    }else{
        alert("Espacio Vacio!")
    }
    
 }